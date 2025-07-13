import type { INavLink } from "@/lib/navlinks"
import Link from "next/link"

export const NavLink = ({
    navlink,
    active
}: {
    navlink: INavLink,
    active: boolean
}) => {
    const { label, link, aria } = navlink;
    return (
        <Link href={link} aria-label={aria} className={`${active && 'text-custom-blue'} hover:text-custom-blue`}>
            {label}
        </Link>
    )
}