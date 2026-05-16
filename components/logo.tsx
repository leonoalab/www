import Link from "next/link";
import { Code2 } from "lucide-react";
import { site } from "@/lib/site-data";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-bluebolt text-white shadow-color">
        <Code2 className="h-5 w-5" />
      </div>
      <div className="leading-tight">
        <div className="text-base font-semibold tracking-[-0.025em] text-ink">{site.publicName}</div>
        <div className="text-xs font-medium text-slate-500">{site.baseline}</div>
      </div>
    </Link>
  );
}
