import Image from "next/image";
import { PARTNERS } from "@/config/site";

/*
 * What you get: six benefit cards with everything visible at rest. Each card
 * shows its number, title, a line, the items it covers as tags, and the
 * logos of whoever provides it (each logo links to their site).
 */
const TILES = [
  {
    key: "lab",
    title: "Lab infrastructure",
    boxes: ["3D printing", "Soldering", "SMD rework", "Laser cutting", "Prototyping bench"],
    image: {
      src: "/images/workbench.jpg",
      alt: "A workbench with a soldering station, helping hands with a magnifier, and a breadboard prototype.",
    },
    credit: {
      label: "Laser cutting by SillyCut",
      logos: [{ name: "SillyCut", logo: "/images/sillymonks.png", href: "https://sillycuts.com" }],
    },
  },
  {
    key: "pcb",
    title: "PCB & design support",
    boxes: ["CAD", "Schematic review", "Electronics design", "PCB fabrication"],
    image: {
      src: "/images/pcb.png",
      alt: "Two green microcontroller PCBs on a dark desk with miniature astronaut figurine and potted plant.",
    },
    credit: {
      label: "PCB fabrication by LionCircuits",
      logos: [{ name: "LionCircuits", logo: "/images/lion.png", href: "https://lioncircuits.com" }],
    },
  },
  {
    key: "fw",
    title: "Firmware & engineering",
    boxes: ["Programming", "Firmware debugging", "Dev tools", "Credits"],
    image: {
      src: "/images/hero.jpeg",
      alt: "A green microcontroller board with USB-C connector and pin headers on a dark surface.",
    },
  },
  {
    key: "days",
    title: "Six days of focused building",
    text: "Build alongside seven other selected builders.",
    more: "1–6 November 2026, Hyderabad.",
    image: {
      src: "/images/community-demo.jpg",
      alt: "Builders at a table with a servo-driven arm prototype, laptops open.",
    },
  },
  {
    key: "ind",
    title: "Industry & mentors",
    text: "Engineers, specialists and ecosystem partners.",
    credit: { label: "PCB Cupid × Projects by Laksh", logos: [PARTNERS.pcbCupid, PARTNERS.laksh] },
    image: {
      src: "/images/3.jpg.jpeg",
      alt: "Two builders working together on a wearable prototype wired with jumper leads.",
    },
  },
  {
    key: "stay",
    title: "Stay & food covered",
    text: "Living, meals and workspace on site.",
    credit: { label: "Hosted by The Founding Co.", logos: [PARTNERS.foundingCo] },
    image: {
      src: "/images/community-group.jpg",
      alt: "A large group of builders together at a past community hardware event.",
    },
  },
];

const pad = (n) => String(n).padStart(2, "0");

function Card({ tile, n }) {
  const { key, title, text, more, boxes, image, credit } = tile;
  return (
    <li className={`hf-kit-card hf-kit-card--${key}`} data-reveal style={{ "--d": `${(n - 1) * 60}ms` }}>
      {image && (
        <div className="hf-kit-media">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 100vw, 33vw" className="hf-cover" />
        </div>
      )}
      <div className="hf-kit-body">
        <span className="hf-kit-num">{pad(n)}</span>
        <h3 className="hf-kit-name">{title}</h3>
        {text && <p className="hf-kit-text">{text}</p>}
        {boxes && (
          <ul className="hf-kit-tags" aria-label={`${title} covers`}>
            {boxes.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {more && <p className="hf-kit-more">{more}</p>}
        {credit && (
          <div className="hf-kit-partner">
            {credit.logos.map((org) => (
              <a
                key={org.name}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${org.name} (opens in a new tab)`}
              >
                <Image src={org.logo} alt="" width={80} height={32} />
              </a>
            ))}
            <span>{credit.label}</span>
          </div>
        )}
      </div>
    </li>
  );
}

export default function Toolkit() {
  return (
    <section id="what-you-get" className="hf-sec hf-sec--mineral hf-kit" aria-labelledby="kit-title">
      <div className="hf-kit-head" data-reveal>
        <h2 id="kit-title" className="hf-display hf-kit-title">
          The tools. The people. <span className="hf-outline">The space.</span>
        </h2>
      </div>

      <ul className="hf-kit-grid">
        {TILES.map((t, i) => (
          <Card key={t.key} tile={t} n={i + 1} />
        ))}
      </ul>
    </section>
  );
}
