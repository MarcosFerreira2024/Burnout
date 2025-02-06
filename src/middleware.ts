"use server"
import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./app/actions/user";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
    const home = new URL("/home", req.url);
    const login = new URL("/login", req.url);

    const user = await getUser();
    const token = (await cookies()).get("token")
    if (user instanceof Error || !token) {
        if (["/login", "/signup"].includes(req.nextUrl.pathname)) {
            return NextResponse.next();
        }

        return NextResponse.redirect(login);
    }

    if (user && user.status === true && ["/login", "/signup"].includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(home);
    }

    if (req.nextUrl.pathname.includes("/admin")) {
        if (!user || user.role !== "ADMIN") {
            return NextResponse.redirect(home);
        }
        NextResponse.next();
    }



    return NextResponse.next();
}

export const config = {
    matcher: [
        "/login",
        "/signup",
        "/admin/:path*",
        "/perfil",
        "/home",
    ],
};

