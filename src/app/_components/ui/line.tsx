"use client";

import {
  type MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "~/lib/utils";

interface LineProps extends React.SVGProps<SVGSVGElement> {
  lineConfig: LineConfig;
  lineCount: number;
}

type LineConfig = {
  lineGap: number;
  gapValues: number[];
  height: number;
  lengthValues: [number, number];
  sameLines?: boolean;
  baselineOpacity?: number;
  lineType?: "solid" | "decay-up" | "decay-down" | "decay-up-down";
};

function LineFactory({
  className,
  lineConfig: {
    lineGap,
    gapValues,
    height,
    lengthValues,
    sameLines,
    baselineOpacity,
    lineType = "solid",
  },
  lineCount,
  ...props
}: LineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center .80"],
  });

  // console.log("scrollYProgress", scrollYProgress);

  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    damping: 100,
    stiffness: 300,
    bounce: 100,
  });

  if (sameLines)
    var lineSegments = calculateLines({
      gapValues,
      height,
      lengthValues,
      lineType,
    });
  const w = (lineGap + 1) * (lineCount - 1) + 1;
  // console.log("pathLength", pathLength);
  return (
    <div ref={ref}>
      <svg
        width={`${w}px`}
        height={`${height}px`}
        viewBox={`0 0 ${w} ${height}`}
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("", className)}
        {...props}
      >
        {Array.from({ length: lineCount }).map((_, index) => (
          <>
            {baselineOpacity && (
              <line
                key={"base" + String(index)}
                y1={0}
                y2={height}
                x1={index * (lineGap + 1) + 0.5}
                x2={index * (lineGap + 1) + 0.5}
                stroke="currentColor"
                strokeOpacity={baselineOpacity}
              />
            )}
            {(
              lineSegments ??
              calculateLines({ gapValues, height, lengthValues, lineType })
            ).map(([y1, y2]) => (
              <Line
                key={y1 + String(index)}
                y1={y1}
                y2={y2}
                lineGap={lineGap}
                index={index}
                lineHeight={lineHeight}
              />
            ))}
          </>
        ))}
      </svg>
    </div>
  );
}

function Line({
  lineHeight,
  lineGap,
  index,
  y1,
  y2,
}: {
  lineHeight: MotionValue<number>;
  index: number;
  lineGap: number;
  y1: number;
  y2: number;
}) {
  // const tbhing = useTransform(
  //   lineHeight, [0, 1], [0, 1]
  // );
  const internalHeight = y2 - y1;
  const isUp = Math.random() > 0.5;
  const coord = useTransform(() =>
    isUp
      ? y2 - lineHeight.get() * internalHeight
      : y1 + lineHeight.get() * internalHeight,
  );
  return (
    <motion.line
      y1={isUp ? coord : y1}
      y2={isUp ? y2 : coord}
      x1={index * (lineGap + 1) + 0.5}
      x2={index * (lineGap + 1) + 0.5}
      strokeLinecap="round"
    />
  );
}

export { LineFactory };

function calculateLines({
  gapValues,
  lengthValues,
  height,
  lineType,
}: Pick<LineConfig, "gapValues" | "lengthValues" | "height" | "lineType">) {
  let lineValues: [number, number][] = [];
  let start = -1 * lengthValues[0];
  const end = height + lengthValues[1];

  while (start < end) {
    const length = getIntegerBetween(...lengthValues);
    const gap = getRandomArrayElement(gapValues);
    lineValues.push([start, start + length]);
    start += length + gap;
  }

  if (lineType?.startsWith("decay")) {
    const gap = gapValues[0]!;
    const newLineValues = lineValues.map(([y1, y2]) => {
      const newTuples = [];

      if (lineType === "decay-down") {
        let length = gap;
        while (y2 - y1 > gap) {
          const possibleY1 = y2 - length;
          const newY1 = possibleY1 < y1 ? y1 : possibleY1;
          newTuples.unshift([newY1, y2]);
          length *= 2;
          y2 = newY1 - gap;
        }
      }
      if (lineType === "decay-up") {
        let length = gap;
        while (y2 - y1 > gap) {
          const possibleY2 = y1 + length;
          const newY2 = possibleY2 > y2 ? y2 : possibleY2;
          newTuples.push([y1, newY2]);
          console.log(length);
          length *= 2;
          y1 = newY2 + gap;
        }
      }
      if (lineType === "decay-up-down") {
        const leftSide = [],
          rightSide = [];
        let length = gap;
        while (y2 > y1) {
          const l2 = y1 + length;
          const r1 = y2 - length;
          if (l2 > r1) {
            leftSide.push([y1, y2]);
          } else {
            leftSide.push([y1, l2]);
            rightSide.unshift([r1, y2]);
          }
          length *= 2;
          y1 = l2 + gap;
          y2 = r1 - gap;
        }
        newTuples.push(...leftSide, ...rightSide);
      }

      return newTuples as [number, number][];
    });

    // flatten the array by 1 level
    lineValues = newLineValues.flat(1);
  }

  return cleanLineValues(lineValues, height);
}

// remove lineValue elments that are completely out of bounds and modify the ones that are partially out of bounds
// this is necessary so that the lines loook random
function cleanLineValues(
  lineValues: [number, number][],
  height: number,
): [number, number][] {
  return lineValues
    .map(([y1, y2]) => {
      if (y2 < 0 || y1 > height) {
        return null;
      }
      if (y1 < 0) {
        y1 = 0;
      }
      if (y2 > height) {
        y2 = height;
      }
      return [y1, y2];
    })
    .filter(Boolean) as [number, number][];
}

function getRandomArrayElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function getIntegerBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
