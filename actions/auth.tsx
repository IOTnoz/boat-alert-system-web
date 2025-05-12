"use server";
import { FormState, LoginFormSchema } from "@/lib/definitions";
import { app } from "@/lib/firebase";
import { createSession } from "@/lib/session";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

    const auth = getAuth(app);

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
