import { RegisterForm } from "@/components/register-form";
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
    return {
        title: 'Register'
    };
};

export default function Register() {
    return (
        <main>
            <RegisterForm />
        </main>
    );
}