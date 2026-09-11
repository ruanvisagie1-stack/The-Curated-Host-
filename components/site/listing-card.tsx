"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MessageCircle, Star } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { site, type Listing } from "@/lib/content";

export function ListingCard({
  listing,
  index,
  isActive = true,
}: {
  listing: Listing;
  index: number;
  isActive?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const [hovered, setHovered] = useState(false);

  const scale = !inView ? 1 : isActive ? 1 : 0.93;
  const lift = inView && hovered ? -4 : 0;
  const baseY = !inView ? 28 : 0;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col overflow-hidden rounded-md border border-border bg-card transition-[opacity,transform,box-shadow] ease-out"
      style={{
        transitionDuration: inView ? "500ms" : "700ms",
        transitionDelay: inView ? "0ms" : `${index * 120}ms`,
        opacity: !inView ? 0 : isActive ? 1 : 0.55,
        transform: `translateY(${baseY + lift}px) scale(${scale})`,
        boxShadow:
          inView && hovered
            ? "0 20px 40px -12px color-mix(in oklch, var(--foreground) 25%, transparent)"
            : "0 1px 2px color-mix(in oklch, var(--foreground) 6%, transparent)",
      }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={listing.image}
          alt={listing.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="font-heading text-2xl text-foreground">
            {listing.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {listing.location}
          </p>
          {listing.facts && (
            <p className="mt-1 text-xs text-muted-foreground">
              {listing.facts}
            </p>
          )}
        </div>

        <p className="text-sm leading-relaxed text-foreground/80">
          {listing.blurb}
        </p>

        <div className="mt-1 h-px w-full bg-border" />

        <div className="flex items-center justify-between pt-1">
          {listing.priceDisplay ? (
            <span className="font-heading text-lg text-foreground">
              {listing.priceDisplay}
            </span>
          ) : listing.pricePerNight ? (
            <span className="text-sm text-foreground/80">
              <span className="font-heading text-lg text-foreground">
                {listing.pricePerNight}
              </span>{" "}
              / night
            </span>
          ) : listing.monthlyPrice ? (
            <span className="text-sm text-foreground/80">
              <span className="font-heading text-lg text-foreground">
                {listing.monthlyPrice}
              </span>{" "}
              / month
              {listing.leaseTerm && <span> · {listing.leaseTerm}</span>}
            </span>
          ) : listing.rating ? (
            <span className="inline-flex items-center gap-1.5 text-sm text-foreground/80">
              <Star className="size-3.5 fill-brass text-brass" aria-hidden="true" />
              <span className="text-foreground">{listing.rating}</span>
              {listing.reviewCount && (
                <span>· {listing.reviewCount} reviews</span>
              )}
            </span>
          ) : (
            <span className="text-sm text-muted-foreground">
              See pricing on Airbnb
            </span>
          )}
        </div>

        <div className="mt-2 flex gap-3">
          {listing.airbnbHref ? (
            <>
              <a
                href={listing.airbnbHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View on Airbnb
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
              <a
                href={site.whatsappHref(
                  `Hi Joanne, I'd like to ask about ${listing.name}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ask about ${listing.name} on WhatsApp`}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-brass/70 px-3 py-2.5 text-foreground/80 transition-colors hover:border-brass hover:text-foreground"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
              </a>
            </>
          ) : (
            <a
              href={site.whatsappHref(
                `Hi Joanne, I'd like to ask about ${listing.name}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
