"use server";

import { FormState } from "@/lib/definitions";
import { database } from "@/lib/firebase";
import { ShipSchema } from "@/types/ship";
import { ref, set } from "firebase/database";

export async function createShip(state: FormState, formData: FormData) {
    const code = formData.get("code");
    const name = formData.get("name");
    const status = "Aktif";
    const createdAt = "12 mei 2025";

    const validatedFields = ShipSchema.safeParse({
        code,
        name,
        status,
        createdAt,
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    await set(ref(database, "ships/" + code), validatedFields.data);
}
