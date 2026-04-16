import * as React from "react";
import { cn } from "@/lib/utils";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-foreground outline-none transition focus:border-accent/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-accent/10",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
});

Select.displayName = "Select";
