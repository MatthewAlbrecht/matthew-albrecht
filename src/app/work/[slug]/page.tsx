import { notFound } from "next/navigation";
import data from "./data";
import Chrome from "./chrome";
import Heading from "~/app/_components/ui/heading";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const experience = data[slug];

  if (!experience) {
    return notFound();
  }

  return (
    <div className="flex min-h-fill flex-col justify-between px-6 py-4">
      <div className="grid-cols-main grid">
        <div>
          <Heading>Work</Heading>
        </div>
        <div></div>
      </div>
      <Chrome experience={experience} />;
    </div>
  );
}
