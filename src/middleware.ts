import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token");
    const home = new URL("/home", req.url);
    const login = new URL("/login", req.url);

    if (!token) {
        if (["/login", "/signup"].includes(req.nextUrl.pathname)) {
            return NextResponse.next();
        }

        return NextResponse.redirect(login);
    }

    if (token.value && ["/login", "/signup"].includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(home);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/login",
        "/signup",
        "/home",
    ],
};

