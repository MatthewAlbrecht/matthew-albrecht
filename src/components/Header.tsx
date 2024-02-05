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

export default function Header() {
  return (
    <div>
      <header className="px-6 py-8">
        <Separator className="bg-foreground/20" />
        <div className="flex w-full items-center justify-between py-2 text-xs font-medium uppercase">
          <Link href={"/"}>Matt Albrecht</Link>
          <nav className="flex w-[61%] items-center justify-between">
            <span>/Home</span>
            <Menu />
          </nav>
        </div>
      </header>
    </div>
  );
}

function Menu() {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="text-xs font-bold uppercase">• • menu</span>
      </DialogTrigger>
      <FullDialogContent className="flex flex-col" withClose={false}>
        <div className="absolute right-[21.8%] top-0 flex gap-1 text-primary-foreground/20">
          <LineOne />
          <LineTwo />
        </div>
        <DialogHeader>
          <header className="px-6 py-8">
            <Separator className="z-[60] bg-primary-foreground/20" />
            <div className="flex w-full items-center justify-between py-2 text-xs font-medium uppercase">
              <Link className="z-[60]" href={"/"}>
                Matt Albrecht
              </Link>
              <nav className="flex w-[61%] items-center justify-between">
                <span className="z-[60]">/Home</span>
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
        <div className="flex flex-grow flex-col justify-between px-6 pb-6 pt-8 text-primary-foreground">
          <ul className="group flex flex-col justify-between space-y-6 text-7xl font-medium tracking-tighter">
            <li className="hover:opacity-[100!important] group-hover:opacity-50">
              <Link className="block w-full" href={"/"}>
                Work
              </Link>
            </li>
            <li className="hover:opacity-[100!important] group-hover:opacity-50">
              <Link className="block w-full" href={"/resume"}>
                Resume
              </Link>
            </li>
            <li className="hover:opacity-[100!important] group-hover:opacity-50">
              <Link className="block w-full" href={"/haiku"}>
                Haiku
              </Link>
            </li>
            <li className="hover:opacity-[100!important] group-hover:opacity-50">
              <Link className="block w-full" href={"/now"}>
                Now
              </Link>
            </li>
            <li className="hover:opacity-[100!important] group-hover:opacity-50">
              <Link className="block w-full" href={"/blog"}>
                Writings
              </Link>
            </li>
            <li className="hover:opacity-[100!important] group-hover:opacity-50">
              <Link className="block w-full" href={"/recs"}>
                Stuff I Like
              </Link>
            </li>
          </ul>
          <ul className="flex gap-12 text-background-gray">
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
        </div>
      </FullDialogContent>
    </Dialog>
  );
}
