import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, SiteFooter, SiteHeader } from "../components/site-shell";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { ArrowLeftIcon } from "@/components/animate-ui/icons/arrow-left";
import { CheckIcon } from "@/components/animate-ui/icons/check";
import { people } from "./team.index";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const DribbbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

function getSocialIcon(platform: string) {
  switch (platform.toLowerCase()) {
    case "github":
      return <GithubIcon className="h-3.5 w-3.5 text-muted-foreground group-hover/social:text-brand transition-colors" />;
    case "linkedin":
      return <LinkedinIcon className="h-3.5 w-3.5 text-muted-foreground group-hover/social:text-brand transition-colors" />;
    case "dribbble":
      return <DribbbleIcon className="h-3.5 w-3.5 text-muted-foreground group-hover/social:text-brand transition-colors" />;
    case "twitter":
      return <TwitterIcon className="h-3.5 w-3.5 text-muted-foreground group-hover/social:text-brand transition-colors" />;
    default:
      return <GlobeIcon className="h-3.5 w-3.5 text-muted-foreground group-hover/social:text-brand transition-colors" />;
  }
}

export const Route = createFileRoute("/team/$id")({
  loader: ({ params }) => {
    const member = people.find((p) => p.id === params.id);
    if (!member) {
      throw new Error(`Team member ${params.id} not found`);
    }
    return member;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData.name} | The Velnix` }],
  }),
  component: TeamMemberDetailPage,
});

function TeamMemberDetailPage() {
  const m = Route.useLoaderData();
  
  // Calculate next two team members for the side-by-side bottom section
  const memberIds = people.map((p) => p.id);
  const currentIndex = memberIds.indexOf(m.id);
  const nextMemberId1 = memberIds[(currentIndex + 1) % memberIds.length];
  const nextMemberId2 = memberIds[(currentIndex + 2) % memberIds.length];
  const nextMember1 = people.find((p) => p.id === nextMemberId1)!;
  const nextMember2 = people.find((p) => p.id === nextMemberId2)!;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* ── Back to Team Header ── */}
      <section className="pt-28 pb-8">
        <Container>
          <Link
            to="/team"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
            Back to Team
          </Link>
        </Container>
      </section>

      {/* ── Employee Hero & Info ── */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold block mb-4">
                {m.role}
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                {m.name}
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                {m.bio}
              </p>

              {/* Specs Grid */}
              <div className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-2">
                <div>
                  <h3 className="font-mono text-[9px] uppercase tracking-[.25em] text-muted-foreground font-semibold">
                    Core Responsibility
                  </h3>
                  <p className="mt-3 text-sm text-foreground/90 leading-relaxed font-medium">
                    {m.owns}
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-[9px] uppercase tracking-[.25em] text-muted-foreground font-semibold">
                    Expertise & Skills
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {m.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {m.socials && m.socials.length > 0 && (
                <div className="mt-10 border-t border-border pt-8">
                  <h3 className="font-mono text-[9px] uppercase tracking-[.25em] text-muted-foreground font-semibold mb-4">
                    Connect / Social Networks
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {m.socials.map((soc) => (
                      <a
                        key={soc.platform}
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-xs font-semibold text-foreground transition-all hover:bg-surface-strong hover:border-brand/40 hover:-translate-y-0.5"
                      >
                        {getSocialIcon(soc.platform)}
                        {soc.platform}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Asymmetrical Monogram Portal */}
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface/50 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-x-0 top-0 h-[50%] bg-[radial-gradient(circle_at_top,rgba(46,197,182,0.04),transparent_70%)]" />
              
              <div className="relative flex h-full w-full items-center justify-center">
                <span className="font-accent text-[clamp(6rem,20vw,12rem)] font-light italic text-brand animate-pulse">
                  {m.mark}
                </span>
                <span className="absolute bottom-4 left-4 font-mono text-[8px] tracking-[.3em] uppercase text-muted-foreground/60">
                  Monogram // Velnix Studio
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Interactive Playground Section ── */}
      <section className="border-t border-border bg-surface/30 py-20">
        <Container>
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold">
              Live Showcase
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Role Simulator
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Interact with a custom simulator representing {m.name}&apos;s work stream, systems pipelines, or design patterns.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
            <RoleSimulator id={m.id} />
          </div>
        </Container>
      </section>

      {/* ── Next Employees & CTA ── */}
      <section className="border-t border-border bg-surface/40 py-24 md:py-32">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[.25em] text-muted-foreground font-semibold">
                Meet More Team
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight md:text-3xl">
                Up Next
              </h2>
            </div>
            <Link
              to="/team"
              className="group inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface-strong hover:border-foreground/30 transition-colors self-start sm:self-auto"
            >
              View all team
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
            {[nextMember1, nextMember2].map((member) => (
              <Link
                key={member.id}
                to="/team/$id"
                params={{ id: member.id }}
                className="group relative block overflow-hidden rounded-3xl border border-border bg-background p-6 md:p-8 hover:border-brand/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col justify-between min-h-[220px]"
              >
                {/* Background grid accent */}
                <div className="absolute inset-0 grid-bg opacity-10 transition-opacity duration-500 group-hover:opacity-20" />
                <div className="absolute inset-x-0 top-0 h-[40%] bg-[radial-gradient(circle_at_top,rgba(46,197,182,0.02),transparent_70%)]" />

                <div className="relative z-10 flex-1">
                  <span className="font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold">
                    {member.role}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl flex items-center gap-3">
                    {member.name}
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
                    {member.bio}
                  </p>
                </div>

                {/* Tiny floating portal preview in bottom right */}
                <div className="relative self-end mt-4 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface transition-all duration-500 group-hover:scale-105 group-hover:border-brand/30 z-10">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <span className="relative font-accent text-sm font-light italic text-brand transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                    {member.mark}
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

/* ── Interactive Role Simulator Components ── */
function RoleSimulator({ id }: { id: string }) {
  switch (id) {
    case "mihir-rabari":
      return <MihirSimulator />;
    case "khushi-trivedi":
      return <KhushiTSimulator />;
    case "khushi-patel":
      return <KhushiPSimulator />;
    case "aangi-shah":
      return <AangiSimulator />;
    case "karan-mistry":
      return <KaranSimulator />;
    case "jignesh-prajapati":
      return <JigneshSimulator />;
    case "tajes-patel":
      return <TajesSimulator />;
    case "jaivik-prajapati":
      return <JaivikSimulator />;
    default:
      return null;
  }
}

// Mihir: Infrastructure Dashboard
function MihirSimulator() {
  const [logs, setLogs] = useState<string[]>(["[init] Bootstrapping Docker network...", "[ok] Load balancer configured"]);
  const [cpu, setCpu] = useState(34);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 20) + 20);
      const acts = ["Container healthcheck passed", "Nginx proxy route refreshed", "Redis connection verified", "SSL Handshake ok", "Database pool scaling ok"];
      const newLog = `[ok] ${acts[Math.floor(Math.random() * acts.length)]}`;
      setLogs((prev) => [newLog, ...prev.slice(0, 5)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">K8s Deployment Simulator</span>
        <span className="inline-flex h-2 w-2 rounded-full bg-brand animate-ping" />
      </div>
      <div className="grid gap-6 sm:grid-cols-[1fr_1.5fr]">
        <div className="rounded-2xl border border-border p-4 bg-surface/50">
          <span className="font-mono text-[9px] text-muted-foreground uppercase">CPU Load</span>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-bold font-display">{cpu}%</span>
            <span className="text-xs text-brand font-medium">Optimal</span>
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-border overflow-hidden">
            <div className="h-full bg-brand transition-all duration-500" style={{ width: `${cpu}%` }} />
          </div>
        </div>
        <div className="rounded-2xl border border-border p-4 bg-slate-950 font-mono text-[11px] text-brand-foreground/90 space-y-2 h-[120px] overflow-y-auto">
          {logs.map((log, i) => (
            <div key={i} className={log.includes("ok") ? "text-brand" : "text-muted-foreground"}>
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Khushi Trivedi: CRM / Roadmap Kanban Board
function KhushiTSimulator() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Client Brief Intake", status: "Done" },
    { id: 2, title: "Contracts Audit", status: "In Progress" },
    { id: 3, title: "Q3 Strategy Board", status: "Backlog" },
  ]);

  const moveTask = (id: number) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === id) {
          const nextStatus = t.status === "Backlog" ? "In Progress" : t.status === "In Progress" ? "Done" : "Backlog";
          return { ...t, status: nextStatus };
        }
        return t;
      })
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Interactive Operations Board</span>
        <span className="text-xs text-brand font-medium">Click card to advance status</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {["Backlog", "In Progress", "Done"].map((col) => (
          <div key={col} className="rounded-2xl border border-border p-4 bg-surface/30 min-h-[140px] space-y-3">
            <h4 className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mb-2">{col}</h4>
            {tasks
              .filter((t) => t.status === col)
              .map((t) => (
                <button
                  key={t.id}
                  onClick={() => moveTask(t.id)}
                  className="w-full text-left rounded-xl border border-border bg-background p-3 text-xs font-semibold hover:border-brand/40 transition-colors shadow-sm"
                >
                  {t.title}
                </button>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// Khushi Patel: Design Token Playground
function KhushiPSimulator() {
  const [hue, setHue] = useState(172);
  const [radius, setRadius] = useState(16);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Brand Tokens Playground</span>
        <span className="text-xs text-muted-foreground font-medium">Customize variables</span>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="flex justify-between text-xs text-muted-foreground font-semibold mb-2">
              <span>Brand Hue (HSL)</span>
              <span>{hue}°</span>
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => setHue(parseInt(e.target.value))}
              className="w-full accent-brand bg-border h-1 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="flex justify-between text-xs text-muted-foreground font-semibold mb-2">
              <span>Border Radius</span>
              <span>{radius}px</span>
            </label>
            <input
              type="range"
              min="0"
              max="32"
              value={radius}
              onChange={(e) => setRadius(parseInt(e.target.value))}
              className="w-full accent-brand bg-border h-1 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center justify-center p-6 bg-surface/30 border border-border rounded-3xl">
          <div
            className="w-full max-w-[240px] bg-background border p-5 shadow-lg transition-all duration-300"
            style={{
              borderRadius: `${radius}px`,
              borderColor: `hsl(${hue}, 60%, 85%)`,
            }}
          >
            <span
              className="inline-block rounded px-2 py-0.5 text-[8px] font-mono uppercase tracking-widest font-semibold text-white"
              style={{ backgroundColor: `hsl(${hue}, 60%, 45%)` }}
            >
              Token Card
            </span>
            <h4 className="mt-3 font-display text-lg font-bold">Dynamic Palette</h4>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Visual styling automatically updates as you slide controls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Aangi Shah: Spring Physics Playground
function AangiSimulator() {
  const [damping, setDamping] = useState(15);
  const [stiffness, setStiffness] = useState(180);
  const [key, setKey] = useState(0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Framer Motion Sandbox</span>
        <span className="text-xs text-brand font-medium">Click ball to bounce</span>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="flex justify-between text-xs text-muted-foreground font-semibold mb-2">
              <span>Stiffness</span>
              <span>{stiffness}</span>
            </label>
            <input
              type="range"
              min="50"
              max="500"
              value={stiffness}
              onChange={(e) => setStiffness(parseInt(e.target.value))}
              className="w-full accent-brand bg-border h-1 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="flex justify-between text-xs text-muted-foreground font-semibold mb-2">
              <span>Damping</span>
              <span>{damping}</span>
            </label>
            <input
              type="range"
              min="5"
              max="40"
              value={damping}
              onChange={(e) => setDamping(parseInt(e.target.value))}
              className="w-full accent-brand bg-border h-1 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center justify-center p-6 bg-surface/30 border border-border rounded-3xl h-[160px]">
          <motion.button
            key={key}
            onClick={() => setKey(key + 1)}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness,
              damping,
            }}
            className="h-16 w-16 rounded-full bg-brand flex items-center justify-center text-white shadow-lg cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            Bounce
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// Karan: AI / RAG Sandbox
function KaranSimulator() {
  const [logs, setLogs] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const runQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;
    setLoading(true);
    setLogs(["[rag] Computing embedding vectors...", "[rag] Fetching from pinecone db..."]);
    
    setTimeout(() => {
      setLogs((prev) => [...prev, "[rag] Chunk retrieved: text_id=2089 (score=0.92)"]);
    }, 800);

    setTimeout(() => {
      setLogs((prev) => [...prev, "[eval] Grounding output check completed.", "[ok] AI: Grounded response rendered."]);
      setLoading(false);
      setQuery("");
    }, 1800);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">RAG Evaluation Console</span>
      </div>
      <form onSubmit={runQuery} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask system, e.g. 'What is FakePE?'"
          className="flex-1 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-brand/40"
        />
        <button
          type="submit"
          className="rounded-xl bg-foreground px-4 text-xs font-semibold text-background hover:bg-brand hover:text-brand-foreground transition-colors disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "RAG..." : "Send"}
        </button>
      </form>
      <div className="rounded-2xl border border-border bg-slate-950 p-4 font-mono text-[11px] text-brand-foreground/90 space-y-2 h-[120px] overflow-y-auto">
        {logs.length === 0 ? (
          <div className="text-muted-foreground italic">Console output prints here. Send a query.</div>
        ) : (
          logs.map((l, i) => (
            <div key={i} className={l.includes("ok") ? "text-brand" : "text-muted-foreground"}>
              {l}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Jignesh: Flutter mobile app device emulator
function JigneshSimulator() {
  const [screen, setScreen] = useState("Home");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Flutter Emulator (Device Shell)</span>
        <span className="text-xs text-muted-foreground">Current Screen: <strong className="text-foreground">{screen}</strong></span>
      </div>
      <div className="flex justify-center">
        <div className="w-[280px] h-[360px] rounded-3xl border-4 border-foreground bg-slate-950 overflow-hidden relative shadow-lg flex flex-col justify-between p-4">
          {/* Top Status Bar */}
          <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground">
            <span>VelnixOS</span>
            <span>9:41 AM</span>
          </div>

          {/* Screen Content */}
          <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
            <AnimatePresence mode="wait">
              {screen === "Home" && (
                <motion.div
                  key="Home"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-2"
                >
                  <div className="h-12 w-12 rounded-full bg-brand/20 flex items-center justify-center mx-auto text-brand text-lg font-bold">🎯</div>
                  <h4 className="text-white text-sm font-bold">Velnix Flutter Portal</h4>
                  <p className="text-[11px] text-muted-foreground">Compiled with native performance pipeline.</p>
                </motion.div>
              )}
              {screen === "Profile" && (
                <motion.div
                  key="Profile"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-2"
                >
                  <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto text-amber-500 text-lg font-bold">👤</div>
                  <h4 className="text-white text-sm font-bold">Developer Profile</h4>
                  <p className="text-[11px] text-muted-foreground">Running on arm64 simulator build.</p>
                </motion.div>
              )}
              {screen === "Logs" && (
                <motion.div
                  key="Logs"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-2 font-mono text-[9px] text-left text-brand"
                >
                  <div>[sys] dartVM loaded ok</div>
                  <div>[sys] hotReload initialized</div>
                  <div>[sys] platformChannel channel setup</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Nav Bar */}
          <div className="border-t border-border/20 pt-3 flex justify-around">
            {["Home", "Profile", "Logs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setScreen(tab)}
                className={`text-[10px] font-mono uppercase px-2 py-1 rounded transition-colors ${screen === tab ? "bg-brand text-white font-bold" : "text-muted-foreground hover:text-white"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Tajes: Lighthouse performance auditor simulator
function TajesSimulator() {
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);

  const startAudit = () => {
    if (running) return;
    setRunning(true);
    setScore(0);
    let current = 0;
    const interval = setInterval(() => {
      current += 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setRunning(false);
      }
      setScore(current);
    }, 60);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Lighthouse Performance Auditor</span>
        <button
          onClick={startAudit}
          disabled={running}
          className="rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background hover:bg-brand hover:text-brand-foreground transition-colors disabled:opacity-50"
        >
          {running ? "Auditing..." : "Run Audit"}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center p-8 bg-surface/30 border border-border rounded-3xl space-y-4">
        {/* Score Ring */}
        <div className="relative h-28 w-28 flex items-center justify-center">
          <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="transparent" />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#2EC5B6"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={251.2}
              strokeDashoffset={251.2 - (251.2 * score) / 100}
              className="transition-all duration-100"
            />
          </svg>
          <span className="text-3xl font-display font-bold tracking-tight">{score}</span>
        </div>
        <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground text-center">
          {score === 100 ? "LCP: 0.8s | FID: 12ms | CLS: 0" : running ? "Optimizing Assets..." : "Idle. Run audit to test frontend performance"}
        </div>
      </div>
    </div>
  );
}

// Jaivik: Backend API Endpoint sandbox
function JaivikSimulator() {
  const [endpoint, setEndpoint] = useState("/api/v1/health");
  const [response, setResponse] = useState<any>({ status: "healthy", timestamp: Date.now() });

  const runRequest = () => {
    if (endpoint === "/api/v1/health") {
      setResponse({ status: "healthy", db: "connected", latency_ms: 12 });
    } else if (endpoint === "/api/v1/users") {
      setResponse({
        users: [
          { id: 1, name: "Alice", email: "alice@velnix.com" },
          { id: 2, name: "Bob", email: "bob@velnix.com" },
        ],
      });
    } else {
      setResponse({ error: "Route not found", status_code: 404 });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">REST Endpoint Client</span>
        <button
          onClick={runRequest}
          className="rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background hover:bg-brand hover:text-brand-foreground transition-colors"
        >
          Send Request
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-brand">GET</span>
          <select
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            className="flex-1 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-brand/40 cursor-pointer"
          >
            <option value="/api/v1/health">/api/v1/health</option>
            <option value="/api/v1/users">/api/v1/users</option>
            <option value="/api/v1/not-found">/api/v1/missing-route</option>
          </select>
        </div>
        <div className="rounded-2xl border border-border bg-slate-950 p-4 font-mono text-[11px] text-brand-foreground/90 h-[120px] overflow-y-auto">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
