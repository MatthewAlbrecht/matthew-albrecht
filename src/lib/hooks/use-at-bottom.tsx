import * as React from "react";

export function useAtBottom(offset = 0, containerElement?: HTMLElement | null) {
  const [isAtBottom, setIsAtBottom] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const container = containerElement ?? document.documentElement;

      setIsAtBottom(
        container.scrollHeight - container.scrollTop - container.clientHeight <=
          offset,
      );
    };

    const scrollContainer = containerElement ?? window;
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [offset, containerElement]);

  return isAtBottom;
}
