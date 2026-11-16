import Image from "next/image";
import { PARTNERS, X_URL } from "@/config/site";
import HeroPointer from "./HeroPointer";
import "./Hero.css";

// The Demo Day poster as a page: yellow, gridded, the handoff figure on the right
// with the annotated pointer.
export default function Hero() {
  return (
    <section id="top" className="hf-hero hf-gridded" aria-labelledby="hero-title">
      <div className="hf-hero-main">
        <p className="hf-hero-label hf-reveal" style={{ "--d": "0ms" }}>
          <span className="hf-hero-dot" aria-hidden="true" />
          Cohort 02 coming soon
        </p>

        <h1 id="hero-title" className="hf-hero-title">
          <span className="hf-hero-line hf-reveal" style={{ "--d": "80ms" }}>
            Hardware
          </span>{" "}
          <span className="hf-hero-line hf-reveal" style={{ "--d": "170ms" }}>
            <span className="hf-outline">First</span> <span className="hf-hero-tag">Residency</span>
          </span>{" "}
          <span className="hf-hero-sub hf-reveal" style={{ "--d": "270ms" }}>
            A six-day residency that helps hardware builders turn a working project into a product.
          </span>
        </h1>

        <div className="hf-hero-actions hf-reveal" style={{ "--d": "450ms" }}>
          <a
            href={X_URL}
            className="hf-hero-cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Hardware First on X for cohort 02 news (opens in a new tab)"
          >
            Follow us on X
            <span className="hf-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <a href="#cohort-01" className="hf-hero-explore">
            See how cohort 01 went
            <span className="hf-arrow-down" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>

        {/* Who hosts it, quietly, under the buttons. Each logo links to its site. */}
        <div className="hf-hero-hosts hf-reveal" style={{ "--d": "540ms" }}>
          <span className="hf-hero-hosts-label">Hosted by</span>
          {[PARTNERS.pcbCupid, PARTNERS.laksh, PARTNERS.foundingCo].map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="hf-hero-host"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} (opens in a new tab)`}
            >
              <Image src={p.logo} alt="" width={p.w} height={p.h} />
              <span>{p.name}</span>
            </a>
          ))}
        </div>
      </div>

      <figure className="hf-hero-media">
        <Image
          src="/images/handoff.png"
          alt="A robot hand passes a black tile marked HF to a human hand, annotated like a technical drawing."
          width={800}
          height={734}
          sizes="(max-width: 1023px) 100vw, 55vw"
          loading="eager"
          fetchPriority="high"
          className="hf-hero-photo"
        />
      </figure>

      <HeroPointer />
    </section>
  );
}
