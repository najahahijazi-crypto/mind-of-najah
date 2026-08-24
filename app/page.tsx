import Link from "next/link";
import { ArrowRight, Compass, HeartHandshake, Layers3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const approachAreas = [
  {
    title: "Authentic Learning Design",
    text: "Purposeful curriculum and learning experiences built around relevance, inquiry, reflection, application, and meaningful engagement.",
    icon: Compass,
    tone: "bg-warmCream",
  },
  {
    title: "SEL-Integrated Learning",
    text: "Social-emotional development is thoughtfully woven into learning through communication, self-awareness, relationships, emotional regulation, reflection, and other skills that support success.",
    icon: HeartHandshake,
    tone: "bg-periwinkle/65",
  },
  {
    title: "Global & Culturally Responsive Learning",
    text: "Learning experiences that honor culture, language, identity, perspective, and the diverse experiences learners bring with them.",
    icon: Layers3,
    tone: "bg-sage/70",
  },
];

const deliverables = [
  "Full curriculum programs",
  "Units and lessons",
  "Student-facing resources",
  "Educator guides",
  "Assessments and reflection tools",
  "Professional learning materials",
  "Multilingual and culturally adapted resources",
  "Learning experience and instructional design",
];

const principles = [
  ["Individuality", "Learning should leave room for different identities, strengths, perspectives, and ways of thinking."],
  ["Authenticity", "Content should connect to real experiences rather than exist only to meet an objective."],
  ["Connection", "Academic, social, emotional, and cultural learning should strengthen one another."],
  ["Intentionality", "Every activity, question, and learning experience should have a reason for being there."],
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
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-seafoam">Mind of Najah</p>
            <h1 className="font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">Authentic learning,<br /><em className="text-seafoam">thoughtfully designed.</em></h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-warmCream/85 sm:text-lg">We create meaningful learning experiences that integrate social-emotional development, cultural responsiveness, and purposeful instructional design to help learners grow and succeed.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="#approach">Explore our approach <ArrowRight size={18} /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-warmCream/75 text-warmCream hover:border-warmCream hover:bg-warmCream hover:text-cobalt"><Link href="/book">Work with us</Link></Button>
            </div>
            <p className="mt-10 max-w-md border-l-2 border-goldenYellow pl-4 text-sm leading-6 text-warmCream/75">Research-informed, human-centered learning for the people and communities education is meant to serve.</p>
          </div>
        </div>
      </section>

      <section id="approach" className="bg-warmCream px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">Our philosophy</p><h2 className="display-title mt-4">Learning should feel <em>relevant, personal, and real.</em></h2></div>
          <div className="max-w-2xl space-y-5 text-lg leading-8 text-ink/80"><p>We design experiences that connect to learners’ identities, cultures, emotions, interests, and real-world experiences.</p><p>Rather than relying on generic or one-size-fits-all content, we prioritize thoughtful research, creativity, individuality, and meaningful learning.</p></div>
        </div>
      </section>

      <section className="bg-seafoam px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">Three dimensions of our approach</p><h2 className="display-title mt-4">Learning designed for the whole person.</h2><p className="mt-5 max-w-xl leading-7 text-ink/75">These ideas shape every partnership and every learning experience we build.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">{approachAreas.map(({ title, text, icon: Icon, tone }, index) => <article key={title} className={`rounded-3xl border border-cobalt/15 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft ${tone}`}><div className="flex items-start justify-between"><span className="text-xs font-bold tracking-[0.18em] text-cobalt">0{index + 1}</span><Icon size={24} strokeWidth={1.5} className="text-cobalt" /></div><h3 className="mt-12 font-display text-3xl tracking-[-0.03em] text-cobalt">{title}</h3><p className="mt-3 text-sm leading-6 text-cobalt/80">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-periwinkle/70 px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">What we create</p><h2 className="display-title mt-4">From ideas to complete learning experiences.</h2><p className="mt-5 max-w-md leading-7 text-ink/75">We bring the philosophy to life through practical, beautiful, and usable tools for learners and educators.</p></div><div className="grid gap-3 sm:grid-cols-2">{deliverables.map((item, index) => <div key={item} className="flex items-start gap-3 rounded-2xl border border-cobalt/20 bg-warmCream/70 p-5"><span className="font-display text-xl italic text-goldenYellow">0{index + 1}</span><span className="text-sm font-semibold leading-5 text-cobalt">{item}</span></div>)}</div></div></section>

      <section className="bg-warmCream px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-10 rounded-[2rem] border border-cobalt/15 bg-warmCream px-7 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-16"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">Why Mind of Najah</p><h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.035em] text-cobalt sm:text-5xl">Designed with intention, not generated by formula.</h2><p className="mt-6 text-lg leading-8 text-cobalt/80">Technology can support the creative process, but meaningful education requires more than content generation. Our work is shaped by research, educator expertise, cultural context, creativity, and an understanding of how learners experience the world.</p><Button asChild className="mt-8"><Link href="/book">Work with us <ArrowRight size={16} /></Link></Button></div><div className="grid gap-4 sm:grid-cols-2">{principles.map(([title, text]) => <article key={title} className="rounded-2xl bg-seafoam/55 p-5"><Sparkles size={18} className="text-goldenYellow" /><h3 className="mt-5 font-display text-2xl text-cobalt">{title}</h3><p className="mt-2 text-sm leading-6 text-cobalt/80">{text}</p></article>)}</div></div></div></section>

      <section className="bg-chartreuse px-5 py-20 text-cobalt lg:px-8 lg:py-24"><div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt/80">A good place to begin</p><h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">Let’s make learning feel more meaningful.</h2></div><Button asChild size="lg" variant="dark"><Link href="/book">Start a conversation <ArrowRight size={18} /></Link></Button></div></section>
      <SiteFooter />
    </main>
  );
}
