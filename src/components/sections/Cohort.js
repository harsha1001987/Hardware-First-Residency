import Image from "next/image";
import { COHORT_1, COHORT_1_BUILDS, DEMO_DAY_URL, SUPPORTERS } from "@/config/site";

const IMG = "/images/cohort-01";
const T_WORKS = SUPPORTERS.find((s) => s.name === "T-Works");

// Chapter 2: the house and the week inside it. The first two photos are
// The Founding Co.'s own, credited on the page.
const HOUSE = [
  { src: "founding-co-terrace.jpg", w: 1600, h: 1205, caption: "The terrace at The Founding Co. house", credit: "Photo: The Founding Co.", alt: "An open rooftop terrace with green turf and a view over the neighbourhood." },
  { src: "founding-co-living.jpg", w: 1600, h: 1205, caption: "The living room", credit: "Photo: The Founding Co.", alt: "A bright living room with an L-shaped sofa and a television." },
  { src: "residency-floor.jpg", w: 1600, h: 1200, caption: "Building late into the night", alt: "Builders working on the floor late at night, parts and laptops spread around them." },
  { src: "residency-evening.jpg", w: 1600, h: 1200, caption: "Evenings together", alt: "The cohort relaxing together in the living room of the house." },
];

// After Demo Day: everything else, drifting past on its own.
const MORE = [
  { src: "humanoid-hand.jpg", w: 900, h: 1600, tag: "The tendon-actuated humanoid hand", alt: "A black 3D-printed humanoid hand and forearm standing upright." },
  { src: "desk-robot.jpg", w: 900, h: 1600, tag: "The smart desk assistant robot", alt: "A pink desk robot with a small screen showing two eyes, held up in front of the Demo Day poster." },
  { src: "hand-demo.jpg", w: 1600, h: 900, tag: "Showing the humanoid hand", alt: "A builder demonstrates the humanoid arm to a group of visitors." },
  { src: "desk-robot-held.jpg", w: 900, h: 1600, tag: "Demo Day", alt: "A smiling builder holding the pink desk robot." },
  { src: "demo-poster-stall.jpg", w: 1600, h: 900, tag: "The stalls at Demo Day", alt: "Visitors at the stalls beside the Hardware First Demo Day poster." },
  { src: "mentor-intro.jpg", w: 1024, h: 1024, tag: "Demo Day", alt: "A mentor talks with a young builder next to the humanoid hand." },
  { src: "demo-visitors.jpg", w: 1600, h: 900, tag: "Visitors at a stall", alt: "Visitors looking at boards and parts on a stall table." },
  { src: "demo-rig.jpg", w: 1280, h: 960, tag: "A test rig on the bench", alt: "A test rig and tools on a workbench, with people gathered behind it." },
  { src: "handheld-play.jpg", w: 1600, h: 900, tag: "Trying a handheld build", alt: "A young visitor trying a handheld build at a stall." },
  { src: "demo-speaker.jpg", w: 1280, h: 960, tag: "On the bench", alt: "A speaker unit with a touchscreen control panel on a stall bench." },
  { src: "mentor-chat.jpg", w: 1600, h: 900, tag: "Feedback from a mentor", alt: "A mentor in conversation with builders at a workbench." },
  { src: "stall-huddle.jpg", w: 1024, h: 1024, tag: "Around a stall", alt: "A group huddled around a laptop and a build at a stall." },
  { src: "handshake.jpg", w: 1024, h: 1024, tag: "Demo Day", alt: "Two guests shake hands on the Demo Day floor." },
  { src: "demo-day-cafe.jpg", w: 1600, h: 1200, tag: "Everyone, at the end of Demo Day", alt: "The whole group standing together in the T-Works café." },
];

const FACTS = [
  ["Residency", `${COHORT_1.dates}, ${COHORT_1.place}`],
  ["Demo Day", `${COHORT_1.demoDay.date}, ${COHORT_1.demoDay.venue}`],
  ["Builders", "Eight, across seven projects"],
];

// One photo with a caption line under it.
function Shot({ p, sizes, className = "" }) {
  return (
    <figure className={`hf-co-shot ${className}`}>
      <div className="hf-co-shot-img hf-zoom">
        <Image src={`${IMG}/${p.src}`} alt={p.alt} fill sizes={sizes} className="hf-cover" />
      </div>
      <figcaption>
        {p.caption}
        {p.credit && <span>{p.credit}</span>}
      </figcaption>
    </figure>
  );
}

// A chapter: heading and a short intro on the left; the content on the right.
function Chapter({ kicker, title, children, intro }) {
  return (
    <div className="hf-co-ch">
      <div className="hf-co-ch-side" data-reveal>
        <p className="hf-co-ch-kicker">{kicker}</p>
        <h3 className="hf-co-ch-title">{title}</h3>
        {intro}
      </div>
      <div className="hf-co-ch-body">{children}</div>
    </div>
  );
}

// Cohort 01, told in order: the builders, the residency, Demo Day, then the photos.
export default function Cohort() {
  return (
    <section id="cohort-01" className="hf-sec hf-sec--dark hf-co" aria-labelledby="co-title">
      <header className="hf-co-head" data-reveal>
        <p className="hf-label">Cohort 01</p>
        <h2 id="co-title" className="hf-display">
          How cohort 01 went
        </h2>
        <p className="hf-sec-lede">
          Eight builders, six days, one Demo Day. Here is what happened, in order.
        </p>
      </header>

      <dl className="hf-co-facts" data-reveal style={{ "--d": "120ms" }}>
        {FACTS.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <Chapter
        kicker="The builders"
        title="Eight builders, seven projects"
        intro={<p className="hf-co-ch-text">Each builder arrived with a working project and a clear goal for the week.</p>}
      >
        <ol className="hf-co-list">
          {COHORT_1_BUILDS.map((b) => (
            <li key={b.build} className="hf-co-row" data-reveal>
              <div>
                <p className="hf-co-build">{b.build}</p>
                <p className="hf-co-who">{b.who}</p>
              </div>
              <p className="hf-co-what">{b.what}</p>
              {b.video ? (
                <a href={b.video} className="hf-co-link" target="_blank" rel="noopener noreferrer">
                  Watch
                  <span className="hf-arrow" aria-hidden="true">
                    ↗
                  </span>
                  <span className="sr-only"> the {b.build} build video (opens in a new tab)</span>
                </a>
              ) : (
                <span />
              )}
            </li>
          ))}
        </ol>
      </Chapter>

      <Chapter
        kicker="The residency"
        title="Six days at The Founding Co."
        intro={
          <p className="hf-co-ch-text">
            From {COHORT_1.dates.replace(" 2026", "")}, the builders lived and worked together at The Founding Co.
            house in West Hyderabad. They built through the day, often late into the night, and shared meals and
            evenings in between.
          </p>
        }
      >
        <div className="hf-co-house" data-reveal>
          {HOUSE.map((p) => (
            <Shot key={p.src} p={p} sizes="(max-width: 1023px) 50vw, 30vw" />
          ))}
        </div>
      </Chapter>

      <Chapter
        kicker="Demo Day"
        title="Demo Day at T-Works"
        intro={
          <>
            <p className="hf-co-ch-text">
              On {COHORT_1.demoDay.date}, the builders set up stalls at the T-Works office in Hyderabad and showed
              their projects to mentors, partners and visitors. Thank you, T-Works, for hosting us.
            </p>
            <div className="hf-co-ch-links">
              <a href={T_WORKS.href} className="hf-co-link" target="_blank" rel="noopener noreferrer">
                T-Works
                <span className="hf-arrow" aria-hidden="true">
                  ↗
                </span>
                <span className="sr-only"> website (opens in a new tab)</span>
              </a>
              <a href={DEMO_DAY_URL} className="hf-co-link" target="_blank" rel="noopener noreferrer">
                Demo Day page
                <span className="hf-arrow" aria-hidden="true">
                  ↗
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </>
        }
      >
        <div className="hf-co-demo" data-reveal>
          <Shot
            p={{ src: "demo-day-group.jpg", caption: "Builders, mentors and hosts at T-Works", alt: "Builders, mentors and hosts of cohort 01 together at Demo Day in front of the Hardware First poster." }}
            sizes="(max-width: 1023px) 100vw, 60vw"
          />
        </div>
      </Chapter>

      {/* The rest of the week's photos drift past; hovering pauses them. The
          second set only closes the loop, so screen readers skip it. */}
      <div className="hf-co-reel" data-reveal>
        <ul className="hf-co-reel-track" aria-label="More photos from cohort 01">
          {[...MORE, ...MORE].map((p, i) => (
            <li
              key={`${p.src}-${i}`}
              className="hf-co-reel-slide"
              style={{ "--ar": `${p.w} / ${p.h}` }}
              aria-hidden={i >= MORE.length ? "true" : undefined}
            >
              <figure className="hf-zoom">
                <Image
                  src={`${IMG}/${p.src}`}
                  alt={i >= MORE.length ? "" : p.alt}
                  fill
                  sizes="(max-width: 767px) 60vw, 25vw"
                  className="hf-cover"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
