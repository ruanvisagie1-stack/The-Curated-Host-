import Link from "next/link";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <img
            src="/logo/wax-seal.svg"
            alt=""
            aria-hidden="true"
            className="h-20 w-20"
          />
          <p className="font-heading text-lg text-foreground">{site.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Boutique Airbnb
          cohosting in {site.city}.
        </p>
        <nav className="flex items-center gap-5 text-xs text-muted-foreground">
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">
            Terms and Conditions
          </Link>
        </nav>
      </div>
    </footer>
  );
}
