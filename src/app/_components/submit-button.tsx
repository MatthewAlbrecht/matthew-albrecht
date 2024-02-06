"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";

export function SubmitButton({
  className,
  pendingText,
  text,
}: {
  className?: string;
  pendingText?: string;
  text?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      className={cn("disabled:opacity-50", className)}
      type="submit"
      disabled={pending}
    >
      {pending ? pendingText ?? "Submitted..." : text ?? "Submit"}
    </Button>
  );
}
