"use client";

import { useInView } from "@/hooks/use-in-view";

export function ServiceRow({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className="py-8">
      <div
        className="h-px w-full bg-brass/60 transition-transform ease-out"
        style={{
          transformOrigin: "left",
          transform: inView ? "scaleX(1)" : "scaleX(0)",
          transitionDuration: "900ms",
          transitionDelay: `${index * 90}ms`,
        }}
      />
      <div
        className="mt-7 grid grid-cols-1 gap-3 transition-opacity ease-out md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10"
        style={{
          opacity: inView ? 1 : 0,
          transitionDuration: "700ms",
          transitionDelay: `${index * 90 + 150}ms`,
        }}
      >
        <h3 className="font-heading text-2xl text-foreground sm:text-3xl">
          {title}
        </h3>
        <p className="max-w-prose text-base leading-relaxed text-foreground/75">
          {body}
        </p>
      </div>
    </div>
  );
}
