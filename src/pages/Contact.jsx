import usePageMeta from "../hooks/usePageMeta";
import PageHeader from "../components/PageHeader";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  usePageMeta(
    "Contact",
    "Collaborate with VELSHA AIRSPACE — aerospace engineers, researchers, universities, technology companies and partners are welcome."
  );

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Engineer the Future."
        text="Tell us about your idea, research or partnership."
      />
      <ContactSection standalone />
    </>
  );
}