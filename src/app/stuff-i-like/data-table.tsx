"use client";

import React from "react";
import { useState } from "react";
import { IconArrowDiagonal } from "~/app/_components/ui/icons";
import { Separator } from "~/app/_components/ui/separator";
import { cn } from "~/lib/utils";
import { type RouterOutputs } from "~/trpc/shared";

export default function DataTable({
  stuffILike,
}: {
  stuffILike: RouterOutputs["stuffILike"]["getAll"];
}) {
  const [filter, setFilter] = useState<CategoryId>("showAll");
  console.log(filter);
  return (
    <div className="grid-cols-main mt-[10rem] grid">
      <div></div>
      <div>
        <div className="flex">
          <p className="w-[7.5rem] text-sm font-medium uppercase">Filter by</p>
          <ul className="w-[400px] flex-1 gap-2 font-normal uppercase">
            {categories.map((category) => (
              <li key={category.id} className="inline-block">
                <FilterButton
                  category={category.label}
                  active={filter === category.id}
                  onClick={() => setFilter(category.id)}
                />
              </li>
            ))}
          </ul>
        </div>
        <Separator className="mt-4 bg-foreground/10" />
      </div>

      {stuffILike
        .filter((thing) => filter === "showAll" || thing.category === filter)
        .map((thing) => (
          <Thing key={thing.id} thing={thing} />
        ))}
    </div>
  );
}

function Thing({ thing }: { thing: RouterOutputs["stuffILike"]["getAll"][0] }) {
  return (
    <>
      <div></div>
      <a
        href={thing.contentUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="group grid grid-cols-[7.5rem_auto] border-b-[1px] border-solid border-foreground/10 py-8 transition-all duration-200 ease-in hover:bg-foreground hover:px-6 hover:text-background"
      >
        <div className="text-sm text-secondary-foreground group-hover:text-background group-hover:opacity-80">
          {thing.category}
        </div>
        <div className="flex justify-between">
          <div>
            <p className="font-black uppercase">{thing.title}</p>
            <p className="font-medium uppercase">{thing.subtitle}</p>
          </div>
          <div>
            <IconArrowDiagonal className="h-7 w-7" />
          </div>
        </div>
      </a>
    </>
  );
}

const categories = [
  { id: "showAll", label: "Show All" },
  { id: "Album", label: "Album" },
  { id: "Artist", label: "Artist" },
  { id: "Book", label: "Book" },
  { id: "Blog", label: "Blog" },
  { id: "Person", label: "Person" },
  { id: "Podcast", label: "Podcast" },
  { id: "Product", label: "Product" },
  { id: "Tool", label: "Tool" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

function FilterButton({
  category,
  active,
  onClick,
}: {
  category: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={cn(
        "relative -top-[1px] whitespace-nowrap rounded-2xl border-[1px] border-solid border-foreground border-transparent px-2",
        active ? "border-foreground" : "text-foreground/50",
      )}
      onClick={onClick}
    >
      {category}
    </button>
  );
}
