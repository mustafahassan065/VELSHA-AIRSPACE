import { useState } from "react";

const MASS = { min: 1, max: 80000, step: 1 };
const AREA = { min: 0.1, max: 400, step: 0.1 };
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

export default function WingLoadingCalculator() {
  const [mass, setMass] = useState("1200");
  const [area, setArea] = useState("16");

  const m = parseFloat(mass);
  const a = parseFloat(area);
  const valid = m > 0 && a > 0;
  const loading = valid ? m / a : null;

  return (
    <div className="calc">
      <div className="calc__inputs">
        <div className="field">
          <label htmlFor="mass">Aircraft mass (kg)</label>
          <div className="field__row">
            <input
              id="mass"
              type="number"
              inputMode="decimal"
              min={MASS.min}
              step={MASS.step}
              value={mass}
              onChange={(e) => setMass(e.target.value)}
            />
            <span>kg</span>
          </div>
          <input
            type="range"
            aria-label="Aircraft mass slider"
            min={MASS.min}
            max={MASS.max}
            step={MASS.step}
            value={clamp(m || MASS.min, MASS.min, MASS.max)}
            onChange={(e) => setMass(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="area">Wing area (m²)</label>
          <div className="field__row">
            <input
              id="area"
              type="number"
              inputMode="decimal"
              min={AREA.min}
              step={AREA.step}
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
            <span>m²</span>
          </div>
          <input
            type="range"
            aria-label="Wing area slider"
            min={AREA.min}
            max={AREA.max}
            step={AREA.step}
            value={clamp(a || AREA.min, AREA.min, AREA.max)}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
      </div>

      <div className="calc__result" aria-live="polite">
        <p className="calc__label">Wing loading</p>
        {valid ? (
          <>
            <p className="calc__value">
              {loading.toFixed(1)} <span>kg/m²</span>
            </p>
            <p className="calc__sub">≈ {(loading * 9.80665).toFixed(0)} N/m²</p>
          </>
        ) : (
          <p className="calc__error">Enter a mass and wing area greater than zero.</p>
        )}
        <p className="calc__formula">Wing loading = aircraft mass ÷ wing area</p>
      </div>
    </div>
  );
}