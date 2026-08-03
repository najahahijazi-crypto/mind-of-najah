import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-warmCream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-3xl italic">Mind of Najah</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-warmCream/70">Purposeful curriculum and learning experiences for the people shaping what education can become.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-warmCream/80">
            <Link href="/services" className="hover:text-warmCream">Services</Link>
            <Link href="/about" className="hover:text-warmCream">About</Link>
            <Link href="/book" className="hover:text-warmCream">Book a consultation</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">Start a conversation</p>
          <Link href="/book" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-warmCream hover:text-sand">Tell us what you are building <ArrowUpRight size={16} /></Link>
        </div>
      </div>
      <div className="border-t border-warmCream/10 px-5 py-5 text-center text-xs text-warmCream/50">© {new Date().getFullYear()} Mind of Najah. All rights reserved.</div>
    </footer>
  );
}
