import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brief us",
  description: "Tell us the outcome you're chasing. We'll come back inside a day.",
};

export default function BriefPage() {
  return (
    <>
      <section className="brief-hero" style={{ borderTop: "none" }}>
        <h1>
          Brief <em>us.</em>
        </h1>
      </section>

      <section className="brief-body">
        <div>
          <span className="label">The shortest brief that works</span>
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
            Tell us the outcome you&apos;re chasing and the deadline you&apos;re chasing it by. We&apos;ll come back inside a day with whether we can shape it.
          </p>
        </div>

        <form
          className="brief-form"
          action="mailto:brief@taste.studio"
          method="post"
          encType="text/plain"
        >
          <div className="brief-row">
            <span className="label">You</span>
            <input
              type="text"
              name="name"
              placeholder="Your name and the company you sit inside"
              required
            />
          </div>

          <div className="brief-row">
            <span className="label">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Where we should reply"
              required
            />
          </div>

          <div className="brief-row">
            <span className="label">Shape</span>
            <select name="offer" defaultValue="">
              <option value="" disabled>
                Pick a shape — or pick &quot;Not sure&quot;
              </option>
              <option>Launch Mode — new bet, 90 days</option>
              <option>Always-On — ongoing culture engine</option>
              <option>Embed — inside our team</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div className="brief-row">
            <span className="label">Outcome</span>
            <textarea
              name="outcome"
              placeholder="The single number you'd like to move, and by when."
              required
            />
          </div>

          <div className="brief-row">
            <span className="label">Context</span>
            <textarea
              name="context"
              placeholder="Anything else we should know — incumbents, internal politics, who the board is going to ask."
            />
          </div>

          <button className="brief-submit" type="submit">
            Send brief →
          </button>
        </form>
      </section>

      <section
        className="brief-body"
        style={{
          borderTop: "1px solid var(--rule)",
          paddingTop: 60,
          paddingBottom: 120,
        }}
      >
        <div>
          <span className="label">Or, the old-fashioned way</span>
        </div>
        <div className="brief-aside">
          <h4>Email</h4>
          <p>
            <a href="mailto:brief@taste.studio">brief@taste.studio</a> for work.
          </p>
          <p>
            <a href="mailto:press@taste.studio">press@taste.studio</a> for press.
          </p>
          <p>
            <a href="mailto:join@taste.studio">join@taste.studio</a> if you want
            to join the bench.
          </p>

          <h4 style={{ marginTop: 32 }}>Calendar</h4>
          <p>
            Two intro slots per week, opened on Monday morning.{" "}
            <a href="mailto:brief@taste.studio">Ask for one.</a>
          </p>

          <h4 style={{ marginTop: 32 }}>What happens next</h4>
          <p>
            We reply inside one business day with either: a shaped offer, a
            counter-question, or an honest no.
          </p>
        </div>
      </section>
    </>
  );
}
