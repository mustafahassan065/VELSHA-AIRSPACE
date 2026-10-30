import { Link } from "react-router-dom";

// Change this line if the client prefers the screenshot headline:
// "Advancing flight. Protecting our planet."
const HEADLINE = "Engineering the Future of Sustainable Flight.";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__content">
        <p className="hero__eyebrow">VELSHA AIRSPACE</p>
        <h1>{HEADLINE}</h1>
        <p className="hero__text">
          Exploring aerospace engineering through education, innovation, and the
          development of sustainable aircraft technologies.
        </p>
        <div className="hero__cta">
          <Link to="/academy" className="btn btn--light">Explore VELSHA Academy</Link>
          <Link to="/aircraft-rd" className="btn btn--ghost">Discover Aircraft R&amp;D</Link>
        </div>
      </div>
    </section>
  );
}