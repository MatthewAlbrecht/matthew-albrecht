import React from "react";
import { cn } from "~/lib/utils";

export default function Heading({
  className,
  children,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-6xl font-medium uppercase leading-none tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
