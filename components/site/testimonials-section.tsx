"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { testimonials } from "@/lib/content";

const ROTATE_MS = 7000;
const FADE_MS = 400;

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function TestimonialsSection() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(prefersReducedMotion);
  const [autoplayEnabled] = useState(() => !prefersReducedMotion());
  const indexRef = useRef(0);
  const pausedRef = useRef(paused);
  const fadeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const goTo = useCallback((next: number) => {
    setVisible(false);
    if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    fadeTimeout.current = setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, FADE_MS);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const interval = setInterval(() => {
      if (pausedRef.current) return;
      goTo((indexRef.current + 1) % testimonials.length);
    }, ROTATE_MS);
    return () => clearInterval(interval);
  }, [goTo]);

  useEffect(() => {
    return () => {
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    };
  }, []);

  const togglePaused = () => {
    setPaused((current) => {
      pausedRef.current = !current;
      return !current;
    });
  };

  const active = testimonials[index];

  return (
    <section
      className="bg-background py-24 sm:py-32"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = paused;
      }}
    >
      <div
        ref={ref}
        className="mx-auto max-w-3xl px-6 text-center sm:px-10"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(18px)",
          transition: "opacity 800ms ease-out, transform 800ms ease-out",
        }}
      >
        <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
          Stays people talk about
        </h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/75 sm:text-lg">
          Real reviews, left on Airbnb by real guests.
        </p>

        <div
          className="mt-14 flex min-h-[200px] flex-col items-center justify-center sm:min-h-[160px]"
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-out`,
          }}
        >
          <p className="max-w-2xl text-xl leading-relaxed text-foreground/90 italic sm:text-2xl">
            “{active.quote}”
          </p>
          <div className="mt-6 flex items-baseline justify-center gap-2">
            <span className="text-sm font-semibold text-foreground">
              {active.name}
            </span>
            <span className="text-xs text-muted-foreground">
              · {active.source}
            </span>
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing testimonial {index + 1} of {testimonials.length}, from{" "}
          {active.name}
        </p>

        {autoplayEnabled && (
          <button
            type="button"
            onClick={togglePaused}
            aria-label={paused ? "Resume testimonials" : "Pause testimonials"}
            className="mt-8 inline-flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brass hover:text-foreground"
          >
            {paused ? (
              <Play className="size-4" aria-hidden="true" />
            ) : (
              <Pause className="size-4" aria-hidden="true" />
            )}
          </button>
        )}
      </div>
    </section>
  );
}
