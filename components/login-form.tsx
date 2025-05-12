"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { login } from "@/actions/auth";

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [state, action, pending] = useActionState(login, undefined);

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Masukkan email dan password yang valid
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form action={action}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="email@example.com"
                                    required
                                />
                                {state?.errors?.email && (
                                    <p>{state.errors.email}</p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                />
                                {state?.errors?.password && (
                                    <p>{state.errors.password}</p>
                                )}
                            </div>
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={pending}
                            >
                                {pending ? "Memproses" : "Login"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
