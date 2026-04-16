import { appendFile, mkdir } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  stage?: string;
  activeAccounts?: string;
  biggestGap?: string;
  discoveryCallReadiness?: string;
  paidPilotReadiness?: string;
};

const leadsFilePath = path.join(process.cwd(), "data", "leads.ndjson");

export async function POST(request: Request) {
  const body = (await request.json()) as LeadPayload;

  if (
    !body.name?.trim() ||
    !body.email?.trim() ||
    !body.company?.trim() ||
    !body.stage?.trim() ||
    !body.activeAccounts?.trim() ||
    !body.biggestGap?.trim() ||
    !body.discoveryCallReadiness?.trim() ||
    !body.paidPilotReadiness?.trim()
  ) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const lead = {
    ...body,
    createdAt: new Date().toISOString(),
  };

  await mkdir(path.dirname(leadsFilePath), { recursive: true });
  await appendFile(leadsFilePath, `${JSON.stringify(lead)}\n`, "utf8");
  console.log("[lead-capture]", lead);

  return NextResponse.json({
    ok: true,
    savedTo: "data/leads.ndjson",
  });
}
