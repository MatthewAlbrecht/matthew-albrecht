"use client";

import * as React from "react";
import { useInView } from "react-intersection-observer";

import { useAtBottom } from "~/lib/hooks/use-at-bottom";

interface ChatScrollAnchorProps {
  trackVisibility?: boolean;
  scrollContainerRef: React.RefObject<HTMLElement>;
}

export function ChatScrollAnchor({
  trackVisibility,
  scrollContainerRef,
}: ChatScrollAnchorProps) {
  const isAtBottom = useAtBottom(0, scrollContainerRef.current);
  const { ref, entry, inView } = useInView({
    trackVisibility,
    delay: 100,
    rootMargin: "0px 0px -150px 0px",
  });

  React.useEffect(() => {
    if (isAtBottom && trackVisibility && !inView) {
      entry?.target.scrollIntoView({
        block: "start",
      });
    }
  }, [inView, entry, isAtBottom, trackVisibility]);

  return <div ref={ref} className="h-px w-full" />;
}
