import { NextResponse } from "next/server";

function clearCookie(res: NextResponse) {
  res.cookies.set("nh_staff", "", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export async function GET(req: Request) {
  const res = NextResponse.redirect(new URL("/", req.url));
  clearCookie(res);
  return res;
}

export async function POST() {
  const res = NextResponse.json({ ok: true });
  clearCookie(res);
  return res;
}
