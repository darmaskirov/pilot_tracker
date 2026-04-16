import { exampleOutput } from "@/lib/content";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function ExampleOutputSection() {
  return (
    <section id="output" className="py-16 sm:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="One realistic example"
          title="What this looks like when a live pilot is starting to drift"
          description="A believable account snapshot beats another polished fake dashboard. The point is to show the exact loose ends before the review call, not to manufacture vanity metrics."
        />

        <Card className="neon-ring overflow-hidden rounded-[32px] border-white/10 bg-[#090d1d]">
          <CardContent className="grid gap-6 p-0 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(10,18,42,0.98),rgba(18,31,72,0.92))] px-6 py-8 text-primary-foreground lg:border-b-0 lg:border-r">
              <p className="text-xs uppercase tracking-[0.22em] text-white/52">Scenario</p>
              <h3 className="mt-4 text-[2rem] font-semibold leading-tight text-white">
                {exampleOutput.account}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                {exampleOutput.companyContext}
              </p>
              <div className="mt-8 space-y-4 text-sm leading-7 text-white/74">
                <p>
                  <strong className="text-white">Situation:</strong>{" "}
                  {exampleOutput.scenario}
                </p>
                <p>
                  <strong className="text-white">What is already going wrong:</strong>{" "}
                  {exampleOutput.pain}
                </p>
              </div>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                  Founder note
                </p>
                <p className="mt-3 text-base leading-7 text-white/82">“{exampleOutput.quote}”</p>
                <p className="mt-3 text-sm text-white/46">{exampleOutput.quoteAuthor}</p>
              </div>
            </div>

            <div className="space-y-6 px-6 py-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                    Account status
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/76">{exampleOutput.status}</p>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                    Risk snapshot
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/76">{exampleOutput.risk}</p>
                </div>
              </div>

              <div className="rounded-[24px] border border-accent/20 bg-accent/[0.04] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                  What changes the story
                </p>
                <p className="mt-3 text-base font-semibold text-white">{exampleOutput.signal}</p>
              </div>

              <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                  What gets lost between calls
                </p>
                <ol className="mt-4 space-y-3">
                  {exampleOutput.launchSteps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm leading-7">
                      <span className="font-semibold text-accent">0{index + 1}</span>
                      <span className="text-white/66">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
