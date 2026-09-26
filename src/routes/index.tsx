import FlowingMenu from "@/components/react-bits/FlowingMenu";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { BotIcon } from "@/components/animate-ui/icons/bot";
import { BlocksIcon } from "@/components/animate-ui/icons/blocks";
import { ChartLineIcon } from "@/components/animate-ui/icons/chart-line";
import { CheckIcon } from "@/components/animate-ui/icons/check";
import { CompassIcon } from "@/components/animate-ui/icons/compass";
import { LayersIcon } from "@/components/animate-ui/icons/layers";
import { LockIcon } from "@/components/animate-ui/icons/lock";
import { SignalIcon } from "@/components/animate-ui/icons/signal";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { ButtonColorful } from "@/components/ui/button-colorful";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef, useState } from "react";
import { Container, SiteFooter, SiteHeader } from "../components/site-shell";
import BlurText from "@/components/react-bits/BlurText";
import VariableProximity from "@/components/react-bits/VariableProximity";
import ScrollStack, { ScrollStackItem } from "@/components/react-bits/ScrollStack";
import CircularGallery from "@/components/react-bits/CircularGallery";
import { Eyebrow, SectionIntro } from "../components/section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Velnix | Product, AI and Engineering Studio" },
      {
        name: "description",
        content:
          "A senior product team for startups and growing businesses. We design and build SaaS platforms, AI systems, mobile apps and reliable infrastructure.",
      },
      { property: "og:title", content: "The Velnix | From idea to dependable production" },
      {
        property: "og:description",
        content: "Product strategy, design and engineering in one senior, accountable team.",
      },
    ],
  }),
  component: Landing,
});

const offers = [
  {
    icon: BlocksIcon,
    n: "01",
    title: "MVP to market",
    time: "Typical: 8-12 weeks",
    text: "Turn a validated idea into a launch-ready product with product strategy, UX, engineering and deployment handled by one team.",
    includes: [
      "Product scope and roadmap",
      "UI/UX and design system",
      "Web or mobile build",
      "Production launch",
    ],
  },
  {
    icon: BotIcon,
    n: "02",
    title: "AI systems that work",
    time: "Typical: 4-10 weeks",
    text: "Move beyond demos with grounded assistants, RAG pipelines, agent workflows and human-in-the-loop automation.",
    includes: [
      "Use-case and data audit",
      "Evaluation framework",
      "Secure model integration",
      "Monitoring and handover",
    ],
  },
  {
    icon: ChartLineIcon,
    n: "03",
    title: "Scale an existing product",
    time: "Monthly partnership",
    text: "Improve a product already in market through focused engineering, UX, performance and infrastructure work.",
    includes: [
      "Architecture review",
      "Prioritised delivery sprints",
      "Observability and reliability",
      "Weekly demos",
    ],
  },
  {
    icon: CompassIcon,
    n: "04",
    title: "Fractional product & CTO",
    time: "Flexible retainer",
    text: "Senior technical and product leadership for founders building a team, making platform decisions or preparing to scale.",
    includes: [
      "Technical direction",
      "Hiring and vendor support",
      "Roadmap and trade-offs",
      "Direct founder access",
    ],
  },
];

const cases = [
  {
    id: "codedog",
    category: "AI / Developer tools",
    name: "CodeDog",
    description: "AI-assisted codebase security that turns complex scans into actionable findings.",
    shipped: ["AI workflow", "Product UX"],
    mark: "CD",
  },
  {
    id: "veddb",
    category: "Infrastructure",
    name: "VedDB",
    description:
      "A high-performance in-memory database with visibility designed into the experience.",
    shipped: ["Architecture", "Developer UX"],
    mark: "VD",
  },
  {
    id: "biznest",
    category: "Mobile / SMB",
    name: "BizNest",
    description: "A mobile-first workspace bringing essential business operations into one place.",
    shipped: ["Mobile product", "API platform"],
    mark: "BN",
  },
  {
    id: "inboxfm",
    category: "AI / Productivity",
    name: "InboxFM",
    description:
      "An AI-native email workspace built to reduce inbox noise and accelerate decisions.",
    shipped: ["Product strategy", "AI experience"],
    mark: "IF",
  },
  {
    id: "doxify",
    category: "AI / Documentation",
    name: "Doxify",
    description:
      "A documentation engine that turns evolving product knowledge into useful answers.",
    shipped: ["RAG system", "Interface design"],
    mark: "DX",
  },
  {
    id: "fakepe",
    category: "Fintech / Developer tools",
    name: "FakePE",
    description: "A payment gateway sandbox for teams building and testing transaction workflows.",
    shipped: ["Developer UX", "Platform design"],
    mark: "FP",
  },
];

const faqs = [
  [
    "What does a project usually cost?",
    "We scope around outcomes, not a generic hourly bucket. After a short discovery call, you receive a written range, milestones and assumptions before committing. Smaller focused engagements can start with a paid discovery sprint.",
  ],
  [
    "Who owns the code and designs?",
    "You do. Project IP, source code, design files and deployment access are handed over under the terms agreed for the engagement.",
  ],
  [
    "Can you work with our existing team?",
    "Yes. We can own a workstream, embed alongside your engineers, or provide senior product and technical direction without replacing the team you already trust.",
  ],
  [
    "How will we know what is happening?",
    "You get direct access to the people doing the work, a shared delivery board, concise written updates and a working demo every week.",
  ],
  [
    "What happens after launch?",
    "We plan handover from day one. Choose a defined support window, an ongoing improvement retainer, or a clean transition to your internal team.",
  ],
  [
    "Do you sign NDAs and handle sensitive data?",
    "Yes. We can sign a mutual NDA before detailed discovery and agree practical access, security and data-handling controls for the project.",
  ],
];

function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-20 md:pt-28">
      <div className="absolute inset-0 grid-bg opacity-[0.32] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
      <div className="absolute inset-x-0 top-0 h-[38%] bg-[radial-gradient(circle_at_top,rgba(46,197,182,0.08),transparent_62%)]" />

      {/* Orbit rings — subtle visual depth */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-[520px] w-[520px] rounded-full border border-border/40 md:h-[680px] md:w-[680px]"
          style={{ animation: reduce ? "none" : "hero-orbit 90s linear infinite" }}
        />
        <div
          className="absolute inset-6 rounded-full border border-border/25 md:inset-10"
          style={{ animation: reduce ? "none" : "hero-orbit-reverse 120s linear infinite" }}
        />
        {/* Orbital dot */}
        <div
          className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_12px_rgba(46,197,182,.5)]"
          style={{ animation: reduce ? "none" : "hero-orbit 90s linear infinite" }}
        />
      </div>

      <Container className="relative z-10 flex min-h-[calc(100svh-12rem)] flex-col items-center justify-center text-center pb-16 pt-10 md:pb-20 md:pt-14">
        <div className="flex flex-col items-center w-full">

          <div className="overflow-hidden">
            <motion.h1
              initial={reduce ? false : { y: "108%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.95, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto font-display text-[clamp(3.25rem,8.2vw,7rem)] font-semibold leading-[0.88] tracking-[-.055em]"
            >
              <BlurText
                text="Ideas are easy."
                animateBy="words"
                direction="bottom"
                delay={70}
                stepDuration={0.34}
                className="block"
              />
              <span className="block pt-1 leading-[1.02]">
                <BlurText
                  text="Shipping is the art."
                  animateBy="words"
                  direction="bottom"
                  delay={82}
                  stepDuration={0.34}
                  className="font-display text-[clamp(2.6rem,8vw,6.85rem)] font-semibold leading-[1.02] tracking-[-.055em] text-brand"
                />
              </span>
            </motion.h1>
          </div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mx-auto mt-7 max-w-xl text-pretty text-[15px] leading-8 text-muted-foreground md:text-[17px]"
          >
            We turn ambitious product ideas into dependable SaaS, AI and mobile experiences, with
            one senior team from first decision to production.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <ButtonColorful href="/contact" label="Start a project" />
            <Link
              to="/work"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-border-strong bg-background/90 px-5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand sm:px-6"
            >
              Explore the work
              <svg
                className="h-3.5 w-3.5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </Container>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.44 }}
        className="w-full"
      >
        <FlowingMenu
          items={[
            { link: "/#services", text: "AI Systems" },
            { link: "/#work", text: "Mobile" },
            { link: "/#process", text: "Infrastructure" },
            { link: "/about", text: "About Us" },
          ]}
          speed={22}
          textColor="#0f1115"
          bgColor="#f5f3ef"
          marqueeBgColor="#0f1115"
          marqueeTextColor="#ffffff"
        />
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border py-24 md:py-32">
      <Container>
        <SectionIntro
          eyebrow="Ways to work together"
          titleText="Four focused engagements. No sprawling menu."
          body="Choose the outcome closest to your current stage. We shape the exact team and scope after a focused discovery call."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {offers.map((o, index) => (
            <AnimateIcon key={o.title} animateOnHover asChild>
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.18 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative overflow-hidden bg-background p-7 transition-colors hover:bg-surface md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-foreground transition-colors duration-300 group-hover:text-brand">
                    <o.icon size={28} />
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    {o.n}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-3xl font-semibold">{o.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">{o.text}</p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {o.includes.map((x) => (
                    <span key={x} className="flex items-center gap-2 text-xs">
                      <CheckIcon size={13} className="text-brand" animate={false} />
                      {x}
                    </span>
                  ))}
                </div>
                <div className="mt-7 border-t border-border pt-4 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  {o.time}
                </div>
              </motion.article>
            </AnimateIcon>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="border-t border-border bg-surface py-24 md:py-32">
      <Container>
        <SectionIntro
          eyebrow="Selected product work"
          titleText="Evidence over empty claims."
          body="A look at the product problems we have taken on and the systems designed around them. Detailed walkthroughs are available during a project conversation."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:h-[420px] lg:grid-cols-3 lg:grid-rows-2">
          {cases.map((c, i) => (
            <Link
              key={c.name}
              to="/work/$id"
              params={{ id: c.id }}
              className="group flex min-h-[210px] overflow-hidden bg-background transition-colors hover:bg-surface lg:min-h-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-70px", amount: 0.18 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="flex w-full"
              >
                <div className="relative flex w-20 shrink-0 items-center justify-center overflow-hidden border-r border-border bg-foreground text-background">
                  <div className="absolute inset-0 opacity-10 grid-bg" />
                  <span className="relative -rotate-90 font-accent text-4xl font-light italic text-brand transition-transform duration-700 group-hover:-rotate-90 group-hover:scale-110">
                    {c.mark}
                  </span>
                  <span className="absolute left-3 top-4 font-mono text-[8px] uppercase tracking-widest text-background/50">
                    Case / 0{i + 1}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col p-5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-brand">
                    {c.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-2xl font-medium">{c.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {c.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {c.shipped.map((x) => (
                      <span
                        key={x}
                        className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Standards() {
  const points = [
    {
      icon: LayersIcon,
      t: "Your IP, your repository",
      d: "Source code, design files and deployment access are yours under the agreed engagement terms.",
    },
    {
      icon: LockIcon,
      t: "Security by agreement",
      d: "NDA support, least-privilege access and project-specific data controls are established before sensitive work.",
    },
    {
      icon: CheckIcon,
      t: "Built for handover",
      d: "Documentation, predictable architecture and knowledge transfer keep you independent after launch.",
    },
    {
      icon: SignalIcon,
      t: "Visible every week",
      d: "A working demo, shared delivery board and direct access to the people doing the work.",
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionIntro
          eyebrow="Working standard"
          titleText="Less risk. More visibility."
          body="Good delivery is not mysterious. These are the operating principles we bring to every engagement."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {points.map((p, index) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group bg-background p-6 transition-colors hover:bg-surface"
            >
              <p.icon size={20} className="text-brand" animateOnHover />
              <h3 className="mt-8 font-display text-2xl">{p.t}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}


function Process() {
  const steps = [
    {
      id: "01",
      label: "Align",
      phase: "Discovery",
      title: "Goals, users, constraints and the smallest useful release.",
      detail:
        "We define the target user, the outcome that matters and the smallest version worth building before design or engineering begins.",
    },
    {
      id: "02",
      label: "Shape",
      phase: "Direction",
      title: "Flows, architecture, delivery plan and a transparent proposal.",
      detail:
        "We map the product structure, make the important technical calls and turn uncertainty into a plan the whole team can trust.",
    },
    {
      id: "03",
      label: "Build",
      phase: "Delivery",
      title: "Weekly working software, tight feedback and continuous quality checks.",
      detail:
        "You see working software every week. Decisions stay visible and quality is checked continuously instead of saved for the end.",
    },
    {
      id: "04",
      label: "Launch",
      phase: "Release",
      title: "Production deployment, analytics, monitoring and team handover.",
      detail:
        "Release, monitoring and handover move as one plan so launch stays calm and your team can take ownership cleanly.",
    },
    {
      id: "05",
      label: "Improve",
      phase: "Iteration",
      title: "Support, learning and focused iterations after real users arrive.",
      detail:
        "Real usage and feedback decide what improves next, giving every follow-up iteration a clear reason to exist.",
    },
  ];

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-foreground/10 bg-foreground py-24 text-background md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[.035]" />


      <Container className="relative">
        {/* ── Header ── */}
        <div className="grid gap-10 border-b border-background/15 pb-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:pb-16">
          <div>
            <Eyebrow invert>How delivery works</Eyebrow>
            <h2 className="mt-5 max-w-[11ch] font-display text-[clamp(3.25rem,7vw,6.75rem)] font-semibold leading-[.88] tracking-[-.065em]">
              Clear steps.
              <br />
              No black box.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-xl text-sm leading-7 text-background/65 md:text-base md:leading-8">
              One senior team takes the work from first decision to dependable production. You
              always know what is happening, what we need from you and what comes next.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["5 focused phases", "Weekly working demos", "One accountable team"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-background/20 px-4 py-2 font-mono text-[9px] uppercase tracking-[.18em] text-background/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div ref={timelineRef} className="relative mt-16 lg:mt-24">
          {/* Vertical progress line – centered on lg, left-aligned on mobile */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-background/10 lg:left-1/2 lg:-translate-x-1/2">
            <motion.div
              className="h-full w-full origin-top bg-brand"
              style={{ scaleY: smoothProgress }}
            />
          </div>

          <ol className="relative space-y-10 lg:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.li
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative grid lg:grid-cols-2 lg:gap-16"
                >
                  {/* Timeline node */}
                  <div className="absolute left-5 top-0 z-10 flex -translate-x-1/2 items-center justify-center lg:left-1/2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand bg-foreground font-mono text-[10px] tracking-widest text-background shadow-[0_0_20px_rgba(46,197,182,.25)] transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(46,197,182,.45)]">
                      {step.id}
                    </span>
                  </div>

                  {/* Card – alternates sides on desktop */}
                  <div
                    className={`pl-14 lg:pl-0 ${isEven ? "lg:col-start-1 lg:pr-20 lg:text-right" : "lg:col-start-2 lg:pl-20"} lg:py-16`}
                  >
                    <span className="inline-block font-mono text-[9px] uppercase tracking-[.2em] text-brand">
                      {step.phase}
                    </span>
                    <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-.04em] xl:text-4xl">
                      {step.label}
                    </h3>
                    <p className="mt-4 text-sm font-medium leading-7 text-background/85">
                      {step.title}
                    </p>
                    <p className="mt-3 text-[13px] leading-6 text-background/50">
                      {step.detail}
                    </p>
                  </div>

                  {/* Empty column for the other side */}
                  <div
                    className={`hidden lg:block ${isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`}
                    aria-hidden="true"
                  />
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]"
        >
          <div>
            <Eyebrow>Before we start</Eyebrow>
            <h2 className="mt-4 font-display text-5xl font-semibold">
              <BlurText
                text="Straight answers."
                animateBy="words"
                direction="bottom"
                delay={65}
                stepDuration={0.32}
                className="block"
              />
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              Still wondering about something? Email us and a team member will reply directly.
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="border-t border-border"
          >
            {faqs.map((f, i) => (
              <AccordionItem key={f[0]} value={`faq-${i}`} className="border-b border-border">
                <AccordionTrigger className="group flex w-full items-center justify-between gap-6 py-6 text-left font-display text-[1.15rem] font-semibold tracking-[-.025em] transition-colors hover:text-brand md:text-[1.35rem] [&[data-state=open]]:text-brand [&>svg]:hidden">
                  <span className="max-w-[28ch]">{f[0]}</span>
                  <span
                    className="relative flex h-5 w-5 shrink-0 items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-brand" />
                    <motion.span
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-brand transition-transform duration-300 group-data-[state=open]:scale-y-0"
                    />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-10 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                  {f[1]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Services />
      <Work />
      <Standards />
      <Process />
      <FAQ />
      <SiteFooter />
    </main>
  );
}
