import { Link } from "react-router-dom";
import { NAV, SITE } from "../data/siteData";

export default function Footer() {
  const socials = SITE.socials.filter((s) => s.href);

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__logo">VELSHA<small>AIRSPACE</small></p>
          <p className="footer__tag">{SITE.tagline}</p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Connect</h3>
          <ul>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}