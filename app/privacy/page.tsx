import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/site/legal-page";
import { legalEntity, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | The Curated Host",
  description:
    "How The Curated Host collects, uses, and protects your personal information, in line with South Africa's POPIA.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated={legalEntity.lastUpdated}>
      <LegalSection heading="Introduction">
        <p>
          {site.name}, trading name of {legalEntity.operators}, based in{" "}
          {site.city}, respects your privacy. This policy explains what
          personal information we collect through this website, how we use
          it, and your rights, in line with South Africa&apos;s Protection of
          Personal Information Act (POPIA).
        </p>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <p>
          We only collect personal information that you choose to share with
          us directly, such as your name, phone number, email address, and
          the content of any message you send us through WhatsApp or email
          when you enquire about a stay or about cohosting your property.
          This website does not currently use cookies, analytics, or any
          other automatic tracking technology.
        </p>
      </LegalSection>

      <LegalSection heading="How we use your information">
        <p>
          We use the information you give us to respond to your enquiry,
          discuss a possible stay or cohosting arrangement, and, where an
          agreement is reached, to manage that booking or that property
          relationship.
        </p>
      </LegalSection>

      <LegalSection heading="Legal basis for processing">
        <p>
          We process your personal information because it is necessary to
          respond to your enquiry, to take steps toward an agreement at your
          request, or because you have given us your consent by contacting
          us.
        </p>
      </LegalSection>

      <LegalSection heading="Sharing your information">
        <p>
          We do not sell your personal information. Bookings and guest
          payments for stays are handled directly by Airbnb under
          Airbnb&apos;s own privacy policy, not by us. Where we manage a
          property on an owner&apos;s behalf, we may share limited details
          with service providers such as cleaners or maintenance
          contractors, strictly as needed to run that property.
        </p>
      </LegalSection>

      <LegalSection heading="Data retention">
        <p>
          We keep your personal information only for as long as needed to
          respond to your enquiry or maintain our business relationship with
          you, and delete or anonymise it after that.
        </p>
      </LegalSection>

      <LegalSection heading="Security">
        <p>
          We take reasonable steps to protect the personal information you
          share with us, though no method of storage or transmission over the
          internet can be guaranteed completely secure.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          Under POPIA, you have the right to ask us what personal information
          we hold about you, to have it corrected or deleted, to object to
          how we use it, and to withdraw any consent you have given us. You
          also have the right to lodge a complaint with the Information
          Regulator of South Africa if you believe we have handled your
          information incorrectly.
        </p>
      </LegalSection>

      <LegalSection heading="Information officer">
        <p>
          Joanne Vermeulen acts as the Information Officer for {site.name}{" "}
          and can be contacted using the details below for any privacy
          question or POPIA related request.
        </p>
      </LegalSection>

      <LegalSection heading="Children's privacy">
        <p>
          This website is not directed at children, and we do not knowingly
          collect personal information from children.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          We may update this policy from time to time. The date at the top of
          this page shows when it was last revised.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          Questions about this policy or your personal information? Contact
          Joanne Vermeulen at{" "}
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
          This policy is intended as a clear, good faith summary of our
          privacy practices and has not been reviewed by a South African
          attorney. We recommend a professional legal review before relying
          on it for full POPIA compliance.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
