import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteFooter, i as Send, n as Container, o as SiteHeader } from "./site-shell-DxiiIEQP.mjs";
import { t as Route } from "./blog._slug-CvSuLdxS.mjs";
import { t as ArrowLeft } from "./arrow-left-BvmIIQO9.mjs";
import { t as BlurText } from "./BlurText-6uJa6ZI_.mjs";
import { t as ScrollReveal } from "./ScrollReveal-Cs4aE8at.mjs";
import { t as Eyebrow } from "./section-D4ViLxCP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-DexsK0KY.js
var import_jsx_runtime = require_jsx_runtime();
function Article() {
	const a = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg grid-bg-fade opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "relative max-w-[960px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog",
							className: "mb-10 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								size: 14,
								animateOnHover: true
							}), "All field notes"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: a.tag }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1] tracking-[-.03em] md:text-7xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
								text: a.title,
								animateBy: "words",
								direction: "bottom",
								delay: 55,
								stepDuration: .3,
								className: "block"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
							containerClassName: "mt-7 max-w-2xl",
							textClassName: "text-lg leading-8 text-muted-foreground",
							baseOpacity: .18,
							baseRotation: 2,
							blurStrength: 6,
							children: a.dek
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
							children: [
								a.date,
								" / ",
								a.read
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "max-w-[800px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-14",
						children: a.sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-semibold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
								text: s[0],
								animateBy: "words",
								direction: "bottom",
								delay: 40,
								stepDuration: .26,
								className: "block"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-5",
							children: s[1].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
								containerClassName: "mt-0",
								textClassName: "text-[16px] leading-8 text-muted-foreground",
								baseOpacity: .18,
								baseRotation: 2,
								blurStrength: 6,
								children: p
							}, p))
						})] }, s[0]))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-20 rounded-2xl bg-foreground p-8 text-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl",
							children: "Need this thinking applied to your product?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "mt-5 inline-flex text-sm text-brand",
							children: ["Discuss the project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
								size: 14,
								className: "ml-2",
								animateOnHover: true
							})]
						})]
					})]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Article as component };
