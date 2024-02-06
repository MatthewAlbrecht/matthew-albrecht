import { type UseAssistantHelpers } from "ai/react";

import { Button } from "~/app/_components/ui/button";
import { ExternalLink } from "~/app/_components/external-link";
import { IconArrowRight } from "~/app/_components/ui/icons";

const exampleMessages = [
  {
    heading: "What is Matt's favorite programming language?",
    message: `What is Matt's favorite programming language?`,
  },
  {
    heading: "What recent project is Matt the most proud of?",
    message: "What recent project is Matt the most proud of?",
  },
  {
    heading: "What is Matt's preferred tech stack?",
    message: `What frontend technologies would Matt choose to use on a straightforward marketing site?`,
  },
];

export function EmptyScreen({
  setInput,
}: Pick<UseAssistantHelpers, "setInput">) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Matt AI Chatbot!
        </h1>

        <p className="leading-normal text-muted-foreground">
          You can ask any question that you want about Matt or choose one of the
          following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
        <p className="mt-5 text-xs leading-normal text-muted-foreground">
          This is an experimental AI chatbot app built with{" "}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> and{" "}
          <ExternalLink href="https://platform.openai.com/docs/assistants/overview">
            Assistant API
          </ExternalLink>
          .
        </p>
      </div>
    </div>
  );
}
