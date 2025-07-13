import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    const { pathname } = req.nextUrl;

    console.log("Request Headers:", Object.fromEntries(req.headers.entries()));

    // Add a custom response header
    const response = NextResponse.next();
    response.headers.set("x-powered-by", "InsightEdge");

    if (pathname.startsWith("/dashboard")) {
        const isLoggedIn = !!req.auth;

        if (!isLoggedIn) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    return response;
})

export const config = {
    matcher: ["/dashboard/:path*"],
};