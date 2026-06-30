import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BlurText-6uJa6ZI_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buildKeyframes = (from, steps) => {
	const keys = new Set([...Object.keys(from), ...steps.flatMap((s) => Object.keys(s))]);
	const keyframes = {};
	keys.forEach((key) => {
		keyframes[key] = [from[key], ...steps.map((s) => s[key])];
	});
	return keyframes;
};
function BlurText(props) {
	const { text = "", delay = 200, className = "", animateBy = "words", direction = "top", threshold = .1, rootMargin = "0px", animationFrom, animationTo, easing = (t) => t, onAnimationComplete, stepDuration = .35 } = props;
	const elements = animateBy === "words" ? text.split(" ") : text.split("");
	const [inView, setInView] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setInView(true);
				observer.unobserve(ref.current);
			}
		}, {
			threshold,
			rootMargin
		});
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [threshold, rootMargin]);
	const defaultFrom = (0, import_react.useMemo)(() => direction === "top" ? {
		filter: "blur(10px)",
		opacity: 0,
		y: -40
	} : {
		filter: "blur(10px)",
		opacity: 0,
		y: 40
	}, [direction]);
	const defaultTo = (0, import_react.useMemo)(() => [{
		filter: "blur(4px)",
		opacity: .45,
		y: direction === "top" ? 5 : -5
	}, {
		filter: "blur(0px)",
		opacity: 1,
		y: 0
	}], [direction]);
	const fromSnapshot = animationFrom ?? defaultFrom;
	const toSnapshots = animationTo ?? defaultTo;
	const stepCount = toSnapshots.length + 1;
	const totalDuration = stepDuration * (stepCount - 1);
	const times = Array.from({ length: stepCount }, (_, i) => stepCount === 1 ? 0 : i / (stepCount - 1));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className,
		style: {
			display: "inline-flex",
			flexWrap: "wrap"
		},
		children: elements.map((segment, index) => {
			const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
			const spanTransition = {
				duration: totalDuration,
				times,
				delay: index * delay / 1e3,
				ease: easing
			};
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				className: "inline-block will-change-[transform,filter,opacity]",
				initial: fromSnapshot,
				animate: inView ? animateKeyframes : fromSnapshot,
				transition: spanTransition,
				onAnimationComplete: index === elements.length - 1 ? onAnimationComplete : void 0,
				children: [segment === " " ? "\xA0" : segment, animateBy === "words" && index < elements.length - 1 ? "\xA0" : null]
			}, index);
		})
	});
}
//#endregion
export { BlurText as t };
