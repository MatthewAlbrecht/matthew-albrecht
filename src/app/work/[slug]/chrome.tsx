import React from "react";
import { type Experience } from "./data";
import Link from "next/link";
import { IconArrowRight } from "~/app/_components/ui/icons";
import { Separator } from "~/app/_components/ui/separator";
import Image from "next/image";
import { type Route } from "next";

export default function Chrome({ experience }: { experience: Experience }) {
  return (
    <section className="">
      <div className="grid-cols-main grid">
        <div className="pr-24">
          <div className="space-x-0.5">
            <NavigationLink href={experience.prevHref}>
              <IconArrowRight className="h-5 w-5 rotate-180" />
            </NavigationLink>
            <NavigationLink href={experience.nextHref}>
              <IconArrowRight className="h-5 w-5" />
            </NavigationLink>
          </div>
          <div className="mt-6">
            <h2 className="uppercase text-foreground">
              {experience.order.toString().padStart(2, "0")}&nbsp;//&nbsp;
              <strong>{experience.title}</strong>
            </h2>
            <Separator className="my-4 text-foreground/20" />
            <p className="text-sm text-secondary-foreground">
              {experience.dateRange}
            </p>
          </div>
          <p className="mt-4">
            Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Vivamus sagittis lacus
            vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            <br />
            <br />
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor
            ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh
            ultricies vehicula ut id elit. Maecenas sed diam eget risus varius
            blandit sit amet non magna.
          </p>
          <div className="mt-8">
            <p className="text-sm text-secondary-foreground">Tech Stack Used</p>
            <ul className="mt-2 grid grid-cols-[min-content_min-content] gap-x-6">
              {experience.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative bg-red-500">
          <Image
            layout="fill"
            src={experience.imageSrc}
            alt="coachella"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}

function NavigationLink({
  href,
  children,
}: {
  href: string | null;
  children: React.ReactNode;
}) {
  if (href) {
    return (
      <Link
        href={href as Route}
        className="inline-flex size-11 items-center justify-center rounded-full bg-card text-card-foreground"
      >
        {children}
      </Link>
    );
  }
  return (
    <div className="inline-flex size-11 items-center justify-center rounded-full bg-card text-card-foreground opacity-50">
      {children}
    </div>
  );
}
