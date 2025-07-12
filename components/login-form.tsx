'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { type LoginSchema, loginSchema } from "@/lib/authValidators";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { LinkButton } from "./link-button";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
    const router = useRouter();

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const loginHandler = async (data: LoginSchema) => {
        console.log("Login data:", data);
        const result = await signIn("credentials", {
            ...data,
            redirect: false,
            callbackUrl: "/"
        });

        if (result?.error) {
            const message = result.error === "CredentialsSignin" ? "Invalid email or password." : result.error;
            toast.error(message);
        } else {
            toast.success("Login successful!");
            router.push(result?.url || "/");
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(loginHandler)}
                className="space-y-6 w-full max-w-xs mx-auto p-8 rounded-lg border-border-color border-[1px] mt-12"
            >
                <FormDescription className="text-center text-xl text-foreground-color font-medium mb-8">
                    Log into Insight<span className="font-bold">Edge</span>
                </FormDescription>
                <div className="space-y-4">
                    {/* email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="johndoe@example.com"
                                        type="email"
                                        className="selection:bg-app-blue selection:text-app-white"
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        )}
                    />

                    {/* password */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="********"
                                        type="password"
                                        className="selection:bg-app-blue selection:text-app-white"
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-custom-blue hover:bg-custom-blue/80 text-white font-semibold cursor-pointer disabled:bg-custom-blue/50 disabled:cursor-not-allowed"
                >
                    {
                        form.formState.isSubmitting ? 'Logging In...' : 'Log In'
                    }
                </Button>
                <LinkButton
                    label="Don't have an account? Register"
                    href="/register"
                />
            </form>
        </Form>
    )
}