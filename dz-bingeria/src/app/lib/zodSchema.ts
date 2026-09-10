import z from "zod";

export const schema = z
  .object({
    rating: z
      .number()
      .min(1, "Ocjena mora biti najmanje 1")
      .max(10, "Ocjena može biti najviše 10"),
    last_episode: z.number().min(0, "Epizoda ne može biti negativna"),
    comment: z.string().min(20, "Komentar mora imati najmanje 20 znakova"),
    spoiler: z.boolean().default(false),
  })
  .refine(
    (data) => {
      if (data.spoiler) {
        return data.comment.length >= 50;
      }
      return true;
    },
    {
      message: "Komentar sa spoilerima mora imati najmanje 50 znakova",
      path: ["comment"],
    },
  );
