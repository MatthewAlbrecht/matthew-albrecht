import "server-only";
import { cookies } from "next/headers";
import OpenAI from "openai";
import { z } from "zod";
import { type Json, type Database } from "~/lib/types/supabase";
import { createClient } from "~/lib/supabase/server";

const terminalStates = ["completed", "cancelled", "failed", "expired"];

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

const questionPostInputSchema = z.object({
  question: z.string().min(1),
  openAiThreadId: z
    .string()
    .regex(
      /^thread_[a-zA-Z0-9]{24}$/,
      "Must be a valid thread id `thread_AAAAAAAAAAAAAAAAAAAAAAAAA`",
    )
    .nullish(),
});

function validatePostInput(data: unknown) {
  const validatedFields = questionPostInputSchema.safeParse(data);

  if (!validatedFields.success) {
    return Response.json({
      errors: validatedFields.error.flatten().fieldErrors,
    });
  }
  return validatedFields.data;
}

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createClient<Database>(cookieStore);

  const data = validatePostInput(await request.json());

  if (data instanceof Response) {
    return data;
  }

  if (data.openAiThreadId) {
    var threadId = data.openAiThreadId;
  } else {
    threadId = (await openai.beta.threads.create()).id;
  }

  const message = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: data.question,
  });

  let run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: process.env.OPENAI_ASSISTANT_ID ?? "",
  });

  while (!terminalStates.includes(run.status)) {
    console.log("RUN STATUS", run.status);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    run = await openai.beta.threads.runs.retrieve(threadId, run.id);
  }

  /* TODO @matthewalbrecht: handle if the status isn't completed */
  const messagesResponse = await openai.beta.threads.messages.list(threadId);
  const assistantResponses = messagesResponse.data.filter(
    (msg) => msg.role === "assistant",
  );
  const response = assistantResponses
    .map((msg) =>
      msg.content
        .filter((contentItem) => contentItem.type === "text")
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        .map(
          (textContent) =>
            (textContent as OpenAI.Beta.Threads.Messages.MessageContentText)
              .text.value,
        )
        .join("\n"),
    )
    .join("\n");
  console.log("NORMALIZED RESPONSE", response);

  try {
    const finalQuestion = await supabase
      .from("questions")
      .insert({
        question: data.question,
        answer: response,
        openAiRunId: run.id,
        openAiThreadId: threadId,
        openAiMessageResponseRaw: messagesResponse as unknown as Json,
        openAiMessageId: message.id,
      })
      .select("question, answer, openAiRunId, openAiThreadId, openAiMessageId");
    console.log("FINAL QUESTION", finalQuestion);
    return Response.json(finalQuestion?.data?.[0]);
  } catch (error) {
    console.log("ERROR", error);
    return Response.json({ message: "Failed to update question" });
  }
}
