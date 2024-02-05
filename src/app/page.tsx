"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import AskMeAnything from "~/components/ask-me-anything";
import { Button } from "~/components/ui/button";
import { IconChevron, IconSplashLines } from "~/components/ui/icons";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

export default function Index() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const springConfig = { stiffness: 300, damping: 30, bounce: 10000 };

  const translateY = useSpring(
    useTransform(scrollYProgress, [1, 0], [-200, 0]),
    springConfig,
  );

  const translateYLineLeft = useSpring(
    useTransform(scrollYProgress, [1, 0], [800, 0]),
    springConfig,
  );

  const translateYLineMiddle = useSpring(
    useTransform(scrollYProgress, [1, 0], [300, 0]),
    springConfig,
  );

  const translateYLineRight = useSpring(
    useTransform(scrollYProgress, [1, 0], [-700, 0]),
    springConfig,
  );

  return (
    <>
      <div
        className="relative flex min-h-fill flex-col overflow-hidden"
        ref={ref}
      >
        <div className="mt-[3.25rem] flex w-[57.4%] flex-grow flex-col justify-between bg-background px-6 py-6">
          <div className="flex items-center justify-between">
            <Input
              className="mr-2 h-14 flex-1 rounded-none border-l-0 border-r-0 border-t-0 border-foreground/30 pl-0 text-lg placeholder:text-foreground/30 focus:outline-none"
              withFocus={false}
              placeholder="Ask me anything..."
            />
            <Button size="xl">Ask Matt AI</Button>
          </div>
          <motion.div style={{ translateY }}>
            <h1 className="relative -mr-96 mb-12 text-8xl font-bold uppercase leading-[0.88] tracking-tighter text-splash-foreground">
              Thru-Hiker. <br />
              Avid Breather. <br />
              Bonnaroovian. <br />
              <span className="absolute text-splash-foreground/20">
                Developer. <br />
                Ideas Guy. <br />
                Free Thinker. <br />
              </span>
            </h1>
          </motion.div>
        </div>
        <div className="absolute right-[20%] top-0 text-[#666482]/30">
          <svg
            viewBox="0 0 57 790"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            className={cn("h-[790px] w-[57px]")}
          >
            {/* <motion.g></motion.g> */}
            <motion.g style={{ translateY: translateYLineLeft }}>
              <line x1="0.5" y1="265" x2="0.500002" y2="245" />
              <line x1="0.5" y1="239" x2="0.500001" y2="233" />
              <line x1="0.5" y1="229" x2="0.500001" y2="223" />
              <line x1="0.5" y1="219" x2="0.500001" y2="213" />
              <line x1="0.5" y1="209" x2="0.500001" y2="203" />
              <line x1="0.5" y1="199" x2="0.500001" y2="193" />
              <line x1="0.5" y1="189" x2="0.500001" y2="178" />
              <line x1="0.5" y1="176" x2="0.500001" y2="165" />
              <line x1="0.5" y1="163" x2="0.500001" y2="152" />
              <line x1="0.5" y1="150" x2="0.500001" y2="139" />
              <line x1="0.5" y1="137" x2="0.500004" y2="95" />
              <line x1="0.5" y1="440" x2="0.500002" y2="420" />
              <line x1="0.5" y1="414" x2="0.500001" y2="408" />
              <line x1="0.5" y1="404" x2="0.500001" y2="398" />
              <line x1="0.5" y1="394" x2="0.500001" y2="388" />
              <line x1="0.5" y1="384" x2="0.500001" y2="378" />
              <line x1="0.5" y1="374" x2="0.500001" y2="368" />
              <line x1="0.5" y1="364" x2="0.500001" y2="353" />
              <line x1="0.5" y1="351" x2="0.500001" y2="340" />
              <line x1="0.5" y1="338" x2="0.500001" y2="327" />
              <line x1="0.5" y1="325" x2="0.500001" y2="314" />
              <line x1="0.5" y1="312" x2="0.500004" y2="270" />
              <line x1="0.5" y1="615" x2="0.500002" y2="595" />
              <line x1="0.5" y1="589" x2="0.500001" y2="583" />
              <line x1="0.5" y1="579" x2="0.500001" y2="573" />
              <line x1="0.5" y1="569" x2="0.500001" y2="563" />
              <line x1="0.5" y1="559" x2="0.500001" y2="553" />
              <line x1="0.5" y1="549" x2="0.500001" y2="543" />
              <line x1="0.5" y1="539" x2="0.500001" y2="528" />
              <line x1="0.5" y1="526" x2="0.500001" y2="515" />
              <line x1="0.5" y1="513" x2="0.500001" y2="502" />
              <line x1="0.5" y1="500" x2="0.500001" y2="489" />
              <line x1="0.5" y1="487" x2="0.500004" y2="445" />
              <line
                y1="-0.5"
                x2="20"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 620)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 646)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 656)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 666)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 676)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 686)"
              />
              <line
                y1="-0.5"
                x2="11"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 696)"
              />
              <line
                y1="-0.5"
                x2="11"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 709)"
              />
              <line
                y1="-0.5"
                x2="11"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 722)"
              />
              <line
                y1="-0.5"
                x2="11"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 735)"
              />
              <line
                y1="-0.5"
                x2="42"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 1 748)"
              />
            </motion.g>
            <motion.g style={{ translateY: translateYLineMiddle }}>
              <line x1="48.5" y1="217" x2="48.5" y2="197" />
              <line x1="48.5" y1="191" x2="48.5" y2="185" />
              <line x1="48.5" y1="181" x2="48.5" y2="175" />
              <line x1="48.5" y1="171" x2="48.5" y2="165" />
              <line x1="48.5" y1="161" x2="48.5" y2="155" />
              <line x1="48.5" y1="151" x2="48.5" y2="145" />
              <line x1="48.5" y1="141" x2="48.5" y2="130" />
              <line x1="48.5" y1="128" x2="48.5" y2="117" />
              <line x1="48.5" y1="115" x2="48.5" y2="104" />
              <line x1="48.5" y1="102" x2="48.5" y2="91" />
              <line x1="48.5" y1="89" x2="48.5" y2="47" />
              <line x1="48.5" y1="392" x2="48.5" y2="372" />
              <line x1="48.5" y1="366" x2="48.5" y2="360" />
              <line x1="48.5" y1="356" x2="48.5" y2="350" />
              <line x1="48.5" y1="346" x2="48.5" y2="340" />
              <line x1="48.5" y1="336" x2="48.5" y2="330" />
              <line x1="48.5" y1="326" x2="48.5" y2="320" />
              <line x1="48.5" y1="316" x2="48.5" y2="305" />
              <line x1="48.5" y1="303" x2="48.5" y2="292" />
              <line x1="48.5" y1="290" x2="48.5" y2="279" />
              <line x1="48.5" y1="277" x2="48.5" y2="266" />
              <line x1="48.5" y1="264" x2="48.5" y2="222" />
              <line x1="48.5" y1="567" x2="48.5" y2="547" />
              <line x1="48.5" y1="541" x2="48.5" y2="535" />
              <line x1="48.5" y1="531" x2="48.5" y2="525" />
              <line x1="48.5" y1="521" x2="48.5" y2="515" />
              <line x1="48.5" y1="511" x2="48.5" y2="505" />
              <line x1="48.5" y1="501" x2="48.5" y2="495" />
              <line x1="48.5" y1="491" x2="48.5" y2="480" />
              <line x1="48.5" y1="478" x2="48.5" y2="467" />
              <line x1="48.5" y1="465" x2="48.5" y2="454" />
              <line x1="48.5" y1="452" x2="48.5" y2="441" />
              <line x1="48.5" y1="439" x2="48.5" y2="397" />
              <line
                y1="-0.5"
                x2="20"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 572)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 598)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 608)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 618)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 628)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 638)"
              />
              <line
                y1="-0.5"
                x2="11"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 648)"
              />
              <line
                y1="-0.5"
                x2="11"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 661)"
              />
              <line
                y1="-0.5"
                x2="11"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 674)"
              />
              <line
                y1="-0.5"
                x2="11"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 687)"
              />
              <line
                y1="-0.5"
                x2="42"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 49 700)"
              />
            </motion.g>
            <motion.g style={{ translateY: translateYLineRight }}>
              <line x1="56.5" y1="153" x2="56.5" y2="133" />
              <line x1="56.5" y1="127" x2="56.5" y2="121" />
              <line x1="56.5" y1="117" x2="56.5" y2="111" />
              <line x1="56.5" y1="107" x2="56.5" y2="101" />
              <line x1="56.5" y1="97" x2="56.5" y2="91" />
              <line x1="56.5" y1="87" x2="56.5" y2="81" />
              <line x1="56.5" y1="77" x2="56.5" y2="66" />
              <line x1="56.5" y1="64" x2="56.5" y2="53" />
              <line x1="56.5" y1="51" x2="56.5" y2="40" />
              <line x1="56.5" y1="38" x2="56.5" y2="27" />
              <line x1="56.5" y1="25" x2="56.5" y2="-17" />
              <line x1="56.5" y1="328" x2="56.5" y2="308" />
              <line x1="56.5" y1="302" x2="56.5" y2="296" />
              <line x1="56.5" y1="292" x2="56.5" y2="286" />
              <line x1="56.5" y1="282" x2="56.5" y2="276" />
              <line x1="56.5" y1="272" x2="56.5" y2="266" />
              <line x1="56.5" y1="262" x2="56.5" y2="256" />
              <line x1="56.5" y1="252" x2="56.5" y2="241" />
              <line x1="56.5" y1="239" x2="56.5" y2="228" />
              <line x1="56.5" y1="226" x2="56.5" y2="215" />
              <line x1="56.5" y1="213" x2="56.5" y2="202" />
              <line x1="56.5" y1="200" x2="56.5" y2="158" />
              <line x1="56.5" y1="503" x2="56.5" y2="483" />
              <line x1="56.5" y1="477" x2="56.5" y2="471" />
              <line x1="56.5" y1="467" x2="56.5" y2="461" />
              <line x1="56.5" y1="457" x2="56.5" y2="451" />
              <line x1="56.5" y1="447" x2="56.5" y2="441" />
              <line x1="56.5" y1="437" x2="56.5" y2="431" />
              <line x1="56.5" y1="427" x2="56.5" y2="416" />
              <line x1="56.5" y1="414" x2="56.5" y2="403" />
              <line x1="56.5" y1="401" x2="56.5" y2="390" />
              <line x1="56.5" y1="388" x2="56.5" y2="377" />
              <line x1="56.5" y1="375" x2="56.5" y2="333" />
              <line
                y1="-0.5"
                x2="20"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 508)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 534)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 544)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 554)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 564)"
              />
              <line
                y1="-0.5"
                x2="6"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 574)"
              />
              <line
                y1="-0.5"
                x2="11"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 584)"
              />
              <line
                y1="-0.5"
                x2="11"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 597)"
              />
              <line
                y1="-0.5"
                x2="11"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 610)"
              />
              <line
                y1="-0.5"
                x2="11"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 623)"
              />
              <line
                y1="-0.5"
                x2="42"
                y2="-0.5"
                transform="matrix(8.74228e-08 1 1 -8.74228e-08 57 636)"
              />
            </motion.g>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <MountainSvg className="w-full" />
        </div>
        <Link
          href="/haiku"
          className="absolute bottom-12 right-12 flex size-32 origin-center items-center justify-center rounded-full bg-background-tan transition-all duration-700 hover:size-[8.5rem]"
        >
          <span className="pr-2 text-sm font-bold">Haiku</span>
          <IconChevron className="inline" />
        </Link>
      </div>
      <div className="h-screen"></div>
    </>
  );
}

function MountainSvg({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 1455 295"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
      {...props}
    >
      <path
        d="M581 268C554.072 263.545 431.5 231 371 231C248.641 231 169.755 258.466 52 289L0 305L1475 295L1456.99 0C1429.98 3.5 1440.82 0 1388 0C1321.98 0 1281.52 78 1235.5 95.5C1189.48 113 1060.51 100 1025 105C989.488 110 985.727 136.5 867 185C852.498 190.924 773 196 709 218C645 240 620.287 274.5 581 268Z"
        fill="#B9B8C6"
      />
      <path
        d="M1121.5 138C1075.48 155.5 1000.51 140.5 965 145.5C867.513 159.226 805.5 165.5 720.5 258C677.343 304.965 377.695 258 320 258C172.615 258 164.407 272.505 20 295.5L1485 301L1466.99 6C1404 -18.5 1333.35 65.5 1280.53 65.5C1214.51 65.5 1167.52 120.5 1121.5 138Z"
        fill="#9A98AE"
      />
      <path
        d="M462.147 259.5C457.746 259.5 159.5 265 95 290L31 307.5L1496 313L1477.99 18C1450.98 21.5 1383.76 28.5 1330.94 28.5C1264.92 28.5 1275.42 91.5 1229.41 109C1183.39 126.5 1047.85 135.5 1012.33 140.5C927.213 152.485 828.493 190.121 756.5 237C713.5 265 698.5 265 636 265C608.706 265 467.649 259.5 462.147 259.5Z"
        fill="#666482"
      />
    </svg>
  );
}
