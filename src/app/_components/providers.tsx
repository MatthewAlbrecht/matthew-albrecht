"use client";

import { TooltipProvider } from "~/app/_components/ui/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
