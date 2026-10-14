"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/*
 * The field notebook. Photos from past PCB Cupid events link to the events
 * gallery; photos of past builds link to the builds archive. The two Unsplash
 * reference shots don't depict the residency, so they open in the viewer
 * instead and are labelled "Reference".
 */
const EVENTS_URL = "https://events.pcbcupid.com/gallery/";
const BUILDS_URL = "https://events.pcbcupid.com/builds/";

const PHOTOS = [
  {
    src: "/images/community-group.jpg",
    label: "Past events",
    caption: "Builders and their projects at a past community hardware event.",
    href: EVENTS_URL,
    cta: "See past events",
  },
  {
    src: "/images/community-wearable.jpg",
    label: "Past builds",
    caption: "A wearable prototype: sensor modules and a microcontroller board wired onto a cap.",
    href: BUILDS_URL,
    cta: "See past builds",
  },
  {
    src: "/images/community-demo.jpg",
    label: "Past events",
    caption: "Builders at a demo table with a servo-driven arm prototype.",
    href: EVENTS_URL,
    cta: "See past events",
  },
  {
    src: "/images/breadboard-wired.jpg",
    w: 1600,
    h: 1067,
    label: "Reference",
    caption: "A development board on a breadboard, wired out to several sensor modules.",
  },
  {
    src: "/images/hands-soldering.jpg",
    w: 1600,
    h: 1066,
    label: "Reference",
    caption: "Joining wires with solder over a toroidal coil.",
  },
  {
    src: "/images/build-robot.jpg",
    label: "Past builds",
    caption: "A wheeled robot build: stacked frame, ultrasonic sensors and hand-wired boards.",
    href: BUILDS_URL,
    cta: "See past builds",
  },
];

// Only the reference shots open in the viewer.
const VIEWABLE = PHOTOS.filter((p) => !p.href);

const pad = (n) => String(n).padStart(2, "0");

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const open = index !== null;

  const show = (i, e) => {
    trigger.current = e.currentTarget;
    setIndex(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const step = useCallback(
    (d) => setIndex((i) => (i === null ? i : (i + d + VIEWABLE.length) % VIEWABLE.length)),
    [],
  );

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    // Return focus to the photo that opened the viewer.
    const onClose = () => {
      setIndex(null);
      trigger.current?.focus();
    };
    el.addEventListener("close", onClose);
    return () => el.removeEventListener("close", onClose);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const current = open ? VIEWABLE[index] : null;

  return (
    <section id="builds" className="hf-sec hf-sec--dark hf-gal" aria-labelledby="gal-title">
      <div className="hf-gal-head">
        <p className="hf-label" data-reveal>
          Field notebook
        </p>
        <h2 id="gal-title" className="hf-display hf-gal-title" data-reveal>
          What building hardware looks like <span className="hf-accent">together</span>.
        </h2>
      </div>

      <ul className="hf-gal-grid">
        {PHOTOS.map((p, i) => {
          const media = (
            <>
              <Image
                src={p.src}
                alt={p.caption}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 40vw"
                className="hf-cover"
              />
              <span className="hf-gal-tag">
                {pad(i + 1)} — {p.label}
              </span>
              <span className="hf-gal-inspect" aria-hidden="true">
                <span className="hf-gal-cta-text">{p.href ? p.cta : "Inspect"} </span>
                <span className="hf-gal-ext">{p.href ? "↗" : "+"}</span>
              </span>
            </>
          );
          return (
            <li key={p.src} className={`hf-gal-cell hf-gal-cell--${i + 1}`} data-reveal style={{ "--d": `${i * 70}ms` }}>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hf-gal-btn hf-gal-link hf-zoom"
                  aria-label={`${p.label}: ${p.caption} ${p.cta} on PCB Cupid Events (opens in a new tab)`}
                >
                  {media}
                </a>
              ) : (
                <button
                  type="button"
                  className="hf-gal-btn hf-zoom"
                  onClick={(e) => show(VIEWABLE.indexOf(p), e)}
                  aria-haspopup="dialog"
                  aria-label={`${p.label} photo: ${p.caption} Open in viewer`}
                >
                  {media}
                </button>
              )}
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialog}
        className="hf-lightbox"
        aria-label="Photo viewer"
        onClick={(e) => e.target === dialog.current && close()}
      >
        {current && (
          <div className="hf-lightbox-inner">
            <div className="hf-lightbox-media">
              <Image
                key={current.src}
                src={current.src}
                alt={current.caption}
                width={current.w}
                height={current.h}
                sizes="90vw"
                className="hf-lightbox-img"
              />
            </div>
            <div className="hf-lightbox-bar">
              <p className="hf-lightbox-count">
                {pad(index + 1)} / {pad(VIEWABLE.length)} — {current.label}
              </p>
              <p className="hf-lightbox-caption">
                {current.caption}
              </p>
              <div className="hf-lightbox-ctrl">
                <button type="button" onClick={() => step(-1)} aria-label="Previous photo">
                  ←
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next photo">
                  →
                </button>
                <button type="button" onClick={close} className="hf-lightbox-close" autoFocus>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
