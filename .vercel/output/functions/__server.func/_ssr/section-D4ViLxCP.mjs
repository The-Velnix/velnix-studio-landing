import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as motion } from "../_libs/framer-motion.mjs";
import { t as BlurText } from "./BlurText-6uJa6ZI_.mjs";
import { t as ScrollReveal } from "./ScrollReveal-Cs4aE8at.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-D4ViLxCP.js
var import_jsx_runtime = require_jsx_runtime();
function Eyebrow({ children, invert = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] ${invert ? "text-background/60" : "text-muted-foreground"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px w-6 ${invert ? "bg-background/40" : "bg-border-strong"}` }), children]
	});
}
function SectionIntro({ eyebrow, title, titleText, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 22
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: false,
			margin: "-80px",
			amount: .2
		},
		transition: {
			duration: .7,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.025em] md:text-6xl",
			children: titleText ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
				text: titleText,
				animateBy: "words",
				direction: "bottom",
				delay: 75,
				stepDuration: .34,
				className: "block"
			}) : title
		})] }), body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
			containerClassName: "max-w-md",
			textClassName: "text-sm leading-7 text-muted-foreground md:text-base",
			baseOpacity: .16,
			baseRotation: 2,
			blurStrength: 6,
			threshold: .2,
			children: body
		})]
	});
}
//#endregion
export { SectionIntro as n, Eyebrow as t };
