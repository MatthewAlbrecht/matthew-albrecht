"use client";

import { cn } from "~/lib/utils";
import { ChatList } from "~/components/chat-list";
import { EmptyScreen } from "~/components/empty-screen";
import { ChatScrollAnchor } from "~/components/chat-scroll-anchor";
import { useEffect, useRef } from "react";
import { type UseAssistantHelpers } from "ai/react";
import { ButtonScrollToBottom } from "./button-scroll-to-bottom";
import { SheetFooter } from "./ui/sheet";
import { ChatPanel } from "./chat-panel";

export interface ChatProps
  extends React.ComponentProps<"div">,
    Pick<
      UseAssistantHelpers,
      "setInput" | "messages" | "input" | "submitMessage"
    > {
  isLoading: boolean;
}

export function Chat({
  className,
  isLoading,
  messages,
  setInput,
  input,
  submitMessage,
}: ChatProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <>
      <ButtonScrollToBottom scrollContainerRef={scrollContainerRef} />
      <div
        className={cn(
          "h-[calc(100vh-180px)] overflow-y-scroll pb-1 pt-4 md:pt-10",
          className,
        )}
        ref={scrollContainerRef}
      >
        {messages.length ? (
          <>
            <ChatList
              scrollContainerRef={scrollContainerRef}
              messages={messages}
            />
            <ChatScrollAnchor
              scrollContainerRef={scrollContainerRef}
              trackVisibility={isLoading}
            />
          </>
        ) : (
          <EmptyScreen setInput={setInput} />
        )}
        <SheetFooter>
          <ChatPanel
            isLoading={isLoading}
            submitMessage={submitMessage}
            messages={messages}
            input={input}
            setInput={setInput}
          />
        </SheetFooter>
      </div>
    </>
  );
}
