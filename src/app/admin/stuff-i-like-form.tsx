import React from "react";

import { type z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/app/_components/ui/form";
import { toast } from "sonner";
import { api } from "~/trpc/react";
import { Button } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import { createThingSchema } from "~/lib/types";

export default function StuffILikeForm({}: { id?: number }) {
  // const { data: thingILike } = api.stuffILike.getById.useQuery(
  //   {
  //     id: id ?? -1,
  //   },
  //   {
  //     queryKey: ["stuffILike.getById", { id: id ?? -1 }],
  //     enabled: id != null,
  //   },
  // );
  const queryClient = useQueryClient();
  const createThing = api.stuffILike.createThing.useMutation();

  const form = useForm<z.infer<typeof createThingSchema>>({
    resolver: zodResolver(createThingSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      category: "",
      contentUrl: "",
      imageUrl: "",
    },
  });
  function onSubmit(values: z.infer<typeof createThingSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    createThing.mutate(values, {
      onSuccess: () => {
        toast.success("Success!");
        form.reset();
        void queryClient.invalidateQueries({
          queryKey: [["stuffILike", "protectedGetAll"]],
        });
      },
    });
  }

  return (
    <div className="pr-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8 bg-background-tan p-6 pt-10"
        >
          <h1 className="text-3xl font-bold uppercase tracking-tighter">
            Thing I Like
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      placeholder="Tyler, The Creator"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtitle</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      placeholder="Rap // RnB"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      placeholder="Artist"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contentUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      placeholder="https://www.youtube.com/watch?v=TYLER"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={createThing.isLoading}
          >
            Add
          </Button>
        </form>
      </Form>
    </div>
  );
}

/**
const formFields = [
  {
    label: "Title",
    name: "title",
    type: "text",
    placeholder: "Tyler, The Creator",
  },
  {
    label: "Subtitle",
    name: "subtitle",
    type: "text",
    placeholder: "Rap // Hip-Hop // RnB",
  },
  {
    label: "Category",
    name: "category",
    type: "text",
    placeholder: "Artist",
  },
  {
    label: "Content URL",
    name: "contentUrl",
    type: "text",
    placeholder: "https://www.youtube.com/watch?v=TYLER",
  },
  {
    label: "Image URL",
    name: "imageUrl",
    type: "text",
    placeholder: "",
  },
] as const;
*/
