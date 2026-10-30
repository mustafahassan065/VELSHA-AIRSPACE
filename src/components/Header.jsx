import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV, TOP_LINKS, SEARCH_INDEX } from "../data/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
    setQ("");
  }, [pathname]);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    return SEARCH_INDEX.filter((i) =>
      `${i.title} ${i.keywords}`.toLowerCase().includes(t)
    );
  }, [q]);

  return (
    <>
      <div className="topbar">
        <div className="topbar__inner">
          {TOP_LINKS.map((l) =>
            l.href ? (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ) : (
              <Link key={l.label} to={l.to}>{l.label}</Link>
            )
          )}
        </div>
      </div>

      <header className="header">
        <div className="header__inner">
          <Link to="/" className="logo" aria-label="VELSHA AIRSPACE — home">
            VELSHA<small>AIRSPACE</small>
          </Link>

          <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Main navigation">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="header__actions">
            <button
              type="button"
              className="icon-btn"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((s) => !s)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m20 20-4.8-4.8" />
              </svg>
            </button>
            <button
              type="button"
              className="icon-btn menu-btn"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M5 5l14 14M19 5 5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="searchpanel">
            <div className="container">
              <label className="sr-only" htmlFor="site-search">Search this site</label>
              <input
                id="site-search"
                autoFocus
                type="search"
                placeholder="Search pages…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              {q.trim() && (
                <ul className="searchpanel__list">
                  {results.length ? (
                    results.map((r) => (
                      <li key={r.to}><Link to={r.to}>{r.title}</Link></li>
                    ))
                  ) : (
                    <li className="searchpanel__empty">No results found.</li>
                  )}
                </ul>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
