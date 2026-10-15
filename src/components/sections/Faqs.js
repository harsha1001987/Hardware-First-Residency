"use client";

import { useId, useState } from "react";

const FAQS = [
  ["What are the dates?", "1–6 November 2026."],
  ["Where is it?", "Hyderabad, India, at The Founding Co."],
  ["How many builders are selected?", "Six."],
  [
    "Who should apply?",
    "Hardware builders who already have a working model and need engineering, fabrication, mentorship, or industry support to take it closer to a real product.",
  ],
  [
    "Will I leave with a finished product?",
    "The goal is to make meaningful progress from a working project towards a real product. A finished product in six days is not guaranteed.",
  ],
  [
    "What is included?",
    "Lab access, mentorship, engineering support, industry connections, stay, food and workspace.",
  ],
  ["Is travel covered?", "No. Travel costs are not covered."],
  ["Is this a cash grant?", "No. No cash grant and no unlimited component budget."],
  [
    "Are components and fabrication unlimited?",
    "No. Components, fabrication, resources and credits depend on availability.",
  ],
  ["Is there a deposit?", "A refundable deposit of ₹5,000 is required to participate."],
  ["When is the deadline?", "24 October 2026."],
  ["How will I hear back?", "By email."],
];

export default function Faqs() {
  const [open, setOpen] = useState(() => new Set());
  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  const half = Math.ceil(FAQS.length / 2);
  const uid = useId();

  return (
    <section id="faqs" className="hf-sec hf-sec--mineral hf-faq" aria-labelledby="faq-title">
      <h2 id="faq-title" className="hf-display hf-faq-title" data-reveal>
        FAQ&rsquo;s
      </h2>
      {[FAQS.slice(0, half), FAQS.slice(half)].map((col, c) => (
        <div key={c} className="hf-faq-col" data-reveal style={{ "--d": `${c * 90}ms` }}>
          {col.map(([q, a], j) => {
            const i = c * half + j;
            const expanded = open.has(i);
            return (
              <div key={q} className="hf-faq-item" data-open={expanded || undefined}>
                <h3>
                  <button
                    type="button"
                    id={`${uid}-q${i}`}
                    aria-expanded={expanded}
                    aria-controls={`${uid}-a${i}`}
                    onClick={() => toggle(i)}
                    className="hf-faq-q"
                  >
                    <span className="hf-faq-text">{q}</span>
                    <span className="hf-faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`${uid}-a${i}`}
                  role="region"
                  aria-labelledby={`${uid}-q${i}`}
                  className="hf-faq-a"
                  inert={!expanded}
                >
                  <div>
                    <p>{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
}
