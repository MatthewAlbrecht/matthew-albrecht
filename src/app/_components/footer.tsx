"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { type SVGProps } from "react";
import { IconArrowDiagonal } from "./ui/icons";
import { cn } from "~/lib/utils";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <BigFooter />;
  }
  return <SmallFooter />;
}

function BigFooter() {
  return (
    <footer className="bg-hamburger flex justify-between p-6 pt-14 text-sm text-background-gray">
      <div className="self-end">
        <div className="text-hamburger-alt mb-5">
          <MA />
        </div>
        <div className="text-xs">
          <span>©2024 Matt Albrecht</span>
          <span className="ml-10">
            Designed by{" "}
            <Link className="underline" href="https://opra.design">
              opra.
            </Link>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <ul className="mb-6 flex gap-12 text-background-gray">
          <li>
            <Link
              className="group block w-full"
              href={"https://github.com/matthewalbrecht"}
            >
              Github
              <IconArrowDiagonal className="inline h-5 w-5 transition-transform duration-300 group-hover:translate-x-[5px] group-hover:translate-y-[-5px] group-hover:transform" />
            </Link>
          </li>
          <li>
            <Link
              className="group block w-full"
              href={"https://www.linkedin.com/in/matt-albrecht"}
            >
              LinkedIn
              <IconArrowDiagonal className="inline h-5 w-5 transition-transform duration-300 group-hover:translate-x-[5px] group-hover:translate-y-[-5px] group-hover:transform" />
            </Link>
          </li>
          <li>
            <Link
              className="group block w-full"
              href={"https://www.instagram.com/thisishaam"}
            >
              Instagram
              <IconArrowDiagonal className="inline h-5 w-5 transition-transform duration-300 group-hover:translate-x-[5px] group-hover:translate-y-[-5px] group-hover:transform" />
            </Link>
          </li>
          <li>
            <Link
              className="group block w-full"
              href={"https://www.twitter.com/thisishaam"}
            >
              Twitter
              <IconArrowDiagonal className="inline h-5 w-5 transition-transform duration-300 group-hover:translate-x-[5px] group-hover:translate-y-[-5px] group-hover:transform" />
            </Link>
          </li>
        </ul>
        <ul className="mb-6 grid grid-cols-6 gap-12 leading-none">
          <li>
            <Link href="/work/coachella">/Work</Link>
          </li>
          <li>
            <Link href="/resume">/Resume</Link>
          </li>
          <li>
            <Link href="/haiku">/Haiku</Link>
          </li>
          <li>
            <Link href="/now">/Now</Link>
          </li>
          <li>
            <Link href="/writings">/Writings</Link>
          </li>
          <li>
            <Link href="/stuff-i-like">/Stuff I Like</Link>
          </li>
        </ul>
        <div className="bg-hamburger-alt relative -mb-6 -mr-6 aspect-video w-[calc(100%+1.5rem)]">
          <PaletteSquares className="absolute -left-6 top-0" />
        </div>
      </div>
    </footer>
  );
}

function SmallFooter() {
  return (
    <footer className="flex items-center justify-between bg-primary p-6 text-sm text-background-gray">
      <div className="text-xs">
        <span>©2024 Matt Albrecht</span>
        <span className="ml-10">
          Designed by{" "}
          <Link className="underline" href="https://opra.design">
            opra.
          </Link>
        </span>
      </div>
      <ul className="grid grid-cols-6 gap-12">
        <li>
          <Link href="/work/coachella">/Work</Link>
        </li>
        <li>
          <Link href="/resume">/Resume</Link>
        </li>
        <li>
          <Link href="/haiku">/Haiku</Link>
        </li>
        <li>
          <Link href="/now">/Now</Link>
        </li>
        <li>
          <Link href="/writings">/Writings</Link>
        </li>
        <li>
          <Link href="/stuff-i-like">/Stuff I Like</Link>
        </li>
      </ul>
    </footer>
  );
}

function MA() {
  return (
    <svg
      viewBox="0 0 414 163"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M393.145 162.15C386.858 162.15 381.721 160.31 377.735 156.63C373.901 152.797 371.985 148.197 371.985 142.83C371.985 137.31 373.901 132.71 377.735 129.03C381.721 125.197 386.858 123.28 393.145 123.28C399.278 123.28 404.261 125.197 408.095 129.03C411.928 132.71 413.845 137.31 413.845 142.83C413.845 148.197 411.928 152.797 408.095 156.63C404.261 160.31 399.278 162.15 393.145 162.15Z" />
      <path d="M217.808 161L276.458 0H316.018L374.668 161H338.098L296.008 38.87L253.918 161H217.808ZM243.338 125.81L252.538 99.13H336.948L345.918 125.81H243.338Z" />
      <path d="M199.815 162.15C193.529 162.15 188.392 160.31 184.405 156.63C180.572 152.797 178.655 148.197 178.655 142.83C178.655 137.31 180.572 132.71 184.405 129.03C188.392 125.197 193.529 123.28 199.815 123.28C205.949 123.28 210.932 125.197 214.765 129.03C218.599 132.71 220.515 137.31 220.515 142.83C220.515 148.197 218.599 152.797 214.765 156.63C210.932 160.31 205.949 162.15 199.815 162.15Z" />
      <path d="M0.410004 161V0H41.81L88.73 96.83L135.19 0H176.36V161H141.86V58.19L102.3 138.46H74.7L34.91 58.19V161H0.410004Z" />
    </svg>
  );
}

function PaletteSquares({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 8 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-2", className)}
      {...props}
    >
      <rect width="8" height="8" fill="#DFD6C3" />
      <rect y="18" width="8" height="8" fill="#E3D9D0" />
      <rect y="36" width="8" height="8" fill="#C7C4C3" />
      <rect y="54" width="8" height="8" fill="#C9BCBB" />
      <rect y="72" width="8" height="8" fill="#B7B3AF" />
      <rect y="90" width="8" height="8" fill="#9B9692" />
    </svg>
  );
}
