import Image from "next/image";
import { PARTNERS, SPONSOR_PARTNERS, SUPPORTERS } from "@/config/site";

// Who runs it: the three organisations behind the residency, then everyone
// who supported cohort 01, as a calm row of muted logos that reveal one by one.
const RUNS_IT = [PARTNERS.pcbCupid, PARTNERS.laksh, PARTNERS.foundingCo];

const SUPPORT = [...SUPPORTERS, ...SPONSOR_PARTNERS];

export default function Partners() {
  return (
    <section id="partners" className="hf-sec hf-sec--mineral hf-crew" aria-labelledby="crew-title">
      <div className="hf-crew-head" data-reveal>
        <p className="hf-crew-kicker">The people behind it</p>
        <h2 id="crew-title" className="hf-display hf-crew-title">
          Who runs the residency
        </h2>
      </div>

      <ul className="hf-crew-hosts">
        {RUNS_IT.map((p, i) => (
          <li key={p.name} data-reveal style={{ "--d": `${120 + i * 110}ms` }}>
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              <span className="hf-crew-mark">
                <Image src={p.logo} alt="" width={p.w} height={p.h} />
                <span className="hf-crew-name">{p.name}</span>
              </span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="hf-crew-support">
        <p className="hf-crew-kicker" data-reveal>
          With support from
        </p>
        <ul className="hf-crew-logos">
          {SUPPORT.map((org, i) => (
            <li key={org.name} data-reveal style={{ "--d": `${i * 90}ms` }}>
              <a href={org.href} target="_blank" rel="noopener noreferrer" aria-label={`${org.name} (opens in a new tab)`}>
                <Image src={org.logo} alt="" width={org.w} height={org.h} />
                {org.wordmark && <span className="hf-crew-wordmark">{org.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
