import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t-2 border-border px-6 py-8 text-center font-display text-sm text-muted">
      <p>
        {"// "}&copy; {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </p>
    </footer>
  );
}
