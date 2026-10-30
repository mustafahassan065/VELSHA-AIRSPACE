import { useState } from "react";
import Reveal from "./Reveal";
import WingLoadingCalculator from "./WingLoadingCalculator";

/* To add a new calculator later:
   1. create the component,
   2. change its entry below to status: "live" and set Component. */
const CALCULATORS = [
  {
    id: "wing-loading",
    title: "Wing Loading",
    text: "How much aircraft weight each square metre of wing carries.",
    status: "live",
    Component: WingLoadingCalculator,
  },
  { id: "lift", title: "Lift", status: "soon" },
  { id: "drag", title: "Drag", status: "soon" },
  { id: "thrust", title: "Thrust", status: "soon" },
  { id: "battery", title: "Battery Energy", status: "soon" },
];

export default function LabSection({ showHead = true }) {
  const [active, setActive] = useState("wing-loading");
  const current = CALCULATORS.find((c) => c.id === active);

  return (
    <section className="section" aria-labelledby="lab-title">
      <div className="container">
        {showHead && (
          <Reveal className="sec-head">
            <p className="eyebrow">Interactive</p>
            <h2 id="lab-title" className="title">Engineering Lab</h2>
            <p className="lead">
              Explore core aerospace formulas hands-on. Adjust the sliders and
              see results instantly. More calculators are on the way.
            </p>
          </Reveal>
        )}

        <div className="lab-tabs" role="group" aria-label="Calculators">
          {CALCULATORS.map((c) => (
            <button
              key={c.id}
              type="button"
              disabled={c.status === "soon"}
              aria-pressed={active === c.id}
              className={`tab ${active === c.id ? "tab--active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {c.title}
              {c.status === "soon" && <em>Soon</em>}
            </button>
          ))}
        </div>

        <Reveal>
          <div className="lab-card">
            <h3>{current.title} Calculator</h3>
            <p>{current.text}</p>
            <current.Component />
          </div>
        </Reveal>
      </div>
    </section>
  );
}