import { redirect } from "next/navigation";
import React from "react";
import { getPageSession } from "~/server/api/trpc";
import AdminStuffILike from "./stuff-i-like";

export default async function Page() {
  const { session, user } = await getPageSession();

  if (!user || !session || !user.isAdmin) {
    console.log("USER", user);
    redirect("/");
  }

  return (
    <div className="mb-12 min-h-fill px-6">
      <h1 className="text-6xl font-medium uppercase leading-none tracking-tight">
        Admin Portal
      </h1>

      <div className="grid-cols-main mt-36 grid">
        <AdminStuffILike />
      </div>
    </div>
  );
}
