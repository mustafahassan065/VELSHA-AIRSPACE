import usePageMeta from "../hooks/usePageMeta";
import PageHeader from "../components/PageHeader";
import YouTubeSeries from "../components/YouTubeSeries";
import Products from "../components/Products";
import ContactSection from "../components/ContactSection";
import { IMG } from "../data/siteData";

export default function Academy() {
  usePageMeta(
    "VELSHA Academy",
    "Learn the science and engineering behind flight with VELSHA Academy — educational videos, digital guides and future online courses."
  );

  return (
    <>
      <PageHeader
        eyebrow="VELSHA Academy"
        title="Learn the science and engineering behind flight."
        text="Aerodynamics, structures, propulsion, flight mechanics and sustainable aviation — explained step by step."
        image={IMG.academy}
      />
      <YouTubeSeries />
      <Products />
      <ContactSection />
    </>
  );
}