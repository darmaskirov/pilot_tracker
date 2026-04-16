import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { EarlyAccessSection } from "@/components/sections/early-access";
import { ExampleOutputSection } from "@/components/sections/example-output";
import { FaqSection } from "@/components/sections/faq";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { WhatYouGetSection } from "@/components/sections/what-you-get";
import { WhoItsForSection } from "@/components/sections/who-its-for";

export default function HomePage() {
  return (
    <main className="pb-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(circle_at_18%_18%,rgba(183,0,255,0.24),transparent_22%),radial-gradient(circle_at_82%_16%,rgba(0,174,255,0.18),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[520px] h-px glow-line opacity-70" />
      <SiteHeader />
      <HeroSection />
      <ProblemSection />
      <ExampleOutputSection />
      <WhatYouGetSection />
      <WhoItsForSection />
      <FaqSection />
      <EarlyAccessSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
