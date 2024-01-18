"use client";

import React from "react";
import { useMutation } from "@tanstack/react-query";
import useSimpleFormState from "~/lib/hooks/use-simple-form-state";
import { type Database } from "~/lib/types/supabase";
import { useLocalStorage } from "usehooks-ts";

function postQuestion(variables: InputVariables) {
  return fetch("/api/questions", {
    method: "POST",
    body: JSON.stringify(variables),
  }).then((res) => res.json());
}

type FormState = {
  question: string;
};
type InputVariables = Database["public"]["Tables"]["questions"]["Insert"];
type ResponseType = Database["public"]["Tables"]["questions"]["Row"];

export default function AskMeAnything() {
  const [openAiThreadId, setOpenAiThreadId] = useLocalStorage(
    "openAiThreadId",
    "",
  );
  const postQuestionMutation = useMutation<ResponseType, Error, InputVariables>(
    {
      mutationFn: postQuestion,
    },
  );
  const [formState, setFormField] = useSimpleFormState<FormState>({
    question: "",
  });
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("THREAD ID", openAiThreadId);
    /* TODO @matthewalbrecht: Add validation */
    postQuestionMutation.mutate(
      { ...formState, openAiThreadId: openAiThreadId },
      {
        onSuccess(data, variables, context) {
          console.log("onSuccess", { data, variables, context });
          if (!openAiThreadId && data.openAiThreadId) {
            console.log("setOpenAiThreadId", data.openAiThreadId);
            setOpenAiThreadId(data.openAiThreadId);
          }
        },
      },
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Ask me anything</h1>
        <p>I'm a software engineer </p>
        <label htmlFor="question">Ask me anything</label>
        <input
          id="question"
          type="text"
          name="question"
          value={formState.question}
          onChange={(event) => setFormField("question", event.target.value)}
          required
        />
        <button type="submit" disabled={postQuestionMutation.isPending}>
          Submit
        </button>
      </form>
      {postQuestionMutation.data?.answer && (
        <div>
          <h2>Answer</h2>
          <p>{postQuestionMutation.data.answer}</p>
        </div>
      )}
    </div>
  );
}
