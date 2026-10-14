import Image from "next/image";
import { PARTNERS } from "@/config/site";

const CORE = [
  {
    ...PARTNERS.pcbCupid,
    role: "Hardware & mentorship",
    text: "Hardware guidance and mentorship.",
  },
  {
    ...PARTNERS.laksh,
    role: "Ecosystem & connections",
    text: "Mentors and industry connections.",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="hf-sec hf-sec--mineral hf-who" aria-labelledby="who-title">
      <div className="hf-who-head" data-reveal>
        <p className="hf-label">The people behind the build</p>
        <h2 id="who-title" className="hf-display hf-who-title">
          Who&rsquo;s doing it
        </h2>
      </div>

      {/* One grid: the two organisers side by side, the venue row spanning both below. */}
      <div className="hf-who-row" data-reveal style={{ "--d": "100ms" }}>
        {CORE.map((p) => (
          <article key={p.name} className="hf-who-org">
            <Image src={p.logo} alt={`${p.name} logo`} width={p.w} height={p.h} className="hf-who-logo" />
            <div>
              <p className="hf-who-role">{p.role}</p>
              <h3 className="hf-who-name">{p.name}</h3>
              <p className="hf-who-desc">{p.text}</p>
            </div>
          </article>
        ))}

        <div className="hf-who-venue">
          <p className="hf-who-venue-line">
            <Image
              src={PARTNERS.foundingCo.logo}
              alt=""
              width={PARTNERS.foundingCo.w}
              height={PARTNERS.foundingCo.h}
              className="hf-who-venue-logo"
            />
            <span>
              Venue partner — <strong>The Founding Co.</strong>
            </span>
          </p>
          <p className="hf-made">
            <span>Made with</span>
            <span className="hf-heart" role="img" aria-label="love">
              ♥
            </span>
            <span>for hardware</span>
          </p>
        </div>
      </div>
    </section>
  );
}
