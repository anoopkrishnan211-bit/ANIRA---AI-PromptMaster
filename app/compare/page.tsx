"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "../../components/app-shell";
import { comparePrompts } from "../../lib/demo-data";
import { readDemoState, writeDemoState } from "../../lib/storage";
import { scorePrompt } from "../../lib/score";

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const saved = readDemoState();
    if (saved.lastCompare.length) {
      setSelected(saved.lastCompare);
    } else {
      setSelected([comparePrompts[0].id, comparePrompts[1].id]);
    }
  }, []);

  useEffect(() => {
    if (selected.length) {
      writeDemoState({ ...readDemoState(), lastCompare: selected });
    }
  }, [selected]);

  const selectedPrompts = useMemo(
    () => comparePrompts.filter((prompt) => selected.includes(prompt.id)),
    [selected]
  );

  const ranked = useMemo(
    () =>
      selectedPrompts
        .map((item) => ({ ...item, score: scorePrompt(item.prompt) }))
        .sort((a, b) => b.score.overall - a.score.overall),
    [selectedPrompts]
  );

  return (
    <AppShell activePath="/analyzer">
      <section className="page-intro">
        <div>
          <div className="page-kicker">Compare</div>
          <h1>Side-by-side prompt ranking.</h1>
          <p>Pick multiple prompts, compare their scores, and surface the strongest version for the task.</p>
        </div>
        <Link href="/analyzer" className="cta-link">
          Back to Analyzer
        </Link>
      </section>

      <section className="compare-layout">
        <div className="compare-picker">
          {comparePrompts.map((item) => {
            const active = selected.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                className={`compare-picker-card ${active ? "compare-picker-active" : ""}`}
                onClick={() => {
                  setSelected((current) =>
                    current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id]
                  );
                }}
              >
                <strong>{item.label}</strong>
                <span>{item.prompt}</span>
              </button>
            );
          })}
        </div>

        <div className="compare-results">
          {ranked.map((item, index) => (
            <article className="compare-result" key={item.id}>
              <div className="compare-result-head">
                <div>
                  <div className="label">Rank {index + 1}</div>
                  <h2>{item.label}</h2>
                </div>
                <strong>{item.score.overall}</strong>
              </div>
              <p>{item.prompt}</p>
              <div className="compare-meta">
                <span>{item.score.grade}</span>
                <span>{item.score.color}</span>
                <span>{item.score.hasRisk ? "Governance review" : "Optimization-ready"}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
