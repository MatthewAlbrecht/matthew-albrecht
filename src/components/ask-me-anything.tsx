"use client";

import { experimental_useAssistant as useAssistant } from "ai/react";

import React from "react";
import { Input } from "./ui/input";
import { Sheet, SheetContent } from "./ui/sheet";
import { Chat } from "./chat";
import { Button } from "./ui/button";

export default function AskMeAnything() {
  const [aiSheetOpen, setAiSheetOpen] = React.useState(false);
  const { status, messages, input, submitMessage, setInput } = useAssistant({
    api: "/api/assistant",
  });

  const isLoading = status === "in_progress";

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAiSheetOpen(true);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className="flex w-full">
        <Input
          className="mr-2 h-14 flex-1 rounded-none border-l-0 border-r-0 border-t-0 border-foreground/30 pl-0 text-lg placeholder:text-foreground/30 focus:outline-none"
          withFocus={false}
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button size="xl" type="submit">
          Ask Matt AI
        </Button>
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
    </>
  );
}
