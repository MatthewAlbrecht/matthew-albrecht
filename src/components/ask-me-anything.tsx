"use client";

import { experimental_useAssistant as useAssistant } from "ai/react";

import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { SubmitButton } from "./submit-button";
import { LoadingCopy } from "./loading-copy";
import { Sheet, SheetContent } from "./ui/sheet";
import { Chat } from "./chat";

export default function AskMeAnything() {
  const [aiSheetOpen, setAiSheetOpen] = React.useState(false);
  const { status, messages, input, submitMessage, setInput } = useAssistant({
    api: "/api/assistant",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input?.trim()) {
      return;
    }
    setInput("");
    setAiSheetOpen(true);
    void submitMessage(event);
  };

  const isLoading = status === "in_progress";

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Ask me anything</h1>
        <p>I'm a software engineer</p>
        <Label htmlFor="message">Email</Label>
        <Input
          id="message"
          type="text"
          name="message"
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
          required
        />
        <LoadingCopy />
        <SubmitButton />
      </form>

      <Sheet
        open={aiSheetOpen}
        onOpenChange={() => setAiSheetOpen((prev) => !prev)}
      >
        <SheetContent className="w-full sm:max-w-2xl">
          <Chat
            setInput={setInput}
            messages={messages}
            isLoading={isLoading}
            input={input}
            submitMessage={submitMessage}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
