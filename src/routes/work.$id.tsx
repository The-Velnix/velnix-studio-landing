import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Container, SiteFooter, SiteHeader } from "@/components/site-shell";
import { Eyebrow } from "@/components/section";
import { ButtonColorful } from "@/components/ui/button-colorful";

export const Route = createFileRoute("/work/$id")({
  loader: ({ params }) => {
    const project = projectsData[params.id];
    if (!project) throw notFound();
    return { project, id: params.id };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.name ?? "Project Details"} | The Velnix` },
      {
        name: "description",
        content: loaderData?.project.description ?? "Case study details from The Velnix.",
      },
    ],
  }),
  component: ProjectDetailPage,
});

type ProjectDetails = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  shipped: string[];
  tech: string[];
  mark: string;
  color: string;
  mockupType: "codedog" | "veddb" | "biznest" | "inboxfm" | "doxify" | "fakepe";
  stats: Array<{ label: string; value: string }>;
};

const projectsData: Record<string, ProjectDetails> = {
  codedog: {
    id: "codedog",
    name: "CodeDog",
    category: "AI / Developer tools",
    tagline: "AI-assisted security reviews directly in developer pull requests.",
    description: "CodeDog bridges the gap between complex static analysis and active developer workflows. By running automated scans on incoming Git diffs and explaining vulnerabilities in plain language, it turns security checks from an engineering bottleneck into a collaborative step.",
    challenge: "Traditional security scanners output hundreds of false positives, which developers routinely ignore. Generating static reports outside of GitHub or GitLab workflows means vulnerability remediation is delayed until just before shipping, causing major design delays.",
    solution: "We designed and built a secure, real-time LLM-powered review pipeline. Instead of bulk reports, CodeDog acts as a junior reviewer on PRs—analyzing the delta of the code, identifying actual vulnerability paths, and providing direct, copy-pasteable diff corrections in comments.",
    shipped: [
      "Real-time secure LLM parsing engine",
      "GitHub Actions & GitLab webhook receivers",
      "PR comment synchronization pipeline",
      "Interactive vulnerabilities status dashboard",
    ],
    tech: ["React", "TypeScript", "Python", "FastAPI", "OpenAI API", "Docker"],
    mark: "CD",
    color: "#2EC5B6",
    mockupType: "codedog",
    stats: [
      { label: "Scan Time", value: "< 12s" },
      { label: "False Positives", value: "-92%" },
      { label: "Remediation Rate", value: "84%" },
    ],
  },
  veddb: {
    id: "veddb",
    name: "VedDB",
    category: "Infrastructure",
    tagline: "High-performance key-value database designed for operational clarity.",
    description: "VedDB is a lightweight in-memory key-value database written in Go. Built for speed, its core design focuses on visibility, exposing database hit rates, command flows, and memory usage through a real-time terminal interface and reactive web dashboard.",
    challenge: "In-memory stores operate as black boxes. When memory spikes occur or key distribution grows lopsided, developers have to parse system logs or run heavy diagnostic tools in production, which risks causing downtime.",
    solution: "We engineered an ultra-fast key-value core in Go. We embedded low-overhead metrics tracking directly into the command parser and exposed it via WebSockets. We then built a real-time command dashboard showing distribution stats, active keys, and live profiling logs.",
    shipped: [
      "Low-latency Go key-value core",
      "High-frequency WebSocket instrumentation API",
      "eBPF-driven memory profiling metrics",
      "Real-time diagnostic web interface",
    ],
    tech: ["Go", "React", "TailwindCSS", "WebSockets", "gRPC", "eBPF Profiling"],
    mark: "VD",
    color: "#a78bfa",
    mockupType: "veddb",
    stats: [
      { label: "Read Latency", value: "0.2ms" },
      { label: "Throughput", value: "850k/s" },
      { label: "Visual Overhead", value: "< 1.5%" },
    ],
  },
  biznest: {
    id: "biznest",
    name: "BizNest",
    category: "Mobile / SMB",
    tagline: "Unified workspace app consolidating invoicing, chats, and scheduling.",
    description: "BizNest brings operational coherence to small business owners. Rather than bouncing between three separate tools to send invoices, talk to customers, and schedule staff, BizNest merges all client actions into a single mobile application built on top of a centralized workspace.",
    challenge: "SMB owners waste hours manually syncing billing systems, calendar software, and direct chats. This fragmentation leads to delayed client updates, double-bookings, and overdue payments.",
    solution: "We designed and developed a cross-platform Flutter application integrated with a robust Node.js server. BizNest uses background Stripe workers to automatically create and reconcile invoices, send scheduling alerts, and sync direct messages in real time.",
    shipped: [
      "Cross-platform Flutter application",
      "Automated Stripe invoice status reconciler",
      "Twilio/Firebase scheduling push scheduler",
      "Offline-first client data caching",
    ],
    tech: ["Flutter", "Dart", "Node.js", "PostgreSQL", "Stripe API", "Firebase"],
    mark: "BN",
    color: "#f43f5e",
    mockupType: "biznest",
    stats: [
      { label: "Payment Time", value: "-4.5 Days" },
      { label: "Admin Overhead", value: "-12h/Wk" },
      { label: "Client Retain", value: "+28%" },
    ],
  },
  inboxfm: {
    id: "inboxfm",
    name: "InboxFM",
    category: "AI / Productivity",
    tagline: "AI-native email assistant designed for priority-driven workflows.",
    description: "InboxFM uses local embedding models running directly in the browser to organize and summarize inbound emails. It prioritizes correspondence requiring actions and summarizes complex threads, saving professionals hours of inbox sorting every day.",
    challenge: "Modern email clients are cluttered with notifications, marketing materials, and long threads. Finding emails that actually need a reply is tedious and leads to delayed business decisions.",
    solution: "We created a local first email client. Integrating lightweight client-side transformers, InboxFM scans inbox deltas, highlights emails containing active questions or requests, and compiles thread updates in key bullet points.",
    shipped: [
      "Transformers.js local embeddings model integration",
      "Thread summary pipeline",
      "IMAP/SMTP socket synchronization service",
      "Vim-inspired keyboard navigation layouts",
    ],
    tech: ["React / Vite", "TypeScript", "Transformers.js", "Redis", "Node.js IMAP", "PostgreSQL"],
    mark: "IF",
    color: "#3b82f6",
    mockupType: "inboxfm",
    stats: [
      { label: "Sort Accuracy", value: "96.4%" },
      { label: "Time Saved", value: "45m/Day" },
      { label: "Local Latency", value: "< 80ms" },
    ],
  },
  doxify: {
    id: "doxify",
    name: "Doxify",
    category: "AI / Documentation",
    tagline: "Outdated-page scanner and automated team QA assistant.",
    description: "Doxify monitors your engineering wikis and Slack threads. By indexing code changes and detecting when document files fall out of sync with production code, it prevents document decay and automatically answers developer questions.",
    challenge: "Documentation starts clean but decays as code changes. Developers stop trusting search results and resort to asking colleagues in chat, repeating questions and distracting team members.",
    solution: "We engineered a wiki parser that monitors Git repository updates, runs difference scoring to identify stale documents, and handles vector search queries from a Discord/Slack bot to resolve questions automatically.",
    shipped: [
      "Wiki monitor webhooks & change parser",
      "LangChain RAG vector lookup module",
      "Slack Bolt SDK conversational chatbot",
      "Stale document reporting dashboard",
    ],
    tech: ["Next.js", "Python", "LangChain", "Pinecone Vector DB", "Slack Bolt SDK", "PostgreSQL"],
    mark: "DX",
    color: "#10b981",
    mockupType: "doxify",
    stats: [
      { label: "Query Accuracy", value: "91.2%" },
      { label: "Stale Docs Flagged", value: "1,240+" },
      { label: "Developer DMs", value: "-40%" },
    ],
  },
  fakepe: {
    id: "fakepe",
    name: "FakePE",
    category: "Fintech / Developer tools",
    tagline: "API sandbox enabling developers to test edge-case payment flows.",
    description: "FakePE simulates credit card processing behaviors and network events. It allows engineering teams to trigger bank declines, webhooks, and rate-limits programmatically to build bulletproof transaction loops.",
    challenge: "Production sandboxes are slow, rigid, and make testing error states hard. Simulating a transient network timeout or a specific card decline requires editing backend mock rules repeatedly.",
    solution: "We built a mocking gateway where developers specify desired HTTP error states via headers. We accompanied this with a visual console showing live logs, request bodies, and outgoing webhooks.",
    shipped: [
      "Custom error header-driven simulation API",
      "WebSocket-based webhook dispatcher & retry logs",
      "Interactive response console dashboard",
      "API request trace explorer",
    ],
    tech: ["React", "TypeScript", "Go", "PostgreSQL", "Redis Webhooks", "Docker Compose"],
    mark: "FP",
    color: "#f59e0b",
    mockupType: "fakepe",
    stats: [
      { label: "Test Speedup", value: "15x" },
      { label: "Edge Cases Covered", value: "40+" },
      { label: "Integration Bugs", value: "-75%" },
    ],
  },
};

function ProjectDetailPage() {
  const { project, id } = Route.useLoaderData();
  const reduce = useReducedMotion();

  // Find previous and next projects relative to the current one
  const allProjectIds = Object.keys(projectsData);
  const currentIndex = allProjectIds.indexOf(id);
  const prevIndex = (currentIndex - 1 + allProjectIds.length) % allProjectIds.length;
  const nextIndex = (currentIndex + 1) % allProjectIds.length;
  const nextProjects = [
    projectsData[allProjectIds[prevIndex]],
    projectsData[allProjectIds[nextIndex]],
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="absolute inset-0 grid-bg opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
        <div 
          className="absolute inset-x-0 top-0 h-[500px] opacity-[0.12] blur-[100px] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle at top, ${project.color}, transparent 70%)` }}
        />
        <Container className="relative">
          <Link
            to="/work"
            className="mb-8 inline-flex items-center gap-2 text-xs font-mono tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to projects
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div>
              <Eyebrow>{project.category}</Eyebrow>
              <h1 className="mt-4 font-display text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-[-.05em]">
                {project.name}
              </h1>
              <p className="mt-6 text-xl font-medium leading-8 text-foreground/90 max-w-2xl">
                {project.tagline}
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-4 rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm lg:max-w-md">
              {project.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-display font-semibold tracking-tight" style={{ color: project.color }}>
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Project Showcase & Mockup ── */}
      <section className="py-16 md:py-24 border-b border-border bg-surface/30">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            
            {/* Left Column: Interactive mockup representation */}
            <div className="relative rounded-3xl border border-border bg-[#0f1115] overflow-hidden shadow-2xl min-h-[400px]">
              <div className="flex h-10 items-center justify-between border-b border-white/5 bg-[#171a21]/80 px-4">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>
                <div className="font-mono text-[9px] text-white/40">
                  {project.id}.velnix.studio
                </div>
                <div className="h-3 w-3 rounded-full border border-white/5" />
              </div>

              {/* Render specific mockup content */}
              <div className="p-6 md:p-8 font-sans text-white">
                {project.mockupType === "codedog" && <CodedogMockup color={project.color} />}
                {project.mockupType === "veddb" && <VeddbMockup color={project.color} />}
                {project.mockupType === "biznest" && <BiznestMockup color={project.color} />}
                {project.mockupType === "inboxfm" && <InboxfmMockup color={project.color} />}
                {project.mockupType === "doxify" && <DoxifyMockup color={project.color} />}
                {project.mockupType === "fakepe" && <FakepeMockup color={project.color} />}
              </div>
            </div>

            {/* Right Column: Text & Deliverables */}
            <div className="grid gap-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground font-semibold">
                  Overview
                </p>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <p className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground font-semibold mb-4">
                  The Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground font-semibold mb-4">
                  What We Shipped
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.shipped.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-foreground/90 leading-snug">
                      <svg className="h-5 w-5 text-brand shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Case Deep Dive Details ── */}
      <section className="py-16 md:py-24 border-b border-border">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface/30 p-8">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-4 font-semibold">
                The Challenge
              </h3>
              <p className="text-base leading-8 text-muted-foreground">
                {project.challenge}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/30 p-8">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-4 font-semibold">
                Our Solution
              </h3>
              <p className="text-base leading-8 text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Next Projects Section (Clean 2 side-by-side design) ── */}
      <section className="py-20 md:py-28 bg-surface/50">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[.25em] text-brand">
                Keep Exploring
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Other Case Studies
              </h2>
            </div>
            <div>
              <Link
                to="/work"
                className="group inline-flex h-11 items-center gap-2 rounded-full border border-border-strong bg-background/80 px-5 text-sm font-semibold hover:-translate-y-0.5 hover:border-foreground hover:bg-background transition-all"
              >
                <span>View all projects</span>
                <svg className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {nextProjects.map((nextProj, idx) => (
              <motion.article
                key={nextProj.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl border border-border bg-background p-6 hover:border-brand/40 transition-colors duration-300"
              >
                <div className="flex flex-col justify-between h-full min-h-[220px]">
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-brand font-medium">
                      {idx === 0 ? "Previous Case Study" : "Next Case Study"} • {nextProj.category}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground flex items-center justify-between">
                      <span>{nextProj.name}</span>
                      <svg className="h-4 w-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground max-w-sm">
                      {nextProj.tagline}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-muted-foreground/60 uppercase">
                      Case {nextProj.mark}
                    </span>
                    <Link
                      to="/work/$id"
                      params={{ id: nextProj.id }}
                      className="text-xs font-semibold text-foreground group-hover:text-brand transition-colors"
                    >
                      Read full study &rarr;
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

/* ── Interactive CSS Mockup Representations ── */

function CodedogMockup({ color }: { color: string }) {
  return (
    <div className="flex flex-col gap-4 font-mono text-[11px] text-white/90">
      <div className="rounded-lg bg-black/45 border border-white/5 p-4">
        <div className="flex items-center justify-between border-b border-white/5 pb-2.5 text-white/50 text-[10px]">
          <span>pull_request_review_7.yml</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Security Pass
          </span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="text-white/40">{"@@ -42,8 +42,8 @@ function handleInput(req)"}</div>
          <div className="bg-red-950/20 text-red-300 px-2 py-1 border-l-2 border-red-500">{"- const query = `SELECT * FROM users WHERE id = ${req.body.id}`;"}</div>
          <div className="bg-emerald-950/20 text-emerald-300 px-2 py-1 border-l-2 border-emerald-500">{"+ const query = `SELECT * FROM users WHERE id = $1`;"}</div>
        </div>
      </div>
      <div className="rounded-lg bg-white/5 p-4 space-y-3">
        <p className="text-white/60 text-[10px] uppercase font-bold tracking-wider">
          CodeDog Security Agent Analysis:
        </p>
        <p className="text-xs text-white/80 font-sans leading-relaxed">
          "Identified SQL Injection vulnerability. Direct string interpolation into DB query exposes the system to query spoofing. Refactored query to use parameterized query parameters instead."
        </p>
      </div>
    </div>
  );
}

function VeddbMockup({ color }: { color: string }) {
  return (
    <div className="flex flex-col gap-4 font-mono text-[11px]">
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="rounded-lg bg-white/5 p-3.5">
          <span className="text-white/40 text-[9px] uppercase tracking-wider block">Hit Rate</span>
          <span className="text-lg font-bold block mt-1" style={{ color }}>98.42%</span>
        </div>
        <div className="rounded-lg bg-white/5 p-3.5">
          <span className="text-white/40 text-[9px] uppercase tracking-wider block">Memory Use</span>
          <span className="text-lg font-bold block mt-1 text-white">1.24 GB / 8 GB</span>
        </div>
      </div>
      <div className="rounded-lg bg-black/45 border border-white/5 p-4 text-[10px] space-y-1.5">
        <div className="text-white/30">$ veddb-cli --monitor</div>
        <div className="text-white/60">Connecting to ws://localhost:4040/stats...</div>
        <div className="text-white/70">16:47:01 [CMD] SET usr_9821 &rarr; OK (0.12ms)</div>
        <div className="text-emerald-400">16:47:02 [CACHE] GET usr_9821 &rarr; HIT (0.01ms)</div>
        <div className="text-white/70">16:47:04 [CMD] LPUSH pending_jobs 8802 &rarr; OK (0.19ms)</div>
      </div>
    </div>
  );
}

function BiznestMockup({ color }: { color: string }) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[280px] rounded-3xl border-4 border-white/10 bg-[#16181f] p-4 text-sans text-xs shadow-xl">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="font-semibold text-white/90">BizNest Mobile</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </div>
        <div className="mt-4 space-y-3">
          <div className="rounded-xl bg-white/5 p-3">
            <span className="text-white/40 text-[9px] block">INVOICE PAID</span>
            <div className="flex items-center justify-between mt-1">
              <span className="font-semibold text-white">#INV-8890</span>
              <span className="font-mono text-emerald-400 font-semibold">₹18,500</span>
            </div>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <span className="text-white/40 text-[9px] block">CLIENT APPOINTMENT</span>
            <p className="mt-1 font-semibold text-white">Hair Styling & Spa</p>
            <p className="text-[10px] text-white/50 mt-0.5">Today at 17:30 IST</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InboxfmMockup({ color }: { color: string }) {
  return (
    <div className="flex flex-col gap-3 font-sans text-xs">
      <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-white/55">
        <span className="flex gap-2">
          <span className="font-semibold text-white">InboxFM Client</span>
          <span>(3 unread)</span>
        </span>
        <span className="font-mono text-[9px] bg-white/5 px-2 py-0.5 rounded">Vim mode</span>
      </div>
      <div className="space-y-2">
        <div className="rounded-xl bg-white/5 p-3.5 border-l-2 border-brand relative">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white">Aangi Shah (Design Studio)</span>
            <span className="text-[9px] font-mono text-brand font-semibold">ACTION NEEDED</span>
          </div>
          <p className="font-semibold text-white/80 mt-1">Review layout templates for team details</p>
          <p className="text-[10px] text-white/40 mt-1 italic">"We need to approve the final colors by Friday."</p>
        </div>
        <div className="rounded-xl bg-[#111319] p-3 border border-white/5">
          <span className="text-[9px] font-mono text-white/30 block">AI THREAD SUMMARY (3 EMAILS)</span>
          <p className="mt-1 text-white/70 leading-relaxed text-[11px]">
            The client approved the Indian Rupee pricing options (Lakhs). Staggered transition changes for the sidebar menu are complete. Design system components are ready to test.
          </p>
        </div>
      </div>
    </div>
  );
}

function DoxifyMockup({ color }: { color: string }) {
  return (
    <div className="flex flex-col gap-4 font-mono text-[11px]">
      <div className="rounded-lg bg-black/45 border border-white/5 p-4 space-y-3">
        <div className="flex items-center justify-between text-white/40 text-[9px]">
          <span>Wiki Monitor Logs</span>
          <span className="text-amber-400">1 outdated file flagged</span>
        </div>
        <div className="text-[10px] space-y-1">
          <div className="text-white/60">Scanning changes: repository velnix-studio/web...</div>
          <div className="text-red-400">Stale check: database_setup.md is out of sync with setup.sh (Modified 12 days ago)</div>
        </div>
      </div>
      <div className="rounded-lg bg-white/5 p-4 space-y-2.5">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold font-sans text-[10px]">bot</div>
          <span className="font-semibold text-white/80">Slack Agent QA Response:</span>
        </div>
        <p className="text-xs text-white/75 font-sans leading-relaxed">
          "According to the database_setup.md document, PostgreSQL local port is mapped to 5432, but on the main branch the Docker Compose file now maps it to 5439. Run <code className="font-mono text-brand bg-white/5 px-1 rounded">docker compose up -d</code> to bind."
        </p>
      </div>
    </div>
  );
}

function FakepeMockup({ color }: { color: string }) {
  return (
    <div className="flex flex-col gap-4 font-mono text-[11px]">
      <div className="rounded-lg bg-white/5 p-4 space-y-3">
        <p className="text-[9px] uppercase tracking-wider text-white/45">Trigger Mock Error State</p>
        <div className="flex flex-wrap gap-2">
          <button className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-400 font-semibold cursor-pointer">
            200 OK
          </button>
          <button className="rounded border border-red-500/30 bg-red-500/10 px-2.5 py-1 text-red-400 font-semibold cursor-pointer">
            402 Payment Required
          </button>
          <button className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-white/60 cursor-pointer">
            504 Gateway Timeout
          </button>
        </div>
      </div>
      <div className="rounded-lg bg-black/45 border border-white/5 p-4 space-y-2">
        <div className="text-white/30 text-[9px] uppercase">Incoming Webhook trace</div>
        <div className="text-red-400">16:49:15 [POST] /v1/charge_webhook &rarr; Status 402 Declined (Retry 1/3)</div>
        <div className="text-white/50 text-[10px] pl-3 leading-relaxed">
          &#123; "id": "ch_98", "amount": 10000, "status": "failed", "error": "card_declined" &#125;
        </div>
      </div>
    </div>
  );
}
