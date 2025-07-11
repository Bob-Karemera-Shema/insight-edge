import Link from "next/link";
import { Logo } from "./logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "./theme-toggle";
import { navlinks } from "@/lib/navlinks";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";

export const Navbar = () => {
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
                    <div>
                        <Avatar>
                            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="space-x-2">
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
                </div>
            </div>
            <SidebarTrigger className="block md:hidden cursor-pointer" />
        </nav>
    )
};