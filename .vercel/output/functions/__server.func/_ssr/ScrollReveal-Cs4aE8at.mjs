import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ScrollReveal-Cs4aE8at.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScrollReveal({ children, scrollContainerRef = void 0, enableBlur = true, baseOpacity = .1, baseRotation = 3, blurStrength = 4, containerClassName = "", textClassName = "", threshold = .15, rootMargin = "0px" }) {
	const containerRef = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	const isString = typeof children === "string";
	const splitChildren = (0, import_react.useMemo)(() => {
		if (!isString) return null;
		return children.split(/(\s+)/).map((segment, index) => ({
			segment,
			index
		}));
	}, [children, isString]);
	(0, import_react.useEffect)(() => {
		const el = containerRef.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setInView(true);
				observer.unobserve(el);
			}
		}, {
			threshold,
			rootMargin,
			root: scrollContainerRef?.current ?? null
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [
		rootMargin,
		scrollContainerRef,
		threshold
	]);
	const wordTransition = (index) => ({
		duration: .55,
		delay: index * .045,
		ease: [
			.16,
			1,
			.3,
			1
		]
	});
	const wordInitial = {
		opacity: baseOpacity,
		y: 18,
		rotateX: 12,
		filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)"
	};
	const wordAnimate = {
		opacity: 1,
		y: 0,
		rotateX: 0,
		filter: "blur(0px)"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
		ref: containerRef,
		initial: false,
		animate: inView ? {
			rotate: 0,
			opacity: 1
		} : {
			rotate: baseRotation,
			opacity: 1
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
		className: containerClassName,
		style: { transformStyle: "preserve-3d" },
		children: isString ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: textClassName,
			children: splitChildren.map(({ segment, index }) => {
				if (/^\s+$/.test(segment)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: segment }, index);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					className: "inline-block will-change-[transform,filter,opacity]",
					initial: wordInitial,
					animate: inView ? wordAnimate : wordInitial,
					transition: wordTransition(index),
					style: {
						display: "inline-block",
						transformOrigin: "50% 100%"
					},
					children: segment
				}, index);
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: textClassName,
			initial: wordInitial,
			animate: inView ? wordAnimate : wordInitial,
			transition: wordTransition(0),
			children
		})
	});
}
//#endregion
export { ScrollReveal as t };
