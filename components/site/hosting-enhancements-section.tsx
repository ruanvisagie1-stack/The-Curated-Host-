"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { useParallax } from "@/hooks/use-parallax";
import { serviceEnhancements } from "@/lib/content";

const PARALLAX_BUFFER = 24;

export function HostingEnhancementsSection() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const parallax = useParallax(ref, PARALLAX_BUFFER);

  return (
    <section className="bg-card py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:px-10 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
            The details that lift a listing
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
            Optional extras owners can add on top of everyday cohosting, for
            a more polished guest experience and a stronger listing.
          </p>

          <ul className="mt-9 flex flex-col gap-4 border-t border-border pt-7">
            {serviceEnhancements.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brass" />
                <span className="text-base leading-relaxed text-foreground/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={ref}
          className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-md md:order-2"
        >
          <div
            className="absolute inset-x-0"
            style={{
              top: -PARALLAX_BUFFER,
              bottom: -PARALLAX_BUFFER,
              clipPath: inView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
              transform: `translateY(${parallax}px)`,
              transition: "clip-path 1100ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Image
              src="/sub-images/hosting-enhancements.jpg"
              alt="Styled entryway with a curved mirror, layered pendant lighting, and a console dressed with branches and sculptural objects"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
