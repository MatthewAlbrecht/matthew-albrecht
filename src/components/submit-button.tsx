"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="outline" aria-disabled={pending}>
      Ask
    </Button>
  );
}
