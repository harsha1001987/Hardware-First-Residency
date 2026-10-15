"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { APPLY_URL, NAV_LINKS, PARTNERS } from "@/config/site";
import "./SiteNav.css";

// "Hosted by" with both organisers' logos (shown in the bar and in the menu).
function HostedBy({ className }) {
  return (
    <p className={`hf-nav-hosted ${className}`}>
      <span className="hf-nav-hosted-label">Hosted by</span>
      {[PARTNERS.pcbCupid, PARTNERS.laksh].map((p) => (
        <Image key={p.name} src={p.logo} alt={p.name} title={p.name} width={p.w} height={p.h} />
      ))}
    </p>
  );
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [current, setCurrent] = useState("");
  const panelId = useId();

  // Marks the nav link whose section is crossing the upper part of the viewport.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setCurrent(`#${e.target.id}`);
          else if (e.boundingClientRect.top > 0) {
            // Scrolled back above this section: fall back to the previous one.
            const i = sections.indexOf(e.target);
            setCurrent((c) => (c === `#${e.target.id}` ? (i > 0 ? `#${sections[i - 1].id}` : "") : c));
          }
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Transparent over the hero; gains a solid midnight surface once the hero
  // has scrolled away so the links stay legible over light sections.
  useEffect(() => {
    const hero = document.getElementById("top");
    const onScroll = () => {
      const limit = hero ? hero.offsetHeight - 80 : 80;
      setSolid(window.scrollY > limit);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1200 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="hf-nav" data-solid={solid || open || undefined}>
      <nav className="hf-nav-bar" aria-label="Primary">
        <a href="#top" className="hf-nav-brand" onClick={close}>
          <span className="hf-nav-wordmark">
            Hardware <span className="hf-first">First</span>
          </span>
          <span className="hf-nav-descriptor hf-res">Residency</span>
        </a>

        <ul className="hf-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hf-link"
                aria-current={current === link.href ? "true" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hf-nav-actions">
          <HostedBy className="hf-nav-hosted--bar" />
          <a href={APPLY_URL} className="hf-nav-apply">
            <span className="hf-nav-apply-long">Apply for residency</span>
            <span className="hf-nav-apply-short">Apply</span>
            <span className="hf-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <button
            type="button"
            className="hf-nav-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <div id={panelId} className="hf-nav-panel" hidden={!open}>
        <HostedBy className="hf-nav-hosted--panel" />
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
