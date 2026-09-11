import { servicePillars } from "@/lib/content";
import { ServiceRow } from "@/components/site/service-row";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
          What makes the cohosting different
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
          Boutique means quality over quantity: a small number of homes,
          each handled with the same urgency and thoughtfulness its owner
          would give it. Here is everything that covers.
        </p>

        <div className="mt-6">
          {servicePillars.map((pillar, i) => (
            <ServiceRow
              key={pillar.title}
              title={pillar.title}
              body={pillar.body}
              index={i}
            />
          ))}
          <div className="h-px w-full bg-border" />
        </div>
      </div>
    </section>
  );
}
