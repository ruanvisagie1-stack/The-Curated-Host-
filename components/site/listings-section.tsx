"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { listings } from "@/lib/content";
import { ListingCard } from "@/components/site/listing-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export function ListingsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelected(api.selectedScrollSnap());
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section id="listings" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
            A shelf, not a marketplace
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75 sm:text-lg">
            Joanne takes on a limited number of properties so each one gets
            full attention. Every listing below books directly on Airbnb,
            or you can ask a question on WhatsApp first. Swipe or drag to
            browse.
          </p>
        </div>

        <div className="relative mt-14">
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: false }}
            plugins={[WheelGesturesPlugin()]}
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <CarouselContent className="-ml-6 cursor-grab py-6 active:cursor-grabbing">
              {listings.map((listing, i) => (
                <CarouselItem
                  key={listing.id}
                  className="basis-[82%] pl-6 sm:basis-[62%] lg:basis-[46%]"
                >
                  <ListingCard
                    listing={listing}
                    index={i}
                    isActive={i === selected}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <button
            type="button"
            aria-label="Previous listing"
            onClick={() => api?.scrollPrev()}
            disabled={!canPrev}
            className="absolute left-1 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-brass/70 bg-background/80 text-foreground/80 backdrop-blur-sm transition-colors hover:border-brass hover:text-foreground disabled:opacity-30 sm:left-2"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next listing"
            onClick={() => api?.scrollNext()}
            disabled={!canNext}
            className="absolute right-1 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-brass/70 bg-background/80 text-foreground/80 backdrop-blur-sm transition-colors hover:border-brass hover:text-foreground disabled:opacity-30 sm:right-2"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="relative mt-8 h-[2px] w-full overflow-hidden rounded-full bg-border">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-brass transition-transform duration-500 ease-out"
            style={{
              width: `${100 / listings.length}%`,
              transform: `translateX(${selected * 100}%)`,
            }}
          />
        </div>

        <p className="sr-only" aria-live="polite">
          Showing listing {selected + 1} of {listings.length}:{" "}
          {listings[selected]?.name}
        </p>
      </div>
    </section>
  );
}
