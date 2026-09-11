import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/site/legal-page";
import { legalEntity, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms and Conditions | The Curated Host",
  description:
    "The terms and conditions for using The Curated Host website.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" lastUpdated={legalEntity.lastUpdated}>
      <LegalSection heading="About this website">
        <p>
          This website is operated by {legalEntity.operators}, trading as{" "}
          {site.name}, from {site.city}. By using this website, you agree to
          these terms. If you do not agree with them, please do not use the
          site.
        </p>
      </LegalSection>

      <LegalSection heading="What this website is for">
        <p>
          {site.name}&apos;s website is a showcase and enquiry point for our
          boutique short term rental apartments, and for property owners
          considering our cohosting service. Actual bookings, payments, and
          guest communication for stays take place on Airbnb, a separate
          platform operated by Airbnb, Inc. and governed entirely by
          Airbnb&apos;s own terms of service. We are not Airbnb, and we do
          not control how Airbnb&apos;s platform operates.
        </p>
      </LegalSection>

      <LegalSection heading="Making a booking">
        <p>
          When you follow a Book on Airbnb link on this site, you are taken
          to Airbnb to complete your booking there. Your contract for that
          stay is with Airbnb and, depending on Airbnb&apos;s own terms, with
          the listing host. We are not a party to that booking contract, and
          we are not responsible for Airbnb&apos;s platform, pricing,
          availability, or cancellation policies.
        </p>
      </LegalSection>

      <LegalSection heading="Property owner enquiries">
        <p>
          Contacting us by WhatsApp or email about cohosting your property is
          an enquiry, not a binding agreement. If we agree to manage your
          property, the specific terms of that arrangement, including fees,
          responsibilities, and cancellation terms, will be set out in a
          separate, signed cohosting agreement between you and us.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable use">
        <p>
          You agree to use this website only for its intended purpose. You
          will not attempt to copy, scrape, or reproduce the content of this
          site, interfere with its operation, or use it in any way that could
          damage or disable it.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          The text, photography, branding, and design of this website belong
          to {site.name}, unless otherwise credited, and may not be reused
          without our permission.
        </p>
      </LegalSection>

      <LegalSection heading="No warranty">
        <p>
          We do our best to keep the information on this site accurate and
          current, but we make no guarantee that it is complete or error
          free. Property availability, pricing, and details are subject to
          change.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          To the fullest extent permitted by law, {site.name} is not liable
          for any loss or damage arising from your use of this website, or
          from your booking, stay, or dealings with Airbnb or any third party
          linked from this site.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These terms are governed by the laws of South Africa. Any disputes
          will be handled under South African law.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these terms">
        <p>
          We may update these terms from time to time. The date at the top of
          this page shows when they were last revised.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          Questions about these terms? Contact {site.name} at{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline decoration-border underline-offset-2 transition-colors hover:text-foreground"
          >
            {site.email}
          </a>{" "}
          or{" "}
          <a
            href={`tel:+${site.whatsappNumber}`}
            className="underline decoration-border underline-offset-2 transition-colors hover:text-foreground"
          >
            +27 82 783 8366
          </a>
          .
        </p>
        <p className="text-sm text-muted-foreground">
          These terms are intended as a clear, good faith summary of how this
          website may be used and have not been reviewed by a South African
          attorney. We recommend a professional legal review before relying
          on them for full legal protection.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
