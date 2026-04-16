import { deliverables, trackItems } from "@/lib/content";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function WhatYouGetSection() {
  return (
    <section id="tracking" className="py-16 sm:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="What it helps you track"
          title="The things that usually get lost between customer calls"
          description="Not a generic dashboard. Not a note dump. A tight layer around the parts of the account that actually slip when the team is busy."
        />

        <div className="grid items-start gap-5 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="grid content-start gap-5">
            {trackItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className={`shadow-none ${
                    index === 0
                      ? "rounded-[32px] border-white/12 bg-[linear-gradient(135deg,rgba(16,21,41,0.94),rgba(20,14,44,0.94))]"
                      : "rounded-[26px]"
                  }`}
                >
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid content-start gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <Card className="rounded-[28px] border-accent/15 bg-accent/[0.04] shadow-none">
              <CardContent className="space-y-3 p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                  Anti-generic position
                </p>
                <p className="text-lg font-semibold text-white">
                  This is not another AI notes tool.
                </p>
                <p className="text-sm leading-7 text-white/68">
                  Notes explain what happened. This keeps the part that can still go wrong.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
              {deliverables.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="rounded-[26px] shadow-none">
                    <CardContent className="space-y-4 p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                        <p className="text-sm leading-7 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
