import usePageMeta from "../hooks/usePageMeta";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import Divisions from "../components/Divisions";
import YouTubeSeries from "../components/YouTubeSeries";
import LabSection from "../components/LabSection";
import Roadmap from "../components/Roadmap";
import Products from "../components/Products";
import Founder from "../components/Founder";
import ContactSection from "../components/ContactSection";

export default function Home() {
  usePageMeta(
    "",
    "Exploring aerospace engineering through education, innovation, and the development of sustainable aircraft technologies."
  );

  return (
    <>
      <Hero />

      <section className="section" aria-labelledby="vision-title">
        <div className="container intro">
          <Reveal>
            <h2 id="vision-title" className="title">Our vision</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead">
              VELSHA AIRSPACE brings aerospace education and long-term aircraft
              research together — building knowledge today to engineer the
              sustainable aircraft of tomorrow.
            </p>
          </Reveal>
        </div>
      </section>

      <Divisions />
      <YouTubeSeries />
      <LabSection />
      <Roadmap />
      <Products />
      <Founder />
      <ContactSection />
    </>
  );
}