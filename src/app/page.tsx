import Link from "next/link";
import Reveal from "@/components/Reveal";
import Ticker from "@/components/Ticker";
import { cases } from "@/lib/cases";

const beliefs = [
  {
    n: "01 / Pricing",
    strike: "Hours.",
    keep: "Outcomes.",
    note: "Retainers and time sheets are a tax on speed. We price the result — launch to adoption, brand to demand — and eat the leverage.",
  },
  {
    n: "02 / Stack",
    strike: "AI as a tool.",
    keep: "AI as the OS.",
    note: "Briefs, insights, production, versioning, governance and measurement run on agents that plug into your stack. Not a ChatGPT habit. A nervous system.",
  },
  {
    n: "03 / Cadence",
    strike: "Campaign factory.",
    keep: "Culture engine.",
    note: "Two big campaigns a year is a museum schedule. We listen, make and ship in days, across creators, platforms and communities — without losing the thing.",
  },
  {
    n: "04 / Posture",
    strike: "We'll do it for you.",
    keep: "We'll build it with you.",
    note: "In-house isn't going away. We embed pods, hand over playbooks, and teach your team to prompt, govern and scale. Make you stronger; become un-fireable.",
  },
  {
    n: "05 / Reporting",
    strike: "Vanity dashboards.",
    keep: "CFO-grade clarity.",
    note: "If we cut your cycle time 40% and your content cost 30%, you should be able to show your CFO in one screen. We tie work to revenue, or we don't ship it.",
  },
];

const moreLink: React.CSSProperties = {
  fontFamily: "var(--serif)",
  fontStyle: "italic",
  fontSize: 22,
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="top" style={{ borderTop: "none" }}>
        <div className="hero-top">
          <div className="hero-eyebrow">
            A concept agency — a working manifesto of how one could ship in 2026. NY / CDMX / remote.
          </div>
        </div>

        <h1 className="wordmark">
          Taste<span className="amp">.</span>
        </h1>

        <div className="hero-bottom">
          <p className="tagline">
            AI gives the <em>permutations</em>.
            <br />
            We give the taste.
          </p>
          <div className="hero-meta">
            <span>
              <b>9</b> humans
            </span>
            <span>
              <b>47</b> agents
            </span>
            <span>
              <b>0</b> hours billed
            </span>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto" id="manifesto">
        <div>
          <span className="label">Five things we believe</span>
          <Link
            href="/manifesto"
            className="text-link"
            style={{ marginTop: 18, display: "inline-block", ...moreLink }}
          >
            Read the long version →
          </Link>
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
                <p className="m-note">{b.note}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* WORK */}
      <section className="work" id="work">
        <div className="work-head">
          <span className="label">Selected work / 2026</span>
          <h2>
            Shipped <em>fast</em>.<br />
            Landed <em>harder</em>.
          </h2>
        </div>

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
                  <span className="case-meta-right">
                    <span>{c.kind}</span>
                    <span className="spec-chip">Spec</span>
                  </span>
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

        <div style={{ marginTop: 48, textAlign: "right" }}>
          <Link href="/work" className="text-link" style={moreLink}>
            All work →
          </Link>
        </div>
      </section>

      <Ticker />

      {/* OFFERS */}
      <section id="offers">
        <div className="offers-head">
          <span className="label">How to hire us</span>
          <h2>
            Three ways <em>in</em>.
          </h2>
        </div>
        <div className="offers">
          <Reveal className="offer">
            <span className="offer-for">For new bets</span>
            <h3 className="offer-name">
              Launch <em>Mode</em>
            </h3>
            <p className="offer-pitch">
              Get a product or category from blank page to in-market in a
              quarter. One brief, one bill, one number to hit.
            </p>
            <div className="offer-price">
              <b>$250K</b>fixed · 90 days · adoption-tied
            </div>
            <ul className="offer-list">
              <li>Strategy, identity, narrative, launch system</li>
              <li>Hero film + 200 derivative assets</li>
              <li>Earned, owned and creator distribution</li>
              <li>One outcome metric, owned by us</li>
            </ul>
          </Reveal>

          <Reveal className="offer">
            <span className="offer-for">For brands in market</span>
            <h3 className="offer-name">
              Always-<em>on</em>
            </h3>
            <p className="offer-pitch">
              A culture engine that listens, makes and ships every week —
              without burning your team or your budget.
            </p>
            <div className="offer-price">
              <b>$80K</b>per month · monthly out · no lock-in
            </div>
            <ul className="offer-list">
              <li>Weekly cultural radar + reactive briefs</li>
              <li>30–60 finished assets / month</li>
              <li>Creator + community ops</li>
              <li>Live dashboard tied to your KPIs</li>
            </ul>
          </Reveal>

          <Reveal className="offer">
            <span className="offer-for">For in-house teams</span>
            <h3 className="offer-name">
              <em>Embed</em>
            </h3>
            <p className="offer-pitch">
              We sit inside your team for a quarter — bringing a senior pod, our
              agent stack, and the playbooks to run it without us.
            </p>
            <div className="offer-price">
              <b>$500K</b>per quarter · transfer-out at end
            </div>
            <ul className="offer-list">
              <li>Pod of 3 seniors + agent OS, deployed in your tools</li>
              <li>Capability build for your team</li>
              <li>Governance, prompts and SOPs you keep</li>
              <li>Exit plan from day one</li>
            </ul>
          </Reveal>
        </div>

        <div style={{ marginTop: 32, textAlign: "right" }}>
          <Link href="/offers" className="text-link" style={moreLink}>
            Compare offers →
          </Link>
        </div>
      </section>

      {/* BUILT */}
      <section className="built" id="built">
        <span className="label">How we&apos;re built</span>
        <h2>
          Small <em>bench</em>.<br />
          Big <em>swing</em>.
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
        <div style={{ marginTop: 48 }}>
          <Link href="/studio" className="text-link" style={moreLink}>
            Inside the studio →
          </Link>
        </div>
      </section>
    </>
  );
}
