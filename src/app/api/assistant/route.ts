import { experimental_AssistantResponse } from "ai";
import OpenAI from "openai";
import { type MessageContentText } from "openai/resources/beta/threads/messages/messages";
import { z } from "zod";
import { db } from "~/db";
import { aiQuestions } from "~/db/schema";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? "",
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

const questionPostInputSchema = z.object({
  message: z.string().min(1),
  threadId: z
    .string()
    .regex(
      /^thread_[a-zA-Z0-9]{24}$/,
      "Must be a valid thread id `thread_AAAAAAAAAAAAAAAAAAAAAAAAA`",
    )
    .nullish(),
});

const OPEN_AI_SOURCED_REGEX = /【.*?】/g;

export async function POST(req: Request) {
  // Parse the request body
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const input = await req.json();

  const validatedFields = questionPostInputSchema.safeParse(input);

  if (!validatedFields.success) {
    throw new Error(validatedFields.error.errors.join(", "));
  }

  const { data } = validatedFields;

  // Create a thread if needed
  const threadId = data.threadId ?? (await openai.beta.threads.create({})).id;

  // Add a message to the thread
  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: data.message,
  });

  return experimental_AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ threadId, sendMessage }) => {
      // Run the assistant on the thread
      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id:
          process.env.OPENAI_ASSISTANT_ID ??
          (() => {
            throw new Error("ASSISTANT_ID is not set");
          })(),
      });

      async function waitForRun(run: OpenAI.Beta.Threads.Runs.Run) {
        // Poll for status change
        while (run.status === "queued" || run.status === "in_progress") {
          // delay for 500ms:
          await new Promise((resolve) => setTimeout(resolve, 500));

          run = await openai.beta.threads.runs.retrieve(threadId, run.id);
        }

        // Check the run status
        if (
          run.status === "cancelled" ||
          run.status === "cancelling" ||
          run.status === "failed" ||
          run.status === "expired"
        ) {
          throw new Error(run.status);
        }

        // this should never happen
        if (run.status === "requires_action") {
          throw new Error("There shouldn't be any required actions");
        }
      }

      await waitForRun(run);

      // Get new thread messages (after our message)
      const responseMessages = (
        await openai.beta.threads.messages.list(threadId, {
          after: createdMessage.id,
          order: "asc",
        })
      ).data;

      // Send the messages
      var actualResponse;
      for (const message of responseMessages) {
        sendMessage({
          id: message.id,
          role: "assistant",
          content: (
            message.content.filter(
              (content) => content.type === "text",
            ) as Array<MessageContentText>
          ).map((content) => ({
            ...content,
            text: {
              ...content.text,
              value: (actualResponse = content.text.value.replace(
                OPEN_AI_SOURCED_REGEX,
                "",
              )),
            },
          })),
        });
      }
      console.log("ACTUAL RESPONSE", actualResponse);
      await db.insert(aiQuestions).values({
        question: data.message,
        openAiThreadId: threadId,
        openAiMessageId: createdMessage.id,
        answer: actualResponse,
      });
    },
  );
}
