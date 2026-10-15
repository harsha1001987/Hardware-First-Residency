import Image from "next/image";
import { APPLY_URL, COMPANY, PARTNERS } from "@/config/site";
import { ICONS, LAKSH_LINKS, PCB_CUPID_LINKS } from "@/components/SocialIcons";

const DETAILS = [
  ["Residency", "01–06 November 2026"],
  ["Location", "Hyderabad, India"],
  ["Application deadline", "24 October 2026"],
  ["Selection", "Six selected builders"],
];

// The final call: one glass panel (with its own photograph) — headline, button, facts.
export function Apply() {
  return (
    <section id="apply" className="hf-sec hf-apply" aria-labelledby="apply-title">
      <div className="hf-apply-card" data-reveal>
        {/* The photograph lives inside the panel: blurred, grained, darkened, clipped to it. */}
        <div className="hf-apply-media" aria-hidden="true">
          <Image src="/images/workbench.jpg" alt="" fill sizes="(max-width: 1100px) 100vw, 1100px" className="hf-cover" />
        </div>

        <h2 id="apply-title" className="hf-display hf-apply-title">
          <span className="hf-apply-line">Your build deserves</span>{" "}
          <span className="hf-apply-line hf-accent">six focused days.</span>
        </h2>

        <a href={APPLY_URL} className="hf-apply-cta">
          <span className="hf-apply-cta-sheen" aria-hidden="true" />
          <span className="hf-apply-cta-label">Apply for residency</span>
          <span className="hf-arrow" aria-hidden="true">
            ↗
          </span>
        </a>

        <dl className="hf-apply-details">
          {DETAILS.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// A partner's external links in the footer (new tab, labelled for screen readers).
function FootLinks({ label, links }) {
  return (
    <ul className="hf-foot-social" aria-label={label}>
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            className="hf-foot-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${l.aria} (opens in a new tab)`}
          >
            {ICONS[l.icon]}
            <span>{l.label}</span>
            <span className="hf-foot-link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="hf-foot">
      <div className="hf-foot-top">
        <div className="hf-foot-brand">
          <p className="hf-foot-word">
            Hardware <span className="hf-first">First</span> <span className="hf-res">Residency</span>
          </p>
          <p className="hf-foot-by">
            <Image src={PARTNERS.pcbCupid.logo} alt="" width={PARTNERS.pcbCupid.w} height={PARTNERS.pcbCupid.h} />
            PCB Cupid <span>×</span>
            <Image src={PARTNERS.laksh.logo} alt="" width={PARTNERS.laksh.w} height={PARTNERS.laksh.h} />
            Projects by Laksh
          </p>
          <p className="hf-foot-venue">Venue partner — The Founding Co.</p>
        </div>

        {/* PCB Cupid and its contact details: one left-aligned column. */}
        <address className="hf-foot-co">
          <p className="hf-foot-co-name">
            <Image src={PARTNERS.pcbCupid.logo} alt="" width={PARTNERS.pcbCupid.w} height={PARTNERS.pcbCupid.h} />
            PCB Cupid
          </p>
          <p className="hf-foot-tag">{COMPANY.tagline}</p>
          <p className="hf-foot-phone">
            <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>
              {COMPANY.phone}
            </a>
          </p>
          <p className="hf-foot-addr">
            {COMPANY.address[0]}
            <br />
            {COMPANY.address[1]}
          </p>
          <FootLinks label="PCB Cupid links" links={PCB_CUPID_LINKS} />
        </address>

        {/* Projects by Laksh and its links. */}
        <div className="hf-foot-laksh">
          <p className="hf-foot-co-name">
            <Image src={PARTNERS.laksh.logo} alt="" width={PARTNERS.laksh.w} height={PARTNERS.laksh.h} />
            Projects by Laksh
          </p>
          <FootLinks label="Projects by Laksh links" links={LAKSH_LINKS} />
        </div>
      </div>

      <p className="hf-foot-ghost">
        Made with{" "}
        <span className="hf-heart" role="img" aria-label="love">
          ♥
        </span>{" "}
        for hardware
      </p>

      <div className="hf-foot-bottom">
        <p className="hf-foot-love">For the love of hardware.</p>
        <p className="hf-foot-credit">GST: {COMPANY.gst}</p>
      </div>
    </footer>
  );
}
