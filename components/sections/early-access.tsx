import { LeadForm } from "@/components/forms/lead-form";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function EarlyAccessSection() {
  return (
    <section id="early-access" className="py-16 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Early access"
            title="If this is already a problem in your pipeline, let’s talk"
            description="This is for teams with live design partners or pilots right now. Not future maybe-problems. Not generic waitlist volume."
          />

          <Card className="rounded-[28px] border-primary/20 bg-[linear-gradient(180deg,rgba(18,14,48,0.96),rgba(7,24,46,0.96))] text-primary-foreground">
            <CardContent className="space-y-4 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/52">
                What happens next
              </p>
              <ul className="space-y-3 text-sm leading-7 text-white/78">
                <li>You tell us what actually gets dropped today: promises, blockers, review prep, or ownership.</li>
                <li>If the fit is real, we book a short founder-to-founder call around your current pilot process.</li>
                <li>Strong-fit teams get early access as the product narrows around real account drift.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="neon-ring rounded-[32px] border-white/10 bg-[#0a0d19]">
          <CardContent className="p-6 sm:p-8">
            <LeadForm />
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
