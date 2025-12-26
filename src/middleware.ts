import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect everything under your internal app routes
  const protectedPaths = [
    "/dashboard",
    "/tasks",
    "/schedule",
    "/maintenance",
    "/residents",
    "/leads",
    "/visitors",
    "/announcements",
    "/compliance",
    "/settings",
  ];

  const isProtected = protectedPaths.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  if (!isProtected) return NextResponse.next();

  const authed = req.cookies.get("nh_staff")?.value === "1";
  if (authed) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}
