"use client";

import { useId, useRef, useState } from "react";

const STAGES = [
  { name: "Arrive", text: "Bring your project, parts and blockers." },
  { name: "Unpack", text: "Find what works and what’s stuck." },
  { name: "Debug", text: "Solve problems with builders and experts." },
  { name: "Build", text: "Make, test, assemble." },
  { name: "Iterate", text: "Refine the design. Test again." },
  { name: "Move forward", text: "Leave with progress and a clear next step." },
];

const pad = (n) => String(n).padStart(2, "0");

export default function Experience() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const uid = useId();
  const stage = STAGES[active];

  const onKeyDown = (e) => {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let next = null;
    if (e.key in keys) next = (active + keys[e.key] + STAGES.length) % STAGES.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = STAGES.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  // Hover previews a stage on mouse devices; tap and keyboard select it.
  const onPointerEnter = (i) => (e) => {
    if (e.pointerType === "mouse") setActive(i);
  };

  return (
    <section id="experience" className="hf-sec hf-sec--dark hf-xp" aria-labelledby="xp-title">
      <div className="hf-sec-head" data-reveal>
        <p className="hf-label">The experience / 01</p>
      </div>

      <div className="hf-xp-intro">
        <h2 id="xp-title" className="hf-display hf-xp-title" data-reveal>
          <span className="hf-xp-line">Six days.</span> <span className="hf-xp-line">One project.</span>{" "}
          <span className="hf-xp-line hf-accent">Real progress.</span>
        </h2>
      </div>

      <div
        className="hf-xp-panel"
        id={`${uid}-panel`}
        role="tabpanel"
        aria-labelledby={`${uid}-tab-${active}`}
        aria-live="polite"
        data-reveal
        style={{ "--d": "180ms" }}
      >
        <span className="hf-xp-num" key={`n${active}`} aria-hidden="true">
          {pad(active + 1)}
        </span>
        <div className="hf-xp-detail" key={`d${active}`}>
          <p className="hf-xp-stage">
            Stage {pad(active + 1)} <span aria-hidden="true">/ 06</span>
          </p>
          <h3 className="hf-xp-name">{stage.name}</h3>
          <p className="hf-xp-text">{stage.text}</p>
        </div>
      </div>

      <div className="hf-xp-track" style={{ "--progress": active / (STAGES.length - 1) }}>
        <div className="hf-xp-rail" data-reveal="line" aria-hidden="true">
          <span className="hf-xp-rail-fill" />
        </div>
        <div className="hf-xp-tabs" role="tablist" aria-label="Six stages of a build" onKeyDown={onKeyDown}>
          {STAGES.map((s, i) => (
            <button
              key={s.name}
              ref={(el) => (tabs.current[i] = el)}
              type="button"
              role="tab"
              id={`${uid}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${uid}-panel`}
              tabIndex={i === active ? 0 : -1}
              className="hf-xp-tab"
              data-done={i < active || undefined}
              data-reveal
              style={{ "--d": `${200 + i * 90}ms` }}
              onClick={() => setActive(i)}
              onPointerEnter={onPointerEnter(i)}
            >
              <span className="hf-xp-tab-num">{pad(i + 1)}</span>
              <span className="hf-xp-tab-name">{s.name}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="hf-xp-note">
        Illustrative — not a daily schedule.
      </p>
    </section>
  );
}
