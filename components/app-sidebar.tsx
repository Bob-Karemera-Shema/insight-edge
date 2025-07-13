'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FaSignOutAlt } from "react-icons/fa";
import { navlinks } from "@/lib/navlinks";
import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { signOut, useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";

export const AppSidebar = () => {
    const { data: session } = useSession();
    const pathname = usePathname();

    const handleLogOut = () => {
        signOut();
        // Redirect to the home page if on the dashboard
        if (pathname === '/dashboard') redirect('/');
    }

    return (
        <Sidebar>
            <SidebarHeader>
                <Link href="/" className="flex items-center space-x-2 pl-2 mt-4" aria-label="Home page">
                    <Logo />
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navlinks.map((navlink) => {
                                const { label, link, aria } = navlink
                                return (
                                    <SidebarMenuItem key={label + link}>
                                        <SidebarMenuButton className={`${pathname === link && 'bg-custom-blue'} hover:bg-custom-blue cursor-pointer`}>
                                            <Link href={link} aria-label={aria}>
                                                {label}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className="flex flex-col gap-4 mb-8">
                    {
                        session?.user ? (
                            <>
                                {
                                    session.user.fullName && (
                                        <div className="text-center">
                                            Welcome, <span>{session?.user.fullName}</span>
                                        </div>
                                    )
                                }
                                <Button
                                    size="lg"
                                    onClick={handleLogOut}
                                    className="flex items-center gap-2 cursor-pointer text-white bg-red-600 hover:bg-red-600/80"
                                >
                                    <FaSignOutAlt />
                                    Log Out
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="cursor-pointer"
                                >
                                    Login
                                </Button>
                                <Button
                                    size="lg"
                                    className="cursor-pointer bg-custom-blue text-white hover:bg-custom-blue/80"
                                >
                                    Register
                                </Button>
                            </>
                        )
                    }
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}