'use client';

import Link from "next/link";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { navlinks } from "@/lib/navlinks";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { redirect, usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

export const Navbar = () => {
    const { data: session } = useSession();
    const pathname = usePathname();

    const handleLogOut = () => {
        signOut();
        // Redirect to the home page if on the dashboard
        if (pathname === '/dashboard') redirect('/');
    }

    return (
        <nav className="flex items-center justify-between gap-8 py-6 px-4 lg:px-0 max-w-5xl mx-auto">
            <Link href='/' aria-label="Home page">
                <Logo />
            </Link>
            <div className="hidden md:flex items-center space-x-12 lg:space-x-20">
                <ul className="flex space-x-8">
                    {
                        navlinks.map(navlink => {
                            const { label, link, aria } = navlink;
                            return (
                                <Link key={label + link} href={link} aria-label={aria}>
                                    {label}
                                </Link>
                            );
                        })
                    }
                </ul>
                <div className="flex items-center space-x-8">
                    <ThemeToggle />
                    {
                        session?.user.fullName && (
                            <div>
                                Welcome, <span>{session?.user.fullName}</span>
                            </div>
                        )
                    }
                    <div className="space-x-2">
                        {
                            session?.user ? (
                                <Button
                                    size="lg"
                                    onClick={handleLogOut}
                                    className="flex items-center gap-2 cursor-pointer text-white bg-red-600 hover:bg-red-600/80"
                                >
                                    <FaSignOutAlt />
                                    Log Out
                                </Button>
                            ) : (
                                <>
                                    <Link href='/login' aria-label="Login page">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="cursor-pointer"
                                        >
                                            Login
                                        </Button>
                                    </Link>
                                    <Link href='register' aria-label="Register page">
                                        <Button
                                            size="lg"
                                            className="cursor-pointer bg-custom-blue text-white hover:bg-custom-blue/80"
                                        >
                                            Register
                                        </Button>
                                    </Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
            <SidebarTrigger className="block md:hidden cursor-pointer" />
        </nav>
    )
};