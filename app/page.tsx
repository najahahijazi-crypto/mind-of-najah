import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Compass, Layers3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  { title: "Consulting", text: "Clarify priorities, align people, and move meaningful work forward.", icon: Compass, tone: "bg-warmCream" },
  { title: "Curriculum Development", text: "Build coherent learning experiences that connect purpose, content, and outcomes.", icon: BookOpen, tone: "bg-periwinkle/65" },
  { title: "Instructional Design", text: "Turn learning goals into engaging, practical experiences for every learner.", icon: Layers3, tone: "bg-sage/70" },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[720px] overflow-hidden bg-cobalt text-warmCream">
        <div aria-hidden="true" className="hero-grid-light absolute inset-0 opacity-70" />
        <div aria-hidden="true" className="absolute -right-24 top-24 h-[34rem] w-[34rem] rounded-full bg-sage/90 sm:-right-12 lg:right-[6%] lg:top-28 lg:h-[38rem] lg:w-[38rem]" />
        <div aria-hidden="true" className="absolute -right-40 bottom-[-13rem] h-[35rem] w-[35rem] rounded-full bg-periwinkle/80 sm:-right-12 lg:right-[-2rem]" />
        <div aria-hidden="true" className="absolute right-[8%] top-[20%] hidden h-64 w-64 rotate-12 rounded-[3rem] border border-warmCream/55 bg-cobalt/20 lg:block" />
        <div aria-hidden="true" className="absolute right-[14%] top-[24%] hidden h-72 w-72 rounded-full border-[18px] border-warmCream/85 lg:block" />
        <div aria-hidden="true" className="absolute bottom-16 right-[18%] hidden h-24 w-24 rounded-full bg-chartreuse lg:block" />
        <div aria-hidden="true" className="absolute bottom-28 right-[28%] hidden h-16 w-16 rounded-full bg-goldenYellow lg:block" />
        <div aria-hidden="true" className="absolute right-[17%] top-[30%] hidden font-display text-[14rem] italic leading-none text-warmCream/90 lg:block">N</div>
        <SiteHeader />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-5 pb-16 pt-36 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-seafoam">Curriculum + Education</p>
            <h1 className="font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">Thoughtful learning.<br /><em className="text-seafoam">Designed for impact.</em></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-warmCream/85 sm:text-lg">Mind of Najah partners with schools and education organizations to turn ambitious learning goals into clear, engaging, and purposeful experiences.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/book">Book a consultation <ArrowRight size={18} /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-warmCream/75 text-warmCream hover:border-warmCream hover:bg-warmCream hover:text-cobalt"><Link href="/services">Explore services</Link></Button>
            </div>
            <p className="mt-10 max-w-md border-l-2 border-goldenYellow pl-4 text-sm leading-6 text-warmCream/75">Strategy, curriculum, and instructional design for learning that is clear, connected, and made to last.</p>
          </div>
        </div>
      </section>

      <section className="bg-seafoam px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">What we make possible</p><h2 className="display-title mt-4">Thoughtful strategy. Learning that <em>lives.</em></h2><p className="mt-5 max-w-xl leading-7 text-ink/75">Every engagement starts with listening. Together, we make a practical path from big ideas to the experiences learners and educators deserve.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">{services.map(({ title, text, icon: Icon, tone }, index) => <article key={title} className={`group rounded-3xl border border-cobalt/15 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft ${tone}`}><div className="flex items-start justify-between"><span className="text-xs font-bold tracking-[0.18em] text-cobalt">0{index + 1}</span><Icon size={24} strokeWidth={1.5} className="text-cobalt" /></div><h3 className="mt-12 font-display text-3xl tracking-[-0.03em] text-cobalt">{title}</h3><p className="mt-3 text-sm leading-6 text-cobalt/80">{text}</p><Link href="/services" className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-cobalt underline-offset-4 hover:underline">Learn more <ArrowUpRight size={15} /></Link></article>)}</div>
        </div>
      </section>

      <section className="overflow-hidden bg-periwinkle/70 px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">How we partner</p><h2 className="display-title mt-4">A steady path from possibility to practice.</h2><p className="mt-5 leading-7 text-ink/75">We bring a generous, structured approach to complex work—so your team can move with confidence and care.</p><Button asChild className="mt-8"><Link href="/book">Start the conversation <ArrowRight size={16} /></Link></Button></div><div className="space-y-7">{[["01", "Listen with intention", "We begin with the people closest to the work, surfacing what matters, what is working, and what needs to change."], ["02", "Design for real life", "We turn insight into clear, usable strategy and learning experiences that fit your context."], ["03", "Build for momentum", "We leave your team with practical tools, shared language, and a path to sustain the work."]].map(([number, title, text]) => <div key={number} className="grid gap-4 border-t border-cobalt/30 py-6 sm:grid-cols-[70px_1fr]"><span className="font-display text-3xl italic text-goldenYellow">{number}</span><div><h3 className="font-display text-2xl text-cobalt">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-cobalt/80">{text}</p></div></div>)}</div></div></section>

      <section className="bg-warmCream px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-cobalt/15 bg-warmCream px-7 py-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-16 lg:py-16"><div className="relative"><div className="absolute -left-3 -top-3 h-14 w-14 rounded-full bg-sage" /><p className="relative text-xs font-bold uppercase tracking-[0.22em] text-cobalt">The mind behind the work</p><h2 className="relative mt-4 font-display text-4xl leading-tight tracking-[-0.035em] text-cobalt sm:text-5xl">Education work that feels both rigorous and deeply human.</h2></div><div><Sparkles className="text-goldenYellow" size={25} strokeWidth={1.4} /><p className="mt-5 text-lg leading-8 text-cobalt/80">Mind of Najah is a founder-led education consultancy for leaders who want more than a polished plan. We help you create learning experiences that honor people, invite participation, and make a lasting difference.</p><Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-periwinkle">Get to know Mind of Najah <ArrowRight size={16} /></Link></div></div></section>

      <section className="bg-chartreuse px-5 py-20 text-cobalt lg:px-8 lg:py-24"><div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt/80">A good place to begin</p><h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">Let’s make room for what learning can become.</h2></div><Button asChild size="lg" variant="dark"><Link href="/book">Book a consultation <ArrowRight size={18} /></Link></Button></div></section>
      <SiteFooter />
    </main>
  );
}
