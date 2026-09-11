"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Continuous scroll-linked drift for an element already tracked by `ref`.
 * Returns a translateY offset (px) that grows as the element moves away
 * from the vertical center of the viewport, so content drifts gently
 * rather than staying pinned flat to the page while scrolling.
 */
export function useParallax<T extends HTMLElement>(
  ref: RefObject<T | null>,
  intensity = 18,
) {
  const [offset, setOffset] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distance = (viewportCenter - elementCenter) / viewportCenter;
      setOffset(distance * intensity);
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        measure();
        ticking.current = false;
      });
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, intensity]);

  return offset;
}
