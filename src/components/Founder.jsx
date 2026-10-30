import Reveal from "./Reveal";
import { IMG, SITE } from "../data/siteData";

export default function Founder() {
  return (
    <section className="section section--soft" aria-labelledby="founder-title">
      <div className="container founder">
        <Reveal>
          <div className="founder__photo">
            <img
              src={IMG.founder}
              alt={`Portrait of ${SITE.founderName}`}
              className="founder__img"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Founder</p>
          <h2 id="founder-title" className="title">{SITE.founderName}</h2>
          <p className="lead">
            VELSHA AIRSPACE was founded with a vision to make aerospace
            engineering accessible through education while pursuing the
            long-term development of sustainable aircraft technologies.
          </p>
          <p className="lead">
            The initiative combines continuous learning, engineering
            experimentation, and a commitment to the future of aviation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}