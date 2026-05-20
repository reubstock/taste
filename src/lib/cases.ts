export type CaseStudy = {
  slug: string;
  client: string;
  kind: string;
  category: string;
  year: string;
  art: React.ReactNode | string;
  headline: string;
  headlineHot?: string;
  lede: string;
  banner: string;
  bannerHot: string;
  offer: "Launch Mode" | "Always-On" | "Embed";
  body: { h: string; p: string[] }[];
  outcomes: { n: string; nHot?: string; k: string }[];
  size: "w7" | "w5" | "w6" | "w4" | "w8" | "w12";
};

export const cases: CaseStudy[] = [
  {
    slug: "solstice",
    client: "Solstice",
    kind: "Launch · DTC wellness",
    category: "Launch",
    year: "2026",
    art: "A morning routine, on shelves in 41 days.",
    headline: "A morning routine, on shelves in",
    headlineHot: "41 days",
    lede: "Solstice came to us with a hero SKU, $4M of pre-seed, and a board demanding a launch before Q3. We took the brief end-to-end — strategy, brand, packaging, film, retail, paid, owned, earned — and put the product into 1,200 stores before the founders had finished hiring their first marketer.",
    banner: "From founder voicenote to shelf in",
    bannerHot: "forty-one days.",
    offer: "Launch Mode",
    body: [
      {
        h: "The brief",
        p: [
          "Solstice's hero product — a single-serve morning electrolyte — was already manufactured. What they didn't have was a brand, a story, or a reason for a Whole Foods buyer to give them shelf next to the incumbents.",
          "Their existing agency had quoted nine months and $1.4M. The board wanted four months. We promised three.",
        ],
      },
      {
        h: "The work",
        p: [
          "We ran the brand sprint with the founders in week one — identity, naming system, voice — then handed it to the agent stack to generate hundreds of pack permutations, retail collateral and social cuts overnight, every night. Two senior designers curated.",
          "The hero film shot in four days with a creator-led cast. The launch site, retail one-pager and 200 paid creative variants went live in parallel — every asset measured against a single number: in-store conversion at the shelf.",
        ],
      },
      {
        h: "The result",
        p: [
          "1,200 doors at launch. CAC came in 38% below plan. The single hero film generated 4.2M organic impressions in the first week. Solstice closed their Series A on the strength of the launch metrics three weeks later.",
        ],
      },
    ],
    outcomes: [
      { n: "41d", k: "Concept → shelf" },
      { n: "4.2M", k: "Organic impressions" },
      { n: "−38%", k: "CAC vs. plan" },
      { n: "1,200", k: "Doors at launch" },
    ],
    size: "w7",
  },
  {
    slug: "heron",
    client: "Heron",
    kind: "Reposition · Fintech",
    category: "Reposition",
    year: "2026",
    art: "From spreadsheet to story.",
    headline: "From spreadsheet to",
    headlineHot: "story.",
    lede: "Heron sold cash-flow software to SMB owners but spoke like an enterprise vendor. We rewrote the brand from the inside out, then proved the lift with a quarter of live pipeline data.",
    banner: "A repositioning measured in",
    bannerHot: "closed-won, not awards.",
    offer: "Embed",
    body: [
      {
        h: "The brief",
        p: [
          "Heron had product-market fit and a sales team that could close — but every conversation started with five minutes of explaining what the company actually did. Their marketing pages described a 'platform' when they should have described a person's Tuesday.",
          "The CMO wanted a reposition that lifted pipeline without breaking what was working. No big bang relaunch. No 'tagline reveal' moment.",
        ],
      },
      {
        h: "The work",
        p: [
          "We embedded a pod of three inside their marketing team for a quarter — strategy lead, writer, agent operator. We didn't ship a deck. We rewrote the top 40 pages of the site, ran a/b tests on every hero, and put a new narrative through every nurture in their sequence.",
          "Behind the scenes, the agent stack regenerated landing pages, ad variants and outbound emails for each ICP overnight, every night. Sales watched their open rates climb in real time.",
        ],
      },
      {
        h: "The result",
        p: [
          "Pipeline 2.1× in eleven weeks, brand recall up 9 points in the target segment, sales cycle down 17%. The CFO asked the CMO how she'd done it. The CMO told her about us.",
        ],
      },
    ],
    outcomes: [
      { n: "2.1×", nHot: "2.1×", k: "Pipeline lift" },
      { n: "11w", k: "Inside their team" },
      { n: "+9pt", k: "Brand recall" },
      { n: "−17%", k: "Sales cycle" },
    ],
    size: "w5",
  },
  {
    slug: "mainline",
    client: "Mainline",
    kind: "Culture · Running brand",
    category: "Culture",
    year: "2026",
    art: "300 cities, one Sunday.",
    headline: "300 cities,",
    headlineHot: "one Sunday.",
    lede: "Mainline wanted to own running for a generation that doesn't watch the Olympics. We turned a brand activation into a global, member-owned ritual — and shipped it in nine days from brief to live, with zero paid media.",
    banner: "A run club in",
    bannerHot: "312 cities, on day nine.",
    offer: "Launch Mode",
    body: [
      {
        h: "The brief",
        p: [
          "Mainline had a strong product, a small but devoted community, and a budget that wouldn't move the needle in paid. The CMO had one ask: a cultural moment, before fall.",
          "We had nine days from green-light.",
        ],
      },
      {
        h: "The work",
        p: [
          "We built one thing: a single, shareable kit that turned any local runner into a chapter lead. Route maps generated from agents per-city. Posters, social tiles, t-shirt PDFs — all auto-localized to language, time and weather. A creator partner in each of the top 40 cities posted day-of with their own twist.",
          "No media buy. The work travelled because it was useful, not because it was paid.",
        ],
      },
      {
        h: "The result",
        p: [
          "312 cities lit up on the first Sunday. The brand got pickup in 27 outlets and a Vogue piece by Tuesday. CAC for the next month dropped 44% — without spending a cent more on acquisition.",
        ],
      },
    ],
    outcomes: [
      { n: "312", k: "Cities live" },
      { n: "9d", k: "Brief → live" },
      { n: "$0", nHot: "$0", k: "Paid media" },
      { n: "−44%", k: "CAC, month-on-month" },
    ],
    size: "w4",
  },
  {
    slug: "public-library",
    client: "Public Library",
    kind: "Embed · Independent label",
    category: "Embed",
    year: "2026",
    art: "An indie label that ships like a platform.",
    headline: "An indie label that ships like a",
    headlineHot: "platform.",
    lede: "Public Library is an indie label run by three people. We embedded for two quarters and rebuilt their content operation around a small senior team and an agent stack — without losing the thing that makes the label feel like the label.",
    banner: "Three humans. Forty-seven drops a",
    bannerHot: "quarter. One voice.",
    offer: "Embed",
    body: [
      {
        h: "The brief",
        p: [
          "Public Library was punching above its weight on taste, getting eaten alive on volume. Three people couldn't ship the social, video, web, merch and tour content their artists deserved. Hiring more people would dilute the voice.",
          "We were asked to make three people feel like thirty without it ever feeling like a corporate label.",
        ],
      },
      {
        h: "The work",
        p: [
          "We embedded for two quarters. We built them an agent stack on top of their existing tools — Notion, Figma, Frame.io — that drafted social, edited rough cuts, generated cover variants and translated everything into the four languages their audience reads.",
          "We didn't take the taste out of the room. The founder still picks every cover and every line. The agents do the volume around her.",
        ],
      },
      {
        h: "The result",
        p: [
          "47 drops shipped per quarter, up from 9. Cost per asset down 61%. Three of their singles charted in the same quarter — the first time the label has had multiple charting releases since founding. Public Library kept their three people. They have, by their own count, 19 agents.",
        ],
      },
    ],
    outcomes: [
      { n: "47", k: "Drops / quarter" },
      { n: "−61%", k: "Cost per asset" },
      { n: "3", k: "Charted singles" },
      { n: "19", nHot: "19", k: "Agents deployed" },
    ],
    size: "w8",
  },
];

export const caseBySlug = (slug: string) =>
  cases.find((c) => c.slug === slug);

export const adjacentCases = (slug: string) => {
  const idx = cases.findIndex((c) => c.slug === slug);
  const prev = cases[(idx - 1 + cases.length) % cases.length];
  const next = cases[(idx + 1) % cases.length];
  return { prev, next };
};
