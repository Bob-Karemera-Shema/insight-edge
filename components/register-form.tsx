'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { type RegisterSchema, registerSchema } from "@/lib/authValidators";
import { register } from "@/lib/register";

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
import { LinkButton } from "./link-button";
import { toast } from "sonner";

export const RegisterForm = () => {
    const router = useRouter();

    const form = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        mode: "onChange"
    });

    const registerHandler = async (data: RegisterSchema) => {
        const result = await register(data);

        if (result?.error) {
            toast.error(result.error || 'Signup failed.');
            return;
        }

        toast.success("Registered successfully! Redirecting...");
        if (result.redirectTo) {
            router.push(result.redirectTo);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(registerHandler)}
                className="space-y-6 w-full max-w-xs mx-auto bg-container p-8 rounded-lg border-border-color border-[1px] mt-12"
            >
                <FormDescription className="text-center text-xl text-foreground-color font-medium mb-8">
                    Create Your Account
                </FormDescription>
                <div className="space-y-4">
                    {/* Full name */}
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="John Doe"
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        )}
                    />

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
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        )}
                    />

                    {/* password */}
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confrim Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="********"
                                        type="password"
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
                        form.formState.isSubmitting ? 'Registering...' : 'Register'
                    }
                </Button>
                <LinkButton
                    label="Already have an account? Log In"
                    href="/login"
                />
            </form>
        </Form>
    )
}