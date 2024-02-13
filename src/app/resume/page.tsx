"use client";

import { cn } from "~/lib/utils";
import Heading from "../_components/ui/heading";
import { IconArrowDiagonal, IconDownload } from "../_components/ui/icons";
import { Separator } from "../_components/ui/separator";
import { type SetStateAction, useState, type Dispatch } from "react";
import data, {
  type Bullet,
  categories,
  skills,
  type CategoryId,
  type ResumeSection,
} from "./data";

export default function Page() {
  const [filter, setFilter] = useState<CategoryId>("showAll");

  return (
    <div className="min-h-fill px-6 py-4 pt-10">
      <div className="grid grid-cols-main">
        <div>
          <Heading>Resume</Heading>
        </div>
        <div className="flex justify-end">
          <div className="flex items-end">
            <span className="mr-6 text-sm font-bold uppercase">
              Download PDF:
            </span>
            <button className="whitespace-nowrap">
              <IconDownload className="relative bottom-0.5 mr-1 inline" />
              Frontend
            </button>
            <button className="whitespace-nowrap">
              <IconDownload className="relative bottom-0.5 ml-5 mr-1 inline" />
              Fullstack
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-main">
        <BioSection filter={filter} className="mr-24" />
        <ContentSection filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
}

function ContentSection({
  className,
  filter,
  setFilter,
  ...props
}: React.ComponentProps<"section"> & {
  filter: CategoryId;
  setFilter: Dispatch<SetStateAction<CategoryId>>;
}) {
  function hasBullets({ bullets }: ResumeSection) {
    return (
      filter === "showAll" ||
      bullets.some((bullet) => bullet.keywords.includes(filter))
    );
  }
  return (
    <section className={cn("", className)} {...props}>
      <div className="flex items-end justify-between">
        <h2 className="mr-6 font-medium uppercase">Experience</h2>
        <div className="relative top-[3px] flex items-end justify-between">
          <span className="relative bottom-1 mr-6 text-sm font-bold uppercase">
            Filter By:
          </span>
          <ul className="max-w-[500px] flex-1 gap-2 font-normal uppercase">
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
      </div>
      <Separator className="my-5 bg-foreground/10" />
      <div className="grid-cols-resume grid">
        {data.filter(hasBullets).map((resume) => (
          <ResumeSection key={resume.id} resume={resume} filter={filter} />
        ))}
      </div>
    </section>
  );
}

function ResumeSection({
  resume,
  filter,
}: {
  resume: ResumeSection;
  filter: CategoryId;
}) {
  function hasKeyword(bullet: Bullet) {
    return filter === "showAll" || bullet.keywords.includes(filter);
  }

  return (
    <>
      <div className="w-[100px] text-sm font-medium text-secondary-foreground">
        <p>{resume.dates}</p>
      </div>
      <div className="w-[300px]">
        <p className="font-bold uppercase">{resume.title}</p>
        {resume.company.url ? (
          <a
            href={resume.company.url}
            className="group mt-1 inline-block overflow-hidden text-sm font-medium uppercase leading-none opacity-70"
          >
            {resume.company.name}
            <IconArrowDiagonal className="group-hover:animate-up-and-right relative bottom-[1px] inline h-5 w-5 transition-transform" />
          </a>
        ) : (
          <p className="mt-1 text-sm font-medium uppercase leading-none opacity-70">
            {resume.company.name}
          </p>
        )}
      </div>
      <ul className="max-w-[100ch] flex-shrink list-disc">
        {resume.bullets.filter(hasKeyword).map((bullet, i) => (
          <li key={i} className="pl-2 -indent-2">
            {bullet.text}
          </li>
        ))}
      </ul>
      <Separator className="col-span-3 my-8 bg-foreground/10" />
    </>
  );
}

function BioSection({
  className,
  filter,
  ...props
}: React.ComponentProps<"section"> & { filter: CategoryId }) {
  return (
    <section className={className} {...props}>
      <div className="flex items-end justify-between">
        <h2 className="font-medium uppercase">Bio</h2>
      </div>
      <Separator className="my-5 bg-foreground/10" />
      <div>
        <p>
          Matt Albrecht is a Senior Full Stack Software Engineer with 1,092
          years of collective experience working as a wizard and chill ass dude
          of the interstellar regions of the cool peoples galaxy.
        </p>
        <p className="mt-4">
          Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit
          libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a
          pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
        <p className="mb-2 mt-6 gap-x-6 font-medium text-secondary-foreground">
          Skills
        </p>
        <p>
          {skills.map((skill) => (
            <span
              className={cn(
                "inline transition-opacity duration-300 ease-in-out",
                !skill.keywords.includes(filter) && "opacity-30",
              )}
            >
              {skill.name},&emsp;
            </span>
          ))}
        </p>

        <div></div>
      </div>
    </section>
  );
}

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
        "relative -top-[1px] whitespace-nowrap border-[1px] border-solid border-foreground border-transparent px-2",
        active ? "border-foreground" : "text-foreground/50",
      )}
      onClick={onClick}
    >
      {category}
    </button>
  );
}
