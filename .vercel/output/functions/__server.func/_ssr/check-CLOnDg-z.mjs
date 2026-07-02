import "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as motion } from "../_libs/framer-motion.mjs";
import { c as getVariants, l as useAnimateIconContext, r as IconWrapper } from "./site-shell-DxiiIEQP.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var animations = { default: { path: {
	initial: {
		pathLength: 1,
		opacity: 1,
		scale: 1
	},
	animate: {
		pathLength: [0, 1],
		opacity: [0, 1],
		scale: [
			1,
			1.1,
			1
		],
		transition: {
			duration: .6,
			ease: "easeInOut"
		}
	}
} } };
function IconComponent({ size, ...props }) {
	const { controls } = useAnimateIconContext();
	const variants = getVariants(animations);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.svg, {
		xmlns: "http://www.w3.org/2000/svg",
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		initial: "initial",
		animate: controls,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "m4 12 5 5L20 6",
			variants: variants.path,
			initial: "initial",
			animate: controls
		})
	});
}
function Check(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWrapper, {
		icon: IconComponent,
		...props
	});
}
//#endregion
export { Check as t };
