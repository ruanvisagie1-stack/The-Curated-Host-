// Site-wide content constants for The Curated Host.
// Placeholder imagery, listing names, and prices are marked below —
// replace with real photography, live Airbnb links, and confirmed
// pricing before this ships.

const whatsappNumber = "27827838366"; // +27 82 783 8366

// Legal entity details for the Terms and Privacy pages.
export const legalEntity = {
  operators: "Joanne Vermeulen, Ruan Visagie, and Melandri Visagie",
  lastUpdated: "September 2026",
};

export const site = {
  name: "The Curated Host",
  tagline: "Boutique Airbnb cohosting & short term rental management",
  city: "Sea Point, Cape Town",
  whatsappNumber,
  whatsappHref: (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
  email: "info@thecuratedhost.co.za",
};

// Client-supplied hero photography — kept in the client's own HERO 1-6 order.
export const heroSlides = [
  {
    src: "/hero/hero-1.jpg",
    alt: "Sunset terrace with a view of Lion's Head and the Atlantic coastline",
  },
  {
    src: "/hero/hero-2.jpg",
    alt: "Bedroom with a wall of glass overlooking the ocean at sunset",
  },
  {
    src: "/hero/hero-3.jpg",
    alt: "Living and dining area with a burgundy sculptural sofa and marble kitchen",
  },
  {
    src: "/hero/hero-4.jpg",
    alt: "Coffee table styled with a lamp, candles, and magazines",
  },
  {
    src: "/hero/hero-5.jpg",
    alt: "Styled bar cart and gallery wall in a warm living room corner",
  },
  {
    src: "/hero/hero-6b.jpg",
    alt: "Terrace dining table beside an infinity pool, overlooking Table Mountain and the city",
  },
];

export type Listing = {
  id: string;
  name: string;
  location: string;
  facts?: string; // e.g. "4 guests · 2 bedrooms · 2 baths"
  blurb: string;
  pricePerNight?: string; // omit when Airbnb only shows dynamic, date-based pricing
  monthlyPrice?: string; // for direct long-term rentals, not booked via Airbnb
  leaseTerm?: string; // e.g. "6–12 month minimum"
  priceDisplay?: string; // fully-formed price line, e.g. a minimum-stay total
  rating?: number;
  reviewCount?: number;
  image: string;
  imageAlt: string;
  airbnbHref?: string; // omit for a direct long-term rental with no Airbnb listing
};

// All 7 listings are now real. Curzon Place is a direct long-term
// rental, not booked via Airbnb; Chamonix is a private room (not an
// entire unit) with a 14-night minimum stay.
export const listings: Listing[] = [
  {
    id: "joes-abode",
    name: "Joe’s Abode",
    location: "The Odyssey, Green Point, Cape Town",
    facts: "4 guests · 2 bedrooms · 2 baths",
    blurb:
      "A sun filled 2 bedroom, 2 bathroom retreat on the 3rd floor, with a private patio and access to the building's rooftop pool.",
    rating: 4.87,
    reviewCount: 78,
    image: "/listings/joes-abode-1.jpg",
    imageAlt:
      "Living and dining area with sculptural string lighting and a marble table",
    airbnbHref: "https://www.airbnb.co.za/rooms/1165823982400125014",
  },
  {
    id: "modern-apartment",
    name: "Modern Apartment",
    location: "The Odyssey, Green Point, Cape Town",
    facts: "2 guests · 1 bedroom · 1 bath",
    blurb:
      "A pristine one bedroom apartment with a rooftop pool and mountain views, an easy walk to the V&A Waterfront and Sea Point Promenade.",
    rating: 5.0,
    reviewCount: 10,
    image: "/listings/modern-apartment-1.jpg",
    imageAlt: "Living room with gray armchairs, gallery wall, and city view",
    airbnbHref: "https://www.airbnb.co.za/rooms/1571989215289566401",
  },
  {
    id: "odyssey-409",
    name: "The Odyssey 409",
    location: "Green Point, Cape Town",
    facts: "4 guests · 2 bedrooms · 2 baths",
    blurb:
      "A light filled 5th floor apartment with sweeping ocean views, a private balcony, and a rooftop pool overlooking Signal Hill.",
    rating: 5.0,
    reviewCount: 13,
    image: "/listings/odyssey-409-1.jpg",
    imageAlt: "Warm living room with a mustard sofa, rattan panelled wall, and floor lamp",
    airbnbHref: "https://www.airbnb.co.za/rooms/1615209994175619511",
  },
  {
    id: "shoreham-apartment",
    name: "Shoreham Apartment",
    location: "Sea Point, Cape Town",
    facts: "6 guests · 3 bedrooms · 3 baths",
    blurb:
      "A sea facing 3 bedroom apartment with uninterrupted ocean views, best enjoyed over a sunrise coffee or a sunset glass of wine on the balcony.",
    rating: 4.71,
    reviewCount: 17,
    image: "/listings/shoreham-2.jpg",
    imageAlt: "Living room with a curved rust sofa and a glass door opening onto an ocean sunset",
    airbnbHref: "https://www.airbnb.co.za/rooms/1616427450314688565",
  },
  {
    id: "curzon-place",
    name: "Curzon Place Apartment",
    location: "Sea Point, Cape Town",
    blurb:
      "A long term rental at Curzon Place in Sea Point, available on a 6 to 12 month lease.",
    monthlyPrice: "R70,000",
    leaseTerm: "6 to 12 month minimum",
    image: "/listings/curzon-place-1.jpg",
    imageAlt: "Curzon Place apartment building exterior in Sea Point",
  },
  {
    id: "club-mykonos",
    name: "Club Mykonos Apartment",
    location: "Langebaan, Western Cape",
    facts: "6 guests · 3 bedrooms · 3 baths",
    blurb:
      "A 3 bedroom penthouse in Club Mykonos overlooking the Langebaan Lagoon marina, with a private deck, braai area, and pool access.",
    rating: 5.0,
    reviewCount: 4,
    image: "/listings/club-mykonos-1.jpg",
    imageAlt: "White Cycladic style buildings along the Langebaan Lagoon marina",
    airbnbHref: "https://www.airbnb.co.za/rooms/1552615343562323703",
  },
  {
    id: "chamonix-apartment",
    name: "Chamonix Apartment",
    location: "Senderwood, Johannesburg",
    facts: "2 guests max · dedicated room & bathroom · 14 night minimum",
    blurb:
      "A private room with a dedicated bathroom in a fully furnished, shared apartment overlooking the Johannesburg skyline.",
    priceDisplay: "From R42,293 for 14 nights",
    image: "/listings/chamonix-1.jpg",
    imageAlt: "Moody living room with a dark marble feature wall and rattan pendant lamp",
    airbnbHref: "https://www.airbnb.co.za/rooms/1515242678704698951",
  },
];

// What cohosting includes, from the company profile — kept as prose rows
// rather than icon cards, per the brief's editorial register. Written to
// be clear reading for a prospective owner client.
export const servicePillars = [
  {
    title: "Guest vetting with intention",
    body: "Every guest is carefully screened: reviews, communication, and behaviour history reviewed before a booking is accepted.",
  },
  {
    title: "Calendar and pricing optimisation",
    body: "Rates set against season, demand, and local events, with minimum stay rules that protect the home.",
  },
  {
    title: "Guest messaging and in stay support",
    body: "Every enquiry, from first message to check out, answered promptly and in the voice of a well run home, day or night.",
  },
  {
    title: "Cleaning and turnover coordination",
    body: "Trusted cleaners held to a consistent standard, with a walkthrough before every turnover.",
  },
  {
    title: "Maintenance and safety checks",
    body: "Minor repairs handled quietly, routine safety checks logged, and larger work quoted before anything happens.",
  },
  {
    title: "Owner reporting",
    body: "Regular summaries covering occupancy, rate performance, guest feedback, and anything the home needs next.",
  },
];

export const serviceEnhancements = [
  "Professional photography & listing optimisation",
  "Interior styling consultation",
  "Guest welcome packs & digital guidebooks",
  "Local vendor & service coordination",
  "Insurance and compliance support",
];

export const hostStats = [
  { value: "7+", label: "years in accommodation management" },
  { value: "6+", label: "rentals managed in Johannesburg / Cape Town" },
  { value: "1", label: "owner operated Airbnb in Sea Point" },
  { value: "24/7", label: "availability for guests and owners" },
];

// Full-bleed visual pauses between the denser content sections.
export const sectionBreaks = {
  afterListings: {
    image: "/section-breaks/lounge-fireplace.jpg",
    imageAlt:
      "Moody lounge with a marble fireplace column and patterned ottomans",
    text: "Every home, treated like her own.",
  },
  afterServices: {
    image: "/section-breaks/parlour-lounge.jpg",
    imageAlt:
      "Sunlit period living room with a sculptural coffee table and a chrome dome lamp",
    text: "One point of contact, from check in to check out.",
  },
};

export const hostBio = {
  name: "Joanne Vermeulen",
  photo: "/host/joanne-portrait.jpg",
  photoAlt: "Portrait of Joanne Vermeulen smiling outdoors at golden hour",
  quote:
    "I run every apartment in my care the same hands on way I run my own Airbnb here in Sea Point: personally, and without cutting corners. I keep the portfolio small on purpose, so every guest message and every owner update still comes from me.",
};

// Fee structure and process, kept deliberately general (no specific
// percentages quoted here since these are agreed per owner).
export const partneringSteps = [
  {
    title: "Commission based, always",
    body: "We earn an agreed percentage of the net income from every booking we manage. If your apartment does not book, we do not earn.",
  },
  {
    title: "Everything in writing",
    body: "Before we take on a new listing, it is put in writing. Every property is covered by a signed cohosting agreement setting out fees, responsibilities, and reporting.",
  },
  {
    title: "Paid out monthly",
    body: "You get a full breakdown of bookings, fees, and net payout every month, so you always know exactly where your income stands.",
  },
];

// Real guest reviews, pulled verbatim (light copyedits for typos only,
// nothing added) from the actual Airbnb listings above. Never invent
// testimonials, names, or review scores here.
export const testimonials = [
  {
    quote:
      "Great hosts, super responsive, with easy access to town and the beaches. Joanne and Arnaud even extended my stay at short notice and I was so grateful for their help.",
    name: "Bhavi",
    source: "Modern Apartment, Airbnb guest",
  },
  {
    quote:
      "We had a wonderful stay! The apartment is incredibly spacious, in a perfect location, and having the pool right in the marina was a huge plus. We had a small issue with the fridge, but the host was fantastic and replaced it immediately.",
    name: "Mohamed Nabeel",
    source: "Club Mykonos Apartment, Airbnb guest",
  },
  {
    quote:
      "It was absolutely fantastic. The place was super nice, clean, and very well maintained, with everything we needed for a comfortable stay.",
    name: "Johann",
    source: "Club Mykonos Apartment, Airbnb guest",
  },
  {
    quote:
      "Apartment was beautiful and we had a lovely stay. Joanne was a great host and communicated well with us.",
    name: "Eva",
    source: "Club Mykonos Apartment, Airbnb guest",
  },
];
