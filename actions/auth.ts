"use server";
import { FormState, LoginFormSchema } from "@/lib/definitions";
import { auth } from "@/lib/firebase";
import { createSession } from "@/lib/session";
import { signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";

export async function login(state: FormState, formData: FormData) {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { email, password } = validatedFields.data;

    signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;

            console.log("Cek user");
            if (user) {
                await createSession(user.uid);
                console.log("Redirect to dashboard");
                redirect("/dashboard");
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}
