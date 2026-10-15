"use client";

import { useId, useState } from "react";

// Expectation cards: titles at rest, details on click. One open at a time.
const ITEMS = [
  {
    title: "Your working build",
    text: "A working hardware model, however rough or incomplete. Not just an idea.",
  },
  {
    title: "Your tools & materials",
    text: "The components, boards, schematics and designs your project needs.",
  },
  {
    title: "Your curiosity",
    text: "Experiment, troubleshoot, and help fellow builders. Six people share one workspace.",
  },
  {
    title: " security deposit",
    text: "A refundable deposit of ₹5,000 is required to participate.",
    deposit: true,
  },
];

export default function Bring() {
  const [open, setOpen] = useState(-1);
  const uid = useId();

  return (
    <section id="what-to-bring" className="hf-sec hf-sec--dark hf-inv" aria-labelledby="inv-title">
      <div className="hf-inv-head" data-reveal>
        <p className="hf-label">What to bring</p>
        <h2 id="inv-title" className="hf-display hf-inv-title">
          What we expect <span className="hf-accent">from you</span>
        </h2>
        <p className="hf-inv-copy">Come ready to build, contribute, collaborate, and make meaningful progress.</p>
      </div>

      <ul className="hf-inv-grid">
        {ITEMS.map((item, i) => {
          const expanded = open === i;
          return (
            <li
              key={item.title}
              className="hf-inv-item"
              data-open={expanded || undefined}
              data-deposit={item.deposit || undefined}
              data-reveal
              style={{ "--d": `${i * 70}ms` }}
            >
              <h3 className="hf-inv-h">
                <button
                  type="button"
                  id={`${uid}-b${i}`}
                  className="hf-inv-btn"
                  aria-expanded={expanded}
                  aria-controls={`${uid}-${i}`}
                  onClick={() => setOpen(expanded ? -1 : i)}
                >
                  <span className="hf-inv-num">0{i + 1}</span>
                  <span className="hf-inv-name">{item.title}</span>
                  <span className="hf-inv-icon" aria-hidden="true" />
                </button>
              </h3>
              <div
                id={`${uid}-${i}`}
                role="region"
                aria-labelledby={`${uid}-b${i}`}
                className="hf-inv-more"
                inert={!expanded}
              >
                <div>
                  <p>{item.text}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
