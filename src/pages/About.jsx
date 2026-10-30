import usePageMeta from "../hooks/usePageMeta";
import PageHeader from "../components/PageHeader";
import Founder from "../components/Founder";
import Reveal from "../components/Reveal";
import ContactSection from "../components/ContactSection";

export default function About() {
  usePageMeta(
    "About",
    "VELSHA AIRSPACE makes aerospace engineering accessible through education while pursuing sustainable aircraft technologies."
  );

  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Learn Aviation. Engineer the Future."
        text="Two directions, one ambition: make aerospace engineering accessible and help shape sustainable flight."
      />

      <section className="section" aria-labelledby="about-title">
        <div className="container intro">
          <Reveal>
            <h2 id="about-title" className="title">What we do</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead">
              <strong>VELSHA Academy</strong> offers aerospace engineering
              education — online courses, digital guides and interactive
              learning tools.
            </p>
            <p className="lead">
              <strong>VELSHA Aircraft</strong> focuses on sustainable aircraft
              research, engineering projects, prototype development and, in
              the future, aircraft manufacturing.
            </p>
          </Reveal>
        </div>
      </section>

      <Founder />
      <ContactSection />
    </>
  );
}