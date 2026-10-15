const BRIEF = [
  ["Format", "In-person hardware residency"],
  ["Dates", "1–6 November 2026"],
  ["Location", "Hyderabad, India"],
  ["Cohort", "Six selected builders"],
  [
    "Includes",
    "Hardware infrastructure, PCB and firmware support, mentorship, industry connections, stay, food, and workspace",
  ],
  ["Deadline", "24 October 2026"],
];

// Always open. On desktop the panel floats over the photograph; on small
// screens it sits inline beneath the CTA.
export default function HeroBrief() {
  return (
    <div className="hf-brief">
      <aside className="hf-brief-panel" aria-labelledby="hf-brief-title">
        <p id="hf-brief-title" className="hf-brief-title">
          The build brief
        </p>
        <dl>
          {BRIEF.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </div>
  );
}
