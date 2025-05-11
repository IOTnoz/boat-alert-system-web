import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z.string().email({ message: "Masukkan email yang valid" }).trim(),
    password: z.string().min(8, { message: "Minimal 8 karakter" }).trim(),
});

export type FormState =
    | {
          errors?: {
              email?: string[];
              password?: string[];
          };
          message?: string;
      }
    | undefined;
