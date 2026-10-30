import usePageMeta from "../hooks/usePageMeta";
import PageHeader from "../components/PageHeader";
import LabSection from "../components/LabSection";
import ContactSection from "../components/ContactSection";

export default function EngineeringLab() {
  usePageMeta(
    "Engineering Lab",
    "Interactive aerospace engineering calculators, starting with the Wing Loading Calculator."
  );

  return (
    <>
      <PageHeader
        eyebrow="Engineering Lab"
        title="Hands-on aerospace calculators."
        text="Adjust the values and see instant results. Lift, drag, thrust and battery energy tools are coming soon."
      />
      <LabSection showHead={false} />
      <ContactSection />
    </>
  );
}