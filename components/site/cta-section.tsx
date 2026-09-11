import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/content";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[60vh] scroll-mt-24 items-center overflow-hidden bg-foreground py-24"
    >
      <Image
        src="/section-breaks/camps-bay-mountains.jpg"
        alt="Camps Bay coastline at golden hour, with the Twelve Apostles mountains behind the beachfront"
        fill
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/45 to-foreground/70" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center sm:px-10">
        <h2 className="font-heading text-4xl text-primary-foreground sm:text-5xl">
          Ready when you are
        </h2>
        <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          Browse the listings to book directly, or send a message about your
          own property.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#listings"
            className="rounded-md border border-brass px-6 py-3 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            See all listings
          </a>
          <a
            href={site.whatsappHref("Hi Joanne, I'd like to get in touch.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Message on WhatsApp
          </a>
        </div>

        <p className="mt-8 text-xs text-primary-foreground">
          {site.city} ·{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline decoration-primary-foreground/40 underline-offset-2 transition-colors hover:text-primary-foreground"
          >
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
