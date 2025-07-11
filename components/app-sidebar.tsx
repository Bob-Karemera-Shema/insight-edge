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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaSignOutAlt } from "react-icons/fa";
import { navlinks } from "@/lib/navlinks";
import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export const AppSidebar = async () => {
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
                                        <SidebarMenuButton className="hover:bg-custom-blue cursor-pointer">
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
                <div className="flex flex-col space-y-2 mb-8">
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
                </div>
                <form className="flex flex-col gap-4 items-center mb-8">
                    <Link href="#" className="flex items-center gap-2">
                        <div className="bg-light-container p-2 rounded-full">
                            <Avatar>
                                <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        Jack Bauer
                    </Link>
                    <Button
                        size="lg"
                        className="flex items-center gap-2 cursor-pointer text-white bg-red-600 hover:bg-red-600/80"
                    >
                        <FaSignOutAlt />
                        Sign Out
                    </Button>
                </form>
            </SidebarFooter>
        </Sidebar>
    )
}