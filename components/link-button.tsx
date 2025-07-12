import Link from "next/link";
import { Button } from "./ui/button";

interface LinkButtonProps {
    href: string;
    label: string
}

export const LinkButton = ({
    href,
    label
}: LinkButtonProps) => {
    return (
        <Button
            variant='link'
            className="font-normal w-full text-font-gray"
            size='sm'
            asChild
        >
            <Link href={href} aria-label={label}>
                {label}
            </Link>
        </Button>
    )
}