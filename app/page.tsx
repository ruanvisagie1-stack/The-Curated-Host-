import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { ListingsSection } from "@/components/site/listings-section";
import { SectionBreak } from "@/components/site/section-break";
import { ServicesSection } from "@/components/site/services-section";
import { HostSection } from "@/components/site/host-section";
import { MeetHostSection } from "@/components/site/meet-host-section";
import { PartneringSection } from "@/components/site/partnering-section";
import { HostingEnhancementsSection } from "@/components/site/hosting-enhancements-section";
import { TestimonialsSection } from "@/components/site/testimonials-section";
import { CtaSection } from "@/components/site/cta-section";
import { SiteFooter } from "@/components/site/site-footer";
import { sectionBreaks } from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <ListingsSection />
        <SectionBreak {...sectionBreaks.afterListings} />
        <ServicesSection />
        <SectionBreak {...sectionBreaks.afterServices} />
        <HostSection />
        <MeetHostSection />
        <PartneringSection />
        <HostingEnhancementsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
