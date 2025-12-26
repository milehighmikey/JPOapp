import Link from "next/link";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-3">
      <span className="text-sm text-neutral-500">Staff dashboard</span>

      <a
        href="/api/auth/logout"
        className="text-sm rounded-lg border border-neutral-200 px-3 py-1.5 hover:bg-neutral-50"
      >
        Logout
      </a>
    </header>
  );
}
