"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { useParallax } from "@/hooks/use-parallax";
import { hostBio } from "@/lib/content";

const PARALLAX_BUFFER = 18;

export function MeetHostSection() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const parallax = useParallax(ref, PARALLAX_BUFFER);

  return (
    <section className="bg-card py-24 sm:py-32">
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
              transform: `translateY(${parallax}px)`,
              transition: "transform 120ms linear",
            }}
          >
            <Image
              src={hostBio.photo}
              alt={hostBio.photoAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1)" : "scale(1.06)",
                filter: inView ? "blur(0px)" : "blur(8px)",
                transition:
                  "opacity 1000ms ease-out, transform 1100ms cubic-bezier(0.16, 1, 0.3, 1), filter 1000ms ease-out",
              }}
            />
          </div>
        </div>

        <div>
          <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
            {hostBio.name}
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-foreground/85 italic">
            “{hostBio.quote}”
          </p>
        </div>
      </div>
    </section>
  );
}
