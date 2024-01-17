"use client";

import React from "react";
import { postQuestion } from "./actions";
import { SubmitButton } from "./submit-button";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

const initialState = {
  message: "",
  errors: undefined,
};

export default function AskMeAnything() {
  const [state, postQuestionFormAction] = useFormState(
    postQuestion,
    initialState,
  );
  const { pending } = useFormStatus();

  return (
    <div>
      <form action={postQuestionFormAction}>
        <label htmlFor="question">Ask me anything</label>
        <input
          className="text-background"
          type="text"
          name="question"
          required
        />
        <SubmitButton />
        {pending && <div>Loading...</div>}
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
