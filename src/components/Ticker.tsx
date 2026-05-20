export default function Ticker() {
  const items = [
    { txt: "Shipped this week —" },
    { txt: "41 pieces", hot: true },
    { txt: "across" },
    { txt: "9 brands", hot: true },
    { txt: "·" },
    { txt: "Brief → live:" },
    { txt: "6.2 days", hot: true },
    { txt: "·" },
    { txt: "Cycle time vs. industry:" },
    { txt: "−72%", hot: true },
    { txt: "·" },
  ];
  const loop = [...items, ...items];
  return (
    <div className="ticker" aria-hidden>
      <div className="ticker-track">
        {loop.map((it, i) => (
          <span key={i} className={it.hot ? "hot" : undefined}>
            {it.txt}
          </span>
        ))}
      </div>
    </div>
  );
}
