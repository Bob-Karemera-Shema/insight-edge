'use client';

import { type RegisterSchema, registerSchema } from './authValidators'
import { createBrowserClient } from '@supabase/ssr';

const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function register(data: RegisterSchema) {
    const validatedData = registerSchema.safeParse(data);

    if (!validatedData.success) return { error: "Invalid form fields!" };

    const { fullName, email, password } = validatedData.data;

    const { data: signUpData, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                fullName
            }
        }
    });

    if (error || !signUpData.user) {
        return { error: `Failed to register: ${error?.message}` };
    }

    return { success: true, redirectTo: '/login' };
}