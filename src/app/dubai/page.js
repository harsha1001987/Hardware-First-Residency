import Image from "next/image";
import Link from "next/link";
import { DUBAI_MEET as M, PARTNERS, SPONSOR_PARTNERS, X_URL } from "@/config/site";
import { SiteFooter } from "@/components/sections/Closing";
import { ICONS } from "@/components/SocialIcons";
import RevealObserver from "@/components/sections/RevealObserver";
import "@/components/sections/sections.css";
import "@/components/hero/Hero.css";
import "./dubai.css";

export const metadata = {
  title: "Dubai Hardware Builders Meet | Hardware First",
  description:
    "Bring your build to RAW Coffee, Al Quoz on Sunday 22 November 2026, 2:30 to 5:30 pm. A small, free afternoon where hardware builders try each other's builds over coffee.",
};

const IMG = "/images/cohort-01";
const LAUNCHD = SPONSOR_PARTNERS.find((p) => p.name === "Launchd");

const BRING = [
  {
    title: "Too big to carry?",
    text: "Bring the part that matters and tell us about the rest when you register.",
    img: "humanoid-hand.jpg",
    alt: "A 3D-printed humanoid hand and forearm standing on a table.",
  },
  {
    title: "Hand it over",
    text: "Let people try it. Watch what they do with it. Ten minutes of that teaches you more than a month alone.",
    img: "handheld-play.jpg",
    alt: "A young visitor trying a handheld build at a stall.",
  },
  {
    title: "No slides, no pitches",
    text: "Just builds, coffee and honest conversation with people who get it.",
    img: "mentor-chat.jpg",
    alt: "Builders in conversation around a workbench.",
  },
];

// Photos from the Hyderabad residency and Demo Day, drifting past.
const REEL = [
  { src: "hand-demo.jpg", w: 1600, h: 900, alt: "A builder demonstrates a humanoid arm to a group of visitors." },
  { src: "desk-robot.jpg", w: 900, h: 1600, alt: "A pink desk robot with a small screen showing two eyes." },
  { src: "demo-visitors.jpg", w: 1600, h: 900, alt: "Visitors looking at boards and parts on a stall table." },
  { src: "stall-huddle.jpg", w: 1024, h: 1024, alt: "A group huddled around a laptop and a build at a stall." },
  { src: "handheld-play.jpg", w: 1600, h: 900, alt: "A young visitor trying a handheld build at a stall." },
  { src: "humanoid-hand.jpg", w: 900, h: 1600, alt: "A black 3D-printed humanoid hand and forearm standing upright." },
  { src: "mentor-chat.jpg", w: 1600, h: 900, alt: "A mentor in conversation with builders at a workbench." },
  { src: "residency-floor.jpg", w: 1600, h: 1200, alt: "Builders working on the floor late at night, parts and laptops around them." },
];

// The venue: the way in, and the café floor from above.
const VENUE = [
  { src: "raw-front.jpg", alt: "The front of RAW Coffee Company in Al Quoz, with a painted coffee-plant mural, umbrellas and plants by the door." },
  { src: "raw-inside.jpg", alt: "Inside RAW Coffee: wooden tables, red and black chairs and the coffee bar, seen from above." },
];

// Small line icons for the event details.
const ICON_PATHS = {
  calendar: <><rect x="3" y="4.5" width="18" height="16" rx="2.5" /><path d="M3 9.5h18M8 2.5v4M16 2.5v4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.2 2" /></>,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.6" /></>,
};

function Icon({ name }) {
  return (
    <svg className="hf-dx-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {ICON_PATHS[name]}
    </svg>
  );
}

function Arrow() {
  return (
    <span className="hf-arrow" aria-hidden="true">
      ↗
    </span>
  );
}

// The one call to action, or a quiet note if the Luma link is ever removed.
function RequestPlace() {
  if (!M.rsvpUrl) return <p className="hf-dx-cta hf-dx-soon">Registration opens soon</p>;
  return (
    <a href={M.rsvpUrl} className="hf-dx-cta" target="_blank" rel="noopener noreferrer">
      Request a place
      <Arrow />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

// Styled after the Luma cover: a dark café, warm bulb light, white type, one yellow.
// Read top to bottom it is one story: the invite, how it started, what to bring,
// where the table is, and a seat at it.
export default function DubaiMeet() {
  return (
    <div className="hf-dx">
      <header className="hf-dx-bar">
        <Link href="/" className="hf-dx-logo" aria-label="Hardware First home">
          H<span>F</span>
        </Link>
        <nav className="hf-dx-nav" aria-label="Dubai meet">
          <Link href="/" className="hf-dx-home">
            About the residency
          </Link>
          <a href={X_URL} className="hf-dx-home hf-dx-nav-x" target="_blank" rel="noopener noreferrer">
            <span className="hf-dx-x">{ICONS.x}</span>
            Follow on X
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          {M.rsvpUrl && (
            <a href={M.rsvpUrl} className="hf-dx-nav-cta" target="_blank" rel="noopener noreferrer">
              Request a place
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </nav>
      </header>

      <main>
        {/* The invite */}
        <section className="hf-dx-hero" aria-labelledby="dx-title">
          <div className="hf-dx-hero-text">
            <p className="hf-dx-kicker hf-reveal">Bring your build</p>
            <h1 id="dx-title" className="hf-dx-title hf-reveal" style={{ "--d": "80ms" }}>
              <span>Hardware</span>{" "}
              <span>
                <span className="hf-dx-outline">Builders</span> Meet{" "}
                <span className="hf-dx-tag">Dubai</span>
              </span>
            </h1>
            <p className="hf-dx-when hf-reveal" style={{ "--d": "170ms" }}>
              <span>
                <Icon name="calendar" />
                Sun, 22 Nov
              </span>
              <span>
                <Icon name="clock" />
                2:30 to 5:30 pm
              </span>
              <span>
                <Icon name="pin" />
                RAW Coffee, Al Quoz, Dubai
              </span>
            </p>
            <p className="hf-dx-sub hf-reveal" style={{ "--d": "250ms" }}>
              That thing you&rsquo;ve been building deserves more than one pair of hands on it.
            </p>
            <div className="hf-dx-actions hf-reveal" style={{ "--d": "330ms" }}>
              <RequestPlace />
            </div>
            <div className="hf-dx-hosts-row hf-reveal" style={{ "--d": "420ms" }}>
              <span className="hf-dx-hosts-label">Hosted by</span>
              {[PARTNERS.laksh].map((p) => (
                <a key={p.name} href={p.href} className="hf-dx-host" target="_blank" rel="noopener noreferrer">
                  <Image src={p.logo} alt="" width={p.w} height={p.h} />
                  <span>{p.name}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
              <span className="hf-dx-hosts-sep" aria-hidden="true" />
              <span className="hf-dx-hosts-label">Ecosystem partner</span>
              <a href={LAUNCHD.href} className="hf-dx-host" target="_blank" rel="noopener noreferrer">
                <Image src={LAUNCHD.mono} alt="" width={LAUNCHD.w} height={LAUNCHD.h} className="hf-dx-host-mono" />
                <span>The Launchd</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <figure className="hf-dx-hero-photo">
            <Image
              src="/images/dubai/dubai-skyline.jpg"
              alt="Downtown Dubai at dusk, with the Burj Khalifa lit up above the city."
              fill
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              className="hf-cover"
            />
          </figure>
        </section>

        {/* How it started */}
        <section className="hf-sec hf-sec--dark hf-dx-sec hf-dx-why" aria-labelledby="dx-why">
          <div className="hf-dx-head" data-reveal>
            <p className="hf-label">What this is</p>
            <h2 id="dx-why" className="hf-display">
              12 hardware founders around one table
            </h2>
            <figure className="hf-dx-why-fig">
              <div className="hf-dx-why-img hf-zoom">
              <Image
                src={`${IMG}/demo-day-group.jpg`}
                alt="Builders, mentors and hosts at a Hardware First event in Hyderabad."
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="hf-cover"
              />
            </div>
              <figcaption>Demo Day</figcaption>
            </figure>
          </div>
          <div className="hf-dx-why-body" data-reveal style={{ "--d": "120ms" }}>
            <p>
              Hardware First exists to help builders turn what they make into products people actually use. And that
              starts with getting your build into other people&rsquo;s hands.
            </p>
            <p className="hf-dx-turn">
              So this Sunday, we&rsquo;re bringing 12 hardware founders together around one table at RAW Coffee. Everyone
              brings what they&rsquo;re building, puts it on the table and lets the others try it.
            </p>
            <p>An afternoon of real builds, good coffee and honest feedback from people who build too.</p>
            <div className="hf-dx-links">
              <Link href="/" className="hf-co-link">
                More about Hardware First
                <span className="hf-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="hf-co-reel hf-dx-reel" data-reveal>
            <ul className="hf-co-reel-track" aria-label="Photos from the Hyderabad residency">
              {[...REEL, ...REEL].map((p, i) => (
                <li
                  key={`${p.src}-${i}`}
                  className="hf-co-reel-slide"
                  style={{ "--ar": `${p.w} / ${p.h}` }}
                  aria-hidden={i >= REEL.length ? "true" : undefined}
                >
                  <figure className="hf-zoom">
                    <Image
                      src={`${IMG}/${p.src}`}
                      alt={i >= REEL.length ? "" : p.alt}
                      fill
                      sizes="(max-width: 767px) 60vw, 25vw"
                      className="hf-cover"
                    />
                  </figure>
                </li>
              ))}
            </ul>
          </div>
          <p className="hf-dx-reel-caption">Pictures from Hardware First cohort 01, Hyderabad</p>
        </section>

        {/* What to bring */}
        <section className="hf-sec hf-sec--dark hf-dx-sec" aria-labelledby="dx-bring">
          <div className="hf-dx-head" data-reveal>
            <p className="hf-label">What to bring</p>
            <h2 id="dx-bring" className="hf-display">
              Bring it, whatever state it&rsquo;s in
            </h2>
            <p className="hf-sec-lede">
              Finished, half-built or held together with tape. If it&rsquo;s real and you made it, it belongs on the
              table.
            </p>
          </div>
          <ul className="hf-dx-points">
            {BRING.map((p, i) => (
              <li key={p.title} data-reveal style={{ "--d": `${i * 110}ms` }}>
                <figure className="hf-dx-point-img hf-zoom">
                  <Image src={`${IMG}/${p.img}`} alt={p.alt} fill sizes="(max-width: 1023px) 100vw, 33vw" className="hf-cover" />
                </figure>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Where the table is */}
        <section id="where" className="hf-sec hf-sec--dark hf-dx-sec hf-dx-where" aria-labelledby="dx-where">
          <div className="hf-dx-head" data-reveal>
            <p className="hf-label">Where we&rsquo;ll be</p>
            <h2 id="dx-where" className="hf-display">
              Up on the mezzanine at RAW Coffee
            </h2>
            <p className="hf-sec-lede">Al Quoz 1. {M.directions}</p>
            <a href={M.mapUrl} className="hf-co-link hf-dx-map" target="_blank" rel="noopener noreferrer">
              <Icon name="pin" />
              Open in Google Maps
              <Arrow />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <p className="hf-dx-thanks">
              RAW kindly opened up its mezzanine for our first Dubai meet. Thank you, Kim and the RAW team.
            </p>
          </div>

          <div className="hf-dx-venue" data-reveal style={{ "--d": "120ms" }}>
            {VENUE.map((p) => (
              <figure key={p.src} className="hf-dx-venue-shot">
                <div className="hf-zoom">
                  <Image
                    src={`/images/dubai/${p.src}`}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 450px"
                    className="hf-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* A seat at the table */}
        <section id="join" className="hf-sec hf-sec--dark hf-dx-join" aria-labelledby="dx-join">
          <figure className="hf-dx-join-photo">
            <Image
              src="/images/dubai/cafe-table.jpg"
              alt="Two builders at a wooden café table under warm bulbs, with coffee, a circuit board, a small robot arm and a 3D-printed part between them."
              fill
              sizes="100vw"
              className="hf-cover"
            />
          </figure>
          <div className="hf-dx-join-inner" data-reveal>
            <p className="hf-dx-kicker">Pull up a chair</p>
            <h2 id="dx-join" className="hf-display">
              Save your seat at the table
            </h2>
            <p className="hf-sec-lede">
              Small on purpose, so every build gets a proper look. Tell us what you&rsquo;re bringing and we&rsquo;ll
              confirm by email.
            </p>
            <div className="hf-dx-actions">
              <RequestPlace />
            </div>
            <p className="hf-dx-signoff">See you Sunday.</p>
            <p className="hf-dx-hosts">
              Brought to you by <strong>Capt. Venkat</strong> and{" "}
              <a href={PARTNERS.laksh.href} target="_blank" rel="noopener noreferrer">
                Lakshveer Rao
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              , the youngest hardware and physical AI founder and hacker house resident.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <RevealObserver />
    </div>
  );
}
