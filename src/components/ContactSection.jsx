import { useState } from "react";
import Reveal from "./Reveal";
import { SITE } from "../data/siteData";

const TYPES = [
  "Aerospace engineer",
  "Researcher",
  "University",
  "Technology company",
  "Potential partner",
  "Other",
];

export default function ContactSection({ standalone = false }) {
  const [sent, setSent] = useState(false);
  const socials = SITE.socials.filter((s) => s.href);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Collaboration enquiry — ${f.get("type")}`;
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `I am a: ${f.get("type")}`,
      "",
      f.get("message"),
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className={`section section--navy ${standalone ? "section--flush" : ""}`} aria-labelledby="contact-title">
      <div className="container contact">
        <Reveal>
          <p className="eyebrow eyebrow--light">Collaboration and contact</p>
          <h2 id="contact-title" className="title title--light">Let's Engineer the Future.</h2>
          <p className="lead lead--light">
            We welcome collaboration with aerospace engineers, researchers,
            universities, technology companies and potential partners.
          </p>

          <ul className="contact__list">
            <li>
              <span>Business email</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            {socials.map((s) => (
              <li key={s.label}>
                <span>{s.label}</span>
                <a href={s.href} target="_blank" rel="noopener noreferrer">{s.href.replace(/^https?:\/\/(www\.)?/, "")}</a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form className="form" onSubmit={onSubmit}>
            <div className="form__row">
              <div>
                <label htmlFor="c-name">Name</label>
                <input id="c-name" name="name" type="text" required autoComplete="name" />
              </div>
              <div>
                <label htmlFor="c-email">Email</label>
                <input id="c-email" name="email" type="email" required autoComplete="email" />
              </div>
            </div>

            <label htmlFor="c-type">I am a…</label>
            <select id="c-type" name="type" defaultValue={TYPES[0]}>
              {TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <label htmlFor="c-msg">Message</label>
            <textarea id="c-msg" name="message" rows="5" required />

            <button type="submit" className="btn btn--blue">Send message →</button>
            {sent && (
              <p className="form__note" role="status">
                Your email app should open with the message ready to send. If
                it doesn't, write to {SITE.email}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}