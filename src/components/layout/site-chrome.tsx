import Link from "next/link";

function VwMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden
      focusable="false"
    >
      <circle cx="32" cy="32" r="31" fill="#001e50" />
      <circle cx="32" cy="32" r="26" fill="none" stroke="#fff" strokeWidth="2.2" />
      <circle cx="32" cy="32" r="20.5" fill="none" stroke="#fff" strokeWidth="1.4" />
      <path
        fill="#fff"
        d="M12.8 20.2h8.6l4.3 16.4 6.3-16.4h4l6.3 16.4 4.3-16.4h8.6L45.2 43.8H37.8L32 27.4 26.2 43.8h-7.4L12.8 20.2z"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="page-container flex h-14 items-center justify-between md:h-[72px]">
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Volkswagen">
            <VwMark />
            <span className="sr-only">Volkswagen</span>
          </Link>
          <nav className="hidden items-center gap-6 text-[15px] text-[var(--text-primary)] md:flex">
            <Link
              href="/"
              className="border-b-2 border-[var(--text-primary)] pb-0.5 font-semibold"
              aria-current="page"
            >
              Menú
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full p-2 text-[var(--text-secondary)] hover:bg-[var(--hover-surface)]"
            aria-label="Buscar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <Link
            href="/admin/login"
            className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="page-container space-y-2 py-10 text-sm text-[var(--text-secondary)]">
        <p className="font-semibold text-[var(--text-primary)]">Volkswagen</p>
        <p>
          Catálogo de modelos · Mercado Argentina. Proyecto demo educativo (no es el
          sitio oficial de Volkswagen Argentina S.A.).
        </p>
      </div>
    </footer>
  );
}

export function PageContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`page-container ${className}`}>{children}</div>;
}
