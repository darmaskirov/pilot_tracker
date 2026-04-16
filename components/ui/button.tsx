import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full border text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-primary/50 bg-primary text-primary-foreground shadow-neon hover:-translate-y-0.5 hover:bg-primary/90",
        outline:
          "border-white/12 bg-white/[0.04] text-foreground hover:border-accent/60 hover:bg-white/[0.08] hover:text-white",
        ghost: "border-transparent text-foreground hover:bg-secondary",
        accent:
          "border-accent/50 bg-accent text-[#03131a] shadow-[0_0_28px_rgba(0,191,255,0.35)] hover:-translate-y-0.5 hover:bg-accent/90",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6 text-base",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
