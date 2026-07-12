import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Container, SiteFooter, SiteHeader } from "@/components/site-shell";
import { Eyebrow } from "@/components/section";

export const Route = createFileRoute("/team/$id")({
  loader: ({ params }) => {
    const member = teamData[params.id];
    if (!member) throw notFound();
    return { member, id: params.id };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.member.name ?? "Team Member"} | The Velnix` },
      {
        name: "description",
        content: `${loaderData?.member.name} - ${loaderData?.member.role} at The Velnix.`,
      },
    ],
  }),
  component: TeamMemberDetailPage,
});

type TeamMember = {
  id: string;
  name: string;
  role: string;
  owns: string;
  bio: string;
  skills: string[];
  mark: string;
  socials: Array<{ platform: "github" | "linkedin" | "twitter" | "dribbble" | "email" | "portfolio"; url: string }>;
};

const teamData: Record<string, TeamMember> = {
  "mihir-rabari": {
    id: "mihir-rabari",
    name: "Mihir Rabari",
    role: "Product Engineering",
    owns: "Architecture, delivery and infrastructure",
    bio: "Mihir directs our core systems engineering. He focuses on designing scalable architectures, automated deployment workflows, and robust cloud infrastructure that ensures performance, reliability, and continuous uptime.",
    skills: ["System Architecture", "Cloud Infrastructure", "Kubernetes", "DevOps", "Database Design", "Node.js & Go"],
    mark: "MR",
    socials: [
      { platform: "github", url: "https://github.com/Mihir-Rabari" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/mihir-rabari/" },
      { platform: "twitter", url: "https://x.com" },
      { platform: "email", url: "mailto:mihir@thevelnix.com" },
    ],
  },
  "khushi-trivedi": {
    id: "khushi-trivedi",
    name: "Khushi Trivedi",
    role: "Operations & Growth",
    owns: "Client operations, growth and partnerships",
    bio: "Khushi coordinates our client partnerships and operational strategy. She ensures clear communication paths, structured engagements, and smooth alignment between technical milestones and business growth.",
    skills: ["Client Operations", "Growth Strategy", "Product Marketing", "Partnership Development", "Risk Management", "Product Roadmapping"],
    mark: "KT",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/khushi-trivedi-03a98333b/" },
      { platform: "github", url: "https://github.com/KhushiTrivediii" },
      { platform: "twitter", url: "https://x.com" },
      { platform: "email", url: "mailto:khushitrivedi@thevelnix.com" },
    ],
  },
  "khushi-patel": {
    id: "khushi-patel",
    name: "Khushi Patel",
    role: "Product Design",
    owns: "UI/UX, brand systems and design direction",
    bio: "Khushi translates ambiguous concepts into cohesive, gorgeous brand and interface systems. She establishes the visual direction, design tokens, and components that make our applications feel premium.",
    skills: ["UI/UX Design", "Brand Systems", "Design Systems", "Product Strategy", "Figma Direction", "Typography"],
    mark: "KP",
    socials: [
      { platform: "github", url: "https://github.com/Khushipatel3" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/khushi-patel-279567338" },
      { platform: "portfolio", url: "https://khushipatel11.netlify.app/" },
      { platform: "email", url: "mailto:khushipatel@thevelnix.com" },
    ],
  },
  "aangi-shah": {
    id: "aangi-shah",
    name: "Aangi Shah",
    role: "Experience Design",
    owns: "Product flows and frontend experience",
    bio: "Aangi crafts the detailed workflows and micro-interactions of our applications. Her focus is on making complex user steps feel natural, responsive, and delightful across all devices.",
    skills: ["Interaction Design", "User Flow Mapping", "Framer Motion", "CSS Systems", "Prototyping", "Design System Audits"],
    mark: "AS",
    socials: [
      { platform: "github", url: "https://github.com/aangi969" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/aangishah969/" },
      { platform: "portfolio", url: "https://shahaangi.netlify.app/" },
      { platform: "email", url: "mailto:aangi@thevelnix.com" },
    ],
  },
  "karan-mistry": {
    id: "karan-mistry",
    name: "Karan Mistry",
    role: "AI Engineering",
    owns: "Machine learning, agents and RAG systems",
    bio: "Karan leads our intelligent systems work stream. He designs grounded LLM pipelines, autonomous agent workflows, secure integrations, and evaluation frameworks for dependable AI features.",
    skills: ["LLM Integration", "RAG Systems", "Vector Databases", "Agent Workflows", "Python / PyTorch", "LangChain & LlamaIndex"],
    mark: "KM",
    socials: [
      { platform: "github", url: "https://github.com/karn0501" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/karan-mistry-03084236a/" },
      { platform: "portfolio", url: "https://karanmistryportfolio.vercel.app/" },
      { platform: "email", url: "mailto:karnn@thevelnix.com" },
    ],
  },
  "jignesh-prajapati": {
    id: "jignesh-prajapati",
    name: "Jignesh Prajapati",
    role: "Mobile Engineering",
    owns: "Flutter and cross-platform applications",
    bio: "Jignesh builds cross-platform mobile apps using Flutter. He ensures high-performance compilation, native platform integrations, and responsive UI rendering on both iOS and Android.",
    skills: ["Flutter", "Dart", "iOS / Android Native", "Mobile Architecture", "State Management", "App Store Operations"],
    mark: "JP",
    socials: [
      { platform: "github", url: "https://github.com/Jignesh5049" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/jignesh5049/" },
      { platform: "portfolio", url: "https://jigneshprotfolio.vercel.app/" },
      { platform: "email", url: "mailto:jigneshp@thevelnix.com" },
    ],
  },
  "Tejas-patel": {
    id: "Tejas-patel",
    name: "Tejas Patel",
    role: "Frontend Engineering",
    owns: "Web development, UI components and performance",
    bio: "Tejas bridges the gap between high-end design systems and production code. He builds performant, modular web components, optimizes loading speeds, and implements fluid responsive layouts.",
    skills: ["React / Next.js", "TypeScript", "TailwindCSS", "Web Performance", "Component Architecture", "State Management"],
    mark: "TP",
    socials: [
      { platform: "github", url: "https://github.com/Tejaspatel1524" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/Tejas-patel-16b9a0379/" },
      { platform: "portfolio", url: "https://Tejas24portfolio.netlify.app/" },
      { platform: "email", url: "mailto:Tejaspatel@thevelnix.com" },
    ],
  },
  "jaivik-prajapati": {
    id: "jaivik-prajapati",
    name: "Jaivik Prajapati",
    role: "Backend Engineering",
    owns: "API development, systems integration and cloud services",
    bio: "Jaivik constructs our robust server-side ecosystems. He designs high-speed RESTful and GraphQL APIs, integrates third-party services safely, and optimizes server performance.",
    skills: ["Node.js / Go", "REST & GraphQL APIs", "PostgreSQL / Redis", "Microservices", "API Security", "AWS / Docker"],
    mark: "JV",
    socials: [
      { platform: "github", url: "https://github.com/jaivik2005" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/jaivik2005/" },
      { platform: "portfolio", url: "https://jaivik.xyz/" },
      { platform: "email", url: "mailto:jaivikprajapati@thevelnix.com" },
    ],
  },
};

function TeamMemberDetailPage() {
  const { member, id } = Route.useLoaderData();
  const reduce = useReducedMotion();

  // Find previous and next colleagues relative to the current one
  const allMemberIds = Object.keys(teamData);
  const currentIndex = allMemberIds.indexOf(id);
  const prevIndex = (currentIndex - 1 + allMemberIds.length) % allMemberIds.length;
  const nextIndex = (currentIndex + 1) % allMemberIds.length;
  const otherMembers = [
    teamData[allMemberIds[prevIndex]],
    teamData[allMemberIds[nextIndex]],
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="absolute inset-0 grid-bg opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
        <Container className="relative">
          <Link
            to="/team"
            className="mb-8 inline-flex items-center gap-2 text-xs font-mono tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to team
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div>
              <Eyebrow>{member.role}</Eyebrow>
              <h1 className="mt-4 font-display text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-[-.05em]">
                {member.name}
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl">
                {member.bio}
              </p>

              {/* Social profiles with gorgeous design */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60 mr-2 font-medium">
                  Connect:
                </span>
                {member.socials.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.url}
                    target={soc.platform === "email" ? undefined : "_blank"}
                    rel={soc.platform === "email" ? undefined : "noopener noreferrer"}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/50 text-foreground transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand shadow-sm hover:shadow-[0_4px_12px_rgba(46,197,182,0.15)]"
                    aria-label={`Visit ${member.name}'s ${soc.platform}`}
                  >
                    <SocialIcon platform={soc.platform} />
                  </a>
                ))}
              </div>
            </div>

            {/* Left Column Graphic initials */}
            <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface shadow-md lg:h-64 lg:w-64 lg:justify-self-end">
              <div className="absolute inset-0 grid-bg opacity-45" />
              <span className="relative font-accent text-7xl font-light italic text-brand">
                {member.mark}
              </span>
              <span className="absolute right-4 top-4 font-mono text-[9px] tracking-widest text-muted-foreground/40">
                Studio Member
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Responsibilities & Skills ── */}
      <section className="py-16 md:py-24 border-b border-border bg-surface/20">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-brand font-semibold mb-4">
                Areas of Ownership
              </h3>
              <p className="text-base leading-8 text-foreground/90 font-medium">
                {member.owns}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Responsible for direct execution, code architecture review, and milestone management relating to these operational fields.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-brand font-semibold mb-4">
                Core Expertise & Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:border-brand/35 hover:text-foreground transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Other Team Members (Side-by-side) ── */}
      <section className="py-20 md:py-28 bg-surface/40">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[.25em] text-brand">
                Collaborative Studio
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Other Team Specialists
              </h2>
            </div>
            <div>
              <Link
                to="/team"
                className="group inline-flex h-11 items-center gap-2 rounded-full border border-border-strong bg-background/80 px-5 text-sm font-semibold hover:-translate-y-0.5 hover:border-foreground hover:bg-background transition-all"
              >
                <span>View all members</span>
                <svg className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {otherMembers.map((otherMem, idx) => (
              <motion.article
                key={otherMem.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl border border-border bg-background p-6 hover:border-brand/40 transition-colors duration-300"
              >
                <div className="flex flex-col justify-between h-full min-h-[220px]">
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-brand font-medium">
                      {idx === 0 ? "Previous Specialist" : "Next Specialist"} • {otherMem.role}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground flex items-center justify-between">
                      <span>{otherMem.name}</span>
                      <svg className="h-4 w-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground max-w-sm line-clamp-2">
                      {otherMem.bio}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-muted-foreground/60 uppercase">
                      Mark {otherMem.mark}
                    </span>
                    <Link
                      to="/team/$id"
                      params={{ id: otherMem.id }}
                      className="text-xs font-semibold text-foreground group-hover:text-brand transition-colors"
                    >
                      View profile &rarr;
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}

/* ── Inline SVG Social Icons ── */

function SocialIcon({ platform }: { platform: "github" | "linkedin" | "twitter" | "dribbble" | "email" | "portfolio" }) {
  if (platform === "portfolio") {
    return (
      <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.905 0-5.625-.795-7.943-2.182m15.886 0a9.06 9.06 0 0 1 .157 1.932m-16.043-1.93a9.06 9.06 0 0 0-.157 1.932" />
      </svg>
    );
  }
  if (platform === "github") {
    return (
      <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
      </svg>
    );
  }
  if (platform === "linkedin") {
    return (
      <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }
  if (platform === "twitter") {
    return (
      <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (platform === "dribbble") {
    return (
      <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm8.16 9c-.58-.11-2.92-.52-5.4-.15.93 2.51 1.3 4.67 1.39 5.34 2.44-1.42 3.73-3.61 4.01-5.19zM15 17.53c-.09-.76-.51-3.08-1.52-5.69-.03 0-.07.01-.1.02-4.08 1.48-5.56 4.39-5.71 4.7 1.7 1.25 3.79 1.94 5.99 1.94 1.25 0 2.43-.22 3.53-.61zM6.6 15.35c.18-.32 2.21-3.79 6.21-5.11.21-.07.41-.13.62-.18-.28-.62-.59-1.25-.92-1.87-4.22 1.22-8.32 1.13-8.8 1.12.35 2.28 1.4 4.3 3.09 5.76-.07.1-.14.19-.2.28zm-.95-7.1c.54.02 3.99.11 7.82-1.01-.48-.96-.99-1.87-1.49-2.69-3.32 1.09-5.7 3.32-6.33 3.7zm7.39-4.02c.49.8 1 1.68 1.46 2.62 2.2-.74 4.25-.66 4.45-.64-.91-1.63-2.45-2.88-4.29-3.32.13.43.25.9.38 1.34zm5.79 3.5c-.32-.03-2.64-.13-5.07.69.31.6.61 1.21.89 1.83 2.29-.29 4.88.11 5.35.19-.07-1-.44-1.92-1.17-2.71zM12 20c-4.41 0-8-3.59-8-8 0-.08 0-.15.01-.23.11 0 .34.01.67.01 4.44 0 7.82-1.28 9.38-2.07.05.1.1.21.15.31 1.04 2.11 1.87 4.54 2.14 5.92-.04.03-.08.06-.12.09A7.942 7.942 0 0112 20z" />
      </svg>
    );
  }
  return (
    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}
