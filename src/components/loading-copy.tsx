"use client";

import { useFormStatus } from "react-dom";

export function LoadingCopy() {
  const { pending } = useFormStatus();

  return pending && <span>...loading</span>;
}
