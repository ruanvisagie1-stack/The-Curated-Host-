# The Curated Host

Next.js + Tailwind CSS + shadcn/ui site for boutique Airbnb co-hosting and a
curated shelf of Cape Town apartment listings.

## Running locally

```bash
npm run dev
```

Open [http://localhost:3010](http://localhost:3010) (or whichever port the
CLI reports).

## Status: all 7 listings are live

The homepage hero, header, and listings carousel all use the client's real
logo, photography, and Airbnb data — see [`lib/content.ts`](lib/content.ts)
for every field:

1. Joe's Abode — Green Point (Airbnb)
2. Modern Apartment — Green Point (Airbnb)
3. The Odyssey 409 — Green Point (Airbnb)
4. Shoreham Apartment — Sea Point (Airbnb)
5. Curzon Place Apartment — Sea Point; direct long-term rental
   (R70,000/month, 6–12 month lease), no Airbnb link, so the card shows a
   single "Enquire on WhatsApp" button instead of the Airbnb/WhatsApp pair
6. Club Mykonos Apartment — Langebaan (Airbnb)
7. Chamonix Apartment — Senderwood, Johannesburg; a private room (not an
   entire unit) with a 14-night minimum stay, so the card shows a
   minimum-stay total ("From R42,293 for 14 nights") instead of a nightly
   rate

- **Palette** — colors in `app/globals.css` are read off the client's Figma
  moodboard ("The Curated Host Mood-board").

The WhatsApp number (`+27 82 783 8366`) and company-profile details are real.

## Next: polish pass

With every listing real, worth a full-page review — copy that still assumes
"Cape Town apartments" only (hero, listings intro) now spans Cape Town,
Langebaan, and Johannesburg; confirm that reads right before shipping.

## Stack

Next.js (App Router), Tailwind CSS v4, shadcn/ui (Base UI primitives),
next/font (Italiana + Karla).
