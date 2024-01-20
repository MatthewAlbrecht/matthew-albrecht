import * as React from "react";
import { type UseAssistantHelpers } from "ai/react";

import { PromptForm } from "~/components/prompt-form";
import { IconLoading } from "./ui/icons";
import { cn } from "~/lib/utils";

export interface ChatPanelProps
  extends Pick<
    UseAssistantHelpers,
    "messages" | "submitMessage" | "input" | "setInput"
  > {
  isLoading: boolean;
  title?: string;
}

export function ChatPanel({
  isLoading,
  submitMessage,
  input,
  setInput,
}: ChatPanelProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/90 from-0% to-muted/90 to-50% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div
          className={cn(
            "flex items-center justify-center transition-[height]",
            isLoading ? "h-12" : "h-4",
          )}
        >
          {isLoading && (
            <div className="flex items-center rounded bg-background px-3 py-1">
              <IconLoading className="mr-2 animate-spin" />
              Loading
            </div>
          )}
        </div>
      </div>
      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
          <PromptForm
            onSubmit={submitMessage}
            input={input}
            setInput={setInput}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
