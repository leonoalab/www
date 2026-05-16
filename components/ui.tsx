import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-bluebolt/15 bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-coral" />
      {children}
    </div>
  );
}

export function ButtonLink({ href, children, variant = "dark" }: { href: string; children: React.ReactNode; variant?: "dark" | "light" }) {
  const classes =
    variant === "dark"
      ? "bg-bluebolt text-white shadow-soft hover:bg-blue-600"
      : "border border-bluebolt/20 bg-white text-ink hover:border-bluebolt hover:bg-bluebolt/5";

  return (
    <Link href={href} className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-medium transition hover:-translate-y-0.5 ${classes}`}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
