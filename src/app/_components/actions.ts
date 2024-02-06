"use server";
import { cookies } from "next/headers";
import OpenAI from "openai";
import { z } from "zod";
import { type Database } from "~/lib/types/supabase";
import { createClient } from "~/lib/supabase/server";
import { redirect } from "next/navigation";

const cookieStore = cookies();
const supabase = createClient<Database>(cookieStore);

const questionPostInputSchema = z.object({
  question: z.string().min(1),
  openAiThreadId: z
    .string()
    .regex(
      /^thread_[a-zA-Z0-9]{24}$/,
      "Must be a valid thread id `thread_AAAAAAAAAAAAAAAAAAAAAAAAA`",
    )
    .nullish()
    .or(z.literal("")),
});
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

export async function postQuestion(preveState: unknown, formData: FormData) {
  "use server";

  const validatedFields = questionPostInputSchema.safeParse({
    question: formData.get("question"),
    openAiThreadId: formData.get("openAiThreadId"),
  });

  if (!validatedFields.success) {
    console.log("HEREREREERE", formData);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { data } = validatedFields;

  try {
    // created the thread
    if (data.openAiThreadId) {
      var threadId = data.openAiThreadId;
    } else {
      threadId = (await openai.beta.threads.create()).id;
    }

    // created the message (question)
    const message = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: data.question,
    });

    // create the run
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: process.env.OPENAI_ASSISTANT_ID ?? "",
    });

    const finalQuestion = await supabase
      .from("questions")
      .insert({
        question: data.question,
        openAiRunId: run.id,
        openAiThreadId: threadId,
        openAiMessageId: message.id,
      })
      .select("question, answer, openAiRunId, openAiThreadId, openAiMessageId");
    console.log("FINAL QUESTION", finalQuestion);
  } catch (error) {
    console.log("ERROR", error);
    return { errors: ["Failed to insert question"] };
  }

  redirect(`/threads/${threadId}`);

  // // wait for the run status to be terminal
  // while (!terminalStates.includes(run.status)) {
  //   console.log("RUN STATUS", run.status);
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   run = await openai.beta.threads.runs.retrieve(thread.id, run.id);
  // }

  // /* TODO @matthewalbrecht: handle if the status isn't completed */

  // const messagesResponse = await openai.beta.threads.messages.list(thread.id);
  // const assistantResponses = messagesResponse.data.filter(
  //   (msg) => msg.role === "assistant",
  // );
  // const response = assistantResponses
  //   .map((msg) =>
  //     msg.content
  //       .filter((contentItem) => contentItem.type === "text")
  //       // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  //       .map(
  //         (textContent) =>
  //           (textContent as OpenAI.Beta.Threads.Messages.MessageContentText)
  //             .text.value,
  //       )
  //       .join("\n"),
  //   )
  //   .join("\n");
  // console.log("NORMALIZED rESPONSE", response);

  // try {
  //   const finalQuestion = await supabase
  //     .from("questions")
  //     .insert({
  //       question: data.question,
  //       answer: response,
  //       openAiRunId: run.id,
  //       openAiThreadId: thread.id,
  //       openAiMessageResponseRaw: messagesResponse as unknown as Json,
  //       openAiMessageId: message.id,
  //     })
  //     .select("question, answer, openAiRunId, openAiThreadId, openAiMessageId");
  //   console.log("FINAL QUESTION", finalQuestion);
  //   return {
  //     message: "Your answer: " + response,
  //     question: finalQuestion.data?.[0],
  //   };
  // } catch (error) {
  //   console.log("ERROR", error);
  //   return { message: "Failed to update question" };
  // }
}
