import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as AnimatePresence, n as isMotionComponent, r as useAnimation, s as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-DxiiIEQP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function useIsInView(ref, options = {}) {
	const { inView, inViewOnce = false, inViewMargin = "0px" } = options;
	const localRef = import_react.useRef(null);
	import_react.useImperativeHandle(ref, () => localRef.current);
	const inViewResult = useInView(localRef, {
		once: inViewOnce,
		margin: inViewMargin
	});
	return {
		ref: localRef,
		isInView: !inView || inViewResult
	};
}
function mergeRefs(...refs) {
	return (node) => {
		refs.forEach((ref) => {
			if (!ref) return;
			if (typeof ref === "function") ref(node);
			else ref.current = node;
		});
	};
}
function mergeProps(childProps, slotProps) {
	const merged = {
		...childProps,
		...slotProps
	};
	if (childProps.className || slotProps.className) merged.className = cn(childProps.className, slotProps.className);
	if (childProps.style || slotProps.style) merged.style = {
		...childProps.style,
		...slotProps.style
	};
	return merged;
}
function Slot({ children, ref, ...props }) {
	const isAlreadyMotion = typeof children.type === "object" && children.type !== null && isMotionComponent(children.type);
	const Base = import_react.useMemo(() => isAlreadyMotion ? children.type : motion.create(children.type), [isAlreadyMotion, children.type]);
	if (!import_react.isValidElement(children)) return null;
	const { ref: childRef, ...childProps } = children.props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Base, {
		...mergeProps(childProps, props),
		ref: mergeRefs(childRef, ref)
	});
}
var staticAnimations = {
	path: {
		initial: { pathLength: 1 },
		animate: {
			pathLength: [.05, 1],
			transition: {
				duration: .8,
				ease: "easeInOut"
			}
		}
	},
	"path-loop": {
		initial: { pathLength: 1 },
		animate: {
			pathLength: [
				1,
				.05,
				1
			],
			transition: {
				duration: 1.6,
				ease: "easeInOut"
			}
		}
	}
};
var AnimateIconContext = import_react.createContext(null);
function useAnimateIconContext() {
	const context = import_react.useContext(AnimateIconContext);
	if (!context) return {
		controls: void 0,
		animation: "default",
		loop: void 0,
		loopDelay: void 0,
		active: void 0,
		animate: void 0,
		initialOnAnimateEnd: void 0,
		completeOnStop: void 0,
		persistOnAnimateEnd: void 0,
		delay: void 0
	};
	return context;
}
function composeEventHandlers(theirs, ours) {
	return (event) => {
		theirs?.(event);
		ours?.(event);
	};
}
function AnimateIcon({ asChild = false, animate = false, animateOnHover = false, animateOnTap = false, animateOnView = false, animateOnViewMargin = "0px", animateOnViewOnce = true, animation = "default", loop = false, loopDelay = 0, initialOnAnimateEnd = false, completeOnStop = false, persistOnAnimateEnd = false, delay = 0, children, ...props }) {
	const controls = useAnimation();
	const [localAnimate, setLocalAnimate] = import_react.useState(() => {
		if (animate === void 0 || animate === false) return false;
		return delay <= 0;
	});
	const [currentAnimation, setCurrentAnimation] = import_react.useState(typeof animate === "string" ? animate : animation);
	const [status, setStatus] = import_react.useState("initial");
	const delayRef = import_react.useRef(null);
	const loopDelayRef = import_react.useRef(null);
	const isAnimateInProgressRef = import_react.useRef(false);
	const animateEndPromiseRef = import_react.useRef(null);
	const resolveAnimateEndRef = import_react.useRef(null);
	const activeRef = import_react.useRef(localAnimate);
	const runGenRef = import_react.useRef(0);
	const cancelledRef = import_react.useRef(false);
	const bumpGeneration = import_react.useCallback(() => {
		runGenRef.current++;
	}, []);
	const startAnimation = import_react.useCallback((trigger) => {
		const next = typeof trigger === "string" ? trigger : animation;
		bumpGeneration();
		if (delayRef.current) {
			clearTimeout(delayRef.current);
			delayRef.current = null;
		}
		setCurrentAnimation(next);
		if (delay > 0) {
			setLocalAnimate(false);
			delayRef.current = setTimeout(() => {
				setLocalAnimate(true);
			}, delay);
		} else setLocalAnimate(true);
	}, [
		animation,
		delay,
		bumpGeneration
	]);
	const stopAnimation = import_react.useCallback(() => {
		bumpGeneration();
		if (delayRef.current) {
			clearTimeout(delayRef.current);
			delayRef.current = null;
		}
		if (loopDelayRef.current) {
			clearTimeout(loopDelayRef.current);
			loopDelayRef.current = null;
		}
		setLocalAnimate(false);
	}, [bumpGeneration]);
	import_react.useEffect(() => {
		activeRef.current = localAnimate;
	}, [localAnimate]);
	import_react.useEffect(() => {
		if (animate === void 0) return;
		setCurrentAnimation(typeof animate === "string" ? animate : animation);
		if (animate) startAnimation(animate);
		else stopAnimation();
	}, [animate]);
	import_react.useEffect(() => {
		return () => {
			if (delayRef.current) clearTimeout(delayRef.current);
			if (loopDelayRef.current) clearTimeout(loopDelayRef.current);
		};
	}, []);
	const { ref: inViewRef, isInView } = useIsInView(import_react.useRef(null), {
		inView: !!animateOnView,
		inViewOnce: animateOnViewOnce,
		inViewMargin: animateOnViewMargin
	});
	const startAnim = import_react.useCallback(async (anim, method = "start") => {
		try {
			await controls[method](anim);
			setStatus(anim);
		} catch {
			return;
		}
	}, [controls]);
	import_react.useEffect(() => {
		if (!animateOnView) return;
		if (isInView) startAnimation(animateOnView);
		else stopAnimation();
	}, [
		isInView,
		animateOnView,
		startAnimation,
		stopAnimation
	]);
	import_react.useEffect(() => {
		const gen = ++runGenRef.current;
		cancelledRef.current = false;
		async function run() {
			if (cancelledRef.current || gen !== runGenRef.current) {
				await startAnim("initial");
				return;
			}
			if (!localAnimate) {
				if (completeOnStop && isAnimateInProgressRef.current && animateEndPromiseRef.current) try {
					await animateEndPromiseRef.current;
				} catch { }
				if (!persistOnAnimateEnd) {
					if (cancelledRef.current || gen !== runGenRef.current) {
						await startAnim("initial");
						return;
					}
					await startAnim("initial");
				}
				return;
			}
			if (loop) {
				if (cancelledRef.current || gen !== runGenRef.current) {
					await startAnim("initial");
					return;
				}
				await startAnim("initial", "set");
			}
			isAnimateInProgressRef.current = true;
			animateEndPromiseRef.current = new Promise((resolve) => {
				resolveAnimateEndRef.current = resolve;
			});
			if (cancelledRef.current || gen !== runGenRef.current) {
				isAnimateInProgressRef.current = false;
				resolveAnimateEndRef.current?.();
				resolveAnimateEndRef.current = null;
				animateEndPromiseRef.current = null;
				await startAnim("initial");
				return;
			}
			await startAnim("animate");
			if (cancelledRef.current || gen !== runGenRef.current) {
				isAnimateInProgressRef.current = false;
				resolveAnimateEndRef.current?.();
				resolveAnimateEndRef.current = null;
				animateEndPromiseRef.current = null;
				await startAnim("initial");
				return;
			}
			isAnimateInProgressRef.current = false;
			resolveAnimateEndRef.current?.();
			resolveAnimateEndRef.current = null;
			animateEndPromiseRef.current = null;
			if (initialOnAnimateEnd) {
				if (cancelledRef.current || gen !== runGenRef.current) {
					await startAnim("initial");
					return;
				}
				await startAnim("initial", "set");
			}
			if (loop) {
				if (loopDelay > 0) {
					await new Promise((resolve) => {
						loopDelayRef.current = setTimeout(() => {
							loopDelayRef.current = null;
							resolve();
						}, loopDelay);
					});
					if (cancelledRef.current || gen !== runGenRef.current) {
						await startAnim("initial");
						return;
					}
					if (!activeRef.current) {
						if (status !== "initial" && !persistOnAnimateEnd) await startAnim("initial");
						return;
					}
				} else if (!activeRef.current) {
					if (status !== "initial" && !persistOnAnimateEnd) await startAnim("initial");
					return;
				}
				if (cancelledRef.current || gen !== runGenRef.current) {
					await startAnim("initial");
					return;
				}
				await run();
			}
		}
		run();
		return () => {
			cancelledRef.current = true;
			if (delayRef.current) {
				clearTimeout(delayRef.current);
				delayRef.current = null;
			}
			if (loopDelayRef.current) {
				clearTimeout(loopDelayRef.current);
				loopDelayRef.current = null;
			}
		};
	}, [localAnimate, controls]);
	const childProps = import_react.isValidElement(children) ? children.props : {};
	const handleMouseEnter = composeEventHandlers(childProps.onMouseEnter, () => {
		if (animateOnHover) startAnimation(animateOnHover);
	});
	const handleMouseLeave = composeEventHandlers(childProps.onMouseLeave, () => {
		if (animateOnHover || animateOnTap) stopAnimation();
	});
	const handlePointerDown = composeEventHandlers(childProps.onPointerDown, () => {
		if (animateOnTap) startAnimation(animateOnTap);
	});
	const handlePointerUp = composeEventHandlers(childProps.onPointerUp, () => {
		if (animateOnTap) stopAnimation();
	});
	const content = asChild ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
		ref: inViewRef,
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		onPointerDown: handlePointerDown,
		onPointerUp: handlePointerUp,
		...props,
		children
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		ref: inViewRef,
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		onPointerDown: handlePointerDown,
		onPointerUp: handlePointerUp,
		...props,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimateIconContext.Provider, {
		value: {
			controls,
			animation: currentAnimation,
			loop,
			loopDelay,
			active: localAnimate,
			animate,
			initialOnAnimateEnd,
			completeOnStop,
			delay
		},
		children: content
	});
}
function IconWrapper({ size = 28, animation: animationProp, animate, animateOnHover, animateOnTap, animateOnView, animateOnViewMargin, animateOnViewOnce, icon: IconComponent, loop, loopDelay, persistOnAnimateEnd, initialOnAnimateEnd, delay, completeOnStop, className, ...props }) {
	const context = import_react.useContext(AnimateIconContext);
	if (context) {
		const { controls, animation: parentAnimation, loop: parentLoop, loopDelay: parentLoopDelay, active: parentActive, animate: parentAnimate, persistOnAnimateEnd: parentPersistOnAnimateEnd, initialOnAnimateEnd: parentInitialOnAnimateEnd, delay: parentDelay, completeOnStop: parentCompleteOnStop } = context;
		if (animate !== void 0 || animateOnHover !== void 0 || animateOnTap !== void 0 || animateOnView !== void 0 || loop !== void 0 || loopDelay !== void 0 || initialOnAnimateEnd !== void 0 || persistOnAnimateEnd !== void 0 || delay !== void 0 || completeOnStop !== void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimateIcon, {
			animate: animate ?? parentAnimate ?? (parentActive ? animationProp ?? parentAnimation ?? "default" : false),
			animateOnHover,
			animateOnTap,
			animateOnView,
			animateOnViewMargin,
			animateOnViewOnce,
			animation: animationProp ?? parentAnimation,
			loop: loop ?? parentLoop,
			loopDelay: loopDelay ?? parentLoopDelay,
			persistOnAnimateEnd: persistOnAnimateEnd ?? parentPersistOnAnimateEnd,
			initialOnAnimateEnd: initialOnAnimateEnd ?? parentInitialOnAnimateEnd,
			delay: delay ?? parentDelay,
			completeOnStop: completeOnStop ?? parentCompleteOnStop,
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {
				size,
				className: cn(className, ((animationProp ?? parentAnimation) === "path" || (animationProp ?? parentAnimation) === "path-loop") && "[&_[stroke-dasharray='1px_1px']]:![stroke-dasharray:1px_0px]"),
				...props
			})
		});
		const animationToUse = animationProp ?? parentAnimation;
		const loopToUse = parentLoop;
		const loopDelayToUse = parentLoopDelay;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimateIconContext.Provider, {
			value: {
				controls,
				animation: animationToUse,
				loop: loopToUse,
				loopDelay: loopDelayToUse,
				active: parentActive,
				animate: parentAnimate,
				initialOnAnimateEnd: parentInitialOnAnimateEnd,
				delay: parentDelay,
				completeOnStop: parentCompleteOnStop
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {
				size,
				className: cn(className, (animationToUse === "path" || animationToUse === "path-loop") && "[&_[stroke-dasharray='1px_1px']]:![stroke-dasharray:1px_0px]"),
				...props
			})
		});
	}
	if (animate !== void 0 || animateOnHover !== void 0 || animateOnTap !== void 0 || animateOnView !== void 0 || animationProp !== void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimateIcon, {
		animate,
		animateOnHover,
		animateOnTap,
		animateOnView,
		animateOnViewMargin,
		animateOnViewOnce,
		animation: animationProp,
		loop,
		loopDelay,
		delay,
		completeOnStop,
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {
			size,
			className: cn(className, (animationProp === "path" || animationProp === "path-loop") && "[&_[stroke-dasharray='1px_1px']]:![stroke-dasharray:1px_0px]"),
			...props
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {
		size,
		className: cn(className, (animationProp === "path" || animationProp === "path-loop") && "[&_[stroke-dasharray='1px_1px']]:![stroke-dasharray:1px_0px]"),
		...props
	});
}
function getVariants(animations) {
	const { animation: animationType } = useAnimateIconContext();
	let result;
	if (animationType in staticAnimations) {
		const variant = staticAnimations[animationType];
		result = {};
		for (const key in animations.default) {
			if ((animationType === "path" || animationType === "path-loop") && key.includes("group")) continue;
			result[key] = variant;
		}
	} else result = animations[animationType] ?? animations.default;
	return result;
}
var animations = {
	default: {
		group: {
			initial: {
				scale: 1,
				x: 0,
				y: 0
			},
			animate: {
				scale: [
					1,
					.8,
					1,
					1,
					1
				],
				x: [
					0,
					"-10%",
					"100%",
					"-125%",
					0
				],
				y: [
					0,
					"10%",
					"-100%",
					"125%",
					0
				],
				transition: {
					default: {
						ease: "easeInOut",
						duration: 1.2
					},
					x: {
						ease: "easeInOut",
						duration: 1.2,
						times: [
							0,
							.25,
							.5,
							.5,
							1
						]
					},
					y: {
						ease: "easeInOut",
						duration: 1.2,
						times: [
							0,
							.25,
							.5,
							.5,
							1
						]
					}
				}
			}
		},
		path1: {},
		path2: {}
	}
};
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
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
			variants: variants.group,
			initial: "initial",
			animate: controls,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M14.5,21.7c.1.3.4.4.7.3.1,0,.2-.2.3-.3L22,2.7c0-.3,0-.5-.3-.6-.1,0-.2,0-.3,0L2.3,8.5c-.3,0-.4.4-.3.6,0,.1.2.2.3.3l7.9,3.2c.5.2.9.6,1.1,1.1l3.2,7.9Z",
				variants: variants.path1,
				initial: "initial",
				animate: controls
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M21.9,2.1l-10.9,10.9",
				variants: variants.path2,
				initial: "initial",
				animate: controls
			})]
		})
	});
}
function Send(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWrapper, {
		icon: IconComponent,
		...props
	});
}
var containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: .08,
			delayChildren: .15
		}
	}
};
var itemVariants = {
	hidden: {
		x: 35,
		opacity: 0
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 280,
			damping: 24
		}
	}
};
function StaggeredMenu(props) {
	const { position = "right", colors = ["#B497CF", "#5227FF"], items = [], socialItems = [], displaySocials = true, displayItemNumbering = true, className, logoUrl = "/velnix-mark-dark.png", menuButtonColor = "#0f1115", openMenuButtonColor = "#ffffff", accentColor = "#2EC5B6", changeMenuColorOnOpen = true, closeOnClickAway = true, onMenuOpen, onMenuClose, currentPath = "/", currentHash = "" } = props;
	const [open, setOpen] = (0, import_react.useState)(false);
	const openRef = (0, import_react.useRef)(false);
	const panelRef = (0, import_react.useRef)(null);
	const buttonRef = (0, import_react.useRef)(null);
	const panelSide = position === "left" ? "left-0" : "right-0";
	(0, import_react.useMemo)(() => colors && colors.length ? colors.slice(0, 3) : [
		"#e7e7eb",
		"#d7f5f0",
		"#c2efe9"
	], [colors]);
	(0, import_react.useEffect)(() => {
		if (!buttonRef.current) return;
		buttonRef.current.style.color = open ? openMenuButtonColor : menuButtonColor;
	}, [
		open,
		menuButtonColor,
		openMenuButtonColor
	]);
	(0, import_react.useEffect)(() => {
		if (!closeOnClickAway || !open) return;
		const onDown = (event) => {
			if (panelRef.current?.contains(event.target) || buttonRef.current?.contains(event.target)) return;
			openRef.current = false;
			setOpen(false);
			onMenuClose?.();
		};
		document.addEventListener("mousedown", onDown);
		document.addEventListener("touchstart", onDown);
		return () => {
			document.removeEventListener("mousedown", onDown);
			document.removeEventListener("touchstart", onDown);
		};
	}, [
		closeOnClickAway,
		open,
		onMenuClose
	]);
	(0, import_react.useEffect)(() => {
		if (changeMenuColorOnOpen && buttonRef.current) buttonRef.current.style.color = open ? openMenuButtonColor : menuButtonColor;
	}, [
		changeMenuColorOnOpen,
		open,
		menuButtonColor,
		openMenuButtonColor
	]);
	(0, import_react.useEffect)(() => {
		const desktopQuery = window.matchMedia("(min-width: 1024px)");
		const closeMenuOnDesktop = (event) => {
			if (!event.matches || !openRef.current) return;
			openRef.current = false;
			setOpen(false);
			onMenuClose?.();
		};
		desktopQuery.addEventListener("change", closeMenuOnDesktop);
		return () => desktopQuery.removeEventListener("change", closeMenuOnDesktop);
	}, [onMenuClose]);
	const toggle = () => {
		const next = !openRef.current;
		openRef.current = next;
		setOpen(next);
		if (next) onMenuOpen?.();
		else onMenuClose?.();
	};
	const navItems = items.length ? items : [
		{
			label: "Home",
			ariaLabel: "Go to home page",
			link: "/"
		},
		{
			label: "Work",
			ariaLabel: "View work",
			link: "/work"
		},
		{
			label: "Team",
			ariaLabel: "View team",
			link: "/team"
		},
		{
			label: "Blog",
			ariaLabel: "Read blog",
			link: "/blog"
		}
	];
	const isActive = (link) => {
		if (link === "/") return currentPath === "/" && !currentHash;
		const [pathname, hash = ""] = link.split("#");
		if (hash) return currentPath === pathname && currentHash === `#${hash}`;
		return currentPath === link || currentPath.startsWith(`${link}/`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative z-50 ${className || ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "pointer-events-none fixed inset-x-0 top-0 z-50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-auto px-4 pt-4 md:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-[1200px] items-center justify-between rounded-full border border-border/70 bg-background/88 px-4 shadow-[0_8px_30px_rgb(0_0_0_/_0.05)] backdrop-blur-xl md:px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						"aria-label": "The Velnix home",
						className: "flex items-center gap-2.5 font-display text-[15px] font-bold tracking-[-.04em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logoUrl,
							alt: "",
							className: "h-7 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THE VELNIX" })]
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						"aria-label": "Primary navigation",
						children: navItems.map((item, index) => {
							const active = isActive(item.link);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.link,
								"aria-label": item.ariaLabel,
								"aria-current": active ? "page" : void 0,
								className: `group relative rounded-full pl-6 pr-4 py-2 text-[13px] font-medium transition-all duration-300 ${active ? "bg-surface text-foreground shadow-[0_6px_18px_rgb(0_0_0_/_0.04)]" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`,
								children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-2.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-brand transition-all duration-300 ${active ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}` }),
									item.label,
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "sr-only",
										children: [", item ", index + 1]
									})
								]
							}, item.label);
						})
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 sm:gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hidden lg:flex h-11 items-center rounded-full bg-foreground px-5 text-[13px] font-semibold text-background transition-transform hover:-translate-y-0.5",
							children: "Start a project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							ref: buttonRef,
							type: "button",
							onClick: toggle,
							"aria-expanded": open,
							"aria-controls": "staggered-menu-panel",
							"aria-label": open ? "Close menu" : "Open menu",
							className: "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-all hover:border-brand lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4 transition-transform duration-300" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4 transition-transform duration-300" })
						})]
					})
					]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					transition: { duration: .3 },
					className: "fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-sm lg:hidden",
					onClick: toggle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.aside, {
					id: "staggered-menu-panel",
					ref: panelRef,
					initial: { x: position === "right" ? "100%" : "-100%" },
					animate: { x: 0 },
					exit: { x: position === "right" ? "100%" : "-100%" },
					transition: {
						type: "spring",
						damping: 28,
						stiffness: 220
					},
					className: `fixed top-0 ${panelSide} z-40 h-[100svh] w-full max-w-[380px] border-l border-border/80 bg-background/96 px-6 pb-8 pt-24 shadow-[0_20px_60px_rgba(0,0,0,.12)] backdrop-blur-2xl lg:hidden overflow-y-auto ${position === "right" ? "rounded-l-[2rem]" : "rounded-r-[2rem]"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex min-h-full flex-col",
						children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[9px] uppercase tracking-[.24em] text-muted-foreground",
								children: "Navigation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-brand/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[.24em] text-brand",
								children: "Active"
							})]
						}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: containerVariants,
							initial: "hidden",
							animate: "show",
							className: "grid gap-2 border-t border-border/70 pt-4",
							children: [navItems.map((item, index) => {
								const active = isActive(item.link);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									variants: itemVariants,
									whileHover: { x: 4 },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: item.link,
										onClick: () => {
											openRef.current = false;
											setOpen(false);
											onMenuClose?.();
										},
										className: "group flex items-center justify-between border-b border-border/60 py-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full bg-brand transition-all duration-300 ${active ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `font-display text-[clamp(1.9rem,7vw,2.8rem)] font-semibold leading-none tracking-[-.04em] ${active ? "text-brand" : "text-foreground group-hover:text-brand"}`,
												children: item.label
											})]
										}), displayItemNumbering ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-[9px] tracking-widest text-muted-foreground",
											children: ["0", index + 1]
										}) : null]
									})
								}, item.label);
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: itemVariants,
								className: "mt-6 border-t border-border/70 pt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									onClick: () => {
										openRef.current = false;
										setOpen(false);
										onMenuClose?.();
									},
									className: "flex h-12 w-full items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background transition-all hover:bg-brand hover:text-brand-foreground hover:scale-[1.02] active:scale-[0.98]",
									children: "Start a project"
								})
							})]
						}),
							displaySocials && socialItems?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 15
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .5,
									duration: .4
								},
								className: "mt-auto pt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] uppercase tracking-[.24em] text-muted-foreground",
									children: "Socials"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-2.5",
									children: socialItems.map((item) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("a", {
										href: item.link,
										className: "rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-brand hover:text-brand hover:-translate-y-0.5",
										children: item.label
									}, item.label))
								})]
							}) : null
						]
					})
				})]
			})
		})]
	});
}
function Container({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-[1200px] px-6 md:px-10 " + className,
		children
	});
}
function Brand({ light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		"aria-label": "The Velnix home",
		className: "flex items-center gap-2.5 font-display text-[15px] font-bold tracking-[-.04em]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: light ? "/velnix-mark-light.png" : "/velnix-mark-dark.png",
			alt: "",
			width: 1206,
			height: 978,
			className: "h-7 w-auto"
		}), "THE VELNIX"]
	});
}
function SiteHeader() {
	const location = useLocation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggeredMenu, {
		logoUrl: "/velnix-mark-dark.png",
		position: "right",
		items: [
			{
				label: "Home",
				ariaLabel: "Go to home page",
				link: "/"
			},
			{
				label: "Work",
				ariaLabel: "View work",
				link: "/work"
			},
			{
				label: "Team",
				ariaLabel: "View team",
				link: "/team"
			},
			{
				label: "Blog",
				ariaLabel: "Read blog",
				link: "/blog"
			}
		],
		socialItems: [
			{
				label: "Email",
				link: "mailto:hello@thevelnix.com"
			},
			{
				label: "LinkedIn",
				link: "https://www.linkedin.com/company/the-velnix"
			},
			{
				label: "Instagram",
				link: "https://www.instagram.com/the_velnix?igsh=dDhnNjRmcTB5eWdw"
			},
			{
				label: "X / Twitter",
				link: "https://x.com/The_Velnix"
			},
			{
				label: "Dribbble",
				link: "https://dribbble.com/the-velnix"
			}
		],
		displaySocials: true,
		displayItemNumbering: true,
		menuButtonColor: "#0f1115",
		openMenuButtonColor: "#0f1115",
		changeMenuColorOnOpen: true,
		colors: [
			"#111318",
			"#2EC5B6",
			"#F5F3EF"
		],
		accentColor: "#2EC5B6",
		currentPath: location.pathname,
		currentHash: location.hash
	});
}
function SiteFooter({ hideCta = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-border bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-[.05]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/velnix-mark-dark.png",
			alt: "",
			"aria-hidden": "true",
			className: "pointer-events-none absolute -bottom-16 right-[-4rem] h-72 w-auto opacity-[.03] md:h-[26rem]"
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "relative py-14 md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 py-10 md:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr_1.4fr]",
				children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { light: false }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm leading-7 text-muted-foreground",
						children: "Product strategy, design and engineering for teams moving from ambitious idea to dependable production."
					})]
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
					title: "Navigate",
					links: [
						["Services", "/#services"],
						["Work", "/work"],
						["Process", "/#process"],
						["Team", "/team"],
						["Blog", "/blog"]
					]
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
					title: "Social",
					links: [
						["LinkedIn", "https://www.linkedin.com/company/the-velnix"],
						["Instagram", "https://www.instagram.com/the_velnix?igsh=dDhnNjRmcTB5eWdw"],
						["X / Twitter", "https://x.com/The_Velnix"],
						["Dribbble", "https://dribbble.com/the-velnix"]
					]
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
						children: "Address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm leading-7 text-foreground",
						children: [
							"FF-09 Saffron Icon",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Near Senior Citizen Garden,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Anand, Gujarat, India",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Working globally / IST"
						]
					})]
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
						children: "Contact"
					}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:hello@thevelnix.com",
						className: "mt-4 block text-sm text-foreground transition-colors hover:text-brand",
						children: "hello@thevelnix.com"
					}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-2xl border border-border bg-surface/60 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
							children: "Office hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-7 text-foreground whitespace-nowrap",
							children: "Mon-Fri, 10:00 - 19:00 IST"
						})]
					})
					]
				})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 border-t border-border pt-6 font-mono text-[9px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					children: [
						"Copyright ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" The Velnix"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built with care. Shipped with discipline." })]
			})]
		})
		]
	});
}
function FooterColumn({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-col items-start gap-2.5 text-sm",
			children: links.map(([label, href]) => {
				return href.startsWith("/") && !href.startsWith("/#") && !href.startsWith("http") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: href,
					className: "text-foreground transition-all hover:translate-x-1 hover:text-brand",
					children: label
				}, label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					className: "text-foreground transition-all hover:translate-x-1 hover:text-brand",
					children: label
				}, label);
			})
		})]
	});
}
//#endregion
export { SiteFooter as a, getVariants as c, Send as i, useAnimateIconContext as l, Container as n, SiteHeader as o, IconWrapper as r, cn as s, AnimateIcon as t };
