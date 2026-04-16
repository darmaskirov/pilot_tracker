import type { ReactNode } from "react";

export function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70"
    >
      {children}
    </label>
  );
}
