import { z } from "zod";

  export const searchSchema = z.object({
    title: z
      .string()
      .nonempty({ message: "search must be non empty" })
      .refine((value) => !/^\s*$/.test(value), {
        message: "invalid search submission",
      }),
  });