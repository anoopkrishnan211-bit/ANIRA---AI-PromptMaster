"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "../../components/app-shell";
import { promptPresets, workflow } from "../../lib/demo-data";
import { readDemoState, writeDemoState } from "../../lib/storage";
import { scorePrompt } from "../../lib/score";

type Mode = "analyze" | "optimize" | "compare" | "govern";

export default function AnalyzerPage() {
  const [mode, setMode] = useState<Mode>("analyze");
  const [prompt, setPrompt] = useState<string>(promptPresets[0].prompt);
  const analysis = useMemo(() => scorePrompt(prompt), [prompt]);
  const activePreset = promptPresets.find((preset) => preset.prompt === prompt) ?? promptPresets[0];

  useEffect(() => {
    const saved = readDemoState();
    if (saved.lastPrompt) setPrompt(saved.lastPrompt);
    if (saved.lastMode) setMode(saved.lastMode as Mode);
  }, []);

  useEffect(() => {
    writeDemoState({ lastPrompt: prompt, lastMode: mode, lastCompare: [] });
  }, [mode, prompt]);

  return (
    <AppShell activePath="/analyzer">
      <section className="hero analyzer-hero">
        <div className="hero-copy">
          <div className="page-kicker">Analyzer</div>
          <h1>Live prompt health evaluation.</h1>
          <p>Scan a prompt, inspect the score breakdown, and move directly into optimization or governance review.</p>
          <div className="preset-row">
            {promptPresets.map((preset) => (
              <button key={preset.name} type="button" className={`preset ${activePreset.name === preset.name ? "preset-active" : ""}`} onClick={() => setPrompt(preset.prompt)}>
                {preset.name}
              </button>
            ))}
          </div>
        </div>
        <div className="editor">
          <div className="editor-header">
            <div>
              <div className="label">Prompt Analyzer</div>
              <strong>{mode === "optimize" ? "Optimization suggestions" : mode === "compare" ? "Prompt comparison" : mode === "govern" ? "Governance scan" : "Live prompt health evaluation"}</strong>
            </div>
            <span className="chip">Realtime</span>
          </div>
          <div className="mode-tabs">
            {workflow.map((item) => (
              <button key={item.key} type="button" className={`mode-tab ${mode === item.key ? "mode-tab-active" : ""}`} onClick={() => setMode(item.key as Mode)}>
                {item.title}
              </button>
            ))}
          </div>
          <div className="prompt">
            <p className="line">Prompt input</p>
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="prompt-input" aria-label="Prompt input" />
          </div>
          <div className="score-row">
            <div className="score-box">
              <span>Prompt Health Score</span>
              <strong>{analysis.overall}</strong>
              <span>{analysis.grade} grade</span>
            </div>
            <div className="score-box score-box-alt">
              <span>Color classification</span>
              <strong>{analysis.color}</strong>
              <span>{analysis.hasRisk ? "Governance review recommended" : "Optimization-ready"}</span>
            </div>
          </div>
          <div className="breakdown">
            {[
              ["Clarity", analysis.clarity],
              ["Context", analysis.context],
              ["Role", analysis.role],
              ["Structure", analysis.structure],
              ["Constraints", analysis.constraints],
              ["Optimization", analysis.optimization]
            ].map(([label, value]) => (
              <div className="breakdown-row" key={label as string}>
                <span>{label}</span>
                <div className="bar">
                  <span style={{ width: `${value}%` }} />
                </div>
                <b>{value as number}</b>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="band">
        <div>
          <h2 className="section-title" style={{ marginBottom: 6 }}>
            Compare, optimize, and govern from the same working surface.
          </h2>
          <p>Switch modes without leaving the analyzer so the demo feels like a real product flow instead of a static landing page.</p>
        </div>
        <div className="band-actions">
          <Link href="/compare" className="cta-link">
            Open Compare
          </Link>
          <Link href="/templates" className="btn-secondary">
            Browse Templates
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
