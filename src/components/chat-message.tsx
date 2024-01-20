// Inspired by Chatbot-UI and modified to fit the needs of this project
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Chat/ChatMessage.tsx

import { type Message } from "ai";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { cn } from "~/lib/utils";
import { CodeBlock } from "~/components/ui/codeblock";
import { MemoizedReactMarkdown } from "~/components/markdown";
import { IconOpenAI, IconUser } from "~/components/ui/icons";
import { ChatMessageActions } from "~/components/chat-message-actions";

export interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
  return (
    <div className={cn("group relative mb-4 items-start sm:flex")} {...props}>
      <div
        className={cn(
          "hidden h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow sm:flex",
          message.role === "user"
            ? "bg-background"
            : "bg-primary text-primary-foreground",
        )}
      >
        {message.role === "user" ? <IconUser /> : <IconOpenAI />}
      </div>
      <span className="text-xs leading-normal text-muted-foreground sm:hidden">
        {message.role === "user" ? "You" : "MattAi"}
      </span>
      <div className="flex-1 space-y-2 overflow-hidden px-0 pt-2 sm:ml-4 sm:px-1 sm:pt-0">
        <MemoizedReactMarkdown
          className="prose dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 break-words"
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            ul({ children }) {
              return <ul className="custom-ul">{children}</ul>;
            },
            ol({ children }) {
              return <ol className="custom-ol">{children}</ol>;
            },
            code({ inline, className, children, ...props }) {
              if (children.length) {
                if (children[0] == "▍") {
                  return (
                    <span className="mt-1 animate-pulse cursor-default">▍</span>
                  );
                }

                children[0] = (children[0] as string).replace("`▍`", "▍");
              }

              const match = /language-(\w+)/.exec(className ?? "");

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={match?.[1] ?? ""}
                  value={String(children).replace(/\n$/, "")}
                  {...props}
                />
              );
            },
          }}
        >
          {message.content}
        </MemoizedReactMarkdown>
        <ChatMessageActions message={message} />
      </div>
    </div>
  );
}
