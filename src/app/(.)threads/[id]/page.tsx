import React from "react";
import ThreadSheet from "./thread-sheet";
import { Chat } from "~/components/chat";

export default async function Page({
  params: { id: threadId },
}: {
  params: { id: string };
}) {
  return <ThreadSheet></ThreadSheet>;
}
