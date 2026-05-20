import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Offers",
  description:
    "Three productized ways to hire TASTE — Launch Mode, Always-On, Embed. Outcomes priced, not hours.",
};

const offers = [
  {
    name: "Launch",
    italic: "Mode",
    forWho: "For new bets",
    price: "$250K",
    terms: "fixed · 90 days · adoption-tied",
    pitch:
      "From blank page to in-market in a quarter. One brief, one bill, one number to hit. We take the risk on the outcome.",
    includes: [
      "Strategy, identity, narrative, launch system",
      "Hero film + 200 derivative assets",
      "Earned, owned and creator distribution",
      "Live measurement on a single outcome metric",
    ],
    shape: [
      { w: "Week 1", h: "Brief & bet" },
      { w: "Weeks 2–4", h: "Strategy, identity, scripts" },
      { w: "Weeks 5–8", h: "Production at scale" },
      { w: "Weeks 9–12", h: "In-market, measure, iterate" },
    ],
    fit: [
      "You are launching a new product, brand or category",
      "You have a board-level deadline",
      "You'd rather buy speed than headcount",
    ],
    notFit: [
      "You want a 'big idea' deck and no production",
      "Outcome can't be defined in a single number",
      "Procurement requires hourly rates and timesheets",
    ],
  },
  {
    name: "Always-",
    italic: "on",
    forWho: "For brands in market",
    price: "$80K",
    terms: "per month · monthly out · no lock-in",
    pitch:
      "A culture engine that listens, makes and ships every week. Built to give your CMO a real cadence without breaking the team or the budget.",
    includes: [
      "Weekly cultural radar + reactive briefs",
      "30–60 finished assets / month, across formats",
      "Creator + community ops, end to end",
      "Live dashboard wired to your KPIs",
    ],
    shape: [
      { w: "Monday", h: "Cultural radar / brief picks" },
      { w: "Tue–Thu", h: "Make at volume" },
      { w: "Friday", h: "Ship + measure" },
      { w: "Every 30d", h: "Rebrief on outcomes" },
    ],
    fit: [
      "You have a brand in market and a content cadence to hit",
      "You want to be reactive without being chaotic",
      "You need a partner who can ship without a hand-hold",
    ],
    notFit: [
      "You want a quarterly campaign and nothing in between",
      "Internal review takes >48h per piece",
      "You can't share your KPIs with a partner",
    ],
  },
  {
    name: "",
    italic: "Embed",
    forWho: "For in-house teams",
    price: "$500K",
    terms: "per quarter · transfer-out at end",
    pitch:
      "We sit inside your team for a quarter — a senior pod, our agent stack, and the playbooks to run it without us when we leave.",
    includes: [
      "Pod of 3 seniors + agent OS, deployed in your tools",
      "Capability build for your team (training, prompts, SOPs)",
      "Governance: brand-safety, legal, IP",
      "Exit plan from day one — you keep what we build",
    ],
    shape: [
      { w: "Weeks 1–2", h: "Audit + agent stack install" },
      { w: "Weeks 3–8", h: "Embedded production" },
      { w: "Weeks 9–11", h: "Hand-over + training" },
      { w: "Week 12", h: "Transfer out" },
    ],
    fit: [
      "You have an in-house marketing team you want to upgrade",
      "You want capability, not dependency",
      "You'd rather hire fewer people than more agencies",
    ],
    notFit: [
      "You want us to keep doing it indefinitely",
      "There is no team to embed into",
      "Your tools are off-limits to a partner",
    ],
  },
];

export default function OffersPage() {
  return (
    <>
      <header className="page-head">
        <span className="label" style={{ alignSelf: "start" }}>
          How to hire us
        </span>
        <h1>
          Three ways <em>in</em>.
        </h1>
        <p className="deck">
          Outcomes priced, not hours. Pick the shape that fits the moment
          you&apos;re in. If none of these fit, <em>tell us</em> — we&apos;ll
          shape one.
        </p>
        <div className="page-meta">
          <span>Productized offers</span>
          <span>Quarterly review</span>
          <span>v.2026.05</span>
        </div>
      </header>

      <section style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="offers">
          {offers.map((o) => (
            <Reveal className="offer" key={o.name + o.italic}>
              <span className="offer-for">{o.forWho}</span>
              <h3 className="offer-name">
                {o.name}
                <em>{o.italic}</em>
              </h3>
              <p className="offer-pitch">{o.pitch}</p>
              <div className="offer-price">
                <b>{o.price}</b>
                {o.terms}
              </div>
              <ul className="offer-list">
                {o.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Deep dive */}
      {offers.map((o, idx) => (
        <section key={o.italic + "deep"} className="case-body">
          <span className="label">
            {String(idx + 1).padStart(2, "0")} / {o.name}
            {o.italic}
          </span>
          <article>
            <h3>The shape of {o.italic === "Embed" ? "an Embed" : `${o.name}${o.italic}`}</h3>
            <p>{o.pitch}</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
                margin: "32px 0",
              }}
            >
              {o.shape.map((s) => (
                <div
                  key={s.w}
                  style={{
                    borderTop: "1px solid var(--rule)",
                    paddingTop: 14,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: ".14em",
                      color: "var(--ink-2)",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    {s.w}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 22,
                      lineHeight: 1.2,
                      fontStyle: "italic",
                    }}
                  >
                    {s.h}
                  </div>
                </div>
              ))}
            </div>

            <h3>Fit</h3>
            {o.fit.map((f, i) => (
              <p key={i} style={{ marginBottom: 6 }}>
                — {f}
              </p>
            ))}

            <h3>Not fit</h3>
            {o.notFit.map((f, i) => (
              <p
                key={i}
                style={{ marginBottom: 6, color: "var(--ink-2)" }}
              >
                — {f}
              </p>
            ))}
          </article>
        </section>
      ))}

      <section
        style={{
          padding: "120px 28px",
          borderTop: "1px solid var(--rule)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(40px, 5vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "-.02em",
            maxWidth: 880,
            margin: "0 auto 32px",
          }}
        >
          Don&apos;t see your shape?{" "}
          <em style={{ color: "var(--hot)", fontStyle: "italic" }}>
            Tell us anyway.
          </em>
        </div>
        <Link
          href="/brief"
          className="text-link"
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontSize: 28,
          }}
        >
          Brief us →
        </Link>
      </section>
    </>
  );
}
