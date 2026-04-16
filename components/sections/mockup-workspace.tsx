import { Card, CardContent } from "@/components/ui/card";

const statCards = [
  {
    label: "Missing owner",
    value: "Blocker #2",
    detail: "Still unassigned since Apr 14",
  },
  {
    label: "Success criteria",
    value: "Not confirmed",
    detail: "Mentioned on kickoff, never signed off",
  },
  {
    label: "Next review date",
    value: "Apr 24",
    detail: "Customer asked for proof, not another recap",
  },
];

const timelinePoints = [
  { label: "Apr 08", value: 28 },
  { label: "Apr 12", value: 42 },
  { label: "Apr 16", value: 38 },
  { label: "Apr 20", value: 57 },
  { label: "Apr 24", value: 61 },
  { label: "Apr 29", value: 83 },
];

const activityItems = [
  {
    company: "Acme Ops",
    note: "Open promise from kickoff: export API timeline still unanswered",
    state: "Waiting on answer",
  },
  {
    company: "Northstar AI pilot",
    note: "Customer success metric was discussed, but nobody wrote the final version down",
    state: "Criteria fuzzy",
  },
  {
    company: "MetricLoop",
    note: "Renewal looks healthy, but one product ask is still open from the last call",
    state: "Needs follow-up",
  },
];

export function MockupWorkspace() {
  const chartPath = timelinePoints
    .map((point, index) => {
      const x = 20 + index * 74;
      const y = 136 - point.value;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <Card className="neon-ring overflow-hidden rounded-[36px] border-white/10 bg-[#090d1d]">
      <div className="border-b border-white/8 bg-white/[0.03] px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-white">Pilot Tracker / Acme Ops</p>
            <p className="text-sm text-white/44">Account snapshot before the next review call</p>
          </div>
          <div className="rounded-full border border-danger/40 bg-danger/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-danger">
            Renewal risk: medium
          </div>
        </div>
      </div>

      <CardContent className="space-y-5 bg-[radial-gradient(circle_at_top,rgba(183,0,255,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-6">
        <div className="grid gap-4 md:grid-cols-3">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="rounded-[24px] border border-white/8 bg-[#101529] p-5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                {card.label}
              </p>
              <p className="mt-3 text-2xl font-bold tracking-[-0.04em] text-white">
                {card.value}
              </p>
              <p className="mt-2 text-sm text-white/54">{card.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-white/8 bg-[#0f1428] p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Pilot account health
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  What is still unresolved
                </h3>
              </div>
              <div className="rounded-2xl border border-primary/40 bg-primary/15 px-4 py-3 text-sm font-semibold text-primary-foreground">
                Review in 8 days
              </div>
            </div>

            <div className="mt-5 rounded-[24px] border border-white/6 bg-[#0a1020] p-4">
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/34">
                <span>Readiness trend</span>
                <span>Apr 08 - Apr 29</span>
              </div>
              <svg viewBox="0 0 420 150" className="h-40 w-full">
                <defs>
                  <linearGradient id="pilot-line" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="#c026ff" />
                    <stop offset="100%" stopColor="#16d9ff" />
                  </linearGradient>
                </defs>
                <g>
                  {[0, 1, 2, 3].map((row) => (
                    <line
                      key={row}
                      x1="0"
                      x2="420"
                      y1={22 + row * 32}
                      y2={22 + row * 32}
                      stroke="rgba(255,255,255,0.08)"
                      strokeDasharray="4 8"
                    />
                  ))}
                  <path
                    d={`${chartPath} L 390 150 L 20 150 Z`}
                    fill="rgba(192,38,255,0.08)"
                  />
                  <path
                    d={chartPath}
                    fill="none"
                    stroke="url(#pilot-line)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {timelinePoints.map((point, index) => {
                    const x = 20 + index * 74;
                    const y = 136 - point.value;

                    return (
                      <circle
                        key={point.label}
                        cx={x}
                        cy={y}
                        r="4.5"
                        fill="#16d9ff"
                        opacity={index === timelinePoints.length - 1 ? 1 : 0.8}
                      />
                    );
                  })}
                </g>
              </svg>
              <div className="mt-3 grid grid-cols-6 gap-2 text-[11px] text-white/36">
                {timelinePoints.map((point) => (
                  <span key={point.label}>{point.label}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[24px] border border-white/8 bg-[#101529] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Account checklist
              </p>
              <ul className="mt-4 space-y-3">
                <li className="rounded-2xl border border-white/6 bg-white/[0.04] px-3 py-2 text-sm leading-6 text-white/72">
                  Next review date locked: April 24
                </li>
                <li className="rounded-2xl border border-white/6 bg-white/[0.04] px-3 py-2 text-sm leading-6 text-white/72">
                  Blocker unresolved: SSO setup still pending owner
                </li>
                <li className="rounded-2xl border border-white/6 bg-white/[0.04] px-3 py-2 text-sm leading-6 text-white/72">
                  Customer waiting on answer about export API timeline
                </li>
                <li className="rounded-2xl border border-white/6 bg-white/[0.04] px-3 py-2 text-sm leading-6 text-white/72">
                  Success criteria still not confirmed in writing
                </li>
              </ul>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-[#101529] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Live account feed
              </p>
              <div className="mt-4 space-y-3">
                {activityItems.map((item) => (
                  <div
                    key={item.company}
                    className="rounded-2xl border border-white/6 bg-white/[0.04] px-4 py-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">{item.company}</p>
                      <span className="text-xs uppercase tracking-[0.16em] text-accent">
                        {item.state}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/58">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
