"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function SiteHeader({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const isLight = tone === "light";
  const brandColor = isLight ? "text-ink" : "text-warmCream";
  const subBrandColor = isLight ? "text-ink/65" : "text-warmCream/75";
  const navColor = isLight ? "text-ink/75 hover:text-ink" : "text-warmCream/90 hover:text-warmCream";
  const menuColor = isLight ? "border-ink/25 text-ink" : "border-warmCream/30 text-warmCream";
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link href="/" className={`group flex items-center gap-3 ${brandColor}`} aria-label="Mind of Najah home">
          <span className={`grid h-10 w-10 place-items-center rounded-full border font-display text-xl italic ${isLight ? "border-ink/35" : "border-warmCream/40"}`}>N</span>
          <span className="leading-tight">
            <span className="block font-display text-lg tracking-wide">Mind of Najah</span>
            <span className={`block text-[10px] font-semibold uppercase tracking-[0.22em] ${subBrandColor}`}>Curriculum + Education</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className={`text-sm font-medium transition ${navColor}`}>
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" variant={isLight ? "default" : "light"}><Link href="/book">Book a consultation</Link></Button>
        </nav>
        <button type="button" className={`grid h-11 w-11 place-items-center rounded-full border md:hidden ${menuColor}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <nav className="mx-4 rounded-2xl bg-ink p-5 shadow-soft md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium text-warmCream hover:bg-warmCream/10">{item.label}</Link>
            ))}
            <Link href="/book" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-clay px-3 py-3 text-center font-semibold text-ink">Book a consultation</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
