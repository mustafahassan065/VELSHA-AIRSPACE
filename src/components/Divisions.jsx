import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { DIVISIONS, bgImage } from "../data/siteData";

export default function Divisions() {
  return (
    <section className="section section--tight" aria-labelledby="divisions-title">
      <div className="container">
        <h2 id="divisions-title" className="sr-only">Our two divisions</h2>
        <div className="divisions">
          {DIVISIONS.map((d, i) => (
            <Reveal key={d.key} delay={i * 120}>
              <article className="division">
                <div className="division__bg" style={bgImage(d.image)} />
                <div className="division__body">
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <Link to={d.to} className="btn btn--light">{d.cta} →</Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}