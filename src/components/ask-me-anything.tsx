"use client";

import { experimental_useAssistant as useAssistant } from "ai/react";

import React from "react";
import { Input } from "./ui/input";
import { Sheet, SheetContent } from "./ui/sheet";
import { Chat } from "./chat";

export default function AskMeAnything() {
  const [aiSheetOpen, setAiSheetOpen] = React.useState(false);
  const { status, messages, input, submitMessage, setInput } = useAssistant({
    api: "/api/assistant",
  });

  const isLoading = status === "in_progress";

  return (
    <div>
      <h1>Ask me anything</h1>
      <p>I'm a software engineer</p>
      <Input onFocus={() => setAiSheetOpen(true)} />

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
