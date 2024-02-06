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

  return (
    <div className="flex min-h-fill flex-col justify-between px-6 py-4">
      <div className="grid-cols-main grid">
        <div>
          <h1 className="text-6xl font-medium uppercase leading-none tracking-tight">
            Work
          </h1>
        </div>
        <div></div>
      </div>
      <Chrome experience={experience} />;
    </div>
  );
}
