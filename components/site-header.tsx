"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 text-white" aria-label="Mind of Najah home">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/40 font-display text-xl italic">N</span>
          <span className="leading-tight">
            <span className="block font-display text-lg tracking-wide">Mind of Najah</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75">Curriculum + Education</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-white/90 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" variant="light"><Link href="/book">Book a consultation</Link></Button>
        </nav>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <nav className="mx-4 rounded-2xl bg-ink p-5 shadow-soft md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium text-white hover:bg-white/10">{item.label}</Link>
            ))}
            <Link href="/book" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-clay px-3 py-3 text-center font-semibold text-white">Book a consultation</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
