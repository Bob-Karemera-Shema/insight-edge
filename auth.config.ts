import type { NextAuthConfig, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createClient } from "@supabase/supabase-js";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
            fullName: string;
        } & DefaultSession["user"];
    }

    interface User {
        id: string;
        email: string;
        fullName: string;
    }

    interface JWT {
        id: string;
        email: string;
        fullName: string;
    }
}

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const authConfig: NextAuthConfig = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    type: "email",
                    label: "Email"
                },
                password: {
                    type: "password",
                    label: "Password"
                }
            },
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }

                // Login via Supabase
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: credentials.email as string,
                    password: credentials.password as string
                });

                if (error || !data.session || !data.user) {
                    throw new Error(error?.message || "Invalid credentials");
                }

                return {
                    id: data.user.id,
                    email: data.user.email ?? "",
                    fullName: data.user.user_metadata.fullName ?? ""
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.fullName = user.fullName;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && token?.id) {
                session.user = {
                    ...session.user,
                    id: token.id as string,
                    email: token.email as string,
                    fullName: token.fullName as string
                }
            }
            return session;
        }
    }
}