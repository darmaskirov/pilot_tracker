import { heroContent } from "@/lib/content";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MockupWorkspace } from "@/components/sections/mockup-workspace";

export function HeroSection() {
  return (
    <section className="pb-20 pt-14 sm:pb-24 sm:pt-18">
      <Container className="max-w-[1320px] px-7 sm:px-8 2xl:max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start xl:gap-14">
          <div className="relative space-y-7 pt-6">
            <div className="absolute -left-8 top-28 hidden h-48 w-48 rounded-full bg-primary/20 blur-[120px] lg:block" />
            <Badge>{heroContent.eyebrow}</Badge>
            <div className="space-y-4">
              <h1 className="max-w-[10ch] text-5xl font-bold leading-[0.9] tracking-[-0.06em] text-balance sm:text-6xl lg:text-[5.2rem] xl:text-[5.6rem]">
                {heroContent.title}
              </h1>
              <p className="max-w-[34rem] text-[17px] leading-8 text-white/70 sm:text-[19px]">
                {heroContent.subtitle}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroContent.metrics.map((metric) => (
                <Card
                  key={metric.label}
                  className="rounded-[22px] border-white/10 bg-white/[0.04] shadow-none"
                >
                  <CardContent className="flex min-h-[112px] flex-col justify-between p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/44">
                      {metric.label}
                    </p>
                    <p className="text-lg font-semibold leading-6 text-white">{metric.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                What breaks after the sale
              </p>
              <ul className="mt-4 space-y-3">
                {heroContent.supportingPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base leading-7">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(0,191,255,0.7)]" />
                    <span className="text-white/68">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#early-access">
                <Button size="lg">{heroContent.primaryCta}</Button>
              </a>
              <a href="#output">
                <Button variant="outline" size="lg">
                  {heroContent.secondaryCta}
                </Button>
              </a>
            </div>

            <div className="flex flex-col gap-4 rounded-[24px] border border-accent/15 bg-accent/[0.04] p-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                  Positioning
                </p>
                <p className="max-w-xl text-sm leading-6 text-white/74">{heroContent.note}</p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/52">
                Narrow by design
              </div>
            </div>
          </div>

          <MockupWorkspace />
        </div>
      </Container>
    </section>
  );
}
