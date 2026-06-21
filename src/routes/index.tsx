import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Velnix — From Idea to Production" },
      { name: "description", content: "AI-Native Product & Engineering Studio helping startups design, build, launch and scale software, AI systems and mobile apps." },
      { property: "og:title", content: "The Velnix — From Idea to Production" },
      { property: "og:description", content: "AI-Native Product & Engineering Studio." },
    ],
  }),
  component: Landing,
});

/* ------------------------------ Primitives ------------------------------ */

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-10 ${className}`}>{children}</div>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      <span className="h-px w-6 bg-border-strong" />
      {children}
    </div>
  );
}

function CTAButton({
  children,
  variant = "primary",
  href = "#contact",
  size = "md",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  size?: "sm" | "md";
}) {
  const sizing = size === "sm" ? "h-9 px-4 text-[13px]" : "h-11 px-5 text-sm";
  const base =
    "group relative inline-flex items-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-out";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-brand hover:shadow-[0_10px_30px_-12px_oklch(0.7_0.19_40/0.6)]"
      : "bg-transparent text-foreground border border-border-strong hover:border-foreground hover:bg-foreground hover:text-background";
  return (
    <a href={href} className={`${base} ${sizing} ${styles}`}>
      <span>{children}</span>
      <span className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="absolute transition-transform duration-300 ease-out group-hover:translate-x-4">
          <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="absolute -translate-x-4 transition-transform duration-300 ease-out group-hover:translate-x-0">
          <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}

/* ------------------------------ Nav ------------------------------ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-[15px] font-bold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-sm bg-brand" />
          THE VELNIX
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {["Work", "Services", "About", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>
        <CTAButton href="#contact">Start a Project</CTAButton>
      </Container>
    </header>
  );
}

/* ------------------------------ Hero Diagram ------------------------------ */

function ArchitectureDiagram() {
  // Nodes positioned in a system-architecture grid
  const nodes = [
    { id: "ui", x: 40, y: 60, label: "UI", size: 1 },
    { id: "api", x: 200, y: 40, label: "API", size: 1.1 },
    { id: "core", x: 200, y: 170, label: "Core", size: 1.3 },
    { id: "ai", x: 360, y: 90, label: "AI", size: 1.1 },
    { id: "db", x: 360, y: 230, label: "DB", size: 1 },
    { id: "edge", x: 60, y: 220, label: "Edge", size: 0.9 },
  ] as const;
  const links: Array<[string, string]> = [
    ["ui", "api"],
    ["ui", "core"],
    ["api", "core"],
    ["core", "ai"],
    ["core", "db"],
    ["edge", "core"],
    ["ai", "db"],
  ];
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative aspect-[5/4] w-full">
      {/* background grid */}
      <div className="absolute inset-0 grid-bg rounded-xl" />
      <div className="absolute inset-0 rounded-xl border border-border" />
      {/* corner marks */}
      {[
        "left-2 top-2",
        "right-2 top-2",
        "left-2 bottom-2",
        "right-2 bottom-2",
      ].map((c) => (
        <div key={c} className={`absolute ${c} h-2 w-2 border-foreground/40`}>
          <span className="block h-px w-2 bg-foreground/40" />
          <span className="block h-2 w-px bg-foreground/40" />
        </div>
      ))}

      <svg viewBox="0 0 440 300" className="absolute inset-0 h-full w-full">
        {/* links */}
        {links.map(([a, b], i) => {
          const A = nodeMap[a];
          const B = nodeMap[b];
          return (
            <g key={`${a}-${b}`}>
              <line
                x1={A.x}
                y1={A.y}
                x2={B.x}
                y2={B.y}
                stroke="oklch(0.86 0 0)"
                strokeWidth="1"
              />
              <line
                x1={A.x}
                y1={A.y}
                x2={B.x}
                y2={B.y}
                stroke="var(--brand)"
                strokeWidth="1.2"
                strokeDasharray="4 16"
                style={{ animation: `flow-dash ${3 + (i % 3)}s linear infinite` }}
                opacity="0.85"
              />
            </g>
          );
        })}
        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={4 * n.size}
              fill="var(--brand)"
              style={{ animation: `pulse-node ${2 + (i % 3) * 0.4}s ease-in-out ${i * 0.2}s infinite` }}
            />
            <circle cx={n.x} cy={n.y} r={10 * n.size} fill="none" stroke="var(--brand)" strokeOpacity="0.2" />
            <rect
              x={n.x + 14}
              y={n.y - 9}
              width={n.label.length * 7 + 12}
              height="18"
              rx="3"
              fill="var(--background)"
              stroke="oklch(0.92 0 0)"
            />
            <text
              x={n.x + 20}
              y={n.y + 3}
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
              fill="oklch(0.13 0 0)"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>

      {/* status row */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" style={{ animation: "pulse-node 1.6s ease-in-out infinite" }} />
          system.online
        </span>
        <span>v0.42.1</span>
      </div>
    </div>
  );
}

/* ------------------------------ Hero ------------------------------ */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60" />
      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <motion.div style={{ y }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="font-mono uppercase tracking-wider text-muted-foreground">AI-Native Product Studio</span>
            </div>
            <h1 className="font-display text-balance text-[44px] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[64px] lg:text-[76px]">
              From Idea to <span className="italic text-muted-foreground">Production.</span>
            </h1>
            <p className="mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-[17px] md:leading-relaxed">
              We help startups and businesses design, build, and scale software products, AI systems,
              mobile applications, and digital experiences.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <CTAButton href="#contact">Start a Project</CTAButton>
              <CTAButton href="#work" variant="ghost">View Work</CTAButton>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-6 max-w-md">
              {[
                ["7+", "Products shipped"],
                ["6", "Specialists"],
                ["24/7", "Direct access"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-display text-2xl font-semibold tracking-tight">{k}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ArchitectureDiagram />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Trust strip ------------------------------ */

function Trust() {
  const areas = ["SaaS", "AI", "Mobile", "Infrastructure", "Design", "Automation"];
  const doubled = [...areas, ...areas];
  return (
    <section className="border-y border-border bg-surface py-8">
      <Container>
        <div className="mb-6 flex items-center justify-between">
          <SectionLabel>Expertise</SectionLabel>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            06 disciplines
          </span>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex gap-16 whitespace-nowrap"
            style={{ animation: "marquee 30s linear infinite", width: "max-content" }}
          >
            {doubled.map((a, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-brand" />
                <span className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {a}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Services ------------------------------ */

type IconName =
  | "saas" | "ai" | "mobile" | "design" | "brand" | "infra" | "cto" | "strategy" | "auto";

function Icon({ name }: { name: IconName }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "saas": return (<svg {...common}><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18"/><circle cx="6.5" cy="6.5" r=".5" fill="currentColor"/></svg>);
    case "ai": return (<svg {...common}><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>);
    case "mobile": return (<svg {...common}><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/></svg>);
    case "design": return (<svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18M3 12h18"/></svg>);
    case "brand": return (<svg {...common}><path d="M4 4l8 16 2-7 7-2z"/></svg>);
    case "infra": return (<svg {...common}><rect x="3" y="4" width="18" height="5" rx="1"/><rect x="3" y="15" width="18" height="5" rx="1"/><path d="M7 6.5h.01M7 17.5h.01"/></svg>);
    case "cto": return (<svg {...common}><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"/></svg>);
    case "strategy": return (<svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>);
    case "auto": return (<svg {...common}><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-12-5l-1-1M5 12a7 7 0 0 0 12 5l1 1"/></svg>);
  }
}

function Services() {
  const items: Array<{ icon: IconName; title: string; desc: string }> = [
    { icon: "saas", title: "SaaS Development", desc: "End-to-end web platforms engineered for scale, speed, and clarity." },
    { icon: "ai", title: "AI Agents", desc: "Production-grade agents, RAG pipelines, and AI-native workflows." },
    { icon: "mobile", title: "Mobile Applications", desc: "Native-feel iOS and Android apps built on Flutter and React Native." },
    { icon: "design", title: "UI / UX Design", desc: "Interfaces that earn trust through hierarchy, restraint, and motion." },
    { icon: "brand", title: "Branding", desc: "Identity systems for product companies — not agency moodboards." },
    { icon: "infra", title: "DevOps & Infrastructure", desc: "CI/CD, observability, and infra that holds up under real load." },
    { icon: "cto", title: "CTO-as-a-Service", desc: "Senior technical leadership for founders without an engineering co-founder." },
    { icon: "strategy", title: "Product Strategy", desc: "Roadmaps, scope, and tradeoffs informed by what we ship every week." },
    { icon: "auto", title: "Automation Systems", desc: "Internal tools and automations that compound team leverage." },
  ];
  return (
    <section id="services" className="py-28 md:py-36">
      <Container>
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
              A full product team,<br/>
              <span className="text-muted-foreground">on demand.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Every discipline you need to take a product from a Figma file to paying customers — under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className="group relative bg-card p-8 transition-colors duration-300 hover:bg-surface"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors group-hover:border-brand group-hover:text-brand">
                  <Icon name={s.icon} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-xs text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Featured Work ------------------------------ */

function ProductPreview({ kind }: { kind: string }) {
  // Abstract previews tailored per project — no stock imagery
  const accent = "var(--brand)";
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-surface">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute left-3 top-3 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-border-strong" />
        <span className="h-2 w-2 rounded-full bg-border-strong" />
        <span className="h-2 w-2 rounded-full bg-border-strong" />
      </div>
      <div className="absolute inset-x-0 top-8 px-4">
        {kind === "InboxFM" && (
          <div className="space-y-1.5">
            {[80, 65, 90, 55, 75].map((w, i) => (
              <div key={i} className="flex items-center gap-2 rounded-sm border border-border bg-card p-1.5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: i === 1 ? accent : "var(--border-strong)" }} />
                <span className="h-1 rounded-full bg-border-strong" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        )}
        {kind === "CodeDog" && (
          <div className="font-mono text-[9px] leading-relaxed text-muted-foreground">
            <div><span style={{ color: accent }}>$</span> codedog scan ./src</div>
            <div className="mt-1">✓ 124 files</div>
            <div>⚠ 3 vulnerabilities</div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded bg-border">
              <div className="h-full w-2/3" style={{ background: accent }} />
            </div>
          </div>
        )}
        {kind === "VedDB" && (
          <div className="space-y-1">
            <div className="flex justify-between font-mono text-[9px] text-muted-foreground"><span>OPS/SEC</span><span>1.42M</span></div>
            <svg viewBox="0 0 200 60" className="h-16 w-full">
              <polyline fill="none" stroke={accent} strokeWidth="1.5" points="0,40 20,30 40,35 60,20 80,28 100,12 120,22 140,10 160,18 180,8 200,14" />
            </svg>
          </div>
        )}
        {kind === "Doxify" && (
          <div className="space-y-2">
            <div className="h-2 w-1/2 rounded-sm bg-foreground" />
            <div className="h-1 w-full rounded-sm bg-border-strong" />
            <div className="h-1 w-5/6 rounded-sm bg-border-strong" />
            <div className="h-1 w-2/3 rounded-sm bg-border-strong" />
            <div className="mt-2 inline-block rounded-sm px-1.5 py-0.5 font-mono text-[8px]" style={{ background: accent, color: "white" }}>AI</div>
          </div>
        )}
        {kind === "FakePE" && (
          <div className="rounded-md border border-border bg-card p-2">
            <div className="font-mono text-[9px] text-muted-foreground">amount</div>
            <div className="font-display text-lg font-semibold">₹ 1,200.00</div>
            <div className="mt-1.5 h-5 rounded-sm" style={{ background: accent }} />
          </div>
        )}
        {kind === "ScholarFlex" && (
          <div className="grid grid-cols-3 gap-1.5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-sm border border-border" style={{ background: i === 4 ? accent : "var(--card)" }} />
            ))}
          </div>
        )}
        {kind === "BizNest" && (
          <div className="mx-auto w-20 rounded-[14px] border border-border-strong bg-card p-1.5">
            <div className="h-1 w-6 rounded-full bg-border-strong mx-auto mb-1" />
            <div className="space-y-1">
              <div className="h-3 rounded-sm" style={{ background: accent }} />
              <div className="h-3 rounded-sm bg-border" />
              <div className="h-3 rounded-sm bg-border" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Work() {
  const projects = [
    { name: "InboxFM", category: "Productivity", desc: "AI-native email workspace." },
    { name: "CodeDog", category: "Developer Tools", desc: "AI-powered codebase security platform." },
    { name: "VedDB", category: "Infrastructure", desc: "High-performance in-memory database." },
    { name: "Doxify", category: "AI / Docs", desc: "AI documentation engine." },
    { name: "FakePE", category: "Fintech", desc: "Developer payment gateway sandbox." },
    { name: "ScholarFlex", category: "EdTech", desc: "Student productivity platform." },
    { name: "BizNest", category: "Mobile / SMB", desc: "Business management mobile platform." },
  ];
  return (
    <section id="work" className="border-t border-border bg-surface py-28 md:py-36">
      <Container>
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
              Products we've shipped.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A selection of products we've built — across AI, infrastructure, fintech and mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className={`group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_20px_60px_-30px_oklch(0_0_0/0.25)] ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <ProductPreview kind={p.name} />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {p.category}
                  </div>
                  <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M4 10l6-6M5 4h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Why Velnix ------------------------------ */

function Why() {
  const rows = [
    ["Long meetings", "Rapid execution"],
    ["Outsourced communication", "Direct access to the team"],
    ["Generic solutions", "Product thinking"],
    ["Slow delivery", "Fast iteration"],
    ["Feature factories", "Strategic partners"],
  ];
  return (
    <section id="about" className="py-28 md:py-36">
      <Container>
        <div className="mb-16">
          <SectionLabel>Why Velnix</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
            Built like a product team. Not an agency.
          </h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-2 border-b border-border bg-surface">
            <div className="p-5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Traditional Agency
            </div>
            <div className="border-l border-border p-5 font-mono text-[11px] uppercase tracking-wider text-foreground">
              <span className="text-brand">●</span> The Velnix
            </div>
          </div>
          {rows.map(([a, b], i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${i !== rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex items-center gap-3 p-5 text-muted-foreground line-through decoration-border-strong">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 4l6 6M10 4l-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                <span className="text-sm md:text-base">{a}</span>
              </div>
              <div className="flex items-center gap-3 border-l border-border bg-card p-5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-brand"><path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-sm font-medium md:text-base">{b}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Process ------------------------------ */

function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "Define the problem, the user, and the smallest valuable thing to build." },
    { n: "02", t: "Design", d: "Translate scope into interfaces, flows, and a system that scales." },
    { n: "03", t: "Build", d: "Engineer in tight loops with weekly demos and continuous deployment." },
    { n: "04", t: "Launch", d: "Ship to production with monitoring, analytics, and a launch plan." },
    { n: "05", t: "Scale", d: "Compound the wins — performance, growth, infrastructure, AI." },
  ];
  return (
    <section className="border-t border-border bg-surface py-28 md:py-36">
      <Container>
        <div className="mb-16">
          <SectionLabel>Process</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
            Five steps. Zero theatrics.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="relative flex h-12 items-center md:h-12">
                  <span className="z-10 flex h-3 w-3 items-center justify-center rounded-full bg-background ring-1 ring-border-strong">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  </span>
                  <span className="ml-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Team ------------------------------ */

function Team() {
  const members = [
    { name: "Mihir Rabari", disciplines: "Engineering • Product • Infrastructure" },
    { name: "Khushi Trivedi", disciplines: "Operations • Growth • Partnerships" },
    { name: "Khushi Patel", disciplines: "UI/UX • Branding • Design Systems" },
    { name: "Aangi Shah", disciplines: "Product Design • Frontend Experience" },
    { name: "Karan Mistry", disciplines: "AI • Machine Learning • RAG Systems" },
    { name: "Jignesh Prajapati", disciplines: "Flutter • Mobile Applications" },
  ];
  return (
    <section className="py-28 md:py-36">
      <Container>
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Team</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
              Specialists,<br/>not generalists.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Six people. Six disciplines. Each member ships work that defines our standard.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => {
            const initials = m.name.split(" ").map((p) => p[0]).slice(0, 2).join("");
            return (
              <div key={m.name} className="group relative flex flex-col gap-6 bg-card p-8 transition-colors hover:bg-surface">
                <div className="relative flex h-32 w-full items-center justify-center overflow-hidden rounded-md border border-border bg-surface">
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <span className="relative font-display text-5xl font-semibold tracking-tight text-foreground/90">
                    {initials}
                  </span>
                  <span className="absolute bottom-2 right-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.disciplines}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Final CTA ------------------------------ */

function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-foreground text-background">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <Container className="relative py-28 md:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-background/60">
            <span className="h-px w-6 bg-background/40" />
            Start a Project
          </div>
          <h2 className="mt-6 font-display text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-7xl">
            Let's build something <span className="italic text-brand">worth shipping.</span>
          </h2>
          <p className="mt-6 max-w-xl text-balance text-base text-background/70 md:text-lg">
            Whether you're starting from an idea, scaling an existing product, or integrating AI into your business — we're ready to help.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:hello@thevelnix.com"
              className="group inline-flex h-11 items-center gap-2 rounded-md bg-background px-5 text-sm font-medium text-foreground transition-all hover:bg-brand hover:text-white"
            >
              Start a Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="mailto:hello@thevelnix.com"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-background/20 px-5 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              hello@thevelnix.com
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Footer ------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-display text-sm font-bold tracking-tight">
              <span className="inline-block h-2 w-2 rounded-sm bg-brand" />
              THE VELNIX
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">From Idea to Production.</p>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Studio</div>
            <ul className="mt-4 space-y-2 text-sm">
              {["Work", "Services", "About", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-foreground/80 hover:text-foreground">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Contact</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:hello@thevelnix.com" className="text-foreground/80 hover:text-foreground">hello@thevelnix.com</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground">Twitter / X</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} The Velnix. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Crafted in code.
          </p>
        </div>
      </Container>
    </footer>
  );
}

/* ------------------------------ Page ------------------------------ */

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Work />
      <Why />
      <Process />
      <Team />
      <FinalCTA />
      <Footer />
    </main>
  );
}
