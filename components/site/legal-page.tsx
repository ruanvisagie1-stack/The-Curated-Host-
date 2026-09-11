import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader alwaysSolid />
      <main
        id="main-content"
        className="flex-1 bg-background pt-32 pb-24 sm:pt-40 sm:pb-32"
      >
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <h1 className="font-heading text-4xl text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
          <div className="mt-12 flex flex-col gap-10">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-xl text-foreground sm:text-2xl">
        {heading}
      </h2>
      <div className="mt-3 flex flex-col gap-3 text-base leading-relaxed text-foreground/80">
        {children}
      </div>
    </section>
  );
}
