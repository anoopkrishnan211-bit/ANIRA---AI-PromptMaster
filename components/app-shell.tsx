import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  { href: "/", label: "Overview" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/analyzer", label: "Analyzer" },
  { href: "/compare", label: "Compare" },
  { href: "/templates", label: "Templates" },
  { href: "/history", label: "History" },
  { href: "/workspace", label: "Workspace" },
  { href: "/governance", label: "Governance" }
] as const;

export function AppShell({ children, activePath = "/" }: { children: ReactNode; activePath?: string }) {
  return (
    <main className="shell">
      <div className="container">
        <header className="topbar">
          <div className="brand brand-mark">
            <span className="brand-icon">⌘</span>
            <span>PromptMaster AI</span>
          </div>
          <nav className="nav" aria-label="Primary">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={activePath === item.href ? "nav-active" : ""}>
                {item.label}
              </Link>
            ))}
          </nav>
          <button className="cta">Start Analyzing</button>
        </header>
        {children}
      </div>
    </main>
  );
}
