"use client";

import { useEffect, useId, useRef, useState } from "react";

const BRIEF = [
  ["Format", "In-person hardware residency"],
  ["Dates", "1–6 November 2026"],
  ["Location", "Hyderabad, India"],
  ["Cohort", "Six selected builders"],
  [
    "Includes",
    "Hardware infrastructure, PCB and firmware support, mentorship, industry connections, stay, food, and workspace",
  ],
  ["Deadline", "26 October 2026"],
];

// A disclosure (not a modal): the button toggles a panel and reports its
// state with aria-expanded. Escape or a click outside closes it. On desktop
// the panel floats over the photograph; on small screens it opens inline.
export default function HeroBrief() {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    const onPointer = (e) => {
      if (!root.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={root} className="hf-brief" data-open={open || undefined}>
      <button
        ref={toggle}
        type="button"
        className="hf-brief-toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="hf-brief-plus" aria-hidden="true" />
        The build brief
      </button>

      <div id={id} className="hf-brief-panel" hidden={!open}>
        <p className="hf-brief-title">The build brief</p>
        <dl>
          {BRIEF.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <button
          type="button"
          className="hf-brief-close"
          onClick={() => {
            setOpen(false);
            toggle.current?.focus();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
