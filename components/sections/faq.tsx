import { faqs } from "@/lib/content";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Short answers to the obvious objections"
          description="The goal here is simple: make the scope clear, filter out the wrong use case, and show this is meant for a real operating problem."
        />

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <Card key={faq.question} className="rounded-[24px] shadow-none">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
