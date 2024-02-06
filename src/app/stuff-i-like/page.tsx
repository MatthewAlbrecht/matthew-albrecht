"use client";

import { useState } from "react";
import { IconArrowDiagonal } from "~/app/_components/ui/icons";
import { Separator } from "~/app/_components/ui/separator";
import { cn } from "~/lib/utils";

export default function Page() {
  const [filter, setFilter] = useState<CategoryId>("showAll");

  return (
    <div className="min-h-fill px-6 py-4">
      <div className="grid-cols-main grid">
        <div>
          <h1 className="text-6xl font-medium uppercase leading-none tracking-tight">
            Stuff I Like
          </h1>
        </div>
        <div></div>
      </div>
      <div className="grid-cols-main mt-[10rem] grid">
        <div className="mr-10 mt-auto">
          <p className="text-sm font-medium uppercase">Bio</p>
          <Separator className="mt-4 bg-foreground/10" />
        </div>
        <div>
          <div className="flex">
            <p className="w-[7.5rem] text-sm font-medium uppercase">
              Filter by
            </p>
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

        <div></div>
        <div className="group grid grid-cols-[7.5rem_auto] border-b-[1px] border-solid border-foreground/10 py-8 transition-all duration-200 ease-in hover:bg-foreground hover:px-6 hover:text-background">
          <div className="text-sm text-secondary-foreground group-hover:text-background group-hover:opacity-80">
            Artist
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-black uppercase">Tyler the Creator</p>
              <p className="font-medium uppercase">Hip-Hop | RnB | Funny</p>
            </div>
            <div>
              <IconArrowDiagonal className="h-7 w-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = [
  { id: "showAll", label: "Show All" },
  { id: "album", label: "Album" },
  { id: "artist", label: "Artist" },
  { id: "book", label: "Book" },
  { id: "blog", label: "Blog" },
  { id: "person", label: "Person" },
  { id: "podcast", label: "Podcast" },
  { id: "product", label: "Product" },
  { id: "tool", label: "Tool" },
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
