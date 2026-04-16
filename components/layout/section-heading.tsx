import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-[40rem] space-y-4">
      <Badge>{eyebrow}</Badge>
      <div className="space-y-3">
        <h2 className="max-w-[14ch] text-3xl font-bold leading-[0.96] tracking-[-0.04em] text-balance sm:text-4xl lg:text-[3.2rem]">
          {title}
        </h2>
        <p className="max-w-[36rem] text-[15px] leading-7 text-muted-foreground sm:text-[17px]">
          {description}
        </p>
      </div>
    </div>
  );
}
