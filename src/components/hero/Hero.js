import Image from "next/image";
import { PARTNERS } from "@/config/site";
import HeroBrief from "./HeroBrief";
import HeroPointer from "./HeroPointer";
import "./Hero.css";

// A one-line window that rolls 01 up to `to` and lands on the word (see Hero.css).
// The digits are generated content, so text and screen readers only get the word.
function Count({ word, to, delay }) {
  return (
    <span className="hf-count" style={{ "--count-d": delay, "--to": to }}>
      <span className="hf-count-reel" data-to={to}>
        {word}
      </span>
    </span>
  );
}

// The Demo Day poster as a page: yellow, gridded, the handoff figure on the right
// and the build brief as the black base.
export default function Hero() {
  return (
    <section id="top" className="hf-hero hf-gridded" aria-labelledby="hero-title">
      <div className="hf-hero-main">
        {/* The poster's top line: hosts and venue, each linking to their site. */}
        <div className="hf-hero-hosts hf-reveal" style={{ "--d": "0ms" }}>
          {[PARTNERS.pcbCupid, PARTNERS.laksh, PARTNERS.foundingCo].map((p, i) => (
            <span key={p.name} className="hf-hero-host">
              {i > 0 && (
                <span className="hf-hero-x" aria-hidden="true">
                  ×
                </span>
              )}
              <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} (opens in a new tab)`}>
                <Image src={p.logo} alt="" width={p.w} height={p.h} />
                {p === PARTNERS.foundingCo && <span className="hf-hero-host-name">{p.name}</span>}
              </a>
            </span>
          ))}
          <span className="hf-hero-label">In-person hardware residency</span>
        </div>

        <h1 id="hero-title" className="hf-hero-title">
          <span className="hf-hero-line hf-reveal" style={{ "--d": "80ms" }}>
            Hardware
          </span>{" "}
          <span className="hf-hero-line hf-reveal" style={{ "--d": "170ms" }}>
            <span className="hf-outline">First</span> <span className="hf-hero-tag">Residency</span>
          </span>{" "}
          <span className="hf-hero-sub hf-reveal" style={{ "--d": "270ms" }}>
            Bring your project. Let&rsquo;s take it closer to a product.
          </span>
        </h1>

        <p className="hf-hero-desc hf-reveal" style={{ "--d": "370ms" }}>
          <Count word="Eight" to={8} delay="760ms" /> hardware builders. <Count word="Six" to={6} delay="980ms" />{" "}
          focused days.
        </p>

        <div className="hf-hero-actions hf-reveal" style={{ "--d": "450ms" }}>
          <p className="hf-hero-cta hf-hero-cta--closed">Applications closed</p>
          <a href="#what-you-get" className="hf-hero-explore">
            See what you get
            <span className="hf-arrow-down" aria-hidden="true">
              ↓
            </span>
          </a>
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

      <HeroBrief />
      <HeroPointer />
    </section>
  );
}
