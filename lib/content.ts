import {
  BadgeCheck,
  CalendarClock,
  CircleAlert,
  Flag,
  MessageSquareWarning,
  ListTodo,
  Radar,
  ShieldAlert,
} from "lucide-react";

export const siteConfig = {
  name: "Pilot Tracker",
  description:
    "Keep promises, blockers, review dates, and renewal risk visible after pilot kickoff.",
  url: "https://pilottracker.app",
};

export const heroContent = {
  eyebrow: "Pilot tracking for founder-led B2B",
  title: "The pilot did not fail. You lost the thread after kickoff.",
  subtitle:
    "Once a design partner goes live, promises move into call notes, Slack, and somebody's memory. Then the review call hits and nobody is fully sure what was agreed, what is blocked, or who owes the next answer.",
  supportingPoints: [
    "Keep promises, blockers, owners, and review dates in one account view.",
    "See what is still vague before the customer calls it out.",
    "Stop running live pilots from memory and scattered summaries.",
  ],
  primaryCta: "See if this fits your pilot process",
  secondaryCta: "Join early access",
  note: "Not another AI notes tool. AI writes summaries. This keeps promises, blockers, and next steps from slipping.",
  metrics: [
    { label: "Built for", value: "3-10 live accounts" },
    { label: "Main job", value: "pilot follow-through" },
    { label: "Instead of", value: "notes + Slack + memory" },
  ],
};

export const problemPoints = [
  {
    title: "Kickoff sounds clear. Two weeks later it is not.",
    description:
      "The team remembers the meeting differently. One promise is in a doc, one is in Slack, one never got written down at all.",
  },
  {
    title: "Nobody owns the uncomfortable follow-up.",
    description:
      "The blocker is real, but there is no clear owner, no due date, and no place that shows the customer is waiting.",
  },
  {
    title: "The review call becomes a surprise audit.",
    description:
      "Success criteria were never confirmed, open promises stayed open, and the renewal conversation starts from defense instead of proof.",
  },
];

export const trackItems = [
  {
    title: "Open promises from kickoff",
    description:
      "What you said you would deliver, what the customer said they need, and what is still hanging.",
    icon: MessageSquareWarning,
  },
  {
    title: "Missing owners and blocked actions",
    description:
      "If the next step has no owner, or a blocker has been open for 9 days, it should be obvious.",
    icon: ShieldAlert,
  },
  {
    title: "Review dates and renewal risk",
    description:
      "See the next review date, what proof is missing, and whether the account is moving toward a clean renewal story.",
    icon: CalendarClock,
  },
];

export const deliverables = [
  {
    title: "Account snapshot",
    description: "One place to see what was promised, what changed, and what the customer is still waiting on.",
    icon: Flag,
  },
  {
    title: "Promises and success criteria",
    description: "Not generic notes. The actual commitments, success criteria, and proof you need before the next review.",
    icon: Radar,
  },
  {
    title: "Next step queue",
    description: "Clear owner, due date, and account context so follow-up does not die in a Slack thread.",
    icon: ListTodo,
  },
  {
    title: "Review timeline",
    description: "Upcoming check-ins, review calls, and renewal windows with enough context to act early.",
    icon: CalendarClock,
  },
  {
    title: "Pilot risk signal",
    description: "A lightweight way to catch vague scope, unresolved blockers, and promises that keep staying open.",
    icon: CircleAlert,
  },
  {
    title: "Narrow workflow",
    description: "Enough structure for live pilots without turning into a CRM migration or a fake enterprise CS suite.",
    icon: BadgeCheck,
  },
];

export const exampleOutput = {
  title: "A realistic pilot snapshot",
  account: "Acme Ops",
  companyContext: "B2B analytics startup with 3 design partners and 1 paid pilot",
  scenario:
    "The founder closed a 6-week pilot. Two product asks were promised on the kickoff call. The customer now wants a progress review next Thursday.",
  pain:
    "One promise lives in meeting notes. One blocker is sitting in Slack. Success criteria were mentioned, but never confirmed in writing.",
  quote:
    "We did not need another summary tool. We needed one place that showed what we promised, what was late, and what the customer was still waiting for.",
  quoteAuthor: "Founder, early B2B infra startup",
  status: "Owner: CEO. Next review: April 24. Last real update: April 16.",
  risk: "Renewal risk: medium. Reason: success criteria not confirmed and one blocker has no owner.",
  signal: "If the team closes the blocker, confirms the success criteria, and answers the open product ask before Thursday, the review call becomes a progress update instead of damage control.",
  launchSteps: [
    "Open promise from kickoff: export API timeline still not answered.",
    "Customer waiting on answer since April 12.",
    "Success criteria discussed verbally, but not signed off.",
    "Next review date is locked. Proof for the review is not.",
  ],
};

export const personas = [
  "Founder-led B2B startups with design partners or paid pilots already live",
  "Small teams where the founder, PM, or AE still carries post-sale context manually",
  "Teams with 3-10 active accounts and no clean system between kickoff and renewal",
  "Companies that do not want a full CRM or CS platform just to stop dropping follow-up",
];

export const faqs = [
  {
    question: "Is this a CRM?",
    answer:
      "No. It is much narrower: live pilot tracking for promises, owners, blockers, review dates, and renewal risk.",
  },
  {
    question: "Who is the first version for?",
    answer:
      "Founder-led B2B teams with live design partners or pilots and messy follow-through after kickoff.",
  },
  {
    question: "Why not keep using notes plus ChatGPT?",
    answer:
      "Because summaries are not the problem. The problem is that open promises, missing owners, and review dates do not stay visible account by account.",
  },
  {
    question: "What happens after I join?",
    answer:
      "If the fit is strong, you get follow-up questions, a short discovery call, and early access as the product sharpens.",
  },
];

export const formOptions = {
  stages: ["Design partners live", "Paid pilots live", "Early post-pilot accounts"],
  activeAccounts: ["1-2", "3-5", "6-10", "10+"],
  painAreas: [
    "Open promises",
    "Next steps",
    "Review dates",
    "Blockers without owners",
    "Success criteria",
  ],
  callReadiness: ["Yes, this week", "Maybe later", "No"],
  pilotReadiness: ["Yes, if the fit is real", "Maybe", "No"],
};

export const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Example", href: "#output" },
  { label: "Tracking", href: "#tracking" },
  { label: "FAQ", href: "#faq" },
];

export const sectionIcons = {
  BadgeCheck,
};
