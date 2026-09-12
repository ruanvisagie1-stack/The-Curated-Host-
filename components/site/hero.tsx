"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { heroSlides } from "@/lib/content";

const SLIDE_DURATION_MS = 6500;

export function Hero() {
  const [active, setActive] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion.current) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex h-[75svh] min-h-[520px] w-full items-end overflow-hidden bg-foreground sm:h-[100svh] sm:min-h-[640px]"
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity ease-out"
          style={{
            opacity: i === active ? 1 : 0,
            transitionDuration: "1800ms",
          }}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Scrim: warm charcoal, tinted from the ink hue rather than pure black */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/25 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-foreground/50 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 sm:pb-28">
        <div className="max-w-xl">
          <h1 className="font-heading text-5xl leading-[1.05] text-primary-foreground sm:text-6xl">
            The Curated Host
          </h1>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            A small, handpicked shelf of South African apartments and
            boutique Airbnb cohosting for owners who want the same care
            given to their own home.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#listings"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className:
                  "border-brass bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
              })}
            >
              View the listings
            </a>
            <a
              href="#host"
              className="text-sm text-primary-foreground/75 underline decoration-brass/60 underline-offset-4 hover:text-primary-foreground"
            >
              Or read about the cohosting service
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-6 z-10 hidden gap-2 sm:right-10 sm:flex">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className="flex h-6 w-8 items-center justify-center"
          >
            <span
              className="h-1 w-full rounded-full transition-colors duration-500"
              style={{
                backgroundColor:
                  i === active
                    ? "var(--brass)"
                    : "color-mix(in oklch, var(--primary-foreground) 35%, transparent)",
              }}
            />
          </button>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-primary-foreground/70 sm:hidden">
        <ArrowDown className="size-5 animate-scroll-cue" aria-hidden="true" />
      </div>
    </section>
  );
}
