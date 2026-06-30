import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react, o as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { s as cn } from "./site-shell-DxiiIEQP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-colorful-rB-N9zgc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function ButtonColorful({ className, label = "Explore Components", href, ...props }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative flex items-center justify-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5",
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
	});
	const isLocal = href && href.startsWith("/") && !href.startsWith("/#") && !href.startsWith("http");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: Boolean(href),
		className: cn("group relative h-12 overflow-hidden rounded-full bg-foreground px-6", "text-background transition-all duration-300 hover:-translate-y-0.5", "shadow-[0_6px_20px_rgb(0_0_0_/_0.12)] hover:shadow-[0_12px_28px_rgb(0_0_0_/_0.18)]", className),
		...props,
		children: href ? isLocal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: href,
			children: content
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			children: content
		}) : content
	});
}
//#endregion
export { ButtonColorful as t };
