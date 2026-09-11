import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const flaviotte = localFont({
  src: "./fonts/Flaviotte.woff2",
  variable: "--font-display",
  weight: "400",
});

const ppMori = localFont({
  src: [
    { path: "./fonts/PPMori-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PPMori-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/PPMori-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-body",
});

const title = "The Curated Host | Boutique Airbnb Cohosting, Cape Town";
const description =
  "A handpicked shelf of South African apartments and boutique Airbnb cohosting from Joanne, based in Green Point, Cape Town.";

export const metadata: Metadata = {
  metadataBase: new URL("https://thecuratedhost.co.za"),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "The Curated Host",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${flaviotte.variable} ${ppMori.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
