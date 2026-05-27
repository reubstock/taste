import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "How TASTE is built — a small senior bench of nine, an agent stack of forty-seven, and zero hours billed.",
};

const bench = [
  { name: "Founder, Strategy", role: "16y · ex-network strategy lead" },
  { name: "Founder, Creative", role: "14y · ex-independent ECD" },
  { name: "Partner, Brand", role: "12y · ex-design studio principal" },
  { name: "Partner, Production", role: "13y · ex-content studio EP" },
  { name: "Partner, Growth", role: "11y · ex-platform growth lead" },
  { name: "Director, Culture", role: "9y · ex-publishing editor" },
  { name: "Director, Engineering", role: "12y · ex-creative tech lead" },
  { name: "Director, Operations", role: "10y · ex-agency COO" },
  { name: "Resident Designer", role: "8y · ex-editorial design" },
];

const stack = [
  {
    n: "01 → 07",
    h: "Intake & briefs",
    p: "Agents that scope, structure, and pressure-test every incoming brief against the outcome it's promising.",
  },
  {
    n: "08 → 14",
    h: "Insight & culture",
    p: "Daily cultural radar across platforms, creators, and search — surfaced to the bench every morning by 6am.",
  },
  {
    n: "15 → 24",
    h: "Production",
    p: "Generative cuts of film, type, layout, copy and code. Hundreds of permutations overnight, every night.",
  },
  {
    n: "25 → 31",
    h: "Versioning",
    p: "Auto-localized, auto-resized, auto-relabelled for every platform, language, and format you ship into.",
  },
  {
    n: "32 → 38",
    h: "Governance",
    p: "Brand-safety, tone, trademark and legal sweeps before anything ships. Plays nicely with your legal team.",
  },
  {
    n: "39 → 47",
    h: "Measurement",
    p: "Live dashboards wired to your stack, tied to one number per workstream. CFO-readable.",
  },
];

export default function StudioPage() {
  return (
    <>
      <header className="page-head">
        <span className="label" style={{ alignSelf: "start" }}>
          The studio
        </span>
        <h1>
          Small <em>bench</em>.<br />
          Big <em>swing</em>.
        </h1>
        <p className="deck">
          How the agency would be <em>staffed</em> and stacked: nine senior
          humans, forty-seven agents, and a stubborn refusal to bill by the
          hour.
        </p>
        <div className="page-meta">
          <span>Spec · 2026</span>
          <span>NY · CDMX · Remote</span>
          <span>Concept</span>
        </div>
      </header>

      <section className="built" style={{ borderTop: "1px solid var(--rule)" }}>
        <span className="label">The math</span>
        <h2>
          A new <em>unit</em> of agency.
        </h2>
        <div className="built-stats">
          <div>
            <div className="n">9</div>
            <div className="k">Senior humans on the bench</div>
          </div>
          <div>
            <div className="n">47</div>
            <div className="k">Agents in the stack</div>
          </div>
          <div>
            <div className="n">
              <em>0</em>
            </div>
            <div className="k">Hours billed, ever</div>
          </div>
        </div>
      </section>

      <section className="bench">
        <div>
          <span className="label">The bench (as spec&apos;d)</span>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: 20,
              lineHeight: 1.5,
              color: "var(--ink-2)",
              marginTop: 18,
              maxWidth: 280,
            }}
          >
            Nine roles, staffed for taste over headcount. Every seat held by a senior with a decade-plus in it — typically a creative director, partner, or above somewhere else.
          </p>
        </div>
        <div className="bench-list">
          {bench.map((b) => (
            <Reveal key={b.name} className="bench-row">
              <h4>{b.name}</h4>
              <p>{b.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="stack">
        <div>
          <span className="label">The stack</span>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: 20,
              lineHeight: 1.5,
              color: "var(--ink-2)",
              marginTop: 18,
              maxWidth: 280,
            }}
          >
            Forty-seven agents, organized by where they sit in the agency&apos;s nervous system. Each one is owned by a human on the bench.
          </p>
        </div>
        <div className="stack-grid">
          {stack.map((s) => (
            <Reveal key={s.n} className="stack-row">
              <div className="agent">{s.n}</div>
              <div>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
