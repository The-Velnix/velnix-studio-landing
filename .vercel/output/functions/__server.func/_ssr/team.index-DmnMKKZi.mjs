import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useReducedMotion, s as motion } from "../_libs/framer-motion.mjs";
import { a as SiteFooter, n as Container, o as SiteHeader } from "./site-shell-DxiiIEQP.mjs";
import { t as BlurText } from "./BlurText-6uJa6ZI_.mjs";
import { n as people } from "./team.index-CHtxwvPC.mjs";
import { t as ButtonColorful } from "./button-colorful-rB-N9zgc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team.index-DmnMKKZi.js
var import_jsx_runtime = require_jsx_runtime();
var principles = [
	{
		title: "Direct developer access",
		description: "We don't have account managers or translation chains. You collaborate directly with the engineers and designers building your software. This keeps feedback loops tight and execution clear."
	},
	{
		title: "One accountable partner",
		description: "The team that designs your database structures and user experience is the same team that deploys your system and supports it post-launch. Total ownership from first line of code to production."
	},
	{
		title: "Iterative momentum",
		description: "We ship working demos every single week. Rather than waiting for a big reveal, you see development unfold in real-time, allowing you to test, learn, and adapt direction dynamically."
	}
];
function TeamPage() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28",
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
							children: "The People / Who We Are"
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
									text: "Deliberately small.",
									animateBy: "words",
									direction: "bottom",
									delay: 60,
									stepDuration: .34,
									className: "block"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block pt-1 leading-[1.02]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
										text: "Deeply committed.",
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
							children: "We are a tight-knit studio of product designers, systems engineers, and AI specialists. We work alongside founders to build software that works."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-surface py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: people.map((person, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: reduce ? false : {
							opacity: 0,
							y: 32
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							amount: .15
						},
						transition: {
							duration: .6,
							delay: index * .06,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/team/$id",
							params: { id: person.id },
							className: "group flex flex-col h-full rounded-3xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex h-32 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-50 transition-opacity duration-300 group-hover:opacity-75" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative font-accent text-5xl font-light italic text-foreground/80 transition-transform duration-500 group-hover:scale-105",
											children: person.mark
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute right-4 top-4 font-mono text-[9px] tracking-widest text-muted-foreground",
											children: ["0", index + 1]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[8px] uppercase tracking-widest text-brand font-medium",
											children: person.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 font-display text-2xl font-bold tracking-tight text-foreground",
											children: person.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm leading-6 text-muted-foreground",
											children: person.bio
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 border-t border-border/60 pt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[8px] uppercase tracking-widest text-muted-foreground/60 mb-2.5",
										children: "Ownership"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs leading-5 text-foreground/90 font-medium",
										children: person.owns
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 border-t border-border/60 pt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[8px] uppercase tracking-widest text-muted-foreground/60 mb-3",
										children: "Expertise"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-1.5",
										children: person.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-border-strong bg-surface/50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground group-hover:border-brand/20 group-hover:text-foreground transition-colors duration-300",
											children: skill
										}, skill))
									})]
								})
							]
						})
					}, person.id))
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[0.8fr_1.2fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[9px] uppercase tracking-[.25em] text-brand",
							children: "Core Philosophy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl font-semibold tracking-[-.04em] md:text-5xl",
							children: "How we ship digital products."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-7 text-muted-foreground max-w-md",
							children: "We believe that software should be built with minimal friction and maximum clarity. These operating guidelines form the basis of every project we take on."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonColorful, {
								href: "/contact",
								label: "Work with us"
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-10",
						children: principles.map((pr, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-6 border-b border-border/60 pb-8 last:border-b-0 last:pb-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-sm tracking-widest text-brand font-medium",
								children: ["0", idx + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold tracking-tight text-foreground",
								children: pr.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-7 text-muted-foreground",
								children: pr.description
							})] })]
						}, pr.title))
					})]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { TeamPage as component };
