import { redirect } from "next/navigation";
import React from "react";
import { getPageSession } from "~/server/api/trpc";
import AdminStuffILike from "./stuff-i-like";
import Heading from "../_components/ui/heading";

export default async function Page() {
  const { session, user } = await getPageSession();

  if (!user || !session || !user.isAdmin) {
    redirect("/");
  }

  return (
    <div className="mb-12 min-h-fill px-6">
      <Heading>Admin Portal</Heading>

      <div className="mt-36 grid grid-cols-main">
        <AdminStuffILike />
      </div>
    </div>
  );
}
