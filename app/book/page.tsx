import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ConsultationForm } from "@/components/consultation-form";

export default function BookPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-warmCream">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-sage/40" />
        <SiteHeader />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sand">Book a consultation</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] tracking-[-0.045em] sm:text-6xl">Tell us what you are ready to <em className="text-sand">make possible.</em></h1>
          <p className="mt-6 max-w-2xl leading-7 text-warmCream/75">Share a little about your context and the work ahead. We will be in touch to explore whether Mind of Najah is the right partner.</p>
        </div>
      </section>
      <section className="bg-cream px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <aside className="pt-4">
            <p className="eyebrow">What happens next</p>
            <ol className="mt-7 space-y-6">{[["01", "Share your context"], ["02", "We review your inquiry"], ["03", "We schedule a conversation"]].map(([number, text]) => <li key={number} className="flex items-center gap-4"><span className="grid h-9 w-9 place-items-center rounded-full bg-sage font-display italic text-cobalt">{number}</span><span className="font-medium text-ink/80">{text}</span></li>)}</ol>
            <p className="mt-10 max-w-sm text-sm leading-6 text-ink/65">Mind of Najah values thoughtful, aligned partnerships. A consultation is simply a first conversation about what could be useful.</p>
          </aside>
          <ConsultationForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
