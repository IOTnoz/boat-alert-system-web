"use server";

import { addShip } from "@/firebase/ship";
import { z } from "zod";

type ShipFormState =
    | {
          errors?: {
              code?: string[];
              name?: string[];
          };
          message?: string;
      }
    | undefined;

const ShipFormSchema = z.object({
    code: z.string().trim(),
    name: z.string().trim(),
});

export async function createShip(state: ShipFormState, formData: FormData) {
    const validatedFields = ShipFormSchema.safeParse({
        code: formData.get("code"),
        name: formData.get("name"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { code, name } = validatedFields.data;
    console.log(code, name);

    addShip(code, name);
}
