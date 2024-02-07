import { z } from "zod";

export enum Role {
  "Admin" = "isAdmin",
}

export const createThingSchema = z.object({
  title: z.string().min(1).max(255),
  subtitle: z.string().min(1).max(255),
  category: z.string().min(1).max(255),
  contentUrl: z.string().min(1).url().max(255),
  imageUrl: z.union([z.string().url().max(255).nullish(), z.literal("")]),
});
