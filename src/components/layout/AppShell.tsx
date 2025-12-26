"use client";

import Link from "next/link";
import Topbar from "./Topbar";

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/tasks", label: "Tasks" },
  { href: "/schedule", label: "Schedule" },
  { href: "/maintenance", label: "Maintenance" },
  { href: "/residents", label: "Residents" },
  { href: "/leads", label: "Leads" },
  { href: "/visitors", label: "Visitors" },
  { href: "/announcements", label: "Announcements" },
  { href: "/compliance", label: "Compliance" },
  { href: "/settings", label: "Settings" },
];

export default function AppShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Topbar/>
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3">
            <div className="rounded-xl bg-white p-4 shadow">
              <div className="mb-3">
                <div className="text-sm font-semibold">Nursing Home Ops</div>
                <div className="text-xs text-neutral-500">Staff dashboard</div>
              </div>

              <nav className="space-y-1">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main */}
          <main className="col-span-12 md:col-span-9">
            <div className="rounded-xl bg-white p-6 shadow">
              <header className="mb-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">{title}</h1>

          <div className="flex items-center gap-3">
          <a href="/" className="text-sm text-neutral-600 hover:underline">
            Public site
          </a>

          <button
            className="text-sm rounded-lg border border-neutral-200 px-3 py-1.5 hover:bg-neutral-50"
            onClick={async () => {
              await fetch("/api/auth/logout", { method: "POST" });
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </div>
      </header>


              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
