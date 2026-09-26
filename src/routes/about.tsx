import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import BlurText from "@/components/react-bits/BlurText";
import { Container, SiteFooter, SiteHeader } from "@/components/site-shell";
import { Eyebrow, SectionIntro } from "@/components/section";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { BlocksIcon } from "@/components/animate-ui/icons/blocks";
import { BotIcon } from "@/components/animate-ui/icons/bot";
import { ChartLineIcon } from "@/components/animate-ui/icons/chart-line";
import { CheckIcon } from "@/components/animate-ui/icons/check";
import { CompassIcon } from "@/components/animate-ui/icons/compass";
import { LayersIcon } from "@/components/animate-ui/icons/layers";
import { LockIcon } from "@/components/animate-ui/icons/lock";
import { SignalIcon } from "@/components/animate-ui/icons/signal";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | The Velnix" },
      {
        name: "description",
        content:
          "The Velnix is a technology company focused on building modern, scalable digital solutions for businesses and users. Founded 1 June 2026.",
      },
      { property: "og:title", content: "About Us | The Velnix" },
      {
        property: "og:description",
        content:
          "Building Scalable IT Solutions for Tomorrow. The Velnix turns ideas into practical products and scalable digital experiences.",
      },
    ],
  }),
  component: AboutPage,
});

// Expertise areas covering the complete digital product development lifecycle
const expertiseAreas = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Software Development",
  "AI & Machine Learning",
  "Business Automation",
  "Custom Digital Solutions",
  "Product Development",
  "Cloud & Backend Solutions",
  "Digital Transformation",
];

// Why The Velnix - 6 Core Working Principles
const principles = [
  {
    icon: CompassIcon,
    n: "01",
    title: "Business-First Thinking",
    description: "We focus on understanding the actual business problem before choosing the technology.",
  },
  {
    icon: BlocksIcon,
    n: "02",
    title: "Scalable Technology",
    description: "We build solutions with future growth, maintainability, and scalability in mind.",
  },
  {
    icon: LayersIcon,
    n: "03",
    title: "User-Centered Design",
    description: "We focus on creating digital experiences that are simple, intuitive, and useful.",
  },
  {
    icon: SignalIcon,
    n: "04",
    title: "Transparent Communication",
    description: "We believe in clear communication throughout the development process.",
  },
  {
    icon: CheckIcon,
    n: "05",
    title: "Quality-Focused Development",
    description: "We focus on writing reliable, maintainable, and production-ready solutions.",
  },
  {
    icon: ChartLineIcon,
    n: "06",
    title: "Long-Term Thinking",
    description: "We build solutions with continuous improvement and long-term value in mind.",
  },
];

// Our Work - Projects
const projects = [
  {
    id: "01",
    name: "Restaurant Voice Ordering Agent",
    location: "Australia",
    status: "Completed",
    description:
      "A voice-based solution designed to help restaurants handle customer orders through a conversational voice agent, reducing manual effort and improving the ordering experience.",
    tag: "Voice AI & Automation",
  },
  {
    id: "02",
    name: "Instagram Post Design",
    location: "India",
    status: "Completed",
    description:
      "Creative social media post design work focused on creating visually engaging content for Instagram and maintaining a consistent brand presence.",
    tag: "UI/UX & Brand Design",
  },
  {
    id: "03",
    name: "E-commerce Mobile Application",
    location: "India",
    status: "Ongoing",
    description:
      "An ongoing mobile application project focused on creating an e-commerce experience for customers, including product discovery, shopping, and other essential commerce functionality.",
    tag: "Mobile App Development",
  },
];

// Project statistics
const stats = [
  { value: "3", label: "Clients Served", sub: "3 Clients" },
  { value: "3", label: "Total Projects", sub: "3 Projects" },
  { value: "2", label: "Completed Projects", sub: "2 Completed" },
  { value: "1", label: "Ongoing Project", sub: "1 Ongoing" },
];

// Leadership members: only name and role
const leadership = [
  { name: "Jignesh Prajapati", role: "Founder", mark: "J" },
  { name: "Karan Mistry", role: "Co-Founder", mark: "K" },
  { name: "Mihir Rabari", role: "Co-Founder", mark: "M" },
  { name: "Jaivik Prajapati", role: "Co-Founder", mark: "JV" },
];

function AboutPage() {
  const reduce = useReducedMotion();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 grid-bg opacity-[0.28] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <div className="absolute inset-x-0 top-0 h-[42%] bg-[radial-gradient(circle_at_top,rgba(46,197,182,0.1),transparent_65%)]" />

        {/* Orbit ring decoration */}
        <div className="pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
          <div
            className="h-[520px] w-[520px] rounded-full border border-border/40 md:h-[680px] md:w-[680px]"
            style={{ animation: reduce ? "none" : "hero-orbit 90s linear infinite" }}
          />
          <div
            className="absolute inset-6 rounded-full border border-border/25 md:inset-10"
            style={{ animation: reduce ? "none" : "hero-orbit-reverse 120s linear infinite" }}
          />
          <div
            className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_12px_rgba(46,197,182,.5)]"
            style={{ animation: reduce ? "none" : "hero-orbit 90s linear infinite" }}
          />
        </div>

        <Container className="relative z-10 text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="font-mono text-[9px] uppercase tracking-[.25em] text-brand"
          >
            About The Velnix
          </motion.p>

          <div className="mt-5 overflow-hidden">
            <motion.h1
              initial={reduce ? false : { y: "108%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-4xl font-display text-[clamp(1.75rem,4.4vw,3.6rem)] font-semibold leading-[1.08] tracking-[-.045em]"
            >
              <BlurText
                text="Building Scalable IT Solutions"
                animateBy="words"
                direction="bottom"
                delay={60}
                stepDuration={0.34}
                className="justify-center sm:!flex-nowrap"
              />
              <span className="block pt-1 leading-[1.02]">
                <BlurText
                  text="for Tomorrow"
                  animateBy="words"
                  direction="bottom"
                  delay={80}
                  stepDuration={0.34}
                  className="font-display text-[clamp(1.65rem,4.2vw,3.4rem)] font-semibold leading-[1.02] tracking-[-.045em] text-brand justify-center"
                />
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mx-auto mt-7 max-w-2xl text-justify text-[15px] leading-8 text-muted-foreground md:text-[17px]"
          >
            The Velnix is a technology company focused on creating modern, scalable, and meaningful
            digital solutions that help businesses turn ideas into practical products and experiences.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <ButtonColorful href="/contact" label="Start a project" />
            <a
              href="#our-work"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-border-strong bg-background/90 px-5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand sm:px-6"
            >
              Explore our work
              <svg
                className="h-3.5 w-3.5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </Container>
      </section>

      {/* 2. Who We Are Section */}
      <section className="border-t border-border bg-surface py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <Eyebrow>Identity & Foundation</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-.04em] md:text-5xl">
                Who We Are
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-8 text-muted-foreground md:text-base">
                <p>
                  The Velnix is a technology company founded on{" "}
                  <strong className="font-semibold text-foreground">1 June 2026</strong>, focused on
                  building digital solutions that solve real-world business problems.
                </p>
                <p>
                  We work across web, mobile, software, design, AI, and other modern technologies to
                  transform ideas into reliable and scalable digital experiences.
                </p>
                <p>
                  Our approach combines technology, design, and business understanding to create
                  solutions that are practical, user-focused, and built for long-term growth.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="rounded-full border border-border bg-background px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-brand">
                  Founded: 1 June 2026
                </div>
                <div className="rounded-full border border-border bg-background px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Global Delivery
                </div>
              </div>
            </div>

            {/* Complete product development lifecycle coverage */}
            <div className="rounded-3xl border border-border bg-background p-7 md:p-9 shadow-sm">
              <span className="font-mono text-[9px] uppercase tracking-[.25em] text-brand">
                Full-Lifecycle Expertise
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
                End-to-end digital product capabilities.
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Our areas of expertise cover the complete digital product development lifecycle,
                ensuring no gaps between strategy, design, and production.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {expertiseAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-surface/60 px-3.5 py-2.5 text-xs font-medium text-foreground transition-colors hover:border-brand/30 hover:bg-surface"
                  >
                    <CheckIcon size={14} className="text-brand shrink-0" animate={false} />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionIntro
            eyebrow="Purpose & Direction"
            titleText="Built with purpose. Directed with clarity."
            body="We align every technical and creative effort with our overarching mission and long-term vision."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {/* Mission Card */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between rounded-3xl border border-border bg-surface/50 p-8 md:p-10 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[.25em] text-brand font-medium">
                    01 / Purpose
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-brand">
                    <CompassIcon size={18} animateOnHover />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground">
                  Our Mission
                </h3>
                <p className="mt-4 text-[15px] md:text-base leading-8 text-muted-foreground">
                  To make technology practical, accessible, and impactful by creating digital
                  solutions that solve real business problems and deliver meaningful experiences to
                  users.
                </p>
              </div>

              <div className="mt-8 border-t border-border/60 pt-5">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  Impact-driven technology
                </span>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between rounded-3xl border border-border bg-surface/50 p-8 md:p-10 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[.25em] text-brand font-medium">
                    02 / Horizon
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-brand">
                    <SignalIcon size={18} animateOnHover />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground">
                  Our Vision
                </h3>
                <p className="mt-4 text-[15px] md:text-base leading-8 text-muted-foreground">
                  To become a trusted technology partner for businesses by continuously creating
                  innovative, reliable, and scalable digital solutions.
                </p>
              </div>

              <div className="mt-8 border-t border-border/60 pt-5">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  Scalable partnerships
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 4. Why The Velnix Section */}
      <section className="border-t border-border bg-surface py-20 md:py-28">
        <Container>
          <SectionIntro
            eyebrow="Working Principles"
            titleText="Why The Velnix"
            body="Our operating principles guide every product decision, technical architecture choice, and client interaction."
          />

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((pr, index) => (
              <AnimateIcon key={pr.title} animateOnHover asChild>
                <motion.article
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group relative bg-background p-7 md:p-8 transition-colors hover:bg-surface"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground transition-colors duration-300 group-hover:text-brand">
                      <pr.icon size={24} />
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                      {pr.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                    {pr.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{pr.description}</p>
                </motion.article>
              </AnimateIcon>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Our Work Section */}
      <section id="our-work" className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionIntro
            eyebrow="Client Experience & Track Record"
            titleText="Our Work"
            body="Since our beginning, The Velnix has worked with 3 clients across Australia and India, delivering 3 projects in total. This includes 2 completed projects and 1 ongoing project, demonstrating our experience across different types of digital solutions and creative services."
          />

          {/* Project statistics */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="rounded-2xl border border-border bg-surface/50 p-6 text-center"
              >
                <div className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 font-mono text-[9px] uppercase tracking-widest text-brand font-medium">
                  {s.sub}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Project cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((proj, idx) => (
              <motion.article
                key={proj.id}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-surface/60 p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                      Client Location: {proj.location}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-wider ${proj.status === "Completed"
                          ? "border border-brand/30 bg-brand/10 text-brand"
                          : "border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                        }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${proj.status === "Completed" ? "bg-brand" : "bg-amber-500 animate-pulse"
                          }`}
                      />
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-foreground">
                    {proj.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{proj.description}</p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/70">
                    Project {proj.id}
                  </span>
                  <span className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-muted-foreground">
                    {proj.tag}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Leadership Section */}
      <section className="border-t border-border bg-surface py-20 md:py-28">
        <Container>
          <SectionIntro
            eyebrow="Leadership"
            titleText="Meet the People Behind The Velnix"
            body="Our founders lead strategy, design, mobile, systems, and intelligent applications with direct hands-on ownership."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col rounded-3xl border border-border bg-background p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
              >
                {/* Monogram profile container */}
                <div className="relative mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface">
                  <div className="absolute inset-0 grid-bg opacity-50 transition-opacity duration-300 group-hover:opacity-75" />
                  <span className="relative font-accent text-4xl font-light italic text-foreground/80 transition-transform duration-500 group-hover:scale-105">
                    {person.mark}
                  </span>
                  <span className="absolute right-2 top-2 font-mono text-[8px] tracking-widest text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>

                {/* Role & Name ONLY */}
                <div className="mt-5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-brand font-medium">
                    {person.role}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground">
                    {person.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Final CTA Section */}
      <section className="border-t border-border py-24 md:py-32 bg-surface">
        <Container className="text-center">
          <p className="font-mono text-[9px] uppercase tracking-[.25em] text-brand">
            Start Your Project
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-.04em] md:text-5xl max-w-xl mx-auto leading-tight">
            Have an idea worth building?
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground max-w-md mx-auto">
            Let's turn your idea into a scalable digital solution.
          </p>
          <div className="mt-8">
            <ButtonColorful href="/contact" label="Start a conversation" />
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}
