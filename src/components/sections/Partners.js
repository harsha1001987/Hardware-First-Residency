import Image from "next/image";
import { PARTNERS, SPONSOR_PARTNERS, SUPPORTERS } from "@/config/site";

// The hosts and venue as black cards, then the poster's credits band.
const CREW = [
  { ...PARTNERS.pcbCupid, role: "Host", line: "Hardware & mentorship", text: "Hardware guidance and mentorship." },
  { ...PARTNERS.laksh, role: "Host", line: "Ecosystem & connections", text: "Mentors and industry connections." },
  { ...PARTNERS.foundingCo, role: "Venue partner", line: "Stay, food & workspace", text: "Hosting the stay, meals and shared workspace in Hyderabad." },
];

function Credit({ org }) {
  const mark = (
    <>
      <Image src={org.mono} alt={`${org.name} logo`} width={org.w} height={org.h} className="hf-crew-credit-logo" />
      {org.wordmark && <span className="hf-crew-wordmark">{org.name}</span>}
    </>
  );
  return (
    <li className="hf-crew-credit">
      {org.href ? (
        <a
          href={org.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${org.name} (opens in a new tab)`}
        >
          {mark}
        </a>
      ) : (
        mark
      )}
    </li>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="hf-sec hf-sec--mineral hf-crew" aria-labelledby="crew-title">
      <div className="hf-crew-head" data-reveal>
        <h2 id="crew-title" className="hf-display hf-crew-title">
          Who&rsquo;s <span className="hf-outline">doing it.</span>
        </h2>
      </div>

      <ul className="hf-crew-cards">
        {CREW.map((p, i) => (
          <li key={p.name} className="hf-crew-card" data-reveal style={{ "--d": `${i * 80}ms` }}>
            <div className="hf-crew-top">
              <a
                href={p.href}
                className="hf-crew-logo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} website (opens in a new tab)`}
              >
                <Image src={p.logo} alt="" width={p.w} height={p.h} />
              </a>
              <span className="hf-crew-role">{p.role}</span>
            </div>
            <p className="hf-crew-line">{p.line}</p>
            <h3 className="hf-crew-name">
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                {p.name} <span aria-hidden="true">↗</span>
              </a>
            </h3>
            <p className="hf-crew-text">{p.text}</p>
          </li>
        ))}
      </ul>

      <div className="hf-crew-band" data-reveal style={{ "--d": "200ms" }}>
        <div className="hf-crew-group">
          <p className="hf-crew-tag">Supported by</p>
          <ul>
            {SUPPORTERS.map((org) => (
              <Credit key={org.name} org={org} />
            ))}
          </ul>
        </div>
        <div className="hf-crew-group">
          <p className="hf-crew-tag">Partners</p>
          <ul>
            {SPONSOR_PARTNERS.map((org) => (
              <Credit key={org.name} org={org} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
