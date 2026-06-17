import Link from "next/link";
import { AppShell } from "../../components/app-shell";
import { activityFeed, billingSummary, workspaceStats } from "../../lib/demo-data";

const chartBars = [42, 58, 64, 61, 73, 82, 79, 88];

export default function DashboardPage() {
  return (
    <AppShell activePath="/dashboard">
      <section className="page-intro">
        <div>
          <div className="page-kicker">Dashboard</div>
          <h1>Executive view of prompt quality, team activity, and subscription status.</h1>
          <p>
            This is the product’s “what’s happening now” surface, giving leaders a quick read on usage, governance, and
            adoption across the organization.
          </p>
        </div>
        <Link href="/analyzer" className="cta-link">
          Open Analyzer
        </Link>
      </section>

      <section className="metrics dashboard-stats">
        {workspaceStats.map((stat) => (
          <article className="metric" key={stat.label}>
            <h3>{stat.label}</h3>
            <strong>{stat.value}</strong>
            <p>{stat.detail}</p>
            <span className="trend">{stat.trend}</span>
          </article>
        ))}
      </section>

      <section className="dashboard-layout">
        <div className="dashboard-card">
          <div className="section-head">
            <div>
              <h2 className="section-title">Prompt quality trend</h2>
              <p className="section-subtitle">A compact chart-style view for leadership demos and product reviews.</p>
            </div>
          </div>
          <div className="bar-chart">
            {chartBars.map((value, index) => (
              <div className="chart-column" key={index}>
                <span style={{ height: `${value}%` }} />
                <label>W{index + 1}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="section-head">
            <div>
              <h2 className="section-title">Billing snapshot</h2>
              <p className="section-subtitle">A lightweight enterprise readiness panel for the demo.</p>
            </div>
          </div>
          <div className="billing-grid">
            <div>
              <span className="label">Plan</span>
              <strong>{billingSummary.plan}</strong>
            </div>
            <div>
              <span className="label">Seats</span>
              <strong>{billingSummary.seats}</strong>
            </div>
            <div>
              <span className="label">Next invoice</span>
              <strong>{billingSummary.nextInvoice}</strong>
            </div>
            <div>
              <span className="label">Renewal</span>
              <strong>{billingSummary.renewal}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-layout">
        <div className="dashboard-card">
          <div className="section-head">
            <div>
              <h2 className="section-title">Activity feed</h2>
              <p className="section-subtitle">Recent actions from teams across the workspace.</p>
            </div>
          </div>
          <div className="feed-list">
            {activityFeed.map((item) => (
              <div className="feed-row" key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                </div>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card dashboard-cta">
          <div className="section-head">
            <div>
              <h2 className="section-title">Enterprise rollout</h2>
              <p className="section-subtitle">
                The demo now includes a leadership dashboard, team activity, and billing context so it reads like a real SaaS product.
              </p>
            </div>
          </div>
          <Link href="/governance" className="cta-link">
            Review Governance
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
