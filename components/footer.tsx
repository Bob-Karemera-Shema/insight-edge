import Link from "next/link";
import { Logo } from "./logo";

export const Footer = () => {
    return (
        <footer className="bg-container-gray mt-20">
            <div className="max-w-5xl mx-auto space-y-12 pt-12 px-4 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4">
                    <div className="max-w-sm">
                        <h4 className="font-semibold text-lg mb-4">About</h4>
                        <p className="text-font-gray mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className="space-y-2">
                            <p>
                                <span className="font-semibold">Email: </span>info@insightedge.com
                            </p>
                            <p>
                                <span className="font-semibold">Phone: </span>880 123 456 789
                            </p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-semibold text-lg">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href='/' aria-label="Home page" className="text-font-dark-gray hover:text-foreground-color">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href='/about' aria-label="About page" className="text-font-dark-gray hover:text-foreground-color">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href='/dashboard' aria-label="Dashboard page" className="text-font-dark-gray hover:text-foreground-color">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-8 border-t-[#DCDDDF] dark:border-t-border-color border-t-2 flex flex-col items-center gap-4 md:items-start md:flex-row md:justify-between">
                    <Logo />
                    <div className="flex flex-col gap-4 md:flex-row text-font-dark-gray">
                        <Link href='#' className="hover:text-foreground-color">
                            Terms of Use
                        </Link>
                        <Link href='#' className="hover:text-foreground-color md:pl-4 md:border-l-[#DCDDDF] md:dark:border-l-border-color md:border-l-[1px]">
                            Privacy Policy
                        </Link>
                        <Link href='#' className="hover:text-foreground-color md:pl-4 md:border-l-[#DCDDDF] md:dark:border-l-border-color md:border-l-[1px]">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}