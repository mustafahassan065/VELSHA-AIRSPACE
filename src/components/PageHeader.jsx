import { bgImage, IMG } from "../data/siteData";

export default function PageHeader({ eyebrow, title, text, image = IMG.header }) {
  return (
    <section className="pagehead" style={bgImage(image, "linear-gradient(135deg,#0a1d3f 0%,#0a2fc4 100%)")}>
      <div className="pagehead__overlay" />
      <div className="pagehead__inner">
        {eyebrow && <p className="pagehead__eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}