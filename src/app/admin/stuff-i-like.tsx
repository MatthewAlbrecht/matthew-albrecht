"use client";

import React from "react";

import StuffILikeForm from "./stuff-i-like-form";
import { api } from "~/trpc/react";
import StuffILikeTable from "./stuff-i-like-table";
import { columns } from "./stuff-i-like-columns";

export default function AdminStuffILike() {
  const stuffILike = api.stuffILike.protectedGetAll.useQuery();

  return (
    <>
      <StuffILikeForm />
      {stuffILike.data ? (
        <StuffILikeTable data={stuffILike.data} columns={columns} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
