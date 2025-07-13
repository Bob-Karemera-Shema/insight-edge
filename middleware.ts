import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    const { pathname } = req.nextUrl;
    const isLoggedIn = !!req.auth;

    console.log("Request Headers:", Object.fromEntries(req.headers.entries()));

    // Add a custom response header
    const response = NextResponse.next();
    response.headers.set("x-powered-by", "InsightEdge");

    if(['/login', '/register'].includes(pathname) && isLoggedIn) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    if (pathname.startsWith("/dashboard")) {
        if (!isLoggedIn) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    return response;
})

export const config = {
    matcher: ["/dashboard/:path*", "/login", "/register"],
};