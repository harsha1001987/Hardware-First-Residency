import Image from "next/image";
import { SPONSOR_PARTNERS, SUPPORTERS } from "@/config/site";

function SponsorSlot({ org, kind }) {
  const logo = (
    <>
      <Image
        src={org.logo}
        alt={`${org.name} logo`}
        width={org.w}
        height={org.h}
        className={`hf-spn-logo hf-spn-logo--${kind}`}
      />
      {kind === "partner" && <span className="hf-spn-name">{org.name}</span>}
    </>
  );

  return (
    <li className={`hf-spn-slot hf-spn-slot--${kind}`}>
      {org.href ? (
        <a href={org.href} target="_blank" rel="noopener noreferrer" className="hf-spn-link">
          {logo}
        </a>
      ) : (
        logo
      )}
    </li>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="hf-sec hf-sec--mineral hf-spn" aria-label="Supporters and partners">
      <div className="hf-spn-row" data-reveal>
        <div className="hf-spn-group hf-spn-group--support">
          <p className="hf-label">Supported by</p>
          <ul className="hf-spn-slots">
            {SUPPORTERS.map((org) => (
              <SponsorSlot key={org.name} org={org} kind="support" />
            ))}
            <li className="hf-spn-slot hf-spn-slot--tba">More supporters to be announced</li>
          </ul>
        </div>

        <div className="hf-spn-group hf-spn-group--partners">
          <p className="hf-label">Partners</p>
          <ul className="hf-spn-slots">
            {SPONSOR_PARTNERS.map((org) => (
              <SponsorSlot key={org.name} org={org} kind="partner" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
