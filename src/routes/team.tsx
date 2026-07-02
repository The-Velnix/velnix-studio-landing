import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import BlurText from "@/components/react-bits/BlurText";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import { Container, SiteFooter, SiteHeader } from "../components/site-shell";
import { ButtonColorful } from "@/components/ui/button-colorful";

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [{ title: "Team | The Velnix" }] }),
  component: TeamPage,
});

const people = [
  {
    name: "Mihir Rabari",
    role: "Product Engineering",
    owns: "Architecture, delivery and infrastructure",
    bio: "Mihir directs our core systems engineering. He focuses on designing scalable architectures, automated deployment workflows, and robust cloud infrastructure that ensures performance and uptime.",
    skills: [
      "System Architecture",
      "Cloud Infrastructure",
      "Kubernetes",
      "DevOps",
      "Database Design",
    ],
    mark: "MR",
  },
  {
    name: "Khushi Trivedi",
    role: "Operations & Growth",
    owns: "Client operations, growth and partnerships",
    bio: "Khushi coordinates our client partnerships and operational strategy. She ensures clear communication paths, structured engagements, and smooth alignment between technical milestones and business growth.",
    skills: [
      "Client Operations",
      "Growth Strategy",
      "Product Marketing",
      "Partnership Development",
      "Risk Management",
    ],
    mark: "KT",
  },
  {
    name: "Khushi Patel",
    role: "Product Design",
    owns: "UI/UX, brand systems and design direction",
    bio: "Khushi translates ambiguous concepts into cohesive, gorgeous brand and interface systems. She establishes the visual direction, design tokens, and components that make our applications premium.",
    skills: [
      "UI/UX Design",
      "Brand Systems",
      "Design Systems",
      "Product Strategy",
      "Figma Direction",
    ],
    mark: "KP",
  },
  {
    name: "Aangi Shah",
    role: "Experience Design",
    owns: "Product flows and frontend experience",
    bio: "Aangi crafts the detailed workflows and micro-interactions of our applications. Her focus is on making complex user steps feel natural, responsive, and delightful across all devices.",
    skills: [
      "Interaction Design",
      "User Flow Mapping",
      "Framer Motion",
      "CSS Systems",
      "Prototyping",
    ],
    mark: "AS",
  },
  {
    name: "Karan Mistry",
    role: "AI Engineering",
    owns: "Machine learning, agents and RAG systems",
    bio: "Karan leads our intelligent systems work stream. He designs grounded LLM pipelines, autonomous agent workflows, secure integrations, and evaluation frameworks for dependable AI features.",
    skills: [
      "LLM Integration",
      "RAG Systems",
      "Vector Databases",
      "Agent Workflows",
      "Python / PyTorch",
    ],
    mark: "KM",
  },
  {
    name: "Jignesh Prajapati",
    role: "Mobile Engineering",
    owns: "Flutter and cross-platform applications",
    bio: "Jignesh builds cross-platform mobile apps using Flutter. He ensures high-performance compilation, native platform integrations, and responsive UI rendering on both iOS and Android.",
    skills: ["Flutter", "Dart", "iOS / Android Native", "Mobile Architecture", "State Management"],
    mark: "JP",
  },
  {
    name: "Tajes Patel",
    role: "Frontend Engineering",
    owns: "Web development, UI components and performance",
    bio: "Tajes bridges the gap between high-end design systems and production code. He builds performant, modular web components, optimizes loading speeds, and implements fluid responsive layouts.",
    skills: [
      "React / Next.js",
      "TypeScript",
      "TailwindCSS",
      "Web Performance",
      "Component Architecture",
    ],
    mark: "TP",
  },
  {
    name: "Jaivik Prajapati",
    role: "Backend Engineering",
    owns: "API development, systems integration and cloud services",
    bio: "Jaivik constructs our robust server-side ecosystems. He designs high-speed RESTful and GraphQL APIs, integrates third-party services safely, and optimizes server performance.",
    skills: [
      "Node.js / Go",
      "REST & GraphQL APIs",
      "PostgreSQL / Redis",
      "Microservices",
      "API Security",
    ],
    mark: "JV",
  },
];

const principles = [
  {
    title: "Direct developer access",
    description:
      "We don't have account managers or translation chains. You collaborate directly with the engineers and designers building your software. This keeps feedback loops tight and execution clear.",
  },
  {
    title: "One accountable partner",
    description:
      "The team that designs your database structures and user experience is the same team that deploys your system and supports it post-launch. Total ownership from first line of code to production.",
  },
  {
    title: "Iterative momentum",
    description:
      "We ship working demos every single week. Rather than waiting for a big reveal, you see development unfold in real-time, allowing you to test, learn, and adapt direction dynamically.",
  },
];

function TeamPage() {
  const reduce = useReducedMotion();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 grid-bg opacity-[0.25] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative z-10 text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="font-mono text-[9px] uppercase tracking-[.25em] text-brand"
          >
            The People / Who We Are
          </motion.p>
          <div className="mt-5 overflow-hidden">
            <motion.h1
              initial={reduce ? false : { y: "108%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-[14ch] text-balance font-display text-[clamp(2.75rem,7.5vw,6rem)] font-semibold leading-[0.9] tracking-[-.055em]"
            >
              <BlurText
                text="Deliberately small."
                animateBy="words"
                direction="bottom"
                delay={60}
                stepDuration={0.34}
                className="block"
              />
              <span className="block pt-1 leading-[1.02]">
                <BlurText
                  text="Deeply committed."
                  animateBy="words"
                  direction="bottom"
                  delay={75}
                  stepDuration={0.34}
                  className="font-display text-[clamp(2.65rem,7.2vw,5.85rem)] font-semibold leading-[1.02] tracking-[-.055em] text-brand"
                />
              </span>
            </motion.h1>
          </div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mx-auto mt-8 max-w-xl text-pretty text-[15px] leading-8 text-muted-foreground md:text-[17px]"
          >
            We are a tight-knit studio of product designers, systems engineers, and AI specialists.
            We work alongside founders to build software that works.
          </motion.p>
        </Container>
      </section>

      {/* Grid Section */}
      <section className="border-t border-border bg-surface py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {people.map((person, index) => (
              <motion.article
                key={person.name}
                initial={reduce ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col rounded-3xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
              >
                <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface">
                  <div className="absolute inset-0 grid-bg opacity-50 transition-opacity duration-300 group-hover:opacity-75" />
                  <span className="relative font-accent text-5xl font-light italic text-foreground/80 transition-transform duration-500 group-hover:scale-105">
                    {person.mark}
                  </span>
                  <span className="absolute right-4 top-4 font-mono text-[9px] tracking-widest text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-6 flex-1">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-brand font-medium">
                    {person.role}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground">
                    <Link
                      to="/team/$id"
                      params={{ id: person.name.toLowerCase().replace(" ", "-") }}
                      className="hover:text-brand transition-colors inline-flex items-center gap-2.5 group/link"
                    >
                      <span>{person.name}</span>
                      <svg className="h-4.5 w-4.5 text-muted-foreground group-hover/link:text-brand group-hover/link:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{person.bio}</p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-5">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground/60 mb-2.5">
                    Ownership
                  </p>
                  <p className="text-xs leading-5 text-foreground/90 font-medium">{person.owns}</p>
                </div>

                <div className="mt-5 border-t border-border/60 pt-5">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground/60 mb-3">
                    Expertise
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {person.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border-strong bg-surface/50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground group-hover:border-brand/20 group-hover:text-foreground transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Operating Principles */}
      <section className="border-t border-border py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[.25em] text-brand">
                Core Philosophy
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-.04em] md:text-5xl">
                How we ship digital products.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground max-w-md">
                We believe that software should be built with minimal friction and maximum clarity.
                These operating guidelines form the basis of every project we take on.
              </p>
              <div className="mt-8">
                <ButtonColorful href="/contact" label="Work with us" />
              </div>
            </div>
            <div className="grid gap-10">
              {principles.map((pr, idx) => (
                <div
                  key={pr.title}
                  className="flex gap-6 border-b border-border/60 pb-8 last:border-b-0 last:pb-0"
                >
                  <span className="font-mono text-sm tracking-widest text-brand font-medium">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                      {pr.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{pr.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}
