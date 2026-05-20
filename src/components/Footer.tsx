import Link from "next/link";

export default function Footer() {
  return (
    <footer className="foot">
      <h2 className="foot-top">
        <Link href="/brief">
          Brief <em>us.</em>
        </Link>
      </h2>

      <div className="foot-grid">
        <div className="foot-col">
          <h4>Site</h4>
          <Link href="/work">Work</Link>
          <Link href="/manifesto">Manifesto</Link>
          <Link href="/offers">Offers</Link>
          <Link href="/studio">Studio</Link>
          <Link href="/brief">Brief us</Link>
        </div>
        <div className="foot-col">
          <h4>Contact</h4>
          <a href="mailto:brief@taste.studio">brief@taste.studio</a>
          <a href="mailto:press@taste.studio">press@taste.studio</a>
          <a href="mailto:join@taste.studio">join@taste.studio</a>
        </div>
        <div className="foot-col">
          <h4>Where</h4>
          <p>New York</p>
          <p>Mexico City</p>
          <p>Remote</p>
        </div>
        <div className="foot-col">
          <h4>Follow</h4>
          <a href="https://instagram.com" rel="noopener noreferrer" target="_blank">
            Instagram
          </a>
          <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href="https://substack.com" rel="noopener noreferrer" target="_blank">
            Substack
          </a>
        </div>
      </div>

      <div className="foot-bottom">
        <span>TASTE™ · MMXXVI · An independent agency.</span>
        <span>0 hours billed.</span>
      </div>
    </footer>
  );
}
