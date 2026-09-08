import z from "zod";

export const shema = z
  .object({
    firstName: z.string().min(1, "Unesite ime."),
    email: z.email("Neispravan e-mail."),
    password: z.string().min(8, "Minimalni broj znakova: 8."),
    confirmedPassword: z.string().min(8, "Minimalni broj znakova: 8."),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: "Lozinke se ne podudarajau.",
  });
