import Link from "next/link";
import { navItems } from "@/lib/content";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-background/70 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div>
            <p className="text-sm font-semibold text-white">Pilot Tracker</p>
            <p className="text-xs text-white/46">Keep pilots from drifting after kickoff</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/52 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a href="#early-access">
          <Button size="sm">Join early access</Button>
        </a>
      </Container>
    </header>
  );
}
