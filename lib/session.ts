import "server-only";

import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const secretKey = process.env.SESSION_SECRET;
const encodeKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: JWTPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(encodeKey);
}

export async function decrypt(session: string | undefined = "") {
    try {
        const { payload } = await jwtVerify(session, encodeKey, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch (error) {
        console.log("Failed to verify session, with error: ", error);
    }
}

const cookie = {
    name: "session",
    options: {
        httpOnly: true,
        secure: true,
        sameSite: "lax" as "lax" | "strict" | "none",
        path: "/",
    },
    duration: 24 * 60 * 60 * 1000,
};

export async function createSession(userId: string) {
    const expires = new Date(Date.now() + cookie.duration);
    const session = await encrypt({ userId, expires });
    const cookieStore = await cookies();

    cookieStore.set(cookie.name, session, { ...cookie.options, expires });
}

export async function verifySession() {
    const cookieVerify = (await cookies()).get(cookie.name)?.value;
    const session = await decrypt(cookieVerify);

    if (!session?.userId) {
        redirect("/login");
    }

    return { userId: session.userId };
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete("session");
}
