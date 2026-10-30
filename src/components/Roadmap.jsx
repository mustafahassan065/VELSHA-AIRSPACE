import Reveal from "./Reveal";
import { STAGES, STATUS_LABEL, UPDATES, bgImage } from "../data/siteData";

export default function Roadmap() {
  return (
    <section className="section section--soft" aria-labelledby="roadmap-title">
      <div className="container">
        <Reveal className="sec-head">
          <p className="eyebrow">Aircraft development</p>
          <h2 id="roadmap-title" className="title">Our engineering roadmap</h2>
          <p className="lead">
            A long-term path from education to future aircraft manufacturing.
            Completed work and planned development are clearly separated.
          </p>
        </Reveal>

        <ul className="legend" aria-label="Status legend">
          {Object.entries(STATUS_LABEL).map(([key, label]) => (
            <li key={key}><span className={`dot dot--${key}`} />{label}</li>
          ))}
        </ul>

        <ol className="stages">
          {STAGES.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 100}>
                <article className={`stage stage--${s.status}`}>
                  <div
                    className="stage__img"
                    style={bgImage(s.image, "linear-gradient(135deg,#dfe8fb 0%,#c3d4f5 100%)")}
                  />
                  <div className="stage__body">
                    <span className={`badge badge--${s.status}`}>{STATUS_LABEL[s.status]}</span>
                    <p className="stage__num">Stage {s.n}</p>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        {UPDATES.length > 0 && (
          <div className="updates">
            <h3>Progress updates</h3>
            <ul>
              {UPDATES.map((u) => (
                <li key={u.title}>
                  <time>{u.date}</time>
                  <strong>{u.title}</strong>
                  <p>{u.text}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}