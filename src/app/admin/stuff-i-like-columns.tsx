import { type ColumnDef } from "@tanstack/react-table";
import { IconArrowDiagonal } from "../_components/ui/icons";
import { Checkbox } from "../_components/ui/checkbox";
import { Button } from "../_components/ui/button";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/app/_components/ui/dropdown-menu";
import { api } from "~/trpc/react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type Thing = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  contentUrl: string;
  imageUrl: string | null;
};

export const columns: ColumnDef<Thing>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },
  },
  {
    accessorKey: "subtitle",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Subtitle
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },
  },
  {
    accessorKey: "contentUrl",
    enableGlobalFilter: false,
    header: "Link",
    cell: ({ row }) => {
      const { contentUrl } = row.original;
      return (
        <a
          href={contentUrl}
          target="_blank"
          rel="noreferrer"
          className="group whitespace-nowrap underline"
        >
          {getSLD(contentUrl)}
          <IconArrowDiagonal className="inline transition-transform group-hover:translate-x-[5px] group-hover:translate-y-[-5px] group-hover:transform" />
        </a>
      );
    },
  },
  {
    accessorKey: "imageUrl",
    enableGlobalFilter: false,
    header: "Image",
    cell: ({ row }) => {
      const { imageUrl } = row.original;
      if (!imageUrl) return null;
      return (
        <a
          href={imageUrl}
          target="_blank"
          rel="noreferrer"
          className="group whitespace-nowrap underline"
        >
          {getSLD(imageUrl)}
          <IconArrowDiagonal className="inline transition-transform group-hover:translate-x-[5px] group-hover:translate-y-[-5px] group-hover:transform" />
        </a>
      );
    },
  },
  {
    id: "actions",
    enableGlobalFilter: false,
    cell: ({ row }) => {
      const thing = row.original;
      const deleteThing = api.stuffILike.deleteThing.useMutation();
      const queryClient = useQueryClient();
      // write handleDeleteClick as function
      function handleDeleteClick() {
        deleteThing.mutate(
          { id: thing.id },
          {
            onSuccess: () => {
              void queryClient.invalidateQueries({
                queryKey: [["stuffILike", "protectedGetAll"]],
              });
              toast.success(`Deleted ${thing.title}!`);
            },
          },
        );
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(String(thing.id))}
              className="cursor-pointer"
            >
              Copy thing ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={handleDeleteClick}
            >
              Delete Thing
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              View payment details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function getSLD(url: string): string {
  const hostname = new URL(url).hostname;
  const parts = hostname.split(".");
  return parts[parts.length - 2] ?? "Some Website";
}
