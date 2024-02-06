"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";
import {
  Dialog,
  DialogClose,
  DialogHeader,
  DialogTrigger,
  FullDialogContent,
} from "./ui/dialog";
import { IconArrowDiagonal } from "./ui/icons";
import { LineOne, LineTwo } from "./ui/lines";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();

  return (
    <div>
      <header className="px-6 py-8">
        <Separator className="bg-foreground/20" />
        <div className="flex w-full items-center justify-between py-2 text-xs font-medium uppercase">
          <Link href="/">Matt Albrecht</Link>
          <nav className="flex w-[61%] items-center justify-between">
            <span>
              {pathname
                .slice(1)
                .split("/")
                .map((path, index) => (
                  <span key={index}>
                    <span className="mx-0.5">/</span>
                    {`${path ? path : "home"}`}
                  </span>
                ))}
            </span>
            <Menu pathname={pathname} />
          </nav>
        </div>
      </header>
    </div>
  );
}

function Menu({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleLinkClick() {
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DialogTrigger>
        <span className="text-xs font-bold uppercase">• • menu</span>
      </DialogTrigger>
      <FullDialogContent
        className="bg-hamburger text-hamburger-foreground flex flex-col"
        withClose={false}
      >
        <div className="text-hamburger-foreground/20 absolute right-[21.8%] top-0 flex gap-1">
          <LineOne />
          <LineTwo />
        </div>
        <DialogHeader>
          <header className="px-6 py-8">
            <Separator className="bg-hamburger-foreground/20 z-[60]" />
            <div className="flex w-full items-center justify-between py-2 text-xs font-medium uppercase">
              <Link className="z-[60]" href="/" onClick={handleLinkClick}>
                Matt Albrecht
              </Link>
              <nav className="flex w-[61%] items-center justify-between">
                <span>
                  {pathname
                    .slice(1)
                    .split("/")
                    .map((path, index) => (
                      <span key={index}>
                        <span className="mx-0.5">/</span>
                        {`${path ? path : "home"}`}
                      </span>
                    ))}
                </span>
                <DialogClose asChild>
                  <button className="text-xs font-medium uppercase">
                    x close
                    {/* <IconClose className="ml-2 inline h-3 w-3" /> */}
                  </button>
                </DialogClose>
              </nav>
            </div>
          </header>
        </DialogHeader>
        <div className="text-hamburger-foreground flex flex-grow flex-col justify-between px-6 pb-6 pt-8">
          <ul className="group flex flex-col justify-between space-y-6 text-7xl font-medium tracking-tighter">
            <li className="hover:opacity-[100!important] group-hover:opacity-50">
              <Link
                className="block w-full"
                href={"/work/coachella"}
                onClick={handleLinkClick}
              >
                Work
              </Link>
            </li>
            <li className="hover:opacity-[100!important] group-hover:opacity-50">
              <Link
                className="block w-full"
                href={"/resume"}
                onClick={handleLinkClick}
              >
                Resume
              </Link>
            </li>
            <li className="hover:opacity-[100!important] group-hover:opacity-50">
              <Link
                className="block w-full"
                href={"/haiku"}
                onClick={handleLinkClick}
              >
                Haiku
              </Link>
            </li>
            <li className="hover:opacity-[100!important] group-hover:opacity-50">
              <Link
                className="block w-full"
                href={"/now"}
                onClick={handleLinkClick}
              >
                Now
              </Link>
            </li>
            <li className="hover:opacity-[100!important] group-hover:opacity-50">
              <Link
                className="block w-full"
                href={"/blog"}
                onClick={handleLinkClick}
              >
                Writings
              </Link>
            </li>
            <li className="hover:opacity-[100!important] group-hover:opacity-50">
              <Link
                className="block w-full"
                href={"/stuff-i-like"}
                onClick={handleLinkClick}
              >
                Stuff I Like
              </Link>
            </li>
          </ul>
          <ul className="flex gap-12 text-background-gray">
            <li>
              <Link
                className="group block w-full"
                href={"https://github.com/matthewalbrecht"}
                target="_blank"
              >
                Github
                <IconArrowDiagonal className="inline h-5 w-5 transition-transform duration-300 group-hover:translate-x-[5px] group-hover:translate-y-[-5px] group-hover:transform" />
              </Link>
            </li>
            <li>
              <Link
                className="group block w-full"
                href={"https://www.linkedin.com/in/matt-albrecht"}
                target="_blank"
              >
                LinkedIn
                <IconArrowDiagonal className="inline h-5 w-5 transition-transform duration-300 group-hover:translate-x-[5px] group-hover:translate-y-[-5px] group-hover:transform" />
              </Link>
            </li>
            <li>
              <Link
                className="group block w-full"
                href={"https://www.instagram.com/thisishaam"}
                target="_blank"
              >
                Instagram
                <IconArrowDiagonal className="inline h-5 w-5 transition-transform duration-300 group-hover:translate-x-[5px] group-hover:translate-y-[-5px] group-hover:transform" />
              </Link>
            </li>
            <li>
              <Link
                className="group block w-full"
                href={"https://www.twitter.com/thisishaam"}
                target="_blank"
              >
                Twitter
                <IconArrowDiagonal className="inline h-5 w-5 transition-transform duration-300 group-hover:translate-x-[5px] group-hover:translate-y-[-5px] group-hover:transform" />
              </Link>
            </li>
          </ul>
        </div>
      </FullDialogContent>
    </Dialog>
  );
}
