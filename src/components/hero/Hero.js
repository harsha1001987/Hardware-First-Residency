import Image from "next/image";
import { APPLY_URL } from "@/config/site";
import HeroBrief from "./HeroBrief";
import HeroPointer from "./HeroPointer";
import "./Hero.css";

const FACTS = [
  { label: "Dates", value: "01–06 November 2026" },
  { label: "Location", value: "Hyderabad, India" },
  { label: "Cohort", value: "06 selected builders" },
  { label: "Deadline", value: "24 October 2026", urgent: true },
];

// A one-line window that rolls 01–06 and lands on the word (see Hero.css).
// The digits are generated content, so text and screen readers only get "Six".
function Six({ delay }) {
  return (
    <span className="hf-six" style={{ "--six-d": delay }}>
      <span className="hf-six-reel">Six</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hf-hero" aria-labelledby="hero-title">
      <div className="hf-hero-main">
        <p className="hf-hero-label hf-reveal" style={{ "--d": "0ms" }}>
          <span className="hf-hero-dot" aria-hidden="true" />
          In-person hardware residency
        </p>

        <h1 id="hero-title" className="hf-hero-title">
          <span className="hf-hero-line hf-reveal" style={{ "--d": "80ms" }}>
            Bring your
          </span>{" "}
          <span className="hf-hero-line hf-reveal" style={{ "--d": "170ms" }}>
            project.
          </span>{" "}
          <span className="hf-hero-sub hf-reveal" style={{ "--d": "270ms" }}>
            Let&rsquo;s take it closer to a product.
          </span>
        </h1>

        <p className="hf-hero-desc hf-reveal" style={{ "--d": "370ms" }}>
          <Six delay="760ms" /> hardware builders. <Six delay="980ms" /> focused days. 
        </p>

        <div className="hf-hero-actions hf-reveal" style={{ "--d": "450ms" }}>
          <a href={APPLY_URL} className="hf-liquid">
            <span className="hf-liquid-sheen" aria-hidden="true" />
            <span className="hf-liquid-label">Apply for residency</span>
            <span className="hf-liquid-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <HeroBrief />
        </div>

        <a href="#experience" className="hf-hero-explore hf-reveal" style={{ "--d": "520ms" }}>
          Explore the experience
          <span className="hf-arrow-down" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>

      <figure className="hf-hero-media">
        <div className="hf-hero-media-frame">
          <Image
            src="/images/hero-build.jpg"
            alt="Tweezers lowering a microcontroller chip onto a bare prototype circuit board marked v0.2."
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            className="hf-hero-photo"
          />
        </div>
      </figure>

      <dl className="hf-hero-facts hf-reveal" style={{ "--d": "600ms" }}>
        {FACTS.map((f) => (
          <div key={f.label} data-urgent={f.urgent || undefined}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>

      {/* Bends the highlight inside the glass button so it reads like light on water. */}
      <svg className="hf-hero-defs" aria-hidden="true" focusable="false">
        <filter id="hf-water" x="-20%" y="-50%" width="140%" height="200%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.06" numOctaves="2" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="14" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="hf-hero-grain" aria-hidden="true" />
      <HeroPointer />
    </section>
  );
}
