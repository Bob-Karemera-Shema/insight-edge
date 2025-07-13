import { LoginForm } from "@/components/login-form";
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
    return {
        title: 'Login'
    };
};

export default function Login() {
    return (
        <main>
            <LoginForm />
        </main>
    );
}