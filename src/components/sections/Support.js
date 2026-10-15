import { COMPANY } from "@/config/site";

// Invites supporters; the CTA reuses the PCB Cupid phone line from the footer.
export default function Support() {
  return (
    <section id="support" className="hf-sec hf-sec--dark" aria-labelledby="support-title">
      <div className="hf-inv-head hf-support-head" data-reveal>
        <p className="hf-label">Get involved</p>
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
          <span className="hf-apply-cta-sheen" aria-hidden="true" />
          <span className="hf-apply-cta-label">Partner with Hardware First</span>
          <span className="hf-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
