import { partneringSteps } from "@/lib/content";
import { PartneringStep } from "@/components/site/partnering-step";

export function PartneringSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
          How partnering works
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
          One agreement, full transparency: we manage the listing, the
          guests, and the turnovers, and we earn a share only when your
          property does.
        </p>

        <div className="mt-6">
          {partneringSteps.map((step, i) => (
            <PartneringStep
              key={step.title}
              index={i}
              number={String(i + 1).padStart(2, "0")}
              title={step.title}
              body={step.body}
            />
          ))}
          <div className="h-px w-full bg-border" />
        </div>
      </div>
    </section>
  );
}
