import Image from "next/image";
import { APPLY_URL } from "@/config/site";
import HeroBrief from "./HeroBrief";
import HeroPointer from "./HeroPointer";
import "./Hero.css";

// A one-line window that rolls 01–06 and lands on the word (see Hero.css).
// The digits are generated content, so text and screen readers only get "Six".
function Six({ delay }) {
  return (
    <span className="hf-six" style={{ "--six-d": delay }}>
      <span className="hf-six-reel">Six</span>
    </span>
  );
}

// The Demo Day poster as a page: yellow, gridded, the handoff figure on the right
// and the build brief as the black base.
export default function Hero() {
  return (
    <section id="top" className="hf-hero hf-gridded" aria-labelledby="hero-title">
      <div className="hf-hero-main">
        <p className="hf-hero-label hf-reveal" style={{ "--d": "0ms" }}>
          In-person hardware residency
        </p>

        <h1 id="hero-title" className="hf-hero-title">
          <span className="hf-hero-line hf-reveal" style={{ "--d": "80ms" }}>
            Bring your
          </span>{" "}
          <span className="hf-hero-line hf-outline hf-reveal" style={{ "--d": "170ms" }}>
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
          <a href={APPLY_URL} className="hf-hero-cta">
            Apply for residency
            <span className="hf-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <a href="#experience" className="hf-hero-explore">
            Explore the experience
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
        <figcaption className="hf-hero-fig">
          <span>Fig. 01 Handoff, robot to human</span>
          <span>5 joints / 2 fingers / 1 hand</span>
        </figcaption>
      </figure>

      <HeroBrief />
      <HeroPointer />
    </section>
  );
}
