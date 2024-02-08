"use client";

import { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { useRouter } from "next/navigation";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command
        filter={(value, search) => (value.includes(search) ? 1 : 0)}
        loop
      >
        <CommandInput
          placeholder="Type a command or search..."
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages" forceMount={false}>
            <CommandItem
              onSelect={() => {
                router.push("/");
                setOpen(false);
              }}
            >
              Home
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/work/coachella");
                setOpen(false);
              }}
            >
              Work
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/resume");
                setOpen(false);
              }}
            >
              Resume
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/haiku");
                setOpen(false);
              }}
            >
              Haiku
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/writings");
                setOpen(false);
              }}
            >
              Writings
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/stuff-i-like");
                setOpen(false);
              }}
            >
              Stuff I Like
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
