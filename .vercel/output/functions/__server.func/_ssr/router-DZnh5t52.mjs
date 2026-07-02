import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as AnimatePresence, i as useReducedMotion, s as motion } from "../_libs/framer-motion.mjs";
import { a as SiteFooter, i as Send, n as Container, o as SiteHeader } from "./site-shell-DxiiIEQP.mjs";
import { t as Route$10 } from "./blog._slug-CvSuLdxS.mjs";
import { t as Route$11 } from "./team.index-CHtxwvPC.mjs";
import { t as Route$12 } from "./work._id-CoHT3qQf.mjs";
import { t as Route$13 } from "./team._id-DOtgRGM6.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DZnh5t52.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Cl-c8pb6.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({
			duration: 1.15,
			smoothWheel: true,
			wheelMultiplier: .9,
			touchMultiplier: 1,
			anchors: { offset: -64 }
		});
		let frame = 0;
		const raf = (time) => {
			lenis.raf(time);
			frame = requestAnimationFrame(raf);
		};
		frame = requestAnimationFrame(raf);
		return () => {
			cancelAnimationFrame(frame);
			lenis.destroy();
		};
	}, []);
	return null;
}
var DEFAULT_CONFIG = {
	position: "bottom",
	strength: 2,
	height: "6rem",
	width: void 0,
	divCount: 5,
	exponential: false,
	zIndex: 1e3,
	animated: false,
	duration: "0.3s",
	easing: "ease-out",
	opacity: 1,
	curve: "linear",
	responsive: false,
	target: "parent",
	className: "",
	style: {}
};
var PRESETS = {
	top: {
		position: "top",
		height: "6rem"
	},
	bottom: {
		position: "bottom",
		height: "6rem"
	},
	footer: {
		position: "bottom",
		height: "8rem",
		curve: "ease-out"
	}
};
var CURVE_FUNCTIONS = {
	linear: (p) => p,
	bezier: (p) => p * p * (3 - 2 * p),
	"ease-in": (p) => p * p,
	"ease-out": (p) => 1 - (1 - p) * (1 - p)
};
var mergeConfigs = (...configs) => configs.reduce((acc, config) => ({
	...acc,
	...config
}), {});
var getGradientDirection = (position) => ({
	top: "to top",
	bottom: "to bottom",
	left: "to left",
	right: "to right"
})[position] || "to bottom";
var useIntersectionObserver = (ref, shouldObserve = false) => {
	const [isVisible, setIsVisible] = (0, import_react.useState)(!shouldObserve);
	(0, import_react.useEffect)(() => {
		if (!shouldObserve || !ref.current) return void 0;
		const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: .1 });
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [ref, shouldObserve]);
	return isVisible;
};
function GradualBlur(props) {
	const containerRef = (0, import_react.useRef)(null);
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const config = (0, import_react.useMemo)(() => {
		return mergeConfigs(DEFAULT_CONFIG, props.preset && PRESETS[props.preset] ? PRESETS[props.preset] : {}, props);
	}, [props]);
	const isVisible = useIntersectionObserver(containerRef, config.animated === "scroll");
	const blurDivs = (0, import_react.useMemo)(() => {
		const divs = [];
		const increment = 100 / config.divCount;
		const currentStrength = isHovered && config.hoverIntensity ? config.strength * config.hoverIntensity : config.strength;
		const curveFunc = CURVE_FUNCTIONS[config.curve] || CURVE_FUNCTIONS.linear;
		for (let i = 1; i <= config.divCount; i += 1) {
			let progress = i / config.divCount;
			progress = curveFunc(progress);
			const blurValue = config.exponential ? Math.pow(2, progress * 4) * .0625 * currentStrength : .0625 * (progress * config.divCount + 1) * currentStrength;
			const p1 = Math.round((increment * i - increment) * 10) / 10;
			const p2 = Math.round(increment * i * 10) / 10;
			const p3 = Math.round((increment * i + increment) * 10) / 10;
			const p4 = Math.round((increment * i + increment * 2) * 10) / 10;
			let gradient = `transparent ${p1}%, black ${p2}%`;
			if (p3 <= 100) gradient += `, black ${p3}%`;
			if (p4 <= 100) gradient += `, transparent ${p4}%`;
			const direction = getGradientDirection(config.position);
			divs.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				position: "absolute",
				inset: 0,
				maskImage: `linear-gradient(${direction}, ${gradient})`,
				WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
				backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
				WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
				opacity: config.opacity,
				transition: config.animated && config.animated !== "scroll" ? `backdrop-filter ${config.duration} ${config.easing}` : void 0
			} }, i));
		}
		return divs;
	}, [config, isHovered]);
	const containerStyle = (0, import_react.useMemo)(() => {
		const isVertical = ["top", "bottom"].includes(config.position);
		const isHorizontal = ["left", "right"].includes(config.position);
		const isPageTarget = config.target === "page";
		const baseStyle = {
			position: isPageTarget ? "fixed" : "absolute",
			pointerEvents: config.hoverIntensity ? "auto" : "none",
			opacity: isVisible ? 1 : 0,
			transition: config.animated ? `opacity ${config.duration} ${config.easing}` : void 0,
			zIndex: isPageTarget ? config.zIndex + 100 : config.zIndex,
			...config.style
		};
		if (isVertical) {
			baseStyle.height = config.height;
			baseStyle.width = config.width || "100%";
			baseStyle[config.position] = 0;
			baseStyle.left = 0;
			baseStyle.right = 0;
		} else if (isHorizontal) {
			baseStyle.width = config.width || config.height;
			baseStyle.height = "100%";
			baseStyle[config.position] = 0;
			baseStyle.top = 0;
			baseStyle.bottom = 0;
		}
		return baseStyle;
	}, [config, isVisible]);
	(0, import_react.useEffect)(() => {
		if (isVisible && config.animated === "scroll" && config.onAnimationComplete) {
			const ms = parseFloat(config.duration) * 1e3;
			const timeout = setTimeout(() => config.onAnimationComplete(), ms);
			return () => clearTimeout(timeout);
		}
	}, [config, isVisible]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: `gradual-blur ${config.target === "page" ? "gradual-blur-page" : "gradual-blur-parent"} ${config.className}`,
		style: containerStyle,
		onMouseEnter: config.hoverIntensity ? () => setIsHovered(true) : void 0,
		onMouseLeave: config.hoverIntensity ? () => setIsHovered(false) : void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "gradual-blur-inner",
			style: {
				position: "relative",
				width: "100%",
				height: "100%"
			},
			children: blurDivs
		})
	});
}
function NotFoundComponent() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative flex min-h-[88svh] items-center overflow-hidden border-b border-border pb-20 pt-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-45 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70 md:h-[780px] md:w-[780px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand/35 [animation:hero-orbit_36s_linear_infinite] md:h-[500px] md:w-[500px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_28px_var(--brand)]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
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
								children: "Route status / not found"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
									initial: reduce ? false : { y: "110%" },
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
									className: "font-display text-[clamp(7rem,24vw,18rem)] font-semibold leading-[.75] tracking-[-.08em]",
									children: "404"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: reduce ? false : {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .25
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-8 font-display text-3xl font-semibold tracking-[-.03em] md:text-5xl",
										children: [
											"This route never",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-accent font-light italic text-muted-foreground",
												children: "shipped."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-lg text-sm leading-7 text-muted-foreground md:text-base",
										children: "The page may have moved, changed name, or never made it into production. The useful parts of the site are still close by."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap justify-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/",
											className: "inline-flex h-12 items-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-all hover:-translate-y-1 hover:bg-brand",
											children: ["Return home ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
												size: 15,
												className: "ml-2",
												animateOnHover: true
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "/#work",
											className: "inline-flex h-12 items-center rounded-full border border-border-strong bg-background/80 px-6 text-sm font-semibold transition-all hover:-translate-y-1 hover:border-foreground",
											children: "Explore our work"
										})]
									})
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "The Velnix — From Idea to Production" },
			{
				name: "description",
				content: "AI-Native Product & Engineering Studio. We design, build, and scale software products, AI systems, and mobile applications."
			},
			{
				name: "author",
				content: "The Velnix"
			},
			{
				property: "og:title",
				content: "The Velnix — From Idea to Production"
			},
			{
				property: "og:description",
				content: "AI-Native Product & Engineering Studio. We design, build, and scale software products, AI systems, and mobile applications."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://thevelnix.com"
			},
			{
				property: "og:image",
				content: "https://thevelnix.com/velnix-mark-dark.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@TheVelnix"
			},
			{
				name: "twitter:title",
				content: "The Velnix — From Idea to Production"
			},
			{
				name: "twitter:description",
				content: "AI-Native Product & Engineering Studio. We design, build, and scale software products, AI systems, and mobile applications."
			},
			{
				name: "twitter:image",
				content: "https://thevelnix.com/velnix-mark-dark.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/velnix-mark-dark.png"
			},
			{
				rel: "shortcut icon",
				type: "image/png",
				href: "/velnix-mark-dark.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/velnix-mark-dark.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Azeret+Mono:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Manrope:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap"
			},
			{
				rel: "canonical",
				href: "https://thevelnix.com"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ProfessionalService",
				"name": "The Velnix",
				"legalName": "Velnix Studio",
				"url": "https://thevelnix.com",
				"logo": "https://thevelnix.com/velnix-mark-dark.png",
				"image": "https://thevelnix.com/velnix-mark-dark.png",
				"description": "AI-Native Product & Engineering Studio. We design, build, and scale software products, AI systems, and mobile applications.",
				"sameAs": [
					"https://x.com/The_Velnix",
					"https://github.com/Mihir-Rabari",
					"https://linkedin.com",
					"https://dribbble.com/the-velnix"
				],
				"address": {
					"@type": "PostalAddress",
					"addressCountry": "India"
				},
				"founders": [{
					"@type": "Person",
					"name": "Mihir Rabari"
				}, {
					"@type": "Person",
					"name": "Khushi Trivedi"
				}]
			}) }
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function Preloader({ progress }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 1 },
		exit: {
			y: "-100%",
			transition: {
				duration: .85,
				ease: [
					.76,
					0,
					.24,
					1
				]
			}
		},
		className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0b0d]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: "/velnix-mark-light.png",
					alt: "The Velnix",
					initial: {
						scale: .85,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					transition: {
						duration: .6,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "h-14 w-auto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: .15,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "font-display text-[15px] font-bold tracking-[0.2em] text-white",
					children: "THE VELNIX"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-[2px] w-40 overflow-hidden rounded-full bg-white/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "absolute top-0 bottom-0 left-0 bg-brand",
						initial: { width: "0%" },
						animate: { width: `${progress}%` },
						transition: {
							duration: .1,
							ease: "easeOut"
						}
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60",
					children: [Math.round(progress), "%"]
				})]
			})]
		})
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const duration = 1200;
		const interval = 20;
		const step = 100 / (duration / interval);
		const timer = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(timer);
					setTimeout(() => setLoading(false), 250);
					return 100;
				}
				return prev + step;
			});
		}, interval);
		return () => clearInterval(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		if (loading) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [loading]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, { progress })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none fixed inset-x-0 bottom-0 z-40 h-32 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GradualBlur, {
					target: "page",
					position: "bottom",
					height: "8rem",
					strength: 2.8,
					divCount: 9,
					curve: "bezier",
					opacity: 1,
					className: "bottom-page-blur"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/90 to-transparent" })]
			})
		]
	});
}
var $$splitComponentImporter$8 = () => import("./work-4KK0cFTh.mjs");
var Route$8 = createFileRoute("/work")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./terms-zZ5dHxnt.mjs");
var Route$7 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms | The Velnix" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./team-BCz0vhZT.mjs");
var Route$6 = createFileRoute("/team")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./privacy-D6XriNvT.mjs");
var Route$5 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy | The Velnix" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-CJZQiv58.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Start a Project | The Velnix" }, {
		name: "description",
		content: "Tell The Velnix about your product, AI system or engineering project. Get a useful response within two business days."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./blog-GHsbigBI.mjs");
var Route$3 = createFileRoute("/blog")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./routes-C999sg1I.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "The Velnix | Product, AI and Engineering Studio" },
		{
			name: "description",
			content: "A senior product team for startups and growing businesses. We design and build SaaS platforms, AI systems, mobile apps and reliable infrastructure."
		},
		{
			property: "og:title",
			content: "The Velnix | From idea to dependable production"
		},
		{
			property: "og:description",
			content: "Product strategy, design and engineering in one senior, accountable team."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./work.index-DuRA3evQ.mjs");
var Route$1 = createFileRoute("/work/")({
	head: () => ({ meta: [{ title: "Work | The Velnix" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./blog.index-DJdy9nSr.mjs");
var Route = createFileRoute("/blog/")({
	head: () => ({ meta: [{ title: "Field Notes | The Velnix Blog" }, {
		name: "description",
		content: "Practical notes on product strategy, AI systems, engineering and shipping dependable software."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WorkRoute = Route$8.update({
	id: "/work",
	path: "/work",
	getParentRoute: () => Route$9
});
var TermsRoute = Route$7.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$9
});
var TeamRoute = Route$6.update({
	id: "/team",
	path: "/team",
	getParentRoute: () => Route$9
});
var PrivacyRoute = Route$5.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var BlogRoute = Route$3.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$9
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var WorkIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => WorkRoute
});
var TeamIndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => TeamRoute
});
var BlogIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogRoute
});
var WorkIdRoute = Route$12.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => WorkRoute
});
var TeamIdRoute = Route$13.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => TeamRoute
});
var BlogRouteChildren = {
	BlogSlugRoute: Route$10.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => BlogRoute
	}),
	BlogIndexRoute
};
var BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
var TeamRouteChildren = {
	TeamIdRoute,
	TeamIndexRoute
};
var TeamRouteWithChildren = TeamRoute._addFileChildren(TeamRouteChildren);
var WorkRouteChildren = {
	WorkIdRoute,
	WorkIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	BlogRoute: BlogRouteWithChildren,
	ContactRoute,
	PrivacyRoute,
	TeamRoute: TeamRouteWithChildren,
	TermsRoute,
	WorkRoute: WorkRoute._addFileChildren(WorkRouteChildren)
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		defaultViewTransition: true
	});
};
//#endregion
export { getRouter };
