"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { useParallax } from "@/hooks/use-parallax";
import { hostStats, site } from "@/lib/content";

const PARALLAX_BUFFER = 24;

export function HostSection() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const parallax = useParallax(ref, PARALLAX_BUFFER);

  return (
    <section id="host" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:px-10 md:grid-cols-2 md:gap-16">
        <div
          ref={ref}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-md"
        >
          <div
            className="absolute inset-x-0"
            style={{
              top: -PARALLAX_BUFFER,
              bottom: -PARALLAX_BUFFER,
              clipPath: inView ? "inset(0 0 0 0)" : "inset(0 0 0 100%)",
              transform: `translateY(${parallax}px)`,
              transition: "clip-path 1100ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Image
              src="/host/host-portrait.jpg"
              alt="Amber blown glass pendant lamp over a marble dining table, with a styled bookshelf behind"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
            Personal, not mass market
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
            Joanne cohosts a small number of South African apartments
            herself, with the same hands on approach she brings to her own
            Airbnb in {site.city}. Unlike large management companies, she takes on
            few enough properties that each one gets her full attention.
          </p>

          <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-border pt-7">
            {hostStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-3xl text-primary sm:text-4xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
