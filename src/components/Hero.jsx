import { Link } from "react-router-dom";

const HEADLINE = "Engineering the Future of Sustainable Flight.";
const HERO_VIDEO = "/images/hero.mp4"; // public/ folder se direct

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        poster="/images/hero-poster.jpg"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="hero__overlay" aria-hidden="true" />

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