import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-foreground outline-none transition placeholder:text-white/30 focus:border-accent/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-accent/10",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
