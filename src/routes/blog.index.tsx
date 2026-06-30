import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import BlurText from "@/components/react-bits/BlurText";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import { ClockIcon } from "@/components/animate-ui/icons/clock";
import { SendIcon } from "@/components/animate-ui/icons/send";
import { Container, SiteFooter, SiteHeader } from "../components/site-shell";
import { Eyebrow } from "../components/section";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Field Notes | The Velnix Blog" },
      {
        name: "description",
        content:
          "Practical notes on product strategy, AI systems, engineering and shipping dependable software.",
      },
    ],
  }),
  component: Blog,
});

const posts = [
  {
    slug: "ai-features-that-survive-production",
    tag: "AI Engineering",
    date: "June 18, 2026",
    read: "7 min",
    title: "What separates an AI demo from a production feature",
    excerpt:
      "A practical checklist for evaluation, grounding, fallbacks, cost controls and the work that makes AI dependable.",
    number: "01",
  },
  {
    slug: "scope-an-mvp-without-building-a-toy",
    tag: "Product Strategy",
    date: "June 9, 2026",
    read: "6 min",
    title: "How to scope an MVP without building a toy",
    excerpt:
      "Cutting scope should reduce surface area, not erase the one outcome that makes a product valuable.",
    number: "02",
  },
  {
    slug: "weekly-demos-change-software-delivery",
    tag: "Delivery",
    date: "May 27, 2026",
    read: "5 min",
    title: "Why weekly demos change the quality of software delivery",
    excerpt:
      "Working software creates sharper conversations than status reports and catches misunderstandings early.",
    number: "03",
  },
  {
    slug: "fractional-cto-right-time",
    tag: "Leadership",
    date: "May 14, 2026",
    read: "5 min",
    title: "When a fractional CTO is the right hire",
    excerpt:
      "The signals that you need technical leadership now, but are not ready for a full-time executive.",
    number: "04",
  },
  {
    slug: "mobile-or-responsive-web",
    tag: "Product Decisions",
    date: "April 30, 2026",
    read: "8 min",
    title: "Mobile app or responsive web: deciding with evidence",
    excerpt:
      "A framework based on user context, hardware access, retention, distribution and operating cost.",
    number: "05",
  },
  {
    slug: "technical-debt-is-a-product-decision",
    tag: "Engineering",
    date: "April 16, 2026",
    read: "6 min",
    title: "Technical debt is a product decision",
    excerpt:
      "Not all debt is dangerous. Know what you borrowed, why, and what will make repayment necessary.",
    number: "06",
  },
];

function Blog() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-50" />
        <Container className="relative">
          <Eyebrow>Field notes</Eyebrow>
          <div className="mt-5 grid gap-8 md:grid-cols-[1.25fr_.75fr] md:items-end">
            <h1 className="font-display text-6xl font-semibold leading-[.95] tracking-[-.03em] md:text-8xl">
              <BlurText
                text="Notes from inside the build."
                animateBy="words"
                direction="bottom"
                delay={70}
                stepDuration={0.34}
                className="block"
              />
            </h1>
            <ScrollReveal
              containerClassName="max-w-md"
              textClassName="text-sm leading-7 text-muted-foreground"
              baseOpacity={0.18}
              baseRotation={2}
              blurStrength={6}
            >
              Practical thinking on product decisions, dependable AI and the engineering habits that
              move software into production.
            </ScrollReveal>
          </div>
        </Container>
      </section>
      <section className="border-t border-border bg-surface py-20">
        <Container>
          <article className="group grid overflow-hidden rounded-2xl border border-border bg-foreground text-background lg:grid-cols-2">
            <div className="relative min-h-80 overflow-hidden border-b border-background/15 p-8 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 grid-bg opacity-10" />
              <div className="relative font-mono text-[10px] uppercase tracking-widest text-brand">
                Featured / AI Engineering
              </div>
              <span className="absolute bottom-4 left-8 font-accent text-[9rem] font-light leading-none italic text-background/10">
                AI
              </span>
            </div>
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <div className="flex gap-5 font-mono text-[9px] uppercase tracking-widest text-background/50">
                  <span>June 18, 2026</span>
                  <span className="flex items-center gap-1">
                    <ClockIcon size={11} animateOnHover />7 min
                  </span>
                </div>
                <h2 className="mt-7 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  <BlurText
                    text="What separates an AI demo from a production feature"
                    animateBy="words"
                    direction="bottom"
                    delay={55}
                    stepDuration={0.3}
                    className="block"
                  />
                </h2>
                <ScrollReveal
                  containerClassName="mt-5"
                  textClassName="text-sm leading-7 text-background/60"
                  baseOpacity={0.18}
                  baseRotation={2}
                  blurStrength={6}
                >
                  A practical checklist for evaluation, grounding, fallbacks, cost controls and the
                  work that makes AI dependable.
                </ScrollReveal>
              </div>
              <Link
                to="/blog/$slug"
                params={{ slug: posts[0].slug }}
                className="mt-10 inline-flex items-center gap-2 text-sm text-brand"
              >
                Read field note <SendIcon size={14} animateOnHover />
              </Link>
            </div>
          </article>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {posts.slice(1).map((p, index) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group bg-background p-7 transition-colors hover:bg-surface"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-brand">
                    {p.tag}
                  </span>
                  <span className="font-accent text-4xl font-light italic text-border-strong">
                    {p.number}
                  </span>
                </div>
                <h2 className="mt-12 max-w-lg font-display text-3xl font-semibold leading-tight">
                  {p.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{p.excerpt}</p>
                <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    {p.date} / {p.read}
                  </span>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    aria-label={`Read ${p.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                  >
                    <SendIcon size={14} animateOnHover />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-t border-border py-20">
        <Container className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <Eyebrow>Have a harder question?</Eyebrow>
            <h2 className="mt-3 font-display text-4xl">
              <BlurText
                text="Let's discuss the next move."
                animateBy="words"
                direction="bottom"
                delay={60}
                stepDuration={0.3}
                className="block"
              />
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm text-background hover:bg-brand"
          >
            Discuss a project <SendIcon size={14} className="ml-2" animateOnHover />
          </Link>
        </Container>
      </section>
      <SiteFooter />
    </main>
  );
}
