import Link from "next/link";
import { AppShell } from "../../components/app-shell";
import { historyEntries } from "../../lib/demo-data";

export default function HistoryPage() {
  return (
    <AppShell activePath="/history">
      <section className="page-intro">
        <div>
          <div className="page-kicker">Prompt history</div>
          <h1>Track prompt evolution across versions.</h1>
          <p>Version history makes it easy to see how a prompt improved and which changes produced better quality scores.</p>
        </div>
        <Link href="/analyzer" className="cta-link">
          Analyze New Prompt
        </Link>
      </section>
      <section className="timeline">
        {historyEntries.map((entry) => (
          <article className="timeline-row" key={entry.version}>
            <div>
              <span className="label">{entry.version}</span>
              <h2>{entry.title}</h2>
            </div>
            <strong>{entry.score}</strong>
            <p>{entry.note}</p>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
