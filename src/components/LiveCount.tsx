"use client";

import { useEffect, useState } from "react";

export default function LiveCount() {
  const [n, setN] = useState(41);
  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() < 0.18) setN((v) => v + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);
  return <span>{n} shipped this week</span>;
}
