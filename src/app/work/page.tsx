import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { cases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from TASTE — launches, repositions, and culture moments shipped fast.",
};

export default function WorkIndex() {
  return (
    <>
      <header className="page-head">
        <span className="label" style={{ alignSelf: "start" }}>
          Work / 2026
        </span>
        <h1>
          Shipped <em>fast</em>.<br />
          Landed <em>harder</em>.
        </h1>
        <p className="deck">
          Every piece on this page started as a brief and shipped to a deadline.
          The number under each one is the business outcome — <em>not</em> the
          reach.
        </p>
        <div className="page-meta">
          <span>4 selected</span>
          <span>of 23 live</span>
          <span>2026 ytd</span>
        </div>
      </header>

      <section style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="work-grid">
          {cases.map((c) => (
            <Reveal key={c.slug} as="article" className={`case ${c.size}`}>
              <Link
                href={`/work/${c.slug}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div className="case-meta">
                  <span>{c.client}</span>
                  <span>{c.kind}</span>
                </div>
                <div className="case-art">{c.art as string}</div>
                <div className="case-stats">
                  {c.outcomes.slice(0, 3).map((o, i) => (
                    <span key={i}>
                      <b>{o.n}</b>
                      {o.k}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
