const BRIEF = [
  ["Dates", "1–6 November 2026"],
  ["Location", "Hyderabad, India"],
  ["Cohort", "Eight selected builders"],
  [
    "Includes",
    "Hardware infrastructure, PCB and firmware support, mentorship, industry connections, stay, food, and workspace",
  ],
];

// The black base of the hero, like the details band on the poster.
export default function HeroBrief() {
  return (
    <aside className="hf-brief hf-reveal" style={{ "--d": "600ms" }} aria-label="The build brief">
      <dl>
        {BRIEF.map(([k, v]) => (
          <div key={k} data-key={k.toLowerCase()}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
