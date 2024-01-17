"use server";
import { cookies } from "next/headers";
import OpenAI from "openai";
import { z } from "zod";
import { type Json, type Database } from "~/types/supabase";
import { createClient } from "~/utils/supabase/server";

const terminalStates = ["completed", "cancelled", "failed", "expired"];

const cookieStore = cookies();
const supabase = createClient<Database>(cookieStore);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

export async function postQuestion(preveState: unknown, formData: FormData) {
  "use server";

  const schema = z.object({
    question: z.string().min(1),
  });
  const validatedFields = schema.safeParse({
    question: formData.get("question"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { data } = validatedFields;

  // created the thread
  const thread = await openai.beta.threads.create();

  // created the message (question)
  const message = await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: data.question,
  });

  // create the run
  let run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: process.env.OPENAI_ASSISTANT_ID ?? "",
  });

  // wait for the run status to be terminal
  while (!terminalStates.includes(run.status)) {
    console.log("RUN STATUS", run.status);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    run = await openai.beta.threads.runs.retrieve(thread.id, run.id);
  }

  /* TODO @matthewalbrecht: handle if the status isn't completed */

  const messagesResponse = await openai.beta.threads.messages.list(thread.id);
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
  console.log("NORMALIZED rESPONSE", response);

  try {
    const finalQuestion = await supabase
      .from("questions")
      .insert({
        question: data.question,
        answer: response,
        openAiRunId: run.id,
        openAiThreadId: thread.id,
        openAiMessageResponseRaw: messagesResponse as unknown as Json,
        openAiMessageId: message.id,
      })
      .select();
    console.log("FINAL QUESTION", finalQuestion);
    return { message: "Your answer: " + response };
  } catch (error) {
    console.log("ERROR", error);
    return { message: "Failed to update question" };
  }
}
