import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cases, caseBySlug, adjacentCases } from "@/lib/cases";

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const c = caseBySlug(slug);
  if (!c) return { title: "Not found" };
  return {
    title: c.client,
    description: c.lede,
  };
}

export default async function CasePage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const c = caseBySlug(slug);
  if (!c) notFound();

  const { prev, next } = adjacentCases(slug);

  return (
    <article className="case-page">
      <header className="case-hero">
        <div>
          <span className="label" style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
            <span className="spec-chip">Spec</span>
            <span>{c.kind}</span>
          </span>
          <h1 style={{ marginTop: 18 }}>
            {c.headline}{" "}
            {c.headlineHot && <em>{c.headlineHot}</em>}
          </h1>
          <p className="lede">{c.lede}</p>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--ink-2)",
              marginTop: 24,
              maxWidth: 560,
              lineHeight: 1.5,
            }}
          >
            Illustrative scenario — a brief, a deadline, and the outcome
            we&apos;d sign for. Not a delivered case.
          </p>
        </div>
        <div className="meta">
          <span>
            Type / <b>Spec / illustrative</b>
          </span>
          <span>
            Client / <b>{c.client}</b>
          </span>
          <span>
            Year / <b>{c.year}</b>
          </span>
          <span>
            Category / <b>{c.category}</b>
          </span>
          <span>
            Offer / <b>{c.offer}</b>
          </span>
        </div>
      </header>

      <div className="case-banner">
        {c.banner} <em>{c.bannerHot}</em>
      </div>

      <section className="case-body">
        <span className="label">Inside the work</span>
        <article>
          {c.body.map((b, i) => (
            <div key={i}>
              <h3>{b.h}</h3>
              {b.p.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          ))}
        </article>
      </section>

      <section className="case-outcomes">
        <span className="label">Outcomes</span>
        <div className="outcome-grid">
          {c.outcomes.map((o, i) => (
            <div className="outcome-card" key={i}>
              <div className="n">
                {o.nHot ? <em>{o.nHot}</em> : o.n}
              </div>
              <div className="k">{o.k}</div>
            </div>
          ))}
        </div>
      </section>

      <nav className="case-nav">
        <Link href={`/work/${prev.slug}`}>
          <span className="label">← Previous</span>
          <h4>{prev.client}</h4>
        </Link>
        <Link href={`/work/${next.slug}`}>
          <span className="label">Next →</span>
          <h4>{next.client}</h4>
        </Link>
      </nav>
    </article>
  );
}
