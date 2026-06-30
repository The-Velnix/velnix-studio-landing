import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as AnimatePresence, s as motion } from "../_libs/framer-motion.mjs";
import { a as SiteFooter, n as Container, o as SiteHeader } from "./site-shell-DxiiIEQP.mjs";
import { t as ArrowLeft } from "./arrow-left-BvmIIQO9.mjs";
import { n as people } from "./team.index-CHtxwvPC.mjs";
import { t as Route } from "./team._id-DOtgRGM6.mjs";
import { t as ButtonColorful } from "./button-colorful-rB-N9zgc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team._id-dzKf8JVh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var GithubIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 18c-4.51 2-5-2-7-2" })]
});
var LinkedinIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "4",
			height: "12",
			x: "2",
			y: "9"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "4",
			cy: "4",
			r: "2"
		})
	]
});
var DribbbleIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "12",
		cy: "12",
		r: "10"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" })]
});
var TwitterIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" })
});
var GlobeIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "10"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 12h20" })
	]
});
function getSocialIcon(platform) {
	switch (platform.toLowerCase()) {
		case "github": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubIcon, { className: "h-3.5 w-3.5 text-muted-foreground group-hover/social:text-brand transition-colors" });
		case "linkedin": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedinIcon, { className: "h-3.5 w-3.5 text-muted-foreground group-hover/social:text-brand transition-colors" });
		case "dribbble": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DribbbleIcon, { className: "h-3.5 w-3.5 text-muted-foreground group-hover/social:text-brand transition-colors" });
		case "twitter": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TwitterIcon, { className: "h-3.5 w-3.5 text-muted-foreground group-hover/social:text-brand transition-colors" });
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobeIcon, { className: "h-3.5 w-3.5 text-muted-foreground group-hover/social:text-brand transition-colors" });
	}
}
function TeamMemberDetailPage() {
	const m = Route.useLoaderData();
	const memberIds = people.map((p) => p.id);
	const currentIndex = memberIds.indexOf(m.id);
	const nextMemberId1 = memberIds[(currentIndex + 1) % memberIds.length];
	const nextMemberId2 = memberIds[(currentIndex + 2) % memberIds.length];
	const nextMember1 = people.find((p) => p.id === nextMemberId1);
	const nextMember2 = people.find((p) => p.id === nextMemberId2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pt-28 pb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/team",
					className: "group inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3 w-3 transition-transform group-hover:-translate-x-0.5" }), "Back to Team"]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-16 md:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold block mb-4",
							children: m.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl",
							children: m.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-lg text-muted-foreground leading-relaxed",
							children: m.bio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-mono text-[9px] uppercase tracking-[.25em] text-muted-foreground font-semibold",
								children: "Core Responsibility"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-foreground/90 leading-relaxed font-medium",
								children: m.owns
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-mono text-[9px] uppercase tracking-[.25em] text-muted-foreground font-semibold",
								children: "Expertise & Skills"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-1.5",
								children: m.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
									children: skill
								}, skill))
							})] })]
						}),
						m.socials && m.socials.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 border-t border-border pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-mono text-[9px] uppercase tracking-[.25em] text-muted-foreground font-semibold mb-4",
								children: "Connect / Social Networks"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-3",
								children: m.socials.map((soc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: soc.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group/social inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-xs font-semibold text-foreground transition-all hover:bg-surface-strong hover:border-brand/40 hover:-translate-y-0.5",
									children: [getSocialIcon(soc.platform), soc.platform]
								}, soc.platform))
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface/50 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-[50%] bg-[radial-gradient(circle_at_top,rgba(46,197,182,0.04),transparent_70%)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex h-full w-full items-center justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-accent text-[clamp(6rem,20vw,12rem)] font-light italic text-brand animate-pulse",
									children: m.mark
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute bottom-4 left-4 font-mono text-[8px] tracking-[.3em] uppercase text-muted-foreground/60",
									children: "Monogram // Velnix Studio"
								})]
							})
						]
					})]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-surface/30 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold",
							children: "Live Showcase"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl",
							children: "Role Simulator"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed",
							children: [
								"Interact with a custom simulator representing ",
								m.name,
								"'s work stream, systems pipelines, or design patterns."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl border border-border bg-background p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleSimulator, { id: m.id })
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-surface/40 py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-[.25em] text-muted-foreground font-semibold",
							children: "Meet More Team"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl font-bold tracking-tight md:text-3xl",
							children: "Up Next"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/team",
							className: "group inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface-strong hover:border-foreground/30 transition-colors self-start sm:self-auto",
							children: ["View all team", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-brand",
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
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [nextMember1, nextMember2].map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/team/$id",
							params: { id: member.id },
							className: "group relative block overflow-hidden rounded-3xl border border-border bg-background p-6 md:p-8 hover:border-brand/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col justify-between min-h-[220px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-10 transition-opacity duration-500 group-hover:opacity-20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-[40%] bg-[radial-gradient(circle_at_top,rgba(46,197,182,0.02),transparent_70%)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold",
											children: member.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "mt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl flex items-center gap-3",
											children: [member.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "h-4 w-4 text-muted-foreground transition-all duration-300 -translate-x-1.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-brand",
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
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs text-muted-foreground leading-relaxed max-w-md",
											children: member.bio
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative self-end mt-4 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface transition-all duration-500 group-hover:scale-105 group-hover:border-brand/30 z-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative font-accent text-sm font-light italic text-brand transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110",
										children: member.mark
									})]
								})
							]
						}, member.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-28 max-w-2xl text-center border-t border-border/60 pt-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold",
								children: "Start Your Project"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl font-bold leading-tight md:text-4xl",
								children: "Ready to ship with care?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonColorful, {
									href: "/contact",
									label: "Start a project"
								})
							})
						]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function RoleSimulator({ id }) {
	switch (id) {
		case "mihir-rabari": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MihirSimulator, {});
		case "khushi-trivedi": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KhushiTSimulator, {});
		case "khushi-patel": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KhushiPSimulator, {});
		case "aangi-shah": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AangiSimulator, {});
		case "karan-mistry": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KaranSimulator, {});
		case "jignesh-prajapati": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JigneshSimulator, {});
		case "tajes-patel": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TajesSimulator, {});
		case "jaivik-prajapati": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JaivikSimulator, {});
		default: return null;
	}
}
function MihirSimulator() {
	const [logs, setLogs] = (0, import_react.useState)(["[init] Bootstrapping Docker network...", "[ok] Load balancer configured"]);
	const [cpu, setCpu] = (0, import_react.useState)(34);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setCpu(Math.floor(Math.random() * 20) + 20);
			const acts = [
				"Container healthcheck passed",
				"Nginx proxy route refreshed",
				"Redis connection verified",
				"SSL Handshake ok",
				"Database pool scaling ok"
			];
			const newLog = `[ok] ${acts[Math.floor(Math.random() * acts.length)]}`;
			setLogs((prev) => [newLog, ...prev.slice(0, 5)]);
		}, 3e3);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
				children: "K8s Deployment Simulator"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex h-2 w-2 rounded-full bg-brand animate-ping" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 sm:grid-cols-[1fr_1.5fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border p-4 bg-surface/50",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[9px] text-muted-foreground uppercase",
						children: "CPU Load"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-4xl font-bold font-display",
							children: [cpu, "%"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-brand font-medium",
							children: "Optimal"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-2 w-full rounded-full bg-border overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-brand transition-all duration-500",
							style: { width: `${cpu}%` }
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-border p-4 bg-slate-950 font-mono text-[11px] text-brand-foreground/90 space-y-2 h-[120px] overflow-y-auto",
				children: logs.map((log, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: log.includes("ok") ? "text-brand" : "text-muted-foreground",
					children: log
				}, i))
			})]
		})]
	});
}
function KhushiTSimulator() {
	const [tasks, setTasks] = (0, import_react.useState)([
		{
			id: 1,
			title: "Client Brief Intake",
			status: "Done"
		},
		{
			id: 2,
			title: "Contracts Audit",
			status: "In Progress"
		},
		{
			id: 3,
			title: "Q3 Strategy Board",
			status: "Backlog"
		}
	]);
	const moveTask = (id) => {
		setTasks(tasks.map((t) => {
			if (t.id === id) {
				const nextStatus = t.status === "Backlog" ? "In Progress" : t.status === "In Progress" ? "Done" : "Backlog";
				return {
					...t,
					status: nextStatus
				};
			}
			return t;
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
				children: "Interactive Operations Board"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-brand font-medium",
				children: "Click card to advance status"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: [
				"Backlog",
				"In Progress",
				"Done"
			].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border p-4 bg-surface/30 min-h-[140px] space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-mono text-[9px] uppercase tracking-wider text-muted-foreground mb-2",
					children: col
				}), tasks.filter((t) => t.status === col).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => moveTask(t.id),
					className: "w-full text-left rounded-xl border border-border bg-background p-3 text-xs font-semibold hover:border-brand/40 transition-colors shadow-sm",
					children: t.title
				}, t.id))]
			}, col))
		})]
	});
}
function KhushiPSimulator() {
	const [hue, setHue] = (0, import_react.useState)(172);
	const [radius, setRadius] = (0, import_react.useState)(16);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
				children: "Brand Tokens Playground"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground font-medium",
				children: "Customize variables"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex justify-between text-xs text-muted-foreground font-semibold mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Brand Hue (HSL)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [hue, "°"] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: "0",
					max: "360",
					value: hue,
					onChange: (e) => setHue(parseInt(e.target.value)),
					className: "w-full accent-brand bg-border h-1 rounded-lg appearance-none cursor-pointer"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex justify-between text-xs text-muted-foreground font-semibold mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Border Radius" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [radius, "px"] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: "0",
					max: "32",
					value: radius,
					onChange: (e) => setRadius(parseInt(e.target.value)),
					className: "w-full accent-brand bg-border h-1 rounded-lg appearance-none cursor-pointer"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center p-6 bg-surface/30 border border-border rounded-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-[240px] bg-background border p-5 shadow-lg transition-all duration-300",
					style: {
						borderRadius: `${radius}px`,
						borderColor: `hsl(${hue}, 60%, 85%)`
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded px-2 py-0.5 text-[8px] font-mono uppercase tracking-widest font-semibold text-white",
							style: { backgroundColor: `hsl(${hue}, 60%, 45%)` },
							children: "Token Card"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-3 font-display text-lg font-bold",
							children: "Dynamic Palette"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground leading-relaxed",
							children: "Visual styling automatically updates as you slide controls."
						})
					]
				})
			})]
		})]
	});
}
function AangiSimulator() {
	const [damping, setDamping] = (0, import_react.useState)(15);
	const [stiffness, setStiffness] = (0, import_react.useState)(180);
	const [key, setKey] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
				children: "Framer Motion Sandbox"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-brand font-medium",
				children: "Click ball to bounce"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex justify-between text-xs text-muted-foreground font-semibold mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Stiffness" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: stiffness })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: "50",
					max: "500",
					value: stiffness,
					onChange: (e) => setStiffness(parseInt(e.target.value)),
					className: "w-full accent-brand bg-border h-1 rounded-lg appearance-none cursor-pointer"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex justify-between text-xs text-muted-foreground font-semibold mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Damping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: damping })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: "5",
					max: "40",
					value: damping,
					onChange: (e) => setDamping(parseInt(e.target.value)),
					className: "w-full accent-brand bg-border h-1 rounded-lg appearance-none cursor-pointer"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center p-6 bg-surface/30 border border-border rounded-3xl h-[160px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
					onClick: () => setKey(key + 1),
					initial: {
						scale: .3,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					transition: {
						type: "spring",
						stiffness,
						damping
					},
					className: "h-16 w-16 rounded-full bg-brand flex items-center justify-center text-white shadow-lg cursor-pointer",
					whileTap: { scale: .9 },
					children: "Bounce"
				}, key)
			})]
		})]
	});
}
function KaranSimulator() {
	const [logs, setLogs] = (0, import_react.useState)([]);
	const [query, setQuery] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const runQuery = (e) => {
		e.preventDefault();
		if (!query.trim() || loading) return;
		setLoading(true);
		setLogs(["[rag] Computing embedding vectors...", "[rag] Fetching from pinecone db..."]);
		setTimeout(() => {
			setLogs((prev) => [...prev, "[rag] Chunk retrieved: text_id=2089 (score=0.92)"]);
		}, 800);
		setTimeout(() => {
			setLogs((prev) => [
				...prev,
				"[eval] Grounding output check completed.",
				"[ok] AI: Grounded response rendered."
			]);
			setLoading(false);
			setQuery("");
		}, 1800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
					children: "RAG Evaluation Console"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: runQuery,
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Ask system, e.g. 'What is FakePE?'",
					className: "flex-1 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-brand/40"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "rounded-xl bg-foreground px-4 text-xs font-semibold text-background hover:bg-brand hover:text-brand-foreground transition-colors disabled:opacity-50",
					disabled: loading,
					children: loading ? "RAG..." : "Send"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-border bg-slate-950 p-4 font-mono text-[11px] text-brand-foreground/90 space-y-2 h-[120px] overflow-y-auto",
				children: logs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-muted-foreground italic",
					children: "Console output prints here. Send a query."
				}) : logs.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: l.includes("ok") ? "text-brand" : "text-muted-foreground",
					children: l
				}, i))
			})
		]
	});
}
function JigneshSimulator() {
	const [screen, setScreen] = (0, import_react.useState)("Home");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
				children: "Flutter Emulator (Device Shell)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs text-muted-foreground",
				children: ["Current Screen: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-foreground",
					children: screen
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-[280px] h-[360px] rounded-3xl border-4 border-foreground bg-slate-950 overflow-hidden relative shadow-lg flex flex-col justify-between p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center text-[10px] font-mono text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VelnixOS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "9:41 AM" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 flex flex-col justify-center items-center text-center px-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
							mode: "wait",
							children: [
								screen === "Home" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										scale: .95
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: .95
									},
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-12 w-12 rounded-full bg-brand/20 flex items-center justify-center mx-auto text-brand text-lg font-bold",
											children: "🎯"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-white text-sm font-bold",
											children: "Velnix Flutter Portal"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: "Compiled with native performance pipeline."
										})
									]
								}, "Home"),
								screen === "Profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: {
										opacity: 0,
										y: -10
									},
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto text-amber-500 text-lg font-bold",
											children: "👤"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-white text-sm font-bold",
											children: "Developer Profile"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: "Running on arm64 simulator build."
										})
									]
								}, "Profile"),
								screen === "Logs" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										x: 20
									},
									animate: {
										opacity: 1,
										x: 0
									},
									exit: {
										opacity: 0,
										x: -20
									},
									className: "space-y-2 font-mono text-[9px] text-left text-brand",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "[sys] dartVM loaded ok" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "[sys] hotReload initialized" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "[sys] platformChannel channel setup" })
									]
								}, "Logs")
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border/20 pt-3 flex justify-around",
						children: [
							"Home",
							"Profile",
							"Logs"
						].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setScreen(tab),
							className: `text-[10px] font-mono uppercase px-2 py-1 rounded transition-colors ${screen === tab ? "bg-brand text-white font-bold" : "text-muted-foreground hover:text-white"}`,
							children: tab
						}, tab))
					})
				]
			})
		})]
	});
}
function TajesSimulator() {
	const [running, setRunning] = (0, import_react.useState)(false);
	const [score, setScore] = (0, import_react.useState)(0);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
				children: "Lighthouse Performance Auditor"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: startAudit,
				disabled: running,
				className: "rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background hover:bg-brand hover:text-brand-foreground transition-colors disabled:opacity-50",
				children: running ? "Auditing..." : "Run Audit"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center p-8 bg-surface/30 border border-border rounded-3xl space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-28 w-28 flex items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "absolute inset-0 transform -rotate-90",
					viewBox: "0 0 100 100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "50",
						cy: "50",
						r: "40",
						stroke: "rgba(255,255,255,0.06)",
						strokeWidth: "6",
						fill: "transparent"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "50",
						cy: "50",
						r: "40",
						stroke: "#2EC5B6",
						strokeWidth: "6",
						fill: "transparent",
						strokeDasharray: 251.2,
						strokeDashoffset: 251.2 - 251.2 * score / 100,
						className: "transition-all duration-100"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-3xl font-display font-bold tracking-tight",
					children: score
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-mono uppercase tracking-wider text-muted-foreground text-center",
				children: score === 100 ? "LCP: 0.8s | FID: 12ms | CLS: 0" : running ? "Optimizing Assets..." : "Idle. Run audit to test frontend performance"
			})]
		})]
	});
}
function JaivikSimulator() {
	const [endpoint, setEndpoint] = (0, import_react.useState)("/api/v1/health");
	const [response, setResponse] = (0, import_react.useState)({
		status: "healthy",
		timestamp: Date.now()
	});
	const runRequest = () => {
		if (endpoint === "/api/v1/health") setResponse({
			status: "healthy",
			db: "connected",
			latency_ms: 12
		});
		else if (endpoint === "/api/v1/users") setResponse({ users: [{
			id: 1,
			name: "Alice",
			email: "alice@velnix.com"
		}, {
			id: 2,
			name: "Bob",
			email: "bob@velnix.com"
		}] });
		else setResponse({
			error: "Route not found",
			status_code: 404
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
				children: "REST Endpoint Client"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: runRequest,
				className: "rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background hover:bg-brand hover:text-brand-foreground transition-colors",
				children: "Send Request"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs font-bold text-brand",
					children: "GET"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: endpoint,
					onChange: (e) => setEndpoint(e.target.value),
					className: "flex-1 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-brand/40 cursor-pointer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "/api/v1/health",
							children: "/api/v1/health"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "/api/v1/users",
							children: "/api/v1/users"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "/api/v1/not-found",
							children: "/api/v1/missing-route"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-border bg-slate-950 p-4 font-mono text-[11px] text-brand-foreground/90 h-[120px] overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { children: JSON.stringify(response, null, 2) })
			})]
		})]
	});
}
//#endregion
export { TeamMemberDetailPage as component };
