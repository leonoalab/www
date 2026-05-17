import Link from "next/link";
import { site } from "@/lib/site-data";

export function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3">
            <img
                src="/logo-leonoalab.png"
                alt={`${site.publicName} logo`}
                className="h-12 w-12 object-contain"
            />

            <div className="leading-tight">
                <div className="text-base font-semibold tracking-[-0.025em] text-ink">
                    {site.publicName}
                </div>
                <div className="text-xs font-medium text-slate-500">
                    {site.baseline}
                </div>
            </div>
        </Link>
    );
}
