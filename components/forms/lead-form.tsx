"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { formOptions } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

type FormState = {
  name: string;
  email: string;
  company: string;
  stage: string;
  activeAccounts: string;
  biggestGap: string;
  discoveryCallReadiness: string;
  paidPilotReadiness: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  stage: formOptions.stages[0],
  activeAccounts: formOptions.activeAccounts[0],
  biggestGap: formOptions.painAreas[0],
  discoveryCallReadiness: formOptions.callReadiness[0],
  paidPilotReadiness: formOptions.pilotReadiness[0],
};

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (
      event:
        | ChangeEvent<HTMLInputElement>
        | ChangeEvent<HTMLTextAreaElement>
        | ChangeEvent<HTMLSelectElement>
    ) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const validate = () => {
    if (!form.name.trim()) {
      return "Name is required.";
    }

    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      return "A valid email is required.";
    }

    if (!form.company.trim()) {
      return "Company or product name is required.";
    }

    if (!form.biggestGap.trim()) {
      return "Please tell us what most often gets lost.";
    }

    return "";
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSuccess("Received. We will use this to qualify discovery calls and early access.");
      setForm(initialState);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-white/42">
          Early access intake
        </p>
        <p className="text-sm leading-6 text-muted-foreground">
          Tell us where pilot follow-through is breaking today.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Alex Morgan"
            value={form.name}
            onChange={handleChange("name")}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="alex@buildermail.com"
            value={form.email}
            onChange={handleChange("email")}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="company">Company or product</Label>
        <Input
          id="company"
          placeholder="Acme Analytics"
          value={form.company}
          onChange={handleChange("company")}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="stage">Current stage</Label>
          <Select id="stage" value={form.stage} onChange={handleChange("stage")}>
            {formOptions.stages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="activeAccounts">Active accounts right now</Label>
          <Select
            id="activeAccounts"
            value={form.activeAccounts}
            onChange={handleChange("activeAccounts")}
          >
            {formOptions.activeAccounts.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="biggestGap">What gets lost most often?</Label>
        <Select
          id="biggestGap"
          value={form.biggestGap}
          onChange={handleChange("biggestGap")}
        >
          {formOptions.painAreas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </Select>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="discoveryCallReadiness">
            Open to a 20-30 min discovery call?
          </Label>
          <Select
            id="discoveryCallReadiness"
            value={form.discoveryCallReadiness}
            onChange={handleChange("discoveryCallReadiness")}
          >
            {formOptions.callReadiness.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="paidPilotReadiness">
            Open to a paid validation pilot?
          </Label>
          <Select
            id="paidPilotReadiness"
            value={form.paidPilotReadiness}
            onChange={handleChange("paidPilotReadiness")}
          >
            {formOptions.pilotReadiness.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>
      </div>

      {error ? <p className="text-sm text-danger">{error}</p> : null}
      {success ? <p className="text-sm text-success">{success}</p> : null}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Join early access"}
      </Button>
      <p className="text-xs leading-6 text-muted-foreground">
        This is for teams with live design partners or pilots. No fake urgency.
        Just qualification for real discovery conversations.
      </p>
    </form>
  );
}
