import { useState } from "react";
import Reveal from "./Reveal";
import { TOPICS, SITE } from "../data/siteData";
import { Link } from "react-router-dom";

function LiteYouTube({ id, title }) {
  const [play, setPlay] = useState(false);

  if (!id) {
    return (
      <div className="yt yt--empty">
        <span>Video coming soon</span>
      </div>
    );
  }

  if (play) {
    return (
      <div className="yt">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="yt">
      <button
        type="button"
        className="yt__btn"
        onClick={() => setPlay(true)}
        aria-label={`Play video: ${title}`}
        style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` }}
      >
        <span className="yt__play" aria-hidden="true" />
      </button>
    </div>
  );
}

export default function YouTubeSeries() {
  return (
    <section className="section section--soft" aria-labelledby="series-title">
      <div className="container">
        <Reveal className="sec-head">
          <p className="eyebrow">Educational series</p>
          <h2 id="series-title" className="title">From Zero to Aircraft</h2>
          <p className="lead">
            Our YouTube series explains the engineering behind flight, one
            topic at a time — from the basics of aerodynamics to sustainable
            aviation.
          </p>
        </Reveal>

        <div className="series">
          {TOPICS.map((t, i) => (
            <Reveal key={t.key} delay={(i % 3) * 100}>
              <article className="vcard">
                <LiteYouTube id={t.youtubeId} title={t.title} />
                <div className="vcard__body">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="series__foot">
          <a className="btn btn--blue" href={SITE.youtube} target="_blank" rel="noopener noreferrer">
            Visit our YouTube channel →
          </a>
          <div className="series__course">
            <strong>Full online course — coming soon.</strong>
            <span>
              Want to know when it opens?{" "}
              <Link to="/contact">Get in touch</Link>.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}