import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token");
    const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

    if (isAdminRoute && !token) {
        return NextResponse.redirect(
            new URL("/admin-login", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    /*
     * Matcher updates to run ONLY on admin routes,
     * while explicitly ignoring static files, images, and sitemaps.
     */
    matcher: [
        "/admin/:path*",
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml).*)"
    ]
};