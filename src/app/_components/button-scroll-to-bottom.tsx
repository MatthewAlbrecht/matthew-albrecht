"use client";

import * as React from "react";

import { cn } from "~/lib/utils";
import { useAtBottom } from "~/lib/hooks/use-at-bottom";
import { Button, type ButtonProps } from "~/app/_components/ui/button";
import { IconArrowDown } from "~/app/_components/ui/icons";

export function ButtonScrollToBottom({
  className,
  scrollContainerRef,
  ...props
}: ButtonProps & { scrollContainerRef?: React.RefObject<HTMLElement> }) {
  const isAtBottom = useAtBottom(50, scrollContainerRef?.current);

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "absolute bottom-[6.7rem] right-4 z-10 bg-background transition-opacity duration-300 sm:right-[3.1rem] md:bottom-[10rem]",
        isAtBottom ? "opacity-0" : "opacity-100",
        className,
      )}
      onClick={() =>
        scrollContainerRef?.current &&
        scrollContainerRef.current.scrollTo({
          top: scrollContainerRef.current.scrollHeight,
          behavior: "smooth",
        })
      }
      {...props}
    >
      <IconArrowDown />
      <span className="sr-only">Scroll to bottom</span>
    </Button>
  );
}
