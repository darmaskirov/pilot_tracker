import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[120px] w-full rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-white/30 focus:border-accent/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-accent/10",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
