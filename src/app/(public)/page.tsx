export default function PublicHome() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50">
      
      <div className="w-full max-w-xl rounded-xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <p className="text-neutral-600">
          This is the public site. (No medical info collected.)
        </p>

        

        <div className="mt-6 flex gap-3">
          <a
            className="rounded-lg bg-neutral-900 px-4 py-2 text-white"
            href="/schedule-a-tour"
          >
            Schedule a Tour
          </a>
          <a
            className="rounded-lg border border-neutral-200 px-4 py-2"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </div>
    </main>
  );
}
