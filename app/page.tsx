import Link from "next/link";
import { ArrowRight, Compass, HeartHandshake, Layers3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const approachAreas = [
  { title: "Authentic Learning Design", text: "Purposeful curriculum and learning experiences built around relevance, inquiry, reflection, application, and meaningful engagement.", icon: Compass, tone: "bg-sage/25" },
  { title: "SEL-Integrated Learning", text: "Social-emotional development is thoughtfully woven into learning through communication, self-awareness, relationships, emotional regulation, reflection, and other skills that support success.", icon: HeartHandshake, tone: "bg-periwinkle/25" },
  { title: "Global & Culturally Responsive Learning", text: "Learning experiences that honor culture, language, identity, perspective, and the diverse experiences learners bring with them.", icon: Layers3, tone: "bg-seafoam/35" },
];

const deliverables = ["Full curriculum programs", "Units and lessons", "Student-facing resources", "Educator guides", "Assessments and reflection tools", "Professional learning materials", "Multilingual and culturally adapted resources", "Learning experience and instructional design"];
const principles = [
  ["Individuality", "Learning should leave room for different identities, strengths, perspectives, and ways of thinking."],
  ["Authenticity", "Content should connect to real experiences rather than exist only to meet an objective."],
  ["Connection", "Academic, social, emotional, and cultural learning should strengthen one another."],
  ["Intentionality", "Every activity, question, and learning experience should have a reason for being there."],
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-warmCream text-cobalt">
        <div aria-hidden="true" className="absolute right-0 top-0 h-full w-1/3 bg-sage/20" />
        <div aria-hidden="true" className="absolute right-[10%] top-32 hidden h-64 w-64 rounded-full border border-cobalt/20 lg:block" />
        <div aria-hidden="true" className="absolute right-[15%] top-48 hidden h-36 w-36 rounded-full border-[14px] border-seafoam/60 lg:block" />
        <div aria-hidden="true" className="absolute bottom-16 right-[17%] hidden h-5 w-24 bg-goldenYellow lg:block" />
        <SiteHeader tone="light" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-5 pb-20 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-40">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-cobalt/70">Mind of Najah</p>
            <h1 className="font-display text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[6.75rem]">Authentic learning,<br /><em className="text-cobalt/75">thoughtfully designed.</em></h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-cobalt/75 sm:text-lg">We create meaningful learning experiences that integrate social-emotional development, cultural responsiveness, and purposeful instructional design to help learners grow and succeed.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" variant="dark"><Link href="#approach">Explore our approach <ArrowRight size={18} /></Link></Button><Button asChild size="lg" variant="outline"><Link href="/book">Work with us</Link></Button></div>
          </div>
          <div aria-hidden="true" className="relative hidden min-h-[390px] lg:block"><div className="absolute left-12 top-8 h-72 w-72 rounded-[48%_52%_45%_55%] bg-seafoam/65" /><div className="absolute left-24 top-20 h-72 w-72 rounded-[52%_48%_55%_45%] border border-cobalt/30" /><div className="absolute bottom-12 left-0 h-16 w-16 rounded-full bg-periwinkle/70" /><div className="absolute bottom-0 right-12 h-20 w-20 rounded-full bg-chartreuse/80" /><span className="absolute left-40 top-32 font-display text-[11rem] italic leading-none text-cobalt/80">N</span></div>
        </div>
        <div className="relative mx-auto max-w-7xl border-t border-cobalt/15 px-5 py-5 text-sm text-cobalt/65 lg:px-8">Research-informed, human-centered learning for the people and communities education is meant to serve.</div>
      </section>

      <section id="approach" className="bg-seafoam/35 px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center"><div><p className="eyebrow">Our philosophy</p><h2 className="display-title mt-4">Learning should feel <em>relevant, personal, and real.</em></h2></div><div className="max-w-2xl space-y-5 text-lg leading-8 text-cobalt/80"><p>We design experiences that connect to learners’ identities, cultures, emotions, interests, and real-world experiences.</p><p>Rather than relying on generic or one-size-fits-all content, we prioritize thoughtful research, creativity, individuality, and meaningful learning.</p></div></div></section>

      <section className="bg-warmCream px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="eyebrow">Three dimensions of our approach</p><h2 className="display-title mt-4">Learning designed for the whole person.</h2><p className="mt-5 max-w-xl leading-7 text-cobalt/70">These ideas shape every partnership and every learning experience we build.</p></div><div className="mt-12 grid gap-4 md:grid-cols-3">{approachAreas.map(({ title, text, icon: Icon, tone }, index) => <article key={title} className={`rounded-3xl border border-cobalt/15 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft ${tone}`}><div className="flex items-start justify-between"><span className="text-xs font-bold tracking-[0.18em] text-cobalt/65">0{index + 1}</span><Icon size={23} strokeWidth={1.5} className="text-cobalt" /></div><h3 className="mt-12 font-display text-3xl tracking-[-0.03em] text-cobalt">{title}</h3><p className="mt-3 text-sm leading-6 text-cobalt/75">{text}</p></article>)}</div></div></section>

      <section className="bg-periwinkle/30 px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="eyebrow">What we create</p><h2 className="display-title mt-4">From ideas to complete learning experiences.</h2><p className="mt-5 max-w-md leading-7 text-cobalt/70">We bring the philosophy to life through practical, beautiful, and usable tools for learners and educators.</p></div><div className="grid gap-3 sm:grid-cols-2">{deliverables.map((item, index) => <div key={item} className="flex items-start gap-3 border-b border-cobalt/20 py-4"><span className="font-display text-xl italic text-cobalt/55">0{index + 1}</span><span className="text-sm font-semibold leading-5 text-cobalt">{item}</span></div>)}</div></div></section>

      <section className="bg-warmCream px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-12 border-y border-cobalt/15 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16"><div><p className="eyebrow">Why Mind of Najah</p><h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.035em] text-cobalt sm:text-5xl">Designed with intention, not generated by formula.</h2><p className="mt-6 text-lg leading-8 text-cobalt/75">Technology can support the creative process, but meaningful education requires more than content generation. Our work is shaped by research, educator expertise, cultural context, creativity, and an understanding of how learners experience the world.</p><Button asChild className="mt-8"><Link href="/book">Work with us <ArrowRight size={16} /></Link></Button></div><div className="grid gap-4 sm:grid-cols-2">{principles.map(([title, text]) => <article key={title} className="border-l-2 border-goldenYellow pl-5"><Sparkles size={17} className="text-goldenYellow" /><h3 className="mt-4 font-display text-2xl text-cobalt">{title}</h3><p className="mt-2 text-sm leading-6 text-cobalt/70">{text}</p></article>)}</div></div></div></section>

      <section className="bg-sage/35 px-5 py-20 text-cobalt lg:px-8 lg:py-24"><div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 border-t border-cobalt/20 pt-8 md:flex-row md:items-end"><div><p className="eyebrow">A good place to begin</p><h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">Let’s make learning feel more meaningful.</h2></div><Button asChild size="lg" variant="dark"><Link href="/book">Start a conversation <ArrowRight size={18} /></Link></Button></div></section>
      <SiteFooter />
    </main>
  );
}
