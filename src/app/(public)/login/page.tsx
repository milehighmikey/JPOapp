"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/dashboard";

  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pass }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setErr(data?.error ?? "Login failed");
      return;
    }

    window.location.href = nextPath;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow">
        <h1 className="text-2xl font-bold">Staff Login</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Enter the staff passcode to access the dashboard.
        </p>

        <form className="mt-6 space-y-3" onSubmit={onSubmit}>
          <label className="block text-sm font-medium">
            Passcode
            <input
              className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="••••••••"
              required
            />
          </label>

          {err && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {err}
            </div>
          )}

          <button
            className="w-full rounded-lg bg-neutral-900 px-4 py-2 text-white disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-4 text-xs text-neutral-500">
          (This is a simple gate, not HIPAA auth.)
        </p>
      </div>
    </main>
  );
}
