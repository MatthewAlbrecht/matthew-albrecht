import Link from "next/link";
import { Separator } from "./ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";

export default function Header() {
  return (
    <div className="">
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
      <DialogContent className="h-full max-w-full animate-none rounded-none border-none bg-primary p-0 text-primary-foreground">
        <DialogHeader>
          <header className="px-6 py-8">
            <Separator className="z-[60] bg-primary-foreground/20" />
            <div className="flex w-full items-center justify-between py-2 text-xs font-medium uppercase">
              <Link className="z-[60]" href={"/"}>
                Matt Albrecht
              </Link>
              <nav className="flex w-[61%] items-center justify-between">
                <span className="z-[60]">/Home</span>
              </nav>
            </div>
          </header>

          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
