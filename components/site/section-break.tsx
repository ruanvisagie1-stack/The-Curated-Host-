"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";

export function SectionBreak({
  image,
  imageAlt,
  text,
}: {
  image: string;
  imageAlt: string;
  text: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section
      ref={ref}
      className="relative flex h-[60vh] min-h-[420px] items-center justify-center overflow-hidden bg-foreground"
    >
      <div
        className="absolute inset-0 transition-transform ease-out"
        style={{
          transform: inView ? "scale(1)" : "scale(1.12)",
          transitionDuration: "1600ms",
        }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-foreground/55" />

      <p
        className="relative z-10 max-w-xl px-6 text-center font-heading text-2xl text-primary-foreground transition-[opacity,transform] ease-out sm:text-3xl"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(16px)",
          transitionDuration: "700ms",
          transitionDelay: "300ms",
        }}
      >
        {text}
        <span
          className="mx-auto mt-5 block h-px bg-brass transition-[width] ease-out"
          style={{
            width: inView ? "3rem" : "0px",
            transitionDuration: "700ms",
            transitionDelay: "700ms",
          }}
        />
      </p>
    </section>
  );
}
