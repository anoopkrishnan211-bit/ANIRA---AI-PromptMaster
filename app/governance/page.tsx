import Link from "next/link";
import { AppShell } from "../../components/app-shell";
import { governanceChecks } from "../../lib/demo-data";

export default function GovernancePage() {
  return (
    <AppShell activePath="/governance">
      <section className="page-intro">
        <div>
          <div className="page-kicker">Governance</div>
          <h1>Risk checks for PII, policy, and prompt injection.</h1>
          <p>Governance gives teams a fast confidence layer before prompts are used in production or shared across the org.</p>
        </div>
        <Link href="/analyzer" className="cta-link">
          Open Analyzer
        </Link>
      </section>
      <section className="governance">
        <div className="governance-card">
          <div className="flag-list">
            {governanceChecks.map((check) => (
              <div className="flag" key={check.label}>
                <div>
                  <b>{check.label}</b>
                  <p>{check.detail}</p>
                </div>
                <span>{check.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="preview-phone">
          <div className="phone-inner">
            <div className="tiny">Enterprise readiness</div>
            <div className="phone-score">
              <strong>Ready</strong>
              <span className="chip chip-soft">SOC 2</span>
            </div>
            <div className="tiny">Prompt governance signals help teams keep AI work safe, traceable, and compliant.</div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
