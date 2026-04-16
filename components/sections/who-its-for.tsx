import { personas } from "@/lib/content";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function WhoItsForSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Who it is for"
          title="For teams where post-sale reality still lives in somebody's head"
          description="If you already have live accounts, but not enough process to keep every promise, blocker, and review date visible, this is the gap."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {personas.map((persona, index) => (
            <Card
              key={persona}
              className={`h-full shadow-none ${index === 0 ? "rounded-[30px] border-white/12" : "rounded-[24px]"}`}
            >
              <CardContent className="flex min-h-[112px] items-start p-5">
                <p className="text-base leading-7 text-muted-foreground">{persona}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
