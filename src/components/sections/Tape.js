// A hazard-tape band laid across a section seam, its words drifting sideways.
// Decorative: every fact on it is stated elsewhere on the page.
const WORDS = [
  "Hardware First Residency",
  "01–06 November 2026",
  "Hyderabad",
  "Eight builders",
  "Six focused days",
  "Bring your project",
];

export default function Tape({ tone = "ink", tilt = -1.6 }) {
  const run = (
    <span className="hf-tape-run">
      {WORDS.map((w) => (
        <span key={w}>
          {w}
          <i />
        </span>
      ))}
    </span>
  );
  return (
    <div className="hf-tape" data-tone={tone} style={{ "--tilt": `${tilt}deg` }} aria-hidden="true">
      <div className="hf-tape-band">
        <div className="hf-tape-track">
          {run}
          {run}
        </div>
      </div>
    </div>
  );
}
