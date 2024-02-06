import { notFound } from "next/navigation";
import data from "./data";
import Chrome from "./chrome";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const experience = data[slug];

  if (!experience) {
    return notFound();
  }

  return <Chrome experience={experience} />;
}
