import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as AnimatePresence, i as useReducedMotion, s as motion } from "../_libs/framer-motion.mjs";
import { a as SiteFooter, n as Container, o as SiteHeader } from "./site-shell-DxiiIEQP.mjs";
import { t as BlurText } from "./BlurText-6uJa6ZI_.mjs";
import { t as Check } from "./check-CLOnDg-z.mjs";
import { t as ButtonColorful } from "./button-colorful-rB-N9zgc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.index-DuRA3evQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	{
		id: "all",
		label: "All Projects"
	},
	{
		id: "ai-dev",
		label: "AI & Dev Tools"
	},
	{
		id: "mobile",
		label: "Mobile"
	},
	{
		id: "infra",
		label: "Infrastructure"
	},
	{
		id: "fintech",
		label: "Fintech"
	}
];
var cases = [
	{
		id: "codedog",
		category: "AI / Developer tools",
		filterGroup: "ai-dev",
		name: "CodeDog",
		description: "AI-assisted codebase security that turns complex scans into actionable findings.",
		challenge: "Scanning codebases for vulnerabilities is traditionally slow and generates complex reports full of false positives, which developers end up ignoring.",
		solution: "We designed a secure, real-time LLM scanning engine that analyzes Git diffs and outputs clean, plain-English security reviews directly in developer pull requests.",
		shipped: [
			"Real-time LLM scanning pipeline",
			"Figma component design system",
			"GitHub Actions integrations",
			"Developer dashboard interface"
		],
		tech: [
			"React",
			"TypeScript",
			"Python",
			"FastAPI",
			"OpenAI API",
			"Docker"
		],
		mark: "CD"
	},
	{
		id: "veddb",
		category: "Infrastructure",
		filterGroup: "infra",
		name: "VedDB",
		description: "A high-performance in-memory database with visibility designed into the experience.",
		challenge: "In-memory key-value stores are fast but operate as black boxes, making debugging memory spikes and key distributions extremely difficult for operators.",
		solution: "We developed a lightweight key-value database written in Go, featuring a real-time terminal and dashboard UI showing cache hit rates, memory use, and command flows.",
		shipped: [
			"Go-based in-memory core",
			"High-frequency dashboard WebSocket API",
			"Real-time memory profiling tool",
			"Interactive CLI manager"
		],
		tech: [
			"Go",
			"React",
			"TailwindCSS",
			"WebSockets",
			"gRPC",
			"eBPF Profiling"
		],
		mark: "VD"
	},
	{
		id: "biznest",
		category: "Mobile / SMB",
		filterGroup: "mobile",
		name: "BizNest",
		description: "A mobile-first workspace bringing essential business operations into one place.",
		challenge: "Small business owners struggle with fragmented software for invoices, client scheduling, and team chats, which slows down daily operations.",
		solution: "We built a unified mobile application combining invoicing, automated reminders, secure team channels, and customer booking inside one clean interface.",
		shipped: [
			"Cross-platform Flutter application",
			"Push notification pipeline",
			"Automated stripe invoicing worker",
			"Real-time chat syncing system"
		],
		tech: [
			"Flutter",
			"Dart",
			"Node.js",
			"PostgreSQL",
			"Stripe API",
			"Firebase"
		],
		mark: "BN"
	},
	{
		id: "inboxfm",
		category: "AI / Productivity",
		filterGroup: "ai-dev",
		name: "InboxFM",
		description: "An AI-native email workspace built to reduce inbox noise and accelerate decisions.",
		challenge: "Professionals lose hours sorting through promotional noise, threads, and notification spam to find messages requiring immediate actions.",
		solution: "We developed an email client layer with local vector embedding classifiers that automatically group emails into smart priority categories and summarize long threads.",
		shipped: [
			"Local vector embedding model integration",
			"Email summarization pipeline",
			"Fast keyboard navigation layouts",
			"IMAP/SMTP sync engine"
		],
		tech: [
			"React / Vite",
			"TypeScript",
			"Transformers.js",
			"Redis",
			"Node.js IMAP",
			"PostgreSQL"
		],
		mark: "IF"
	},
	{
		id: "doxify",
		category: "AI / Documentation",
		filterGroup: "ai-dev",
		name: "Doxify",
		description: "A documentation engine that turns evolving product knowledge into useful answers.",
		challenge: "Company wikis and product docs quickly go stale and become unsearchable, causing teams to repeatedly ask the same questions in chat channels.",
		solution: "We built a documentation platform that imports Git wikis, auto-detects outdated pages via file history, and exposes a secure Slack/Discord Q&A bot.",
		shipped: [
			"Auto-indexing document parser",
			"RAG vector retrieval system",
			"Slack/Discord integration bot",
			"Wiki change monitoring webhooks"
		],
		tech: [
			"Next.js",
			"Python",
			"LangChain",
			"Pinecone Vector DB",
			"Slack Bolt SDK",
			"PostgreSQL"
		],
		mark: "DX"
	},
	{
		id: "fakepe",
		category: "Fintech / Developer tools",
		filterGroup: "fintech",
		name: "FakePE",
		description: "A payment gateway sandbox for teams building and testing transaction workflows.",
		challenge: "Integrating production payment processors requires strict sandbox settings that make simulating edge cases (declined cards, bank errors) slow to test.",
		solution: "We created a mock payment gateway that lets developers trigger specific HTTP header errors to simulate precise success/failure states.",
		shipped: [
			"Declined card simulation API",
			"Real-time webhook tester",
			"Custom transaction debugger panel",
			"API dashboard metrics"
		],
		tech: [
			"React",
			"TypeScript",
			"Go",
			"PostgreSQL",
			"Redis Webhooks",
			"Docker Compose"
		],
		mark: "FP"
	}
];
function WorkPage() {
	const reduce = useReducedMotion();
	const [selectedFilter, setSelectedFilter] = (0, import_react.useState)("all");
	const filteredCases = selectedFilter === "all" ? cases : cases.filter((c) => c.filterGroup === selectedFilter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-[0.25] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "relative z-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: reduce ? false : {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .55 },
							className: "font-mono text-[9px] uppercase tracking-[.25em] text-brand",
							children: "The Evidence / What We Shipped"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								initial: reduce ? false : { y: "108%" },
								animate: { y: 0 },
								transition: {
									duration: .9,
									delay: .08,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								className: "mx-auto max-w-[14ch] text-balance font-display text-[clamp(2.75rem,7.5vw,6rem)] font-semibold leading-[0.9] tracking-[-.055em]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
									text: "Evidence over",
									animateBy: "words",
									direction: "bottom",
									delay: 60,
									stepDuration: .34,
									className: "block"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block pt-1 leading-[1.02]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
										text: "empty claims.",
										animateBy: "words",
										direction: "bottom",
										delay: 75,
										stepDuration: .34,
										className: "font-display text-[clamp(2.65rem,7.2vw,5.85rem)] font-semibold leading-[1.02] tracking-[-.055em] text-brand"
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: reduce ? false : {
								opacity: 0,
								y: 18
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .22
							},
							className: "mx-auto mt-8 max-w-xl text-pretty text-[15px] leading-8 text-muted-foreground md:text-[17px]",
							children: "A detailed view of products we have taken from first decision to dependable production. No prototypes or placeholder designs—only code shipped to real users."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-surface py-6 sticky top-20 z-30 backdrop-blur-md bg-surface/85",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center justify-center gap-2",
					children: filters.map((f) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedFilter(f.id),
							className: `relative rounded-full px-5 py-2.5 font-mono text-[9px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${selectedFilter === f.id ? "bg-foreground text-background shadow-md" : "border border-border-strong bg-background/50 text-muted-foreground hover:border-foreground/40 hover:text-foreground"}`,
							children: f.label
						}, f.id);
					})
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					className: "grid gap-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: filteredCases.map((c, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							layout: true,
							initial: {
								opacity: 0,
								y: 32
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								scale: .95
							},
							transition: {
								duration: .55,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "grid gap-8 rounded-3xl border border-border bg-background p-6 md:p-8 lg:grid-cols-[0.35fr_1.65fr] hover:border-brand/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex h-36 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface lg:h-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-50" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative font-accent text-6xl font-light italic text-brand",
										children: c.mark
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute left-4 top-4 font-mono text-[9px] uppercase tracking-widest text-background/50",
										children: ["0", index + 1]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-between min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[9px] uppercase tracking-widest text-brand font-medium",
												children: c.category
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1.5",
												children: c.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-muted-foreground",
													children: t
												}, t))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/work/$id",
												params: { id: c.id },
												className: "hover:text-brand transition-colors",
												children: c.name
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-base text-muted-foreground font-medium max-w-2xl",
											children: c.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 grid gap-8 md:grid-cols-2 border-t border-border/50 pt-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-[8px] uppercase tracking-widest text-muted-foreground/60 mb-2 font-medium",
												children: "The Challenge"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm leading-6 text-muted-foreground",
												children: c.challenge
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-[8px] uppercase tracking-widest text-muted-foreground/60 mb-2 font-medium",
												children: "Our Solution"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm leading-6 text-muted-foreground",
												children: c.solution
											})] })]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 border-t border-border/50 pt-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[8px] uppercase tracking-widest text-muted-foreground/60 mb-3 font-medium",
											children: "What We Shipped"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid gap-2 sm:grid-cols-2",
											children: c.shipped.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5 text-xs text-foreground/95",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
													size: 14,
													className: "text-brand shrink-0",
													animate: false
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
											}, item))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex justify-end",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/work/$id",
											params: { id: c.id },
											className: "group inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-foreground transition-colors",
											children: ["View case study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 2.5,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
												})
											})]
										})
									})
								]
							})]
						}, c.id))
					})
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border py-24 md:py-32 bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[9px] uppercase tracking-[.25em] text-brand",
							children: "Start Your Project"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl font-semibold tracking-[-.04em] md:text-5xl max-w-xl mx-auto leading-tight",
							children: "Have something ambitious in mind? Let's build it together."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-7 text-muted-foreground max-w-md mx-auto",
							children: "We will help you turn your validated ideas or messy problems into a structured, clear implementation plan."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonColorful, {
								href: "/contact",
								label: "Start a conversation"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { WorkPage as component };
