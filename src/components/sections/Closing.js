import Image from "next/image";
import { COMPANY, PARTNERS, X_HANDLE, X_URL } from "@/config/site";
import { ICONS, LAKSH_LINKS, PCB_CUPID_LINKS } from "@/components/SocialIcons";

const HF_LINKS = [{ href: X_URL, icon: "x", label: `@${X_HANDLE}`, aria: `Hardware First on X, @${X_HANDLE}` }];

// The end of the story: what's next for builders, and how others can help.
export function Apply() {
  return (
    <section id="apply" className="hf-sec hf-next" aria-labelledby="apply-title">
      <div className="hf-next-main" data-reveal>
        <p className="hf-label">What&rsquo;s next</p>
        <h2 id="apply-title" className="hf-display">
          Cohort 02 starts soon
        </h2>
        <p className="hf-sec-lede">
          We will share the dates and open applications on X first. Follow us to hear when it opens.
        </p>
        <a
          href={X_URL}
          className="hf-next-cta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow @${X_HANDLE} on X (opens in a new tab)`}
        >
          Follow us on X
          <span className="hf-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>

      <div className="hf-next-help" data-reveal style={{ "--d": "120ms" }}>
        <h3 className="hf-next-help-title">Want to help?</h3>
        <p>
          We are looking for people who can offer expertise, equipment, components or funding for the next cohort.
        </p>
        <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hf-next-call">
          Call {COMPANY.phone}
        </a>
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
          <FootLinks label="Hardware First links" links={HF_LINKS} />
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
    </footer>
  );
}
