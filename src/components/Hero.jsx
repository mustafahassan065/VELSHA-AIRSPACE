import { Link } from "react-router-dom";

const HEADLINE = "Engineering the Future of Sustainable Flight.";
const HERO_VIDEO = "/images/hero.mp4"; // public/ folder se direct

export default function Hero() {
  const HERO_VIDEO = "/images/hero.mp4";

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
    </section>
  );
}