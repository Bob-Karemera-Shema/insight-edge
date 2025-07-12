import * as z from "zod/v4";

export const registerSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters long")
        .max(50, "Full name must be at most 50 characters long"),
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long")
        .regex(/[0-9]/, "Password must include at least one number")
        .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must include at least one special character")
        .regex(/[A-Z]/, "Password must include at least one uppercase letter")
        .regex(/[a-z]/, "Password must include at least one lowercase letter"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
});

export const loginSchema = z.object({
    email: z.string().nonempty("Email is required").pipe(z.email({ message: "Invalid email address" })),
    password: z.string().min(1, "Password is required")
});

export const createUserSchema = z.object({
    id: z.string().min(8, "Invalid user id"),
    email: z.email(),
    fullName: z.string().min(2, 'Full name must be at least 2 characters')
});

// Schema types
export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;