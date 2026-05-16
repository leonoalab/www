"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/lib/site-data";
import { Container } from "@/components/ui";
import { Logo } from "@/components/logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-bluebolt">
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={`mailto:${site.email}`}
            className="hidden rounded-full border border-bluebolt/20 px-4 py-2 text-sm font-semibold text-ink transition hover:border-bluebolt hover:bg-bluebolt hover:text-white md:inline-flex"
          >
            Contactar
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 md:hidden"
            aria-label="Abrir menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="py-4">
            <div className="grid gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700">
                  {item.label}
                </Link>
              ))}
              <a href={`mailto:${site.email}`} className="rounded-2xl bg-bluebolt px-4 py-3 text-center text-sm font-semibold text-white">
                Contactar
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
