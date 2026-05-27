import Link from "next/link";

export function Nav() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold text-zinc-900">
          Quoting Tool
        </Link>
        <nav className="flex items-center gap-4 text-sm text-zinc-700">
          <Link href="/catalog" className="hover:text-zinc-900 hover:underline">
            Catalog
          </Link>
          <Link href="/quotes/new" className="hover:text-zinc-900 hover:underline">
            New quote
          </Link>
        </nav>
      </div>
    </header>
  );
}

