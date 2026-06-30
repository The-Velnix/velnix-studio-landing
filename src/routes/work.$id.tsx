import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@/components/animate-ui/icons/arrow-left";
import { CheckIcon } from "@/components/animate-ui/icons/check";
import { Container, SiteFooter, SiteHeader } from "../components/site-shell";
import { ButtonColorful } from "@/components/ui/button-colorful";
import BlurText from "@/components/react-bits/BlurText";
import { useState, useEffect } from "react";

type Project = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  challenge: string;
  solution: string;
  shipped: string[];
  tech: string[];
  mark: string;
  features: { title: string; desc: string }[];
};

const projects: Record<string, Project> = {
  codedog: {
    id: "codedog",
    name: "CodeDog",
    tagline: "AI-assisted codebase security that turns complex scans into actionable findings.",
    category: "AI / Developer tools",
    challenge:
      "Scanning codebases for vulnerabilities is traditionally slow and generates complex reports full of false positives, which developers end up ignoring.",
    solution:
      "We designed a secure, real-time LLM scanning engine that analyzes Git diffs and outputs clean, plain-English security reviews directly in developer pull requests.",
    shipped: [
      "Real-time LLM scanning pipeline",
      "Figma component design system",
      "GitHub Actions integrations",
      "Developer dashboard interface",
    ],
    tech: ["React", "TypeScript", "Python", "FastAPI", "OpenAI API", "Docker"],
    mark: "CD",
    features: [
      {
        title: "Diff-based Scanning",
        desc: "Analyzes only mutated files in active pull requests, keeping scan times under 30 seconds.",
      },
      {
        title: "Contextual Remediation",
        desc: "Suggests the exact code fix inline in the PR, allowing developers to apply it with one click.",
      },
      {
        title: "Grounded Analysis",
        desc: "Uses a multi-agent validation step to cross-reference rules and reduce false alerts by 90%.",
      },
    ],
  },
  veddb: {
    id: "veddb",
    name: "VedDB",
    tagline: "A high-performance in-memory database with visibility designed into the experience.",
    category: "Infrastructure",
    challenge:
      "In-memory key-value stores are fast but operate as black boxes, making debugging memory spikes and key distributions extremely difficult for operators.",
    solution:
      "We developed a lightweight key-value database written in Go, featuring a real-time terminal and dashboard UI showing cache hit rates, memory use, and command flows.",
    shipped: [
      "Go-based in-memory core",
      "High-frequency dashboard WebSocket API",
      "Real-time memory profiling tool",
      "Interactive CLI manager",
    ],
    tech: ["Go", "React", "TailwindCSS", "WebSockets", "gRPC", "eBPF Profiling"],
    mark: "VD",
    features: [
      {
        title: "eBPF-driven Profiling",
        desc: "Tracks memory heap allocation with virtually zero runtime performance overhead.",
      },
      {
        title: "WebSocket Telemetry",
        desc: "Pushes database metrics to the console in real-time at 60 frames per second.",
      },
      {
        title: "Visual CLI",
        desc: "A browser-based command terminal allowing direct CRUD operations on the active store.",
      },
    ],
  },
  biznest: {
    id: "biznest",
    name: "BizNest",
    tagline: "A mobile-first workspace bringing essential business operations into one place.",
    category: "Mobile / SMB",
    challenge:
      "Small business owners struggle with fragmented software for invoices, client scheduling, and team chats, which slows down daily operations.",
    solution:
      "We built a unified mobile application combining invoicing, automated reminders, secure team channels, and customer booking inside one clean interface.",
    shipped: [
      "Cross-platform Flutter application",
      "Push notification pipeline",
      "Automated stripe invoicing worker",
      "Real-time chat syncing system",
    ],
    tech: ["Flutter", "Dart", "Node.js", "PostgreSQL", "Stripe API", "Firebase"],
    mark: "BN",
    features: [
      {
        title: "Seamless Booking Flows",
        desc: "Allows customers to book services which sync automatically with the operator's calendar.",
      },
      {
        title: "Smart Stripe Invoices",
        desc: "Generates invoice links automatically upon booking completion and tracks payment states.",
      },
      {
        title: "Unified Team Channels",
        desc: "Real-time chat syncing allows workers and managers to communicate seamlessly on site.",
      },
    ],
  },
  inboxfm: {
    id: "inboxfm",
    name: "InboxFM",
    tagline: "An AI-native email workspace built to reduce inbox noise and accelerate decisions.",
    category: "AI / Productivity",
    challenge:
      "Professionals lose hours sorting through promotional noise, threads, and notification spam to find messages requiring immediate actions.",
    solution:
      "We developed an email client layer with local vector embedding classifiers that automatically group emails into smart priority categories and summarize long threads.",
    shipped: [
      "Local vector embedding model integration",
      "Email summarization pipeline",
      "Fast keyboard navigation layouts",
      "IMAP/SMTP sync engine",
    ],
    tech: ["React / Vite", "TypeScript", "Transformers.js", "Redis", "Node.js IMAP", "PostgreSQL"],
    mark: "IF",
    features: [
      {
        title: "Client-side Classification",
        desc: "Categorizes priority mail locally inside the browser, protecting user data privacy.",
      },
      {
        title: "Thread Condensing",
        desc: "Summarizes convoluted email exchanges into 3 key actionable points instantly.",
      },
      {
        title: "Instant Keyboard Shortcuts",
        desc: "Allows full inbox management and navigation without ever lifting hands off the keyboard.",
      },
    ],
  },
  doxify: {
    id: "doxify",
    name: "Doxify",
    tagline: "A documentation engine that turns evolving product knowledge into useful answers.",
    category: "AI / Documentation",
    challenge:
      "Company wikis and product docs quickly go stale and become unsearchable, causing teams to repeatedly ask the same questions in chat channels.",
    solution:
      "We built a documentation platform that imports Git wikis, auto-detects outdated pages via file history, and exposes a secure Slack/Discord Q&A bot.",
    shipped: [
      "Auto-indexing document parser",
      "RAG vector retrieval system",
      "Slack/Discord integration bot",
      "Wiki change monitoring webhooks",
    ],
    tech: ["Next.js", "Python", "LangChain", "Pinecone Vector DB", "Slack Bolt SDK", "PostgreSQL"],
    mark: "DX",
    features: [
      {
        title: "Automated Git Syncing",
        desc: "Detects documentation changes via webhooks and parses markdown trees automatically.",
      },
      {
        title: "Secure RAG Retrieval",
        desc: "Applies user access roles so search answers don't expose restricted enterprise wikis.",
      },
      {
        title: "Documentation Freshness Check",
        desc: "Highlights stale pages that haven't been updated alongside key software dependencies.",
      },
    ],
  },
  fakepe: {
    id: "fakepe",
    name: "FakePE",
    tagline: "A payment gateway sandbox for teams building and testing transaction workflows.",
    category: "Fintech / Developer tools",
    challenge:
      "Integrating production payment processors requires strict sandbox settings that make simulating edge cases (declined cards, bank errors) slow to test.",
    solution:
      "We created a mock payment gateway that lets developers trigger specific HTTP header errors to simulate precise success/failure states.",
    shipped: [
      "Declined card simulation API",
      "Real-time webhook tester",
      "Custom transaction debugger panel",
      "API dashboard metrics",
    ],
    tech: ["React", "TypeScript", "Go", "PostgreSQL", "Redis Webhooks", "Docker Compose"],
    mark: "FP",
    features: [
      {
        title: "HTTP Header Triggers",
        desc: "Send custom test headers like 'X-Simulate-Error: 402' to verify payment failures.",
      },
      {
        title: "Live Webhook Inspector",
        desc: "Watch payment response events, transaction logs, and retries land in real-time.",
      },
      {
        title: "Developer Debugger Panel",
        desc: "Simulate specific banking network response codes using a visual console interface.",
      },
    ],
  },
};

export const Route = createFileRoute("/work/$id")({
  loader: ({ params }) => {
    const p = projects[params.id];
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Case Study"} | The Velnix` },
      {
        name: "description",
        content: loaderData?.tagline ?? "Detailed case study of works shipped by The Velnix.",
      },
    ],
  }),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const p = Route.useLoaderData();
  const projectIds = Object.keys(projects);
  const currentIndex = projectIds.indexOf(p.id);
  const nextProjectId1 = projectIds[(currentIndex + 1) % projectIds.length];
  const nextProjectId2 = projectIds[(currentIndex + 2) % projectIds.length];
  const nextProject1 = projects[nextProjectId1];
  const nextProject2 = projects[nextProjectId2];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <div className="absolute inset-x-0 top-0 h-[45%] bg-[radial-gradient(circle_at_top,rgba(46,197,182,0.06),transparent_65%)]" />

        <Container className="relative">
          <Link
            to="/work"
            className="mb-8 inline-flex items-center gap-2 text-xs font-mono tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeftIcon size={12} animateOnHover />
            Back to work
          </Link>

          <div className="mt-4 max-w-4xl">
            <span className="font-mono text-[9px] uppercase tracking-[.25em] text-brand font-medium">
              {p.category}
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-.055em]">
              <BlurText
                text={p.name}
                animateBy="words"
                direction="bottom"
                delay={50}
                stepDuration={0.3}
                className="block"
              />
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              {p.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface/50 px-3.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Details & Showcase ── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left Column: Bespoke Mock UI Showcase */}
            <div className="sticky top-28 overflow-hidden rounded-3xl border border-border bg-surface p-4 shadow-sm md:p-6 lg:p-8">
              <ShowcaseSelector id={p.id} />
            </div>

            {/* Right Column: Challenge & Solution */}
            <div className="flex flex-col gap-10">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[.25em] text-muted-foreground font-semibold">
                  01 / The Challenge
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
                  Addressing the bottleneck.
                </h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {p.challenge}
                </p>
              </div>

              <div className="border-t border-border/60 pt-10">
                <span className="font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold">
                  02 / Our Solution
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
                  Bespoke execution.
                </h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {p.solution}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Key Features ── */}
      <section className="border-t border-border bg-surface py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <span className="font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold">
              Product Architecture
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Engineered for efficiency.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Every detail is scoped around clean user workflows and reliable backend pipelines.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {p.features.map((feature, i) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-background p-6 transition-all hover:border-brand/35"
              >
                <span className="font-mono text-xs font-semibold text-brand">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── What We Shipped Checklist ── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="rounded-3xl border border-border bg-background p-8 md:p-12 lg:p-16">
            <span className="font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold">
              Deliverables
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              What we shipped to production.
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {p.shipped.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-foreground/90 py-1"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <CheckIcon size={12} className="text-brand" animate={false} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Next Case Studies & CTA ── */}
      <section className="border-t border-border bg-surface/40 py-24 md:py-32">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[.25em] text-muted-foreground font-semibold">
                Explore More
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight md:text-3xl">
                Up Next
              </h2>
            </div>
            <Link
              to="/work"
              className="group inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface-strong hover:border-foreground/30 transition-colors self-start sm:self-auto"
            >
              View all work
              <svg
                className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[nextProject1, nextProject2].map((proj) => (
              <Link
                key={proj.id}
                to="/work/$id"
                params={{ id: proj.id }}
                className="group relative block overflow-hidden rounded-3xl border border-border bg-background p-6 md:p-8 hover:border-brand/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col justify-between min-h-[220px]"
              >
                {/* Background grid accent */}
                <div className="absolute inset-0 grid-bg opacity-10 transition-opacity duration-500 group-hover:opacity-20" />
                <div className="absolute inset-x-0 top-0 h-[40%] bg-[radial-gradient(circle_at_top,rgba(46,197,182,0.02),transparent_70%)]" />

                <div className="relative z-10 flex-1">
                  <span className="font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold">
                    {proj.category}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl flex items-center gap-3">
                    {proj.name}
                    <svg
                      className="h-4 w-4 text-muted-foreground transition-all duration-300 -translate-x-1.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-brand"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </h3>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed max-w-md">
                    {proj.tagline}
                  </p>
                </div>

                {/* Tiny floating portal preview in bottom right */}
                <div className="relative self-end mt-4 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface transition-all duration-500 group-hover:scale-105 group-hover:border-brand/30 z-10">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <span className="relative font-accent text-sm font-light italic text-brand transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                    {proj.mark}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          {/* CTA Box */}
          <div className="mx-auto mt-28 max-w-2xl text-center border-t border-border/60 pt-20">
            <span className="font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold">
              Start Your Project
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
              Ready to ship with care?
            </h2>
            <div className="mt-8 flex justify-center">
              <ButtonColorful href="/contact" label="Start a project" />
            </div>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}

/* ── Custom UI Mock Showcase Components ── */

function ShowcaseSelector({ id }: { id: string }) {
  switch (id) {
    case "codedog":
      return <CodeDogMock />;
    case "veddb":
      return <VedDBMock />;
    case "biznest":
      return <BizNestMock />;
    case "inboxfm":
      return <InboxFMMock />;
    case "doxify":
      return <DoxifyMock />;
    case "fakepe":
      return <FakePEMock />;
    default:
      return <div className="h-64 bg-border/20 rounded-2xl flex items-center justify-center">Showcase Loading...</div>;
  }
}

function CodeDogMock() {
  return (
    <div className="w-full bg-slate-950 font-mono text-[11px] leading-relaxed text-slate-300 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
      {/* File Header */}
      <div className="flex items-center justify-between bg-slate-900 px-4 py-2.5 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="ml-3 text-slate-400 text-[10px]">src/api/auth.py</span>
        </div>
        <span className="text-[10px] text-slate-500">git diff</span>
      </div>

      {/* Editor Content */}
      <div className="p-4 space-y-1">
        <div className="text-slate-500">12   def verify_token(token: str):</div>
        <div className="text-slate-500">13       try:</div>
        <div className="bg-red-950/40 text-red-300 px-1 border-l-2 border-red-500">
          14 -         payload = jwt.decode(token, "SUPER_SECRET_PLAINTEXT_KEY", algorithms=["HS256"])
        </div>
        <div className="bg-emerald-950/40 text-emerald-300 px-1 border-l-2 border-emerald-500">
          14 +         payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=["HS256"])
        </div>
        <div className="text-slate-500">15           return payload</div>
        <div className="text-slate-500">16       except PyJWTError:</div>

        {/* CodeDog Review Overlay */}
        <div className="mt-6 rounded-lg bg-slate-900 border border-slate-800 p-3.5 text-xs text-slate-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-bold text-rose-400 flex items-center gap-1.5">
              ⚠️ CodeDog Alert
            </span>
            <span className="text-[9px] text-slate-500">Just now</span>
          </div>
          <p className="mt-2.5 text-slate-400 leading-normal">
            Hardcoded secret key detected. JWT credentials should always be resolved dynamically from system environments.
          </p>
          <div className="mt-3 flex gap-2">
            <span className="rounded bg-rose-950/50 text-rose-300 px-2 py-0.5 text-[9px] font-semibold border border-rose-900/50">
              Vulnerability: High
            </span>
            <span className="rounded bg-slate-800 px-2 py-0.5 text-[9px] text-slate-400">
              Category: OWASP A2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function VedDBMock() {
  const [ops, setOps] = useState(245300);
  const [latency, setLatency] = useState(0.85);

  useEffect(() => {
    const interval = setInterval(() => {
      setOps((prev) => prev + Math.floor(Math.random() * 50) - 25);
      setLatency((prev) => Math.max(0.72, Math.min(0.98, prev + (Math.random() * 0.04 - 0.02))));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-950 text-slate-300 rounded-xl overflow-hidden border border-slate-800 font-mono p-4">
      {/* Top Telemetry */}
      <div className="grid grid-cols-3 gap-2 text-center pb-4 border-b border-slate-900">
        <div>
          <span className="block text-[9px] text-slate-500 uppercase">Ops / Sec</span>
          <span className="text-sm font-bold text-emerald-400">{ops.toLocaleString()}</span>
        </div>
        <div>
          <span className="block text-[9px] text-slate-500 uppercase">Avg Latency</span>
          <span className="text-sm font-bold text-cyan-400">{latency.toFixed(2)} ms</span>
        </div>
        <div>
          <span className="block text-[9px] text-slate-500 uppercase">Cache Hits</span>
          <span className="text-sm font-bold text-violet-400">99.84%</span>
        </div>
      </div>

      {/* Database Console Terminal */}
      <div className="mt-4 h-36 overflow-y-auto space-y-1.5 text-[10px] text-slate-400">
        <div>$ veddb-cli -h localhost -p 6380</div>
        <div className="text-slate-500">Connected to VedDB v1.4.2</div>
        <div>&gt; HSET user:1003 name "Karan Mistry" role "AI"</div>
        <div className="text-emerald-500">OK (0.12 ms)</div>
        <div>&gt; HGETALL user:1003</div>
        <div className="text-slate-500">1) "name" -&gt; "Karan Mistry"</div>
        <div className="text-slate-500">2) "role" -&gt; "AI"</div>
        <div>&gt; MONITOR</div>
        <div className="text-amber-500 animate-pulse">1782757199 [user:1003] command=HGETALL latency=0.08ms</div>
      </div>
    </div>
  );
}

function BizNestMock() {
  const slots = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];
  const [selectedSlot, setSelectedSlot] = useState("11:30 AM");

  return (
    <div className="mx-auto w-full max-w-[280px] bg-slate-900 rounded-3xl border-8 border-slate-800 p-4 shadow-2xl text-slate-200">
      {/* App Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[10px] font-semibold">
        <span>BizNest Workspace</span>
        <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
      </div>

      {/* Booking Calendar Widget */}
      <div className="mt-4">
        <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Select Appointment</span>
        <div className="mt-2 grid grid-cols-4 gap-1 text-[9px] text-center">
          <div className="p-1 rounded bg-slate-800 text-slate-400">Mon 29</div>
          <div className="p-1 rounded bg-brand text-brand-foreground font-bold">Tue 30</div>
          <div className="p-1 rounded bg-slate-800 text-slate-400">Wed 01</div>
          <div className="p-1 rounded bg-slate-800 text-slate-400">Thu 02</div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-1.5">
          {slots.map((s) => {
            const active = selectedSlot === s;
            return (
              <button
                key={s}
                onClick={() => setSelectedSlot(s)}
                className={`py-1.5 rounded text-[10px] font-semibold transition-all ${
                  active ? "bg-brand text-brand-foreground" : "bg-slate-800 text-slate-300"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Invoice Card mockup */}
      <div className="mt-5 bg-slate-950 rounded-xl p-3 border border-slate-800">
        <span className="text-[8px] text-slate-500 uppercase tracking-widest block">Invoice Pending</span>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs font-bold">₹12,500.00</span>
          <span className="text-[8px] rounded-full bg-amber-500/10 text-amber-500 px-2 py-0.5 border border-amber-500/20">
            Unpaid
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-brand" />
        </div>
      </div>
    </div>
  );
}

function InboxFMMock() {
  const [selectedMail, setSelectedMail] = useState("mail-0");

  const mails = [
    {
      id: "mail-0",
      from: "Devraj Chatribin",
      subject: "Velnix Enterprise Website Redesign scope",
      time: "10m ago",
      priority: "AI VIP",
      summary: "Wants to launch the enterprise website redesign in 6 weeks. Core components include interactive showcases, Stripe billing modules, and custom widgets.",
    },
    {
      id: "mail-1",
      from: "AWS Billings",
      subject: "Your AWS Invoice for June 2026",
      time: "2h ago",
      priority: "Auto-Alert",
      summary: "AWS billing statement ready. Monthly amount: $243.50. Automatic debit will execute on July 1st.",
    },
  ];

  return (
    <div className="w-full bg-slate-950 text-slate-300 rounded-xl overflow-hidden border border-slate-800 flex text-xs h-64">
      {/* Mail List */}
      <div className="w-1/2 border-r border-slate-900 p-2.5 space-y-2 overflow-y-auto">
        <span className="font-mono text-[9px] text-slate-500 block uppercase tracking-wider">Priority Mailbox</span>
        {mails.map((m) => {
          const active = selectedMail === m.id;
          return (
            <div
              key={m.id}
              onClick={() => setSelectedMail(m.id)}
              className={`p-2 rounded-lg cursor-pointer transition-colors ${
                active ? "bg-slate-900 border border-slate-800" : "hover:bg-slate-950"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-200">{m.from}</span>
                <span className="text-[8px] text-slate-500">{m.time}</span>
              </div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">{m.subject}</div>
              <span className="mt-1.5 inline-block text-[8px] bg-brand/10 text-brand px-1.5 py-0.2 rounded border border-brand/20">
                {m.priority}
              </span>
            </div>
          );
        })}
      </div>

      {/* AI Assistant Detail Drawer */}
      <div className="w-1/2 p-3 bg-slate-900/40 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-brand font-bold text-[10px]">
            ✨ InboxFM AI Summary
          </div>
          <p className="mt-2.5 text-[10.5px] leading-relaxed text-slate-400">
            {mails.find((m) => m.id === selectedMail)?.summary}
          </p>
        </div>
        <div className="mt-4 pt-2 border-t border-slate-800 flex gap-2">
          <button className="bg-brand text-brand-foreground px-2.5 py-1 rounded text-[9px] font-bold">
            Create Action Item
          </button>
          <button className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-[9px]">
            Archive
          </button>
        </div>
      </div>
    </div>
  );
}

function DoxifyMock() {
  const [messages, setMessages] = useState([
    { role: "user", text: "How do I configure webhook keys in FakePE?" },
    { role: "bot", text: "FakePE webhook keys can be configured in your .env as FAKEPE_WEBHOOK_SECRET. You can also trigger webhooks using headers in your request." },
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleSend = () => {
    if (!inputVal.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: inputVal }]);
    setInputVal("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "I found 2 wiki entries for FakePE webhooks: 'FakePE API' and 'Docker Integration Guide'. Updating files..." },
      ]);
    }, 1000);
  };

  return (
    <div className="w-full bg-slate-950 text-slate-300 rounded-xl overflow-hidden border border-slate-800 flex flex-col h-64">
      {/* Bot Header */}
      <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
          <span className="font-bold">Doxify Wiki Bot</span>
        </div>
        <span className="text-[9px] text-slate-500">Connected to Slack</span>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-3 space-y-2 overflow-y-auto text-[10.5px]">
        {messages.map((m, idx) => {
          const isUser = m.role === "user";
          return (
            <div
              key={idx}
              className={`p-2 rounded-lg max-w-[85%] ${
                isUser ? "bg-slate-800 text-slate-200 ml-auto" : "bg-slate-900 text-slate-300 border border-slate-800"
              }`}
            >
              <div className="font-bold text-[8px] text-slate-500 uppercase mb-0.5">
                {isUser ? "You" : "Doxify Bot"}
              </div>
              <div>{m.text}</div>
            </div>
          );
        })}
      </div>

      {/* Input panel */}
      <div className="p-2 border-t border-slate-900 flex gap-1.5 bg-slate-900/30">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Ask wiki assistant..."
          className="flex-1 bg-slate-950 border border-slate-800 rounded-md px-2.5 py-1 text-[10.5px] text-slate-200 outline-none focus:border-brand"
        />
        <button
          onClick={handleSend}
          className="bg-brand text-brand-foreground px-3 py-1 rounded-md text-[10px] font-bold"
        >
          Send
        </button>
      </div>
    </div>
  );
}

function FakePEMock() {
  const [errCode, setErrCode] = useState("402");
  const [responseLog, setResponseLog] = useState(`{\n  "error": "PaymentRequired",\n  "message": "Insufficent Funds in test card",\n  "code": 402\n}`);

  useEffect(() => {
    if (errCode === "200") {
      setResponseLog(`{\n  "status": "Success",\n  "transaction_id": "txn_fake_8245781295",\n  "amount": 12500,\n  "currency": "INR"\n}`);
    } else if (errCode === "402") {
      setResponseLog(`{\n  "error": "PaymentRequired",\n  "message": "Insufficent Funds in test card",\n  "code": 402\n}`);
    } else if (errCode === "500") {
      setResponseLog(`{\n  "error": "InternalServerError",\n  "message": "Bank gateway timed out during processing",\n  "code": 500\n}`);
    }
  }, [errCode]);

  return (
    <div className="w-full bg-slate-950 text-slate-300 rounded-xl overflow-hidden border border-slate-800 flex text-xs h-64">
      {/* Simulation Controls */}
      <div className="w-1/2 p-3 space-y-3 border-r border-slate-900">
        <span className="font-mono text-[9px] text-slate-500 block uppercase tracking-wider">Gateway Sandbox</span>
        
        <div>
          <label className="text-[10px] text-slate-400 block mb-1">Simulate Status Response</label>
          <select
            value={errCode}
            onChange={(e) => setErrCode(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1.5 text-xs text-slate-200 outline-none focus:border-brand"
          >
            <option value="200">200 OK (Success)</option>
            <option value="402">402 Payment Required</option>
            <option value="500">500 Internal Server Error</option>
          </select>
        </div>

        <div className="bg-slate-900/60 p-2 rounded border border-slate-800/50">
          <span className="text-[9px] text-slate-400 font-bold block">X-Simulate-Header</span>
          <span className="font-mono text-[9px] text-slate-500 block mt-1">X-FakePE-Response: {errCode}</span>
        </div>
      </div>

      {/* JSON Payload viewer */}
      <div className="w-1/2 p-3 bg-slate-900/30 flex flex-col justify-between font-mono text-[9.5px]">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className="text-[8px] text-slate-500 uppercase tracking-widest block mb-1.5">Gateway Response Payload</span>
            <pre className="text-slate-400 bg-slate-950/70 p-2 rounded border border-slate-900 overflow-x-auto select-all max-h-40 leading-normal">
              {responseLog}
            </pre>
          </div>
          <span className="text-[8.5px] text-emerald-400/80 animate-pulse mt-2 flex items-center gap-1.5">
            ● Webhook triggered successfully
          </span>
        </div>
      </div>
    </div>
  );
}
