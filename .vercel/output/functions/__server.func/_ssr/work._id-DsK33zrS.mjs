import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteFooter, n as Container, o as SiteHeader } from "./site-shell-DxiiIEQP.mjs";
import { t as ArrowLeft } from "./arrow-left-BvmIIQO9.mjs";
import { t as BlurText } from "./BlurText-6uJa6ZI_.mjs";
import { n as projects, t as Route } from "./work._id-CoHT3qQf.mjs";
import { t as Check } from "./check-CLOnDg-z.mjs";
import { t as ButtonColorful } from "./button-colorful-rB-N9zgc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._id-DsK33zrS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetailPage() {
	const p = Route.useLoaderData();
	const projectIds = Object.keys(projects);
	const currentIndex = projectIds.indexOf(p.id);
	const nextProjectId1 = projectIds[(currentIndex + 1) % projectIds.length];
	const nextProjectId2 = projectIds[(currentIndex + 2) % projectIds.length];
	const nextProject1 = projects[nextProjectId1];
	const nextProject2 = projects[nextProjectId2];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden border-b border-border pb-20 pt-36 md:pb-28 md:pt-44",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-[45%] bg-[radial-gradient(circle_at_top,rgba(46,197,182,0.06),transparent_65%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/work",
							className: "mb-8 inline-flex items-center gap-2 text-xs font-mono tracking-wider text-muted-foreground hover:text-foreground transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								size: 12,
								animateOnHover: true
							}), "Back to work"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 max-w-4xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[9px] uppercase tracking-[.25em] text-brand font-medium",
									children: p.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-.055em]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
										text: p.name,
										animateBy: "words",
										direction: "bottom",
										delay: 50,
										stepDuration: .3,
										className: "block"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl",
									children: p.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 flex flex-wrap gap-2",
									children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border bg-surface/50 px-3.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
										children: t
									}, t))
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-2 lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-28 overflow-hidden rounded-3xl border border-border bg-surface p-4 shadow-sm md:p-6 lg:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowcaseSelector, { id: p.id })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[9px] uppercase tracking-[.25em] text-muted-foreground font-semibold",
								children: "01 / The Challenge"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl",
								children: "Addressing the bottleneck."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-8 text-muted-foreground",
								children: p.challenge
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border/60 pt-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold",
									children: "02 / Our Solution"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl",
									children: "Bespoke execution."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-8 text-muted-foreground",
									children: p.solution
								})
							]
						})]
					})]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-surface py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold",
							children: "Product Architecture"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl",
							children: "Engineered for efficiency."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6 text-muted-foreground",
							children: "Every detail is scoped around clean user workflows and reliable backend pipelines."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: p.features.map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-background p-6 transition-all hover:border-brand/35",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs font-semibold text-brand",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-lg font-bold",
								children: feature.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-5 text-muted-foreground",
								children: feature.desc
							})
						]
					}, feature.title))
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-background p-8 md:p-12 lg:p-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold",
							children: "Deliverables"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl",
							children: "What we shipped to production."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-2",
							children: p.shipped.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-sm text-foreground/90 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										size: 12,
										className: "text-brand",
										animate: false
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						})
					]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-surface/40 py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-[.25em] text-muted-foreground font-semibold",
							children: "Explore More"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl font-bold tracking-tight md:text-3xl",
							children: "Up Next"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/work",
							className: "group inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface-strong hover:border-foreground/30 transition-colors self-start sm:self-auto",
							children: ["View all work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
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
						children: [nextProject1, nextProject2].map((proj) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/work/$id",
							params: { id: proj.id },
							className: "group relative block overflow-hidden rounded-3xl border border-border bg-background p-6 md:p-8 hover:border-brand/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col justify-between min-h-[220px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-10 transition-opacity duration-500 group-hover:opacity-20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-[40%] bg-[radial-gradient(circle_at_top,rgba(46,197,182,0.02),transparent_70%)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[9px] uppercase tracking-[.25em] text-brand font-semibold",
											children: proj.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "mt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl flex items-center gap-3",
											children: [proj.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
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
											children: proj.tagline
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative self-end mt-4 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface transition-all duration-500 group-hover:scale-105 group-hover:border-brand/30 z-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative font-accent text-sm font-light italic text-brand transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110",
										children: proj.mark
									})]
								})
							]
						}, proj.id))
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
function ShowcaseSelector({ id }) {
	switch (id) {
		case "codedog": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeDogMock, {});
		case "veddb": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VedDBMock, {});
		case "biznest": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BizNestMock, {});
		case "inboxfm": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InboxFMMock, {});
		case "doxify": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoxifyMock, {});
		case "fakepe": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FakePEMock, {});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-64 bg-border/20 rounded-2xl flex items-center justify-center",
			children: "Showcase Loading..."
		});
	}
}
function CodeDogMock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full bg-slate-950 font-mono text-[11px] leading-relaxed text-slate-300 rounded-xl overflow-hidden shadow-2xl border border-slate-800",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between bg-slate-900 px-4 py-2.5 border-b border-slate-800",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-rose-500" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-amber-500" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-emerald-500" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-3 text-slate-400 text-[10px]",
						children: "src/api/auth.py"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] text-slate-500",
				children: "git diff"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 space-y-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-slate-500",
					children: "12   def verify_token(token: str):"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-slate-500",
					children: "13       try:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-red-950/40 text-red-300 px-1 border-l-2 border-red-500",
					children: "14 -         payload = jwt.decode(token, \"SUPER_SECRET_PLAINTEXT_KEY\", algorithms=[\"HS256\"])"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-emerald-950/40 text-emerald-300 px-1 border-l-2 border-emerald-500",
					children: "14 +         payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[\"HS256\"])"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-slate-500",
					children: "15           return payload"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-slate-500",
					children: "16       except PyJWTError:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-lg bg-slate-900 border border-slate-800 p-3.5 text-xs text-slate-200",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pb-2 border-b border-slate-800",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-rose-400 flex items-center gap-1.5",
								children: "⚠️ CodeDog Alert"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] text-slate-500",
								children: "Just now"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2.5 text-slate-400 leading-normal",
							children: "Hardcoded secret key detected. JWT credentials should always be resolved dynamically from system environments."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded bg-rose-950/50 text-rose-300 px-2 py-0.5 text-[9px] font-semibold border border-rose-900/50",
								children: "Vulnerability: High"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded bg-slate-800 px-2 py-0.5 text-[9px] text-slate-400",
								children: "Category: OWASP A2"
							})]
						})
					]
				})
			]
		})]
	});
}
function VedDBMock() {
	const [ops, setOps] = (0, import_react.useState)(245300);
	const [latency, setLatency] = (0, import_react.useState)(.85);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setOps((prev) => prev + Math.floor(Math.random() * 50) - 25);
			setLatency((prev) => Math.max(.72, Math.min(.98, prev + (Math.random() * .04 - .02))));
		}, 1e3);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full bg-slate-950 text-slate-300 rounded-xl overflow-hidden border border-slate-800 font-mono p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-3 gap-2 text-center pb-4 border-b border-slate-900",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[9px] text-slate-500 uppercase",
					children: "Ops / Sec"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-bold text-emerald-400",
					children: ops.toLocaleString()
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[9px] text-slate-500 uppercase",
					children: "Avg Latency"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm font-bold text-cyan-400",
					children: [latency.toFixed(2), " ms"]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[9px] text-slate-500 uppercase",
					children: "Cache Hits"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-bold text-violet-400",
					children: "99.84%"
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 h-36 overflow-y-auto space-y-1.5 text-[10px] text-slate-400",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "$ veddb-cli -h localhost -p 6380" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-slate-500",
					children: "Connected to VedDB v1.4.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "> HSET user:1003 name \"Karan Mistry\" role \"AI\"" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-emerald-500",
					children: "OK (0.12 ms)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "> HGETALL user:1003" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-slate-500",
					children: "1) \"name\" -> \"Karan Mistry\""
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-slate-500",
					children: "2) \"role\" -> \"AI\""
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "> MONITOR" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-amber-500 animate-pulse",
					children: "1782757199 [user:1003] command=HGETALL latency=0.08ms"
				})
			]
		})]
	});
}
function BizNestMock() {
	const slots = [
		"10:00 AM",
		"11:30 AM",
		"02:00 PM",
		"04:30 PM"
	];
	const [selectedSlot, setSelectedSlot] = (0, import_react.useState)("11:30 AM");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-[280px] bg-slate-900 rounded-3xl border-8 border-slate-800 p-4 shadow-2xl text-slate-200",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between pb-3 border-b border-slate-800 text-[10px] font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BizNest Workspace" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-brand animate-pulse" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-slate-400 uppercase tracking-wider block font-bold",
						children: "Select Appointment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid grid-cols-4 gap-1 text-[9px] text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-1 rounded bg-slate-800 text-slate-400",
								children: "Mon 29"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-1 rounded bg-brand text-brand-foreground font-bold",
								children: "Tue 30"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-1 rounded bg-slate-800 text-slate-400",
								children: "Wed 01"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-1 rounded bg-slate-800 text-slate-400",
								children: "Thu 02"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-2 gap-1.5",
						children: slots.map((s) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelectedSlot(s),
								className: `py-1.5 rounded text-[10px] font-semibold transition-all ${selectedSlot === s ? "bg-brand text-brand-foreground" : "bg-slate-800 text-slate-300"}`,
								children: s
							}, s);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 bg-slate-950 rounded-xl p-3 border border-slate-800",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[8px] text-slate-500 uppercase tracking-widest block",
						children: "Invoice Pending"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold",
							children: "₹12,500.00"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[8px] rounded-full bg-amber-500/10 text-amber-500 px-2 py-0.5 border border-amber-500/20",
							children: "Unpaid"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-2/3 bg-brand" })
					})
				]
			})
		]
	});
}
function InboxFMMock() {
	const [selectedMail, setSelectedMail] = (0, import_react.useState)("mail-0");
	const mails = [{
		id: "mail-0",
		from: "Devraj Chatribin",
		subject: "Velnix Enterprise Website Redesign scope",
		time: "10m ago",
		priority: "AI VIP",
		summary: "Wants to launch the enterprise website redesign in 6 weeks. Core components include interactive showcases, Stripe billing modules, and custom widgets."
	}, {
		id: "mail-1",
		from: "AWS Billings",
		subject: "Your AWS Invoice for June 2026",
		time: "2h ago",
		priority: "Auto-Alert",
		summary: "AWS billing statement ready. Monthly amount: $243.50. Automatic debit will execute on July 1st."
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full bg-slate-950 text-slate-300 rounded-xl overflow-hidden border border-slate-800 flex text-xs h-64",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-1/2 border-r border-slate-900 p-2.5 space-y-2 overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[9px] text-slate-500 block uppercase tracking-wider",
				children: "Priority Mailbox"
			}), mails.map((m) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: () => setSelectedMail(m.id),
					className: `p-2 rounded-lg cursor-pointer transition-colors ${selectedMail === m.id ? "bg-slate-900 border border-slate-800" : "hover:bg-slate-950"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-slate-200",
								children: m.from
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8px] text-slate-500",
								children: m.time
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-slate-400 truncate mt-0.5",
							children: m.subject
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1.5 inline-block text-[8px] bg-brand/10 text-brand px-1.5 py-0.2 rounded border border-brand/20",
							children: m.priority
						})
					]
				}, m.id);
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-1/2 p-3 bg-slate-900/40 flex flex-col justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1.5 text-brand font-bold text-[10px]",
				children: "✨ InboxFM AI Summary"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2.5 text-[10.5px] leading-relaxed text-slate-400",
				children: mails.find((m) => m.id === selectedMail)?.summary
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 pt-2 border-t border-slate-800 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "bg-brand text-brand-foreground px-2.5 py-1 rounded text-[9px] font-bold",
					children: "Create Action Item"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "bg-slate-800 text-slate-300 px-2 py-1 rounded text-[9px]",
					children: "Archive"
				})]
			})]
		})]
	});
}
function DoxifyMock() {
	const [messages, setMessages] = (0, import_react.useState)([{
		role: "user",
		text: "How do I configure webhook keys in FakePE?"
	}, {
		role: "bot",
		text: "FakePE webhook keys can be configured in your .env as FAKEPE_WEBHOOK_SECRET. You can also trigger webhooks using headers in your request."
	}]);
	const [inputVal, setInputVal] = (0, import_react.useState)("");
	const handleSend = () => {
		if (!inputVal.trim()) return;
		setMessages((prev) => [...prev, {
			role: "user",
			text: inputVal
		}]);
		setInputVal("");
		setTimeout(() => {
			setMessages((prev) => [...prev, {
				role: "bot",
				text: "I found 2 wiki entries for FakePE webhooks: 'FakePE API' and 'Docker Integration Guide'. Updating files..."
			}]);
		}, 1e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full bg-slate-950 text-slate-300 rounded-xl overflow-hidden border border-slate-800 flex flex-col h-64",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center justify-between text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-brand animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold",
						children: "Doxify Wiki Bot"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[9px] text-slate-500",
					children: "Connected to Slack"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 p-3 space-y-2 overflow-y-auto text-[10.5px]",
				children: messages.map((m, idx) => {
					const isUser = m.role === "user";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `p-2 rounded-lg max-w-[85%] ${isUser ? "bg-slate-800 text-slate-200 ml-auto" : "bg-slate-900 text-slate-300 border border-slate-800"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-bold text-[8px] text-slate-500 uppercase mb-0.5",
							children: isUser ? "You" : "Doxify Bot"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: m.text })]
					}, idx);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-2 border-t border-slate-900 flex gap-1.5 bg-slate-900/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: inputVal,
					onChange: (e) => setInputVal(e.target.value),
					placeholder: "Ask wiki assistant...",
					className: "flex-1 bg-slate-950 border border-slate-800 rounded-md px-2.5 py-1 text-[10.5px] text-slate-200 outline-none focus:border-brand"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleSend,
					className: "bg-brand text-brand-foreground px-3 py-1 rounded-md text-[10px] font-bold",
					children: "Send"
				})]
			})
		]
	});
}
function FakePEMock() {
	const [errCode, setErrCode] = (0, import_react.useState)("402");
	const [responseLog, setResponseLog] = (0, import_react.useState)(`{\n  "error": "PaymentRequired",\n  "message": "Insufficent Funds in test card",\n  "code": 402\n}`);
	(0, import_react.useEffect)(() => {
		if (errCode === "200") setResponseLog(`{\n  "status": "Success",\n  "transaction_id": "txn_fake_8245781295",\n  "amount": 12500,\n  "currency": "INR"\n}`);
		else if (errCode === "402") setResponseLog(`{\n  "error": "PaymentRequired",\n  "message": "Insufficent Funds in test card",\n  "code": 402\n}`);
		else if (errCode === "500") setResponseLog(`{\n  "error": "InternalServerError",\n  "message": "Bank gateway timed out during processing",\n  "code": 500\n}`);
	}, [errCode]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full bg-slate-950 text-slate-300 rounded-xl overflow-hidden border border-slate-800 flex text-xs h-64",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-1/2 p-3 space-y-3 border-r border-slate-900",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[9px] text-slate-500 block uppercase tracking-wider",
					children: "Gateway Sandbox"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-[10px] text-slate-400 block mb-1",
					children: "Simulate Status Response"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: errCode,
					onChange: (e) => setErrCode(e.target.value),
					className: "w-full bg-slate-900 border border-slate-800 rounded px-2 py-1.5 text-xs text-slate-200 outline-none focus:border-brand",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "200",
							children: "200 OK (Success)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "402",
							children: "402 Payment Required"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "500",
							children: "500 Internal Server Error"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/60 p-2 rounded border border-slate-800/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[9px] text-slate-400 font-bold block",
						children: "X-Simulate-Header"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[9px] text-slate-500 block mt-1",
						children: ["X-FakePE-Response: ", errCode]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-1/2 p-3 bg-slate-900/30 flex flex-col justify-between font-mono text-[9.5px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[8px] text-slate-500 uppercase tracking-widest block mb-1.5",
					children: "Gateway Response Payload"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "text-slate-400 bg-slate-950/70 p-2 rounded border border-slate-900 overflow-x-auto select-all max-h-40 leading-normal",
					children: responseLog
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[8.5px] text-emerald-400/80 animate-pulse mt-2 flex items-center gap-1.5",
					children: "● Webhook triggered successfully"
				})]
			})
		})]
	});
}
//#endregion
export { ProjectDetailPage as component };
