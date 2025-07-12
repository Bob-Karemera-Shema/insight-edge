// components/RevalidateButton.tsx
"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

export function RevalidateButton({ path }: { path: string }) {
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(async () => {
            const res = await fetch("/api/revalidate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ path }),
            });

            if (res.ok) {
                toast.success("Page revalidated. Refreshing...");
                setTimeout(() => {
                    // Reloads the current route without cache
                    window.location.reload();
                }, 2000); // wait 2s to ensure new static page is ready
            } else {
                toast.error("Failed to revalidate");
            }
        });
    };

    return (
        <Button
            size="lg"
            onClick={handleClick}
            disabled={isPending}
            className="cursor-pointer bg-custom-blue text-white hover:bg-custom-blue/80"
        >
            {isPending ? "Revalidating..." : "Revalidate Page"}
        </Button>
    );
}