import React, { Suspense } from "react";
import { Skeleton } from "~/app/_components/ui/skeleton";

export default function Authentication({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-fill items-center justify-center ">
      <div className="mx-auto w-full max-w-sm space-y-6 rounded-3xl bg-card px-6 py-10">
        <Suspense
          fallback={<Skeleton className="h-[400px] w-full rounded-2xl" />}
        >
          {children}
        </Suspense>
      </div>
    </div>
  );
}
