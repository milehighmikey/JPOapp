import AppShell from "@/components/layout/AppShell";

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard">
      <p className="text-sm text-neutral-600">
        Quick overview: tasks due, today’s schedule, and open maintenance.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-neutral-200 p-4">
          <div className="text-xs text-neutral-500">Tasks Due</div>
          <div className="text-2xl font-bold">3</div>
        </div>
        <div className="rounded-lg border border-neutral-200 p-4">
          <div className="text-xs text-neutral-500">Today Shifts</div>
          <div className="text-2xl font-bold">2</div>
        </div>
        <div className="rounded-lg border border-neutral-200 p-4">
          <div className="text-xs text-neutral-500">Open Tickets</div>
          <div className="text-2xl font-bold">1</div>
        </div>
      </div>
    </AppShell>
  );
}
