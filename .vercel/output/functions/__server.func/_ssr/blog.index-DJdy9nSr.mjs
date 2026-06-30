import "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as motion } from "../_libs/framer-motion.mjs";
import { a as SiteFooter, c as getVariants, i as Send, l as useAnimateIconContext, n as Container, o as SiteHeader, r as IconWrapper } from "./site-shell-DxiiIEQP.mjs";
import { t as BlurText } from "./BlurText-6uJa6ZI_.mjs";
import { t as ScrollReveal } from "./ScrollReveal-Cs4aE8at.mjs";
import { t as Eyebrow } from "./section-D4ViLxCP.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var animations = { default: {
	circle: {},
	line1: {
		initial: {
			rotate: 0,
			transition: {
				ease: "easeInOut",
				duration: .6
			}
		},
		animate: {
			transformOrigin: "top left",
			rotate: [
				0,
				20,
				0
			],
			transition: {
				ease: "easeInOut",
				duration: .6
			}
		}
	},
	line2: {
		initial: {
			rotate: 0,
			transition: {
				ease: "easeInOut",
				duration: .6
			}
		},
		animate: {
			transformOrigin: "bottom left",
			rotate: 360,
			transition: {
				ease: "easeInOut",
				duration: .6
			}
		}
	}
} };
function IconComponent({ size, ...props }) {
	const { controls } = useAnimateIconContext();
	const variants = getVariants(animations);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.svg, {
		xmlns: "http://www.w3.org/2000/svg",
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
				cx: 12,
				cy: 12,
				r: 10,
				variants: variants.circle,
				initial: "initial",
				animate: controls
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
				x1: 12,
				y1: 12,
				x2: 16,
				y2: 14,
				variants: variants.line1,
				initial: "initial",
				animate: controls
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
				x1: 12,
				y1: 6,
				x2: 12,
				y2: 12,
				variants: variants.line2,
				initial: "initial",
				animate: controls
			})
		]
	});
}
function Clock(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWrapper, {
		icon: IconComponent,
		...props
	});
}
var posts = [
	{
		slug: "ai-features-that-survive-production",
		tag: "AI Engineering",
		date: "June 18, 2026",
		read: "7 min",
		title: "What separates an AI demo from a production feature",
		excerpt: "A practical checklist for evaluation, grounding, fallbacks, cost controls and the work that makes AI dependable.",
		number: "01"
	},
	{
		slug: "scope-an-mvp-without-building-a-toy",
		tag: "Product Strategy",
		date: "June 9, 2026",
		read: "6 min",
		title: "How to scope an MVP without building a toy",
		excerpt: "Cutting scope should reduce surface area, not erase the one outcome that makes a product valuable.",
		number: "02"
	},
	{
		slug: "weekly-demos-change-software-delivery",
		tag: "Delivery",
		date: "May 27, 2026",
		read: "5 min",
		title: "Why weekly demos change the quality of software delivery",
		excerpt: "Working software creates sharper conversations than status reports and catches misunderstandings early.",
		number: "03"
	},
	{
		slug: "fractional-cto-right-time",
		tag: "Leadership",
		date: "May 14, 2026",
		read: "5 min",
		title: "When a fractional CTO is the right hire",
		excerpt: "The signals that you need technical leadership now, but are not ready for a full-time executive.",
		number: "04"
	},
	{
		slug: "mobile-or-responsive-web",
		tag: "Product Decisions",
		date: "April 30, 2026",
		read: "8 min",
		title: "Mobile app or responsive web: deciding with evidence",
		excerpt: "A framework based on user context, hardware access, retention, distribution and operating cost.",
		number: "05"
	},
	{
		slug: "technical-debt-is-a-product-decision",
		tag: "Engineering",
		date: "April 16, 2026",
		read: "6 min",
		title: "Technical debt is a product decision",
		excerpt: "Not all debt is dangerous. Know what you borrowed, why, and what will make repayment necessary.",
		number: "06"
	}
];
function Blog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg grid-bg-fade opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Field notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-8 md:grid-cols-[1.25fr_.75fr] md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-6xl font-semibold leading-[.95] tracking-[-.03em] md:text-8xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
								text: "Notes from inside the build.",
								animateBy: "words",
								direction: "bottom",
								delay: 70,
								stepDuration: .34,
								className: "block"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
							containerClassName: "max-w-md",
							textClassName: "text-sm leading-7 text-muted-foreground",
							baseOpacity: .18,
							baseRotation: 2,
							blurStrength: 6,
							children: "Practical thinking on product decisions, dependable AI and the engineering habits that move software into production."
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-surface py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group grid overflow-hidden rounded-2xl border border-border bg-foreground text-background lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-h-80 overflow-hidden border-b border-background/15 p-8 lg:border-b-0 lg:border-r",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative font-mono text-[10px] uppercase tracking-widest text-brand",
								children: "Featured / AI Engineering"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute bottom-4 left-8 font-accent text-[9rem] font-light leading-none italic text-background/10",
								children: "AI"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between p-8 md:p-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-5 font-mono text-[9px] uppercase tracking-widest text-background/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "June 18, 2026" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
										size: 11,
										animateOnHover: true
									}), "7 min"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-7 font-display text-4xl font-semibold leading-tight md:text-5xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
									text: "What separates an AI demo from a production feature",
									animateBy: "words",
									direction: "bottom",
									delay: 55,
									stepDuration: .3,
									className: "block"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
								containerClassName: "mt-5",
								textClassName: "text-sm leading-7 text-background/60",
								baseOpacity: .18,
								baseRotation: 2,
								blurStrength: 6,
								children: "A practical checklist for evaluation, grounding, fallbacks, cost controls and the work that makes AI dependable."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$slug",
							params: { slug: posts[0].slug },
							className: "mt-10 inline-flex items-center gap-2 text-sm text-brand",
							children: ["Read field note ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
								size: 14,
								animateOnHover: true
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2",
					children: posts.slice(1).map((p, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: false,
							amount: .2
						},
						transition: {
							duration: .55,
							delay: index * .08
						},
						className: "group bg-background p-7 transition-colors hover:bg-surface",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[9px] uppercase tracking-widest text-brand",
									children: p.tag
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-accent text-4xl font-light italic text-border-strong",
									children: p.number
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-12 max-w-lg font-display text-3xl font-semibold leading-tight",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-7 text-muted-foreground",
								children: p.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex items-center justify-between border-t border-border pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
									children: [
										p.date,
										" / ",
										p.read
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/blog/$slug",
									params: { slug: p.slug },
									"aria-label": `Read ${p.title}`,
									className: "flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
										size: 14,
										animateOnHover: true
									})
								})]
							})
						]
					}, p.slug))
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "flex flex-col items-start justify-between gap-7 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Have a harder question?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
							text: "Let's discuss the next move.",
							animateBy: "words",
							direction: "bottom",
							delay: 60,
							stepDuration: .3,
							className: "block"
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm text-background hover:bg-brand",
						children: ["Discuss a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
							size: 14,
							className: "ml-2",
							animateOnHover: true
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Blog as component };
