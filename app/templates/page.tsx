import Link from "next/link";
import { AppShell } from "../../components/app-shell";
import { templateCategories } from "../../lib/demo-data";

export default function TemplatesPage() {
  return (
    <AppShell activePath="/templates">
      <section className="page-intro">
        <div>
          <div className="page-kicker">Template library</div>
          <h1>Reusable prompt patterns for every team.</h1>
          <p>Pre-built prompt templates help teams start with proven structure instead of reinventing each prompt from scratch.</p>
        </div>
        <Link href="/analyzer" className="cta-link">
          Open Analyzer
        </Link>
      </section>
      <section className="category-grid">
        {templateCategories.map((category) => (
          <article className="metric template-card" key={category.title}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <strong>12 templates</strong>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
