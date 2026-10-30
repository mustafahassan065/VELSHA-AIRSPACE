import usePageMeta from "../hooks/usePageMeta";
import PageHeader from "../components/PageHeader";
import Roadmap from "../components/Roadmap";
import Reveal from "../components/Reveal";
import ContactSection from "../components/ContactSection";
import { IMG } from "../data/siteData";

export default function AircraftRD() {
  usePageMeta(
    "Aircraft R&D",
    "From engineering concepts to the future of sustainable aviation — the VELSHA Aircraft research and development roadmap."
  );

  return (
    <>
      <PageHeader
        eyebrow="VELSHA Aircraft"
        title="From engineering concepts to the future of sustainable aviation."
        text="Sustainable aircraft research, engineering projects and prototype development."
        image={IMG.aircraft}
      />

      <section className="section" aria-labelledby="sust-title">
        <div className="container intro">
          <Reveal>
            <h2 id="sust-title" className="title">Sustainability at the core</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead">
              Our aircraft research focuses on efficient configurations and
              cleaner propulsion ideas, developed step by step — from study and
              models to concepts and future partnerships.
            </p>
          </Reveal>
        </div>
      </section>

      <Roadmap />
      <ContactSection />
    </>
  );
}