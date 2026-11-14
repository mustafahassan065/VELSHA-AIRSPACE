import { Link } from "react-router-dom";
import { IMG } from "./siteData"; // path apne folder structure ke hisaab se adjust karein

const HEADLINE = "Engineering the Future of Sustainable Flight.";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      {/* Video background */}
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        poster="/images/hero-poster.jpg" // optional: video load hone tak image
      >
        <source src={IMG.hero} type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
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