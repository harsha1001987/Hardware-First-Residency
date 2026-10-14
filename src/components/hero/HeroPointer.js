"use client";

import { useEffect } from "react";

// Pointer-driven details for the hero, mouse only and never with reduced motion:
//  - the glass button's light follows the pointer across its surface;
//  - the full-bleed photo shifts a few pixels as the pointer crosses the hero.
// Values are written to CSS custom properties; CSS does the rendering.
export default function HeroPointer() {
  useEffect(() => {
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    const button = document.querySelector("#top .hf-liquid");
    const hero = document.querySelector("#top");
    const media = hero?.querySelector(".hf-hero-media");
    const cleanups = [];

    if (button) {
      const move = (e) => {
        const r = button.getBoundingClientRect();
        button.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        button.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      };
      button.addEventListener("pointermove", move);
      cleanups.push(() => button.removeEventListener("pointermove", move));
    }

    if (media) {
      let frame = 0;
      const move = (e) => {
        const r = hero.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
        const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          media.style.setProperty("--ix", `${(-x * 6).toFixed(2)}px`);
          media.style.setProperty("--iy", `${(-y * 5).toFixed(2)}px`);
        });
      };
      const leave = () => {
        cancelAnimationFrame(frame);
        media.style.setProperty("--ix", "0px");
        media.style.setProperty("--iy", "0px");
      };
      hero.addEventListener("pointermove", move);
      hero.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        cancelAnimationFrame(frame);
        hero.removeEventListener("pointermove", move);
        hero.removeEventListener("pointerleave", leave);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
