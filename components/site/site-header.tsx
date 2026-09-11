"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { site } from "@/lib/content";

const navLinks = [
  { href: "/#listings", label: "Listings" },
  { href: "/#services", label: "Services" },
  { href: "/#host", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader({
  alwaysSolid = false,
}: {
  alwaysSolid?: boolean;
}) {
  const [scrolledState, setScrolledState] = useState(false);
  const scrolled = alwaysSolid || scrolledState;

  useEffect(() => {
    if (alwaysSolid) return;
    const onScroll = () => setScrolledState(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysSolid]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:text-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      <div
        aria-hidden
        className="absolute inset-0 -bottom-6 transition-opacity duration-500"
        style={{
          opacity: scrolled ? 1 : 0,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          background:
            "linear-gradient(to bottom, color-mix(in oklch, var(--background) 14%, transparent) 0%, color-mix(in oklch, var(--background) 8%, transparent) 70%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/#top" aria-label={site.name}>
          <img
            src="/logo/ch-monogram-bold-white.svg"
            alt={site.name}
            className={`h-14 w-14 transition-[filter] duration-500 ${
              scrolled ? "brightness-0" : ""
            }`}
          />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button
                type="button"
                aria-label="Open menu"
                className={`flex size-11 items-center justify-center rounded-md transition-colors duration-500 ${
                  scrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                <Menu className="size-6" aria-hidden="true" />
              </button>
            }
          />
          <DropdownMenuContent align="end" sideOffset={12} className="w-56">
            {navLinks.map((link) => (
              <DropdownMenuItem
                key={link.href}
                render={<Link href={link.href} />}
                className="py-2 text-base"
              >
                {link.label}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              render={
                <a
                  href={site.whatsappHref(
                    "Hi Joanne, I'd like to ask about availability.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="py-2 text-base text-primary focus:text-primary"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp us
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
