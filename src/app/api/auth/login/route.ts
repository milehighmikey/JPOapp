import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { pass } = (await req.json().catch(() => ({}))) as { pass?: string };

  if (!pass) {
    return NextResponse.json({ error: "Missing passcode" }, { status: 400 });
  }

  if (pass !== process.env.STAFF_PASS) {
    return NextResponse.json({ error: "Incorrect passcode" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  // Simple cookie gate
  res.cookies.set("nh_staff", "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    // secure: true, // enable in production over HTTPS
  });

  return res;
}
