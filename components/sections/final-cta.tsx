import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="pb-20 pt-8 sm:pb-28">
      <Container>
        <Card className="neon-ring overflow-hidden rounded-[36px] border-white/10 bg-[linear-gradient(135deg,rgba(23,11,55,0.98),rgba(6,21,42,0.98))] text-primary-foreground">
          <CardContent className="flex flex-col gap-6 p-8 sm:p-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] text-white/52">
                Final CTA
              </p>
              <h2 className="text-4xl font-bold leading-[0.98] text-balance sm:text-5xl">
                Stop walking into review calls with half the account living in memory.
              </h2>
              <p className="text-base leading-8 text-white/74 sm:text-lg">
                If you already have live pilots and the follow-through is getting sloppy,
                join early access. The goal is not more software. The goal is fewer dropped promises.
              </p>
            </div>

            <a href="#early-access">
              <Button variant="accent" size="lg">
                Join early access
              </Button>
            </a>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
