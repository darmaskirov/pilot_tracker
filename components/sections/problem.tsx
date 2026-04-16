import { problemPoints } from "@/lib/content";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  return (
    <section id="problem" className="py-16 sm:py-24">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <SectionHeading
          eyebrow="The real pain"
          title="The messy part is not closing the pilot. It is surviving the weeks after."
          description="This is where early teams start improvising. A few live accounts are enough to create invisible risk: fuzzy promises, missing owners, stale blockers, and review calls nobody is fully ready for."
        />

        <div className="grid gap-4">
          {problemPoints.map((point, index) => (
            <Card
              key={point.title}
              className={`shadow-none ${
                index === 1 ? "rounded-[30px] border-accent/20 bg-accent/[0.04]" : "rounded-[24px]"
              }`}
            >
              <CardContent className="flex gap-4 p-5 sm:p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/90 text-sm font-semibold text-primary-foreground">
                  0{index + 1}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-tight text-white">{point.title}</h3>
                  <p className="text-base leading-7 text-muted-foreground">{point.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
