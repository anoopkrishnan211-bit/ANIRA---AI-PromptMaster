import Link from "next/link";
import { AppShell } from "../../components/app-shell";
import { workspaceMembers, workspacePolicies } from "../../lib/demo-data";

export default function WorkspacePage() {
  return (
    <AppShell activePath="/workspace">
      <section className="page-intro">
        <div>
          <div className="page-kicker">Workspace</div>
          <h1>Team access, roles, and prompt policy management.</h1>
          <p>
            This admin surface gives the demo a believable enterprise layer for user management and workspace governance.
          </p>
        </div>
        <Link href="/dashboard" className="cta-link">
          Open Dashboard
        </Link>
      </section>

      <section className="dashboard-layout">
        <div className="dashboard-card">
          <div className="section-head">
            <div>
              <h2 className="section-title">Team members</h2>
              <p className="section-subtitle">Who has access, and what they can do in the workspace.</p>
            </div>
          </div>
          <div className="member-list">
            {workspaceMembers.map((member) => (
              <div className="member-row" key={member.name}>
                <div>
                  <strong>{member.name}</strong>
                  <p>{member.role}</p>
                </div>
                <span>{member.access}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="section-head">
            <div>
              <h2 className="section-title">Policy controls</h2>
              <p className="section-subtitle">High-level settings that keep the workspace governed and auditable.</p>
            </div>
          </div>
          <div className="policy-list">
            {workspacePolicies.map((policy) => (
              <div className="policy-row" key={policy}>
                <span>{policy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
