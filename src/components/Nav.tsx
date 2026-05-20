import Link from "next/link";
import LiveCount from "./LiveCount";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/">TASTE™</Link>
      <div className="nav-right">
        <span className="live">
          <span className="dot" aria-hidden />
          <LiveCount />
        </span>
        <Link href="/work">Work</Link>
        <Link href="/manifesto">Manifesto</Link>
        <Link href="/offers">Offers</Link>
        <Link href="/studio">Studio</Link>
        <Link href="/brief">Brief us</Link>
      </div>
    </nav>
  );
}
