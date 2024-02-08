"use client";

import { cn } from "~/lib/utils";
import haikus from "./data";
import {
  type SVGMotionProps,
  motion,
  type AnimationProps,
} from "framer-motion";
import { LineOne } from "../_components/ui/lines";

const bubblePaths = [
  "M1036.2 151.317C1036.2 391.157 705.296 511.689 464.087 511.689C222.879 511.689 0 572.755 0 332.915C0 93.0752 393.995 28.5882 635.204 28.5882C876.412 28.5882 1036.2 -88.5233 1036.2 151.317Z",
  "M1029.5 187C1029.5 426.84 746.708 513.5 505.5 513.5C264.292 513.5 0 572.755 0 332.915C0 93.0752 430.792 7.99993 672 7.99993C913.208 7.99993 1029.5 -52.84 1029.5 187Z",
  "M1029.5 192C1029.5 431.84 787.708 524 546.5 524C305.292 524 1.5 485.34 1.5 245.5C1.5 5.6599 372.792 5.99994 614 5.99994C855.208 5.99994 1029.5 -47.8402 1029.5 192Z",
  "M1032.5 319C1032.5 558.84 758.208 485.5 517 485.5C275.792 485.5 2.5 595.84 2.5 356C2.5 116.16 372.792 1 614 1C855.208 1 1032.5 79.1601 1032.5 319Z",
  "M1032.5 319C1032.5 558.84 686.208 505 445 505C203.792 505 24 604.34 24 364.5C24 124.66 55.7915 5 297 5C538.208 5 1032.5 79.1601 1032.5 319Z",
];

const pathVariantOptions = [
  createPathVariants(bubblePaths),
  createPathVariants(bubblePaths, 6),
  createPathVariants(bubblePaths, 14),
  createPathVariants(bubblePaths, 18),
];

export default function Page() {
  const haiku = haikus[0];
  return (
    <>
      <div className="h-fill relative flex flex-col items-center justify-center px-6 ">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 transform">
          <Pagination />
        </div>

        {pathVariantOptions.map((pathVariants) => (
          <Blob
            key={JSON.stringify(pathVariants.animate.d)}
            pathVariants={pathVariants}
            className="absolute bottom-6 left-[10%] right-[10%] top-6 text-foreground/5"
          />
        ))}
        <div className="relative flex h-full w-[80%] flex-col justify-center space-y-6 text-center font-medium">
          <p>{haiku.line1}</p>
          <p>{haiku.line2}</p>
          <p>{haiku.line3}</p>
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex justify-between text-sm text-primary-foreground/60">
          <p>{haiku.date}</p>
          <p>{haiku.location}</p>
        </div>
      </div>
      <div className="absolute right-[61%] top-0 flex space-x-0.5">
        <LineOne className="text-background opacity-30" />
        <LineOne className="rotate-180 text-background opacity-30" />
      </div>
      <style>{css}</style>
    </>
  );
}

function Pagination() {
  return (
    <div className="flex flex-col">
      <button className="group py-2 pr-6">
        <div className="h-[2px] w-4 bg-primary-foreground transition-[width] group-hover:w-5" />
      </button>
      <button className="group py-2 pr-6">
        <div className="h-[2px] w-2 bg-primary-foreground/30 transition-[width] group-hover:w-5" />
      </button>
      <button className="group py-2 pr-6">
        <div className="h-[2px] w-2 bg-primary-foreground/30 transition-[width] group-hover:w-5" />
      </button>
      <button className="group py-2 pr-6">
        <div className="h-[2px] w-2 bg-primary-foreground/30 transition-[width] group-hover:w-5" />
      </button>
      <button className="group py-2 pr-6">
        <div className="h-[2px] w-2 bg-primary-foreground/30 transition-[width] group-hover:w-5" />
      </button>
    </div>
  );
}

const css = `
    :root {
        --background: 221, 27%, 87%;
        --foreground: 226, 15%, 29%;
        --primary-foreground: 226, 5%, 47%;
    }
`;

export interface BlobProps extends SVGMotionProps<SVGSVGElement> {
  pathVariants: PathVariants;
}

function Blob({ className, pathVariants, ...props }: BlobProps) {
  return (
    <motion.svg
      viewBox="0 0 1036 519"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
      {...props}
    >
      <motion.path
        variants={pathVariants}
        animate="animate"
        initial={{ d: pathVariants.animate.d[0] }}
      />
    </motion.svg>
  );
}

type PathVariants = ReturnType<typeof createPathVariants>;

function createPathVariants(ds: string[], delay = 0, duration = 50) {
  return {
    animate: {
      d: shuffleArray(ds),
      transition: {
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  } satisfies AnimationProps["variants"];
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [
      shuffledArray[j],
      shuffledArray[i],
    ] as [T, T];
  }
  return shuffledArray;
}
