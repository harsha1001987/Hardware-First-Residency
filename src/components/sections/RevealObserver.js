"use client";

import { useEffect } from "react";

// One observer for the whole page: elements marked [data-reveal] get
// .is-in the first time they enter the viewport and are then left alone,
// so nothing replays while scrolling back and forth. The hidden starting
// state only applies once <html> has .hf-js (set in the layout head), so
// content stays visible without JavaScript or with reduced motion.
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("hf-js")) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
