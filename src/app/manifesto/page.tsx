import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "Five things we believe about how an agency should work in the AI era.",
};

const beliefs = [
  {
    n: "01 / Pricing",
    strike: "Hours.",
    keep: "Outcomes.",
    essay: [
      "Selling time is selling a finite, depreciating asset — and pretending the buyer doesn't know it. Retainers exist because they're easy to model in a spreadsheet, not because they protect the work.",
      "AI compresses the time required to make almost any deliverable by an order of magnitude. The old model handled this by lowering the rate. We think that's the wrong move. We price the outcome — adoption, pipeline, retention, brand demand — and pocket the leverage.",
      "If we can't articulate the outcome, we don't take the brief.",
    ],
  },
  {
    n: "02 / Stack",
    strike: "AI as a tool.",
    keep: "AI as the OS.",
    essay: [
      "Most agencies treat AI as a faster Photoshop. We treat it as the operating system the agency runs on.",
      "Briefs, insights, production, content versioning, governance and measurement are agent-orchestrated. Humans in the loop where taste, judgment and relationships matter. Machines in the loop everywhere else.",
      "Critically, we plug into your stack — your tools, your data, your brand DNA — not the other way around. The agencies that hardwire into the client's marketing OS win the next decade. The rest become vendors.",
    ],
  },
  {
    n: "03 / Cadence",
    strike: "Campaign factory.",
    keep: "Culture engine.",
    essay: [
      "Two big campaigns a year is a museum schedule. It might win a Cannes Lion but it doesn't move a quarterly number, and it doesn't build a brand inside a culture that updates every six hours.",
      "We listen — to platforms, creators, communities, search trends — and we ship in days, not quarters. Reactive when it matters. Heroic when it counts. Always, with a single point of view.",
      "AI gives the permutations. We give the taste. That sentence is on the wall for a reason.",
    ],
  },
  {
    n: "04 / Posture",
    strike: "We'll do it for you.",
    keep: "We'll build it with you.",
    essay: [
      "In-house teams are not going away. CMOs are building real capability inside the building, and they should. The agency that pretends it can replace that team is the one that gets fired in the next reorg.",
      "Our default posture is to embed: a small senior pod plus our agent stack, deployed into your tools, with playbooks, prompts, governance and SOPs you keep when we leave. If we leave.",
      "If we make your team stronger, we become un-fireable. If we make ourselves indispensable instead, we deserve to be.",
    ],
  },
  {
    n: "05 / Reporting",
    strike: "Vanity dashboards.",
    keep: "CFO-grade clarity.",
    essay: [
      "Marketing is getting more financial. The CMO's job is now half storytelling, half forecast defense.",
      "We tie every piece of work — every asset, every test, every cycle-time gain — to a number a CFO would recognize: pipeline, adoption, retention, payback. If we shaved 40% off your cycle time and 30% off your content cost, you should be able to show that in one screen.",
      "If a piece of work can't be traced to a business result, we don't ship it. If we can't show our own work, we don't deserve the next brief.",
    ],
  },
];

export default function ManifestoPage() {
  return (
    <>
      <header className="page-head">
        <span className="label" style={{ alignSelf: "start" }}>
          Manifesto / 2026
        </span>
        <h1>
          Five things we <em>believe</em>.
        </h1>
        <p className="deck">
          We're an independent agency built for the post-hours era. These are
          the five things we hold to. <em>Disagree</em> and you should hire
          someone else.
        </p>
        <div className="page-meta">
          <span>Written by the bench</span>
          <span>Revised quarterly</span>
          <span>v.2026.05</span>
        </div>
      </header>

      <section
        className="manifesto"
        style={{ borderTop: "1px solid var(--rule)" }}
      >
        <div>
          <span className="label">The full read</span>
        </div>
        <ol className="manifesto-list">
          {beliefs.map((b) => (
            <Reveal as="li" className="m-item" key={b.n}>
              <div className="m-num">{b.n}</div>
              <div>
                <p className="m-line">
                  <span className="strike">{b.strike}</span>
                  <span className="keep">{b.keep}</span>
                </p>
                <div className="m-essay">
                  {b.essay.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
