import Link from "next/link";
import { AppShell } from "../components/app-shell";
import { recentAnalyses, workflow } from "../lib/demo-data";

export default function Home() {
  return (
    <AppShell activePath="/">
      <section className="hero home-hero" id="overview">
        <div className="hero-copy">
          <h1>Prompt quality management for serious AI teams.</h1>
          <p>
            PromptMaster AI measures, optimizes, compares, and governs prompts so organizations can produce more reliable AI
            outputs, reduce risk, and build a repeatable standard for prompt excellence.
          </p>
          <div className="hero-actions">
            <Link href="/analyzer" className="cta-link">
              Open Analyzer
            </Link>
            <Link href="/governance" className="btn-secondary">
              View Governance
            </Link>
          </div>
        </div>
        <div className="overview-panel">
          <div className="panel-header">
            <div>
              <div className="label">Platform status</div>
              <strong>Demo-ready multi-surface workspace</strong>
            </div>
            <span className="chip">Live</span>
          </div>
          <div className="overview-grid">
            {workflow.map((step) => {
              const href = step.key === "govern" ? "/governance" : step.key === "compare" ? "/compare" : "/analyzer";
              return (
                <Link key={step.key} href={href} className="overview-card">
                  <strong>{step.title}</strong>
                  <span>{step.copy}</span>
                </Link>
              );
            })}
          </div>
          <div className="recent-preview">
            <div className="section-head">
              <div>
                <h2 className="section-title">Recent analyses</h2>
                <p className="section-subtitle">A live demo of model usage and quality signals.</p>
              </div>
            </div>
            <div className="inline-list">
              {recentAnalyses.slice(0, 3).map((item) => (
                <div className="inline-row" key={item.name}>
                  <span>{item.name}</span>
                  <b>{item.score}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
