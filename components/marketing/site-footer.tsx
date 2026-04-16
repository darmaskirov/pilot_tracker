import { Container } from "@/components/layout/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/6 py-8">
      <Container className="flex flex-col gap-3 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
        <p>Pilot Tracker</p>
        <p>Early pilot tracking for promises, blockers, review dates, and renewal risk.</p>
      </Container>
    </footer>
  );
}
