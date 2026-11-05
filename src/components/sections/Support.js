import { COMPANY } from "@/config/site";

// What a supporter can bring, as named in the copy beside it.
const OFFERS = ["Expertise", "Equipment", "Components", "Financial support"];

// Invites supporters; the CTA reuses the PCB Cupid phone line from the footer.
export default function Support() {
  return (
    <section id="support" className="hf-sec hf-sec--dark" aria-labelledby="support-title">
      <div className="hf-inv-head hf-support-head" data-reveal>
        <h2 id="support-title" className="hf-display hf-inv-title">
          Help builders move beyond the lab.
        </h2>
        <p className="hf-inv-copy">
          Hardware builders need more than tools and workspace. They need engineers, mentors, labs, manufacturing
          expertise, industry connections, and people willing to back them.
        </p>
        <p className="hf-inv-copy">
          If you can offer your time, expertise, equipment, components, services, or financial support, we&rsquo;d love
          to hear from you.
        </p>
        <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hf-apply-cta">
          Partner with Hardware First
          <span className="hf-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>

      <aside className="hf-offer" aria-labelledby="offer-title" data-reveal style={{ "--d": "120ms" }}>
        <p id="offer-title" className="hf-offer-title">
          What you can <span className="hf-outline">offer</span>
        </p>
        <ol className="hf-offer-list">
          {OFFERS.map((o, i) => (
            <li key={o}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {o}
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
}
