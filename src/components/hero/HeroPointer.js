"use client";

import { useEffect } from "react";

// The handoff figure drifts a few pixels against the pointer, mouse only and
// never with reduced motion. Values go to CSS custom properties; CSS renders.
export default function HeroPointer() {
  useEffect(() => {
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    const hero = document.querySelector("#top");
    const media = hero?.querySelector(".hf-hero-media");
    if (!media) return;

    let frame = 0;
    const move = (e) => {
      const r = hero.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        media.style.setProperty("--ix", `${(-x * 10).toFixed(2)}px`);
        media.style.setProperty("--iy", `${(-y * 8).toFixed(2)}px`);
      });
    };
    const leave = () => {
      cancelAnimationFrame(frame);
      media.style.setProperty("--ix", "0px");
      media.style.setProperty("--iy", "0px");
    };
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
    };
  }, []);

  return null;
}
