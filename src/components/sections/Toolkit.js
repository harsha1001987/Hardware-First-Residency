"use client";

import Image from "next/image";
import { useState } from "react";

/*
 * What you get — an asymmetric workbench: all six benefits are on screen at
 * once. Every tile shares one component: a top row (number + toggle mark),
 * the title and line that are always visible, and a reveal that fades up on
 * hover, keyboard focus, or a tap (touch screens). Tiles 01, 02 and 03
 * reveal their item lists as small bordered boxes.
 */
const TILES = [
  {
    key: "lab",
    title: "Lab infrastructure",
    boxes: ["3D printing", "Soldering", "SMD rework", "Laser cutting", "Prototyping bench"],
    hint: "tools",
    more: "Shared equipment, subject to availability.",
    image: {
      src: "/images/workbench.jpg",
      alt: "A workbench with a soldering station, helping hands with a magnifier, and a breadboard prototype.",
      sizes: "(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 42vw",
    },
    partner: {
      src: "/images/sillymonks.png",
      alt: "SillyMonks — laser cutting and CAD services",
      label: "Laser cutting by SillyCut",
    },
  },
  {
    key: "pcb",
    title: "PCB & design support",
    hint: "services",
    boxes: ["CAD", "Schematic review", "Electronics design", "PCB fabrication"],
    image: {
      src: "/images/pcb.png",
      alt: "Two green microcontroller PCBs on a dark desk with miniature astronaut figurine and potted plant.",
      sizes: "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 34vw",
    },
    partner: {
      src: "/images/lion.png",
      alt: "LionCircuits — PCB fabrication partner",
      label: "PCB fabrication by LionCircuits",
    },
  },
  {
    key: "fw",
    title: "Firmware & engineering",
    hint: "services",
    boxes: ["Programming", "Firmware debugging", "Dev tools", "Credits*"],
    more: "*Credits where available.",
  },
  {
    key: "days",
    title: "Six days of focused building",
    text: "Build alongside five other selected builders.",
    more: "1–6 November 2026, Hyderabad.",
    days: true,
    image: {
      src: "/images/community-demo.jpg",
      alt: "Builders at a table with a servo-driven arm prototype, laptops open.",
      sizes: "(max-width: 767px) 100vw, 22vw",
    },
  },
  {
    key: "ind",
    title: "Industry & mentors",
    text: "Engineers, specialists and ecosystem partners.",
    more: "Via PCB Cupid × Projects by Laksh.",
  },
  {
    key: "stay",
    title: "Stay & food covered",
    text: "Living, meals and workspace on site.",
    more: "Hosted by The Founding Co.",
  },
];

const pad = (n) => String(n).padStart(2, "0");

function Tile({ tile, n, open, onToggle }) {
  const { key, title, text, more, boxes, hint, days, image, partner } = tile;
  return (
    <article
      className={`hf-tile hf-tile--${key}`}
      tabIndex={0}
      aria-label={`${pad(n)} — ${title}`}
      data-open={open || undefined}
      data-reveal
      style={{ "--d": `${(n - 1) * 60}ms` }}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      {image && (
        <div className={`hf-tile-media${key === "days" ? " hf-tile-media--side" : ""}`}>
          <Image src={image.src} alt={image.alt} fill sizes={image.sizes} className="hf-cover" />
        </div>
      )}

      <div className="hf-tile-body">
        <div className="hf-tile-top">
          <span className="hf-tile-num">{pad(n)}</span>
          <span className="hf-tile-mark" aria-hidden="true" />
        </div>

        <h3 className="hf-tile-name">{title}</h3>
        {text && <p className="hf-tile-text">{text}</p>}
        {days && (
          <ol className="hf-tile-days" aria-label="1 to 6 November 2026">
            {[1, 2, 3, 4, 5, 6].map((d) => (
              <li key={d} style={{ "--i": d }} />
            ))}
          </ol>
        )}
        {boxes && (
          <p className="hf-tile-hint" aria-hidden="true">
            + {boxes.length} {hint}
          </p>
        )}

        <div className="hf-tile-reveal">
          <div>
            {boxes && (
              <ul className="hf-tile-boxes" aria-label={`${title} covers`}>
                {boxes.map((b, i) => (
                  <li key={b} style={{ "--i": i }}>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {more && <p className="hf-tile-more">{more}</p>}
          </div>
        </div>
        {partner && (
          <div className="hf-tile-partner">
            <Image
              src={partner.src}
              alt={partner.alt}
              width={80}
              height={32}
              className="hf-tile-partner-logo"
            />
            <span className="hf-tile-partner-label">{partner.label}</span>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Toolkit() {
  const [open, setOpen] = useState(null);

  return (
    <section id="what-you-get" className="hf-sec hf-sec--mineral hf-kit" aria-labelledby="kit-title">
      <div className="hf-kit-head" data-reveal>
        <p className="hf-label">What you get</p>
        <h2 id="kit-title" className="hf-display hf-kit-title">
          The tools. The people. The space.
        </h2>
      </div>

      <div className="hf-bench">
        {TILES.map((t, i) => (
          <Tile
            key={t.key}
            tile={t}
            n={i + 1}
            open={open === t.key}
            onToggle={() => setOpen((o) => (o === t.key ? null : t.key))}
          />
        ))}
      </div>

      <p className="hf-kit-note">
        <strong>Note</strong> Components, fabrication, resources and credits depend on availability.
      </p>
    </section>
  );
}
