import { o as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, l as require_react, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useSpring, i as useReducedMotion, o as useScroll, s as motion } from "../_libs/framer-motion.mjs";
import { r as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as SiteFooter, c as getVariants, l as useAnimateIconContext, n as Container, o as SiteHeader, r as IconWrapper, s as cn, t as AnimateIcon } from "./site-shell-DxiiIEQP.mjs";
import { t as BlurText } from "./BlurText-6uJa6ZI_.mjs";
import { n as SectionIntro, t as Eyebrow } from "./section-D4ViLxCP.mjs";
import { t as Check } from "./check-CLOnDg-z.mjs";
import { t as ButtonColorful } from "./button-colorful-rB-N9zgc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C999sg1I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var defaultItems = [
	{
		link: "/#services",
		text: "AI Systems"
	},
	{
		link: "/#work",
		text: "Mobile"
	},
	{
		link: "/#process",
		text: "Infrastructure"
	},
	{
		link: "/#team",
		text: "Strategy"
	}
];
function FlowingMenu({ items = defaultItems, speed = 18, textColor = "#0f1115", bgColor = "#f5f3ef", marqueeBgColor = "#0f1115", marqueeTextColor = "#ffffff", borderColor = "#d8d4cc" }) {
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const firstHalf = [
		...items,
		...items,
		...items
	];
	const secondHalf = [
		...items,
		...items,
		...items
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		className: "relative w-full overflow-hidden border-y py-4 transition-colors duration-500 md:py-5 cursor-pointer",
		style: {
			backgroundColor: isHovered ? marqueeBgColor : bgColor,
			borderColor: isHovered ? "#1f2229" : "var(--border)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex w-full items-center overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				animate: { x: ["0%", "-50%"] },
				transition: {
					duration: speed,
					ease: "linear",
					repeat: Infinity
				},
				className: "flex w-max items-center whitespace-nowrap font-display text-[clamp(0.95rem,1.8vw,1.45rem)] font-semibold uppercase tracking-[.2em]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex items-center",
					children: firstHalf.map((item, idx) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.link,
							className: "mx-5 transition-colors duration-300 hover:text-brand",
							style: { color: isHovered ? marqueeTextColor : textColor },
							children: item.text
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2 text-brand",
							children: "•"
						})]
					}, `first-${idx}`))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex items-center",
					children: secondHalf.map((item, idx) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.link,
							className: "mx-5 transition-colors duration-300 hover:text-brand",
							style: { color: isHovered ? marqueeTextColor : textColor },
							children: item.text
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2 text-brand",
							children: "•"
						})]
					}, `second-${idx}`))
				})]
			})
		})
	});
}
var animations$6 = {
	default: {
		path1: {},
		rect: {},
		path2: {},
		path3: {},
		path4: {
			initial: {
				x: 0,
				y: 0
			},
			animate: {
				x: [
					0,
					-1.5,
					1.5,
					0
				],
				y: [
					0,
					1.5,
					1.5,
					0
				],
				transition: {
					ease: "easeInOut",
					duration: 1.3
				}
			}
		},
		path5: {
			initial: {
				x: 0,
				y: 0
			},
			animate: {
				x: [
					0,
					-1.5,
					1.5,
					0
				],
				y: [
					0,
					1.5,
					1.5,
					0
				],
				transition: {
					ease: "easeInOut",
					duration: 1.3
				}
			}
		}
	},
	blink: {
		path1: {},
		rect: {},
		path2: {},
		path3: {},
		path4: {
			initial: { scaleY: 1 },
			animate: {
				scaleY: [
					1,
					.5,
					1
				],
				transition: {
					ease: "easeInOut",
					duration: .6
				}
			}
		},
		path5: {
			initial: { scaleY: 1 },
			animate: {
				scaleY: [
					1,
					.5,
					1
				],
				transition: {
					ease: "easeInOut",
					duration: .6
				}
			}
		}
	},
	wink: {
		path1: {},
		rect: {},
		path2: {},
		path3: {},
		path4: {
			initial: { scaleY: 1 },
			animate: {
				scaleY: [
					1,
					.5,
					1
				],
				transition: {
					ease: "easeInOut",
					duration: .6
				}
			}
		},
		path5: {}
	}
};
function IconComponent$6({ size, ...props }) {
	const { controls } = useAnimateIconContext();
	const variants = getVariants(animations$6);
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M12 8V4H8",
			variants: variants.path1,
			initial: "initial",
			animate: controls
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.rect, {
			width: 16,
			height: 12,
			x: 4,
			y: 8,
			rx: 2,
			variants: variants.rect,
			initial: "initial",
			animate: controls
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M2 14h2",
			variants: variants.path2,
			initial: "initial",
			animate: controls
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M20 14h2",
			variants: variants.path3,
			initial: "initial",
			animate: controls
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M15 13v2",
			variants: variants.path4,
			initial: "initial",
			animate: controls
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M9 13v2",
			variants: variants.path5,
			initial: "initial",
			animate: controls
		})
		]
	});
}
function Bot(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWrapper, {
		icon: IconComponent$6,
		...props
	});
}
var animations$5 = {
	default: {
		path1: {
			initial: {
				x: 0,
				y: 0,
				d: "M10 22V7c0-.6-.4-1-1-1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-.6-.4-1-1-1H2",
				strokeLinejoin: "round",
				transition: {
					duration: .4,
					ease: "easeInOut"
				}
			},
			animate: {
				x: 2,
				y: -2,
				d: "M10 22V6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-6H2",
				strokeLinejoin: "miter",
				transition: {
					duration: .4,
					ease: "easeInOut",
					d: {
						duration: 0,
						delay: .3
					},
					strokeLinejoin: {
						duration: 0,
						delay: .3
					}
				}
			}
		},
		path2: {
			initial: {
				x: 0,
				y: 0,
				d: "M15 2 H21 A1 1 0 0 1 22 3 V9 A1 1 0 0 1 21 10 H15 A1 1 0 0 1 14 9 V3 A1 1 0 0 1 15 2 Z",
				transition: {
					duration: .4,
					ease: "easeInOut"
				}
			},
			animate: {
				x: -2,
				y: 2,
				d: "M15 2 H20 A2 2 0 0 1 22 4 V9 A1 1 0 0 1 21 10 H15 A1 1 0 0 1 14 9 V3 A1 1 0 0 1 15 2 Z",
				transition: {
					duration: .4,
					ease: "easeInOut"
				}
			}
		}
	},
	"default-loop": {
		path1: {
			initial: {
				x: 0,
				y: 0,
				d: "M10 22V7c0-.6-.4-1-1-1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-.6-.4-1-1-1H2",
				strokeLinejoin: "round",
				transition: {
					duration: .4,
					ease: "easeInOut"
				}
			},
			animate: {
				x: [
					0,
					2,
					0
				],
				y: [
					0,
					-2,
					0
				],
				d: [
					"M10 22V7c0-.6-.4-1-1-1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-.6-.4-1-1-1H2",
					"M10 22V6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-6H2",
					"M10 22V7c0-.6-.4-1-1-1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-.6-.4-1-1-1H2"
				],
				strokeLinejoin: [
					"round",
					"miter",
					"round"
				],
				transition: {
					duration: .8,
					ease: "easeInOut",
					d: {
						duration: 0,
						delay: .3
					},
					strokeLinejoin: {
						duration: 0,
						delay: .3
					}
				}
			}
		},
		path2: {
			initial: {
				x: 0,
				y: 0,
				d: "M15 2 H21 A1 1 0 0 1 22 3 V9 A1 1 0 0 1 21 10 H15 A1 1 0 0 1 14 9 V3 A1 1 0 0 1 15 2 Z",
				transition: {
					duration: .4,
					ease: "easeInOut"
				}
			},
			animate: {
				x: [
					0,
					-2,
					0
				],
				y: [
					0,
					2,
					0
				],
				d: [
					"M15 2 H21 A1 1 0 0 1 22 3 V9 A1 1 0 0 1 21 10 H15 A1 1 0 0 1 14 9 V3 A1 1 0 0 1 15 2 Z",
					"M15 2 H20 A2 2 0 0 1 22 4 V9 A1 1 0 0 1 21 10 H15 A1 1 0 0 1 14 9 V3 A1 1 0 0 1 15 2 Z",
					"M15 2 H21 A1 1 0 0 1 22 3 V9 A1 1 0 0 1 21 10 H15 A1 1 0 0 1 14 9 V3 A1 1 0 0 1 15 2 Z"
				],
				transition: {
					duration: .8,
					ease: "easeInOut"
				}
			}
		}
	}
};
function IconComponent$5({ size, ...props }) {
	const { controls } = useAnimateIconContext();
	const variants = getVariants(animations$5);
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M10 22V7c0-.6-.4-1-1-1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-.6-.4-1-1-1H2",
			variants: variants.path1,
			initial: "initial",
			animate: controls
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M15 2 H21 A1 1 0 0 1 22 3 V9 A1 1 0 0 1 21 10 H15 A1 1 0 0 1 14 9 V3 A1 1 0 0 1 15 2 Z",
			variants: variants.path2,
			initial: "initial",
			animate: controls
		})]
	});
}
function Blocks(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWrapper, {
		icon: IconComponent$5,
		...props
	});
}
var animations$4 = {
	default: {
		path1: {},
		path2: {
			initial: {
				opacity: 1,
				pathLength: 1,
				pathOffset: 0
			},
			animate: {
				opacity: [0, 1],
				pathLength: [0, 1],
				pathOffset: [1, 0],
				transition: {
					duration: .8,
					ease: "easeInOut",
					opacity: { duration: .01 }
				}
			}
		}
	},
	"default-loop": {
		path1: {},
		path2: {
			initial: {
				opacity: 1,
				pathLength: 1,
				pathOffset: 0
			},
			animate: {
				opacity: [
					1,
					0,
					1
				],
				pathLength: [
					1,
					0,
					1
				],
				pathOffset: [
					0,
					1,
					0
				],
				transition: {
					duration: 1.6,
					ease: "easeInOut",
					opacity: { duration: .01 }
				}
			}
		}
	}
};
function IconComponent$4({ size, ...props }) {
	const { controls } = useAnimateIconContext();
	const variants = getVariants(animations$4);
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M3 3v16a2 2 0 0 0 2 2h16",
			variants: variants.path1,
			initial: "initial",
			animate: controls
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "m19 9-5 5-4-4-3 3",
			variants: variants.path2,
			initial: "initial",
			animate: controls
		})]
	});
}
function ChartLine(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWrapper, {
		icon: IconComponent$4,
		...props
	});
}
var animations$3 = {
	default: {
		path: {
			initial: { rotate: 0 },
			animate: {
				rotate: [
					0,
					95,
					75
				],
				transition: {
					duration: .7,
					ease: "easeInOut"
				}
			}
		},
		circle: {}
	},
	"default-loop": {
		path: {
			initial: { rotate: 0 },
			animate: {
				rotate: [
					0,
					95,
					75,
					-20,
					0
				],
				transition: {
					duration: 1.4,
					ease: "easeInOut"
				}
			}
		},
		circle: {}
	}
};
function IconComponent$3({ size, ...props }) {
	const { controls } = useAnimateIconContext();
	const variants = getVariants(animations$3);
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
			variants: variants.path,
			initial: "initial",
			animate: controls
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
			cx: 12,
			cy: 12,
			r: 10,
			variants: variants.circle,
			initial: "initial",
			animate: controls
		})]
	});
}
function Compass(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWrapper, {
		icon: IconComponent$3,
		...props
	});
}
var animations$2 = {
	default: {
		path1: {
			initial: { y: 0 },
			animate: {
				y: 5,
				transition: {
					duration: .3,
					ease: "easeInOut"
				}
			}
		},
		path2: {},
		path3: {
			initial: { y: 0 },
			animate: {
				y: -5,
				transition: {
					duration: .3,
					ease: "easeInOut"
				}
			}
		}
	},
	"default-loop": {
		path1: {
			initial: { y: 0 },
			animate: {
				y: [
					0,
					5,
					0
				],
				transition: {
					duration: .6,
					ease: "easeInOut"
				}
			}
		},
		path2: {},
		path3: {
			initial: { y: 0 },
			animate: {
				y: [
					0,
					-5,
					0
				],
				transition: {
					duration: .6,
					ease: "easeInOut"
				}
			}
		}
	}
};
function IconComponent$2({ size, ...props }) {
	const { controls } = useAnimateIconContext();
	const variants = getVariants(animations$2);
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
			variants: variants.path1,
			initial: "initial",
			animate: controls
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
			variants: variants.path2,
			initial: "initial",
			animate: controls
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
			variants: variants.path3,
			initial: "initial",
			animate: controls
		})
		]
	});
}
function Layers(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWrapper, {
		icon: IconComponent$2,
		...props
	});
}
var animations$1 = {
	default: {
		group: {
			initial: {
				rotate: 0,
				scale: 1
			},
			animate: {
				rotate: [
					0,
					-5,
					7,
					0
				],
				scale: [
					1,
					.9,
					1,
					1
				],
				transition: {
					duration: 1.2,
					ease: "easeInOut"
				}
			}
		},
		path: {
			initial: { pathLength: 1 },
			animate: {
				pathLength: [
					1,
					.8,
					1,
					1
				],
				transition: {
					duration: 1.2,
					ease: "easeInOut"
				}
			}
		},
		rect: {}
	},
	unlock: {
		group: {
			initial: {
				rotate: 0,
				scale: 1
			},
			animate: {
				rotate: [
					0,
					-5,
					0
				],
				scale: [
					1,
					.9,
					1
				],
				transition: {
					duration: .6,
					ease: "easeInOut"
				}
			}
		},
		path: {
			initial: { pathLength: 1 },
			animate: {
				pathLength: .8,
				transition: {
					duration: .4,
					ease: "easeInOut"
				}
			}
		},
		rect: {}
	},
	lock: {
		group: {
			initial: {
				rotate: 0,
				scale: 1
			},
			animate: {
				rotate: [
					0,
					7,
					0
				],
				scale: [
					1,
					.9,
					1
				],
				transition: {
					duration: .6,
					ease: "easeInOut"
				}
			}
		},
		path: {
			initial: { pathLength: .8 },
			animate: {
				pathLength: 1,
				transition: {
					duration: .4,
					ease: "easeInOut"
				}
			}
		},
		rect: {}
	}
};
function IconComponent$1({ size, ...props }) {
	const { controls } = useAnimateIconContext();
	const variants = getVariants(animations$1);
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
			variants: variants.group,
			initial: "initial",
			animate: controls,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.rect, {
				width: "18",
				height: "11",
				x: "3",
				y: "11",
				rx: "2",
				ry: "2",
				variants: variants.rect,
				initial: "initial",
				animate: controls
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M7 11V7a5 5 0 0 1 10 0v4",
				variants: variants.path,
				initial: "initial",
				animate: controls
			})]
		})
	});
}
function Lock(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWrapper, {
		icon: IconComponent$1,
		...props
	});
}
var pathAnimation = {
	initial: {
		pathLength: 1,
		opacity: 1
	},
	animate: {
		pathLength: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: .3,
			ease: "easeInOut"
		}
	}
};
var animations = {
	default: {
		group: {
			initial: {},
			animate: { transition: { staggerChildren: .2 } }
		},
		path1: pathAnimation,
		path2: pathAnimation,
		path3: pathAnimation,
		path4: pathAnimation,
		path5: pathAnimation
	}
};
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
		variants: variants.group,
		initial: "initial",
		animate: controls,
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M2 20h.01",
			variants: variants.path1
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M7 20v-4",
			variants: variants.path2
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M12 20v-8",
			variants: variants.path3
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M17 20V8",
			variants: variants.path4
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d: "M22 20V4",
			variants: variants.path5
		})
		]
	});
}
function Signal(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWrapper, {
		icon: IconComponent,
		...props
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var offers = [
	{
		icon: Blocks,
		n: "01",
		title: "MVP to market",
		time: "Typical: 8-12 weeks",
		text: "Turn a validated idea into a launch-ready product with product strategy, UX, engineering and deployment handled by one team.",
		includes: [
			"Product scope and roadmap",
			"UI/UX and design system",
			"Web or mobile build",
			"Production launch"
		]
	},
	{
		icon: Bot,
		n: "02",
		title: "AI systems that work",
		time: "Typical: 4-10 weeks",
		text: "Move beyond demos with grounded assistants, RAG pipelines, agent workflows and human-in-the-loop automation.",
		includes: [
			"Use-case and data audit",
			"Evaluation framework",
			"Secure model integration",
			"Monitoring and handover"
		]
	},
	{
		icon: ChartLine,
		n: "03",
		title: "Scale an existing product",
		time: "Monthly partnership",
		text: "Improve a product already in market through focused engineering, UX, performance and infrastructure work.",
		includes: [
			"Architecture review",
			"Prioritised delivery sprints",
			"Observability and reliability",
			"Weekly demos"
		]
	},
	{
		icon: Compass,
		n: "04",
		title: "Fractional product & CTO",
		time: "Flexible retainer",
		text: "Senior technical and product leadership for founders building a team, making platform decisions or preparing to scale.",
		includes: [
			"Technical direction",
			"Hiring and vendor support",
			"Roadmap and trade-offs",
			"Direct founder access"
		]
	}
];
var cases = [
	{
		id: "codedog",
		category: "AI / Developer tools",
		name: "CodeDog",
		description: "AI-assisted codebase security that turns complex scans into actionable findings.",
		shipped: ["AI workflow", "Product UX"],
		mark: "CD"
	},
	{
		id: "veddb",
		category: "Infrastructure",
		name: "VedDB",
		description: "A high-performance in-memory database with visibility designed into the experience.",
		shipped: ["Architecture", "Developer UX"],
		mark: "VD"
	},
	{
		id: "biznest",
		category: "Mobile / SMB",
		name: "BizNest",
		description: "A mobile-first workspace bringing essential business operations into one place.",
		shipped: ["Mobile product", "API platform"],
		mark: "BN"
	},
	{
		id: "inboxfm",
		category: "AI / Productivity",
		name: "InboxFM",
		description: "An AI-native email workspace built to reduce inbox noise and accelerate decisions.",
		shipped: ["Product strategy", "AI experience"],
		mark: "IF"
	},
	{
		id: "doxify",
		category: "AI / Documentation",
		name: "Doxify",
		description: "A documentation engine that turns evolving product knowledge into useful answers.",
		shipped: ["RAG system", "Interface design"],
		mark: "DX"
	},
	{
		id: "fakepe",
		category: "Fintech / Developer tools",
		name: "FakePE",
		description: "A payment gateway sandbox for teams building and testing transaction workflows.",
		shipped: ["Developer UX", "Platform design"],
		mark: "FP"
	}
];
var faqs = [
	["What does a project usually cost?", "We scope around outcomes, not a generic hourly bucket. After a short discovery call, you receive a written range, milestones and assumptions before committing. Smaller focused engagements can start with a paid discovery sprint."],
	["Who owns the code and designs?", "You do. Project IP, source code, design files and deployment access are handed over under the terms agreed for the engagement."],
	["Can you work with our existing team?", "Yes. We can own a workstream, embed alongside your engineers, or provide senior product and technical direction without replacing the team you already trust."],
	["How will we know what is happening?", "You get direct access to the people doing the work, a shared delivery board, concise written updates and a working demo every week."],
	["What happens after launch?", "We plan handover from day one. Choose a defined support window, an ongoing improvement retainer, or a clean transition to your internal team."],
	["Do you sign NDAs and handle sensitive data?", "Yes. We can sign a mutual NDA before detailed discovery and agree practical access, security and data-handling controls for the project."]
];
function Hero() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pt-20 md:pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-[0.32] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-[38%] bg-[radial-gradient(circle_at_top,rgba(46,197,182,0.08),transparent_62%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2",
			children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-[520px] w-[520px] rounded-full border border-border/40 md:h-[680px] md:w-[680px]",
				style: { animation: reduce ? "none" : "hero-orbit 90s linear infinite" }
			}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-6 rounded-full border border-border/25 md:inset-10",
				style: { animation: reduce ? "none" : "hero-orbit-reverse 120s linear infinite" }
			}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_12px_rgba(46,197,182,.5)]",
				style: { animation: reduce ? "none" : "hero-orbit 90s linear infinite" }
			})
			]
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "relative z-10 flex min-h-[calc(100svh-12rem)] flex-col items-center justify-center text-center pb-16 pt-10 md:pb-20 md:pt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center w-full",
				children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: reduce ? false : { y: "108%" },
						animate: { y: 0 },
						transition: {
							duration: .95,
							delay: .06,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "mx-auto font-display text-[clamp(3.25rem,8.2vw,7rem)] font-semibold leading-[0.88] tracking-[-.055em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
							text: "Ideas are easy.",
							animateBy: "words",
							direction: "bottom",
							delay: 70,
							stepDuration: .34,
							className: "block"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block pt-1 leading-[1.02]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
								text: "Shipping is the art.",
								animateBy: "words",
								direction: "bottom",
								delay: 82,
								stepDuration: .34,
								className: "font-display text-[clamp(2.6rem,8vw,6.85rem)] font-semibold leading-[1.02] tracking-[-.055em] text-brand"
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
					className: "mx-auto mt-7 max-w-xl text-pretty text-[15px] leading-8 text-muted-foreground md:text-[17px]",
					children: "We turn ambitious product ideas into dependable SaaS, AI and mobile experiences, with one senior team from first decision to production."
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: reduce ? false : {
						opacity: 0,
						y: 14
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .34
					},
					className: "mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonColorful, {
						href: "/contact",
						label: "Start a project"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/work",
						className: "group inline-flex h-12 items-center gap-2 rounded-full border border-border-strong bg-background/90 px-5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand sm:px-6",
						children: ["Explore the work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "h-3.5 w-3.5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							})
						})]
					})]
				})
				]
			})
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: reduce ? false : {
				opacity: 0,
				y: 14
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .75,
				delay: .44
			},
			className: "w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowingMenu, {
				items: [
					{
						link: "/#services",
						text: "AI Systems"
					},
					{
						link: "/#work",
						text: "Mobile"
					},
					{
						link: "/#process",
						text: "Infrastructure"
					},
					{
						link: "/#team",
						text: "Strategy"
					}
				],
				speed: 22,
				textColor: "#0f1115",
				bgColor: "#f5f3ef",
				marqueeBgColor: "#0f1115",
				marqueeTextColor: "#ffffff"
			})
		})
		]
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "border-t border-border py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				eyebrow: "Ways to work together",
				titleText: "Four focused engagements. No sprawling menu.",
				body: "Choose the outcome closest to your current stage. We shape the exact team and scope after a focused discovery call."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2",
				children: offers.map((o, index) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(AnimateIcon, {
					animateOnHover: true,
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 28
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: false,
							margin: "-80px",
							amount: .18
						},
						transition: {
							duration: .55,
							delay: index * .08
						},
						className: "group relative overflow-hidden bg-background p-7 transition-colors hover:bg-surface md:p-9",
						children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground transition-colors duration-300 group-hover:text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o.icon, { size: 28 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] tracking-widest text-muted-foreground",
								children: o.n
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 font-display text-3xl font-semibold",
							children: o.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-lg text-sm leading-7 text-muted-foreground",
							children: o.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-2 sm:grid-cols-2",
							children: o.includes.map((x) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									size: 13,
									className: "text-brand",
									animate: false
								}), x]
							}, x))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 border-t border-border pt-4 font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
							children: o.time
						})
						]
					})
				}, o.title))
			})]
		})
	});
}
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "border-t border-border bg-surface py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				eyebrow: "Selected product work",
				titleText: "Evidence over empty claims.",
				body: "A look at the product problems we have taken on and the systems designed around them. Detailed walkthroughs are available during a project conversation."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:h-[420px] lg:grid-cols-3 lg:grid-rows-2",
				children: cases.map((c, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(motion.article, {
					id: c.id,
					initial: {
						opacity: 0,
						y: 32
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: false,
						margin: "-70px",
						amount: .18
					},
					transition: {
						duration: .55,
						delay: i * .08
					},
					className: "group flex min-h-[210px] overflow-hidden bg-background transition-colors hover:bg-surface lg:min-h-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/work/$id",
						params: { id: c.id },
						className: "flex w-full overflow-hidden cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex w-20 shrink-0 items-center justify-center overflow-hidden border-r border-border bg-foreground text-background",
							children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-10 grid-bg" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative -rotate-90 font-accent text-4xl font-light italic text-brand transition-transform duration-700 group-hover:-rotate-90 group-hover:scale-110",
								children: c.mark
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute left-3 top-4 font-mono text-[8px] uppercase tracking-widest text-background/50",
								children: ["Case / 0", i + 1]
							})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 flex-col p-5",
							children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[9px] uppercase tracking-widest text-brand",
								children: c.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1.5 font-display text-2xl font-medium",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground",
								children: c.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-auto flex flex-wrap gap-1.5 pt-4",
								children: c.shipped.map((x) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground",
									children: x
								}, x))
							})
							]
						})]
					})
				}, c.name))
			})]
		})
	});
}
function Standards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				eyebrow: "Working standard",
				titleText: "Less risk. More visibility.",
				body: "Good delivery is not mysterious. These are the operating principles we bring to every engagement."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: Layers,
						t: "Your IP, your repository",
						d: "Source code, design files and deployment access are yours under the agreed engagement terms."
					},
					{
						icon: Lock,
						t: "Security by agreement",
						d: "NDA support, least-privilege access and project-specific data controls are established before sensitive work."
					},
					{
						icon: Check,
						t: "Built for handover",
						d: "Documentation, predictable architecture and knowledge transfer keep you independent after launch."
					},
					{
						icon: Signal,
						t: "Visible every week",
						d: "A working demo, shared delivery board and direct access to the people doing the work."
					}
				].map((p, index) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: false,
						amount: .25
					},
					transition: {
						duration: .55,
						delay: index * .08
					},
					className: "group bg-background p-6 transition-colors hover:bg-surface",
					children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
						size: 20,
						className: "text-brand",
						animateOnHover: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-8 font-display text-2xl",
						children: p.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-6 text-muted-foreground",
						children: p.d
					})
					]
				}, p.t))
			})]
		})
	});
}
function Team() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "team",
		className: "border-t border-border bg-surface py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				eyebrow: "The people doing the work",
				titleText: "Eight specialists. No account-manager maze.",
				body: "You work directly with the people making product and technical decisions. The team stays deliberately small so context does not disappear between meetings."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						name: "Mihir Rabari",
						role: "Product engineering",
						owns: "Architecture, delivery and infrastructure",
						mark: "MR"
					},
					{
						name: "Khushi Trivedi",
						role: "Operations & growth",
						owns: "Client operations, growth and partnerships",
						mark: "KT"
					},
					{
						name: "Khushi Patel",
						role: "Product design",
						owns: "UI/UX, brand systems and design direction",
						mark: "KP"
					},
					{
						name: "Aangi Shah",
						role: "Experience design",
						owns: "Product flows and frontend experience",
						mark: "AS"
					},
					{
						name: "Karan Mistry",
						role: "AI engineering",
						owns: "Machine learning, agents and RAG systems",
						mark: "KM"
					},
					{
						name: "Jignesh Prajapati",
						role: "Mobile engineering",
						owns: "Flutter and cross-platform applications",
						mark: "JP"
					},
					{
						name: "Tejas Patel",
						role: "Frontend engineering",
						owns: "Web development, UI components and performance",
						mark: "TP"
					},
					{
						name: "Jaivik Prajapati",
						role: "Backend engineering",
						owns: "API development, systems integration and cloud services",
						mark: "JV"
					}
				].map((person, index) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(motion.article, {
					initial: {
						opacity: 0,
						y: 24
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
						className: "relative flex h-28 items-center justify-center overflow-hidden border border-border bg-surface",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative font-accent text-5xl font-light italic text-foreground/80",
							children: person.mark
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute right-3 top-3 font-mono text-[9px] tracking-widest text-muted-foreground",
							children: ["0", index + 1]
						})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-mono text-[9px] uppercase tracking-widest text-brand",
						children: person.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl font-semibold",
						children: person.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-6 text-muted-foreground",
						children: person.owns
					})
					]
				}, person.name))
			})]
		})
	});
}
function Process() {
	const steps = [
		{
			id: "01",
			label: "Align",
			phase: "Discovery",
			title: "Goals, users, constraints and the smallest useful release.",
			detail: "We define the target user, the outcome that matters and the smallest version worth building before design or engineering begins."
		},
		{
			id: "02",
			label: "Shape",
			phase: "Direction",
			title: "Flows, architecture, delivery plan and a transparent proposal.",
			detail: "We map the product structure, make the important technical calls and turn uncertainty into a plan the whole team can trust."
		},
		{
			id: "03",
			label: "Build",
			phase: "Delivery",
			title: "Weekly working software, tight feedback and continuous quality checks.",
			detail: "You see working software every week. Decisions stay visible and quality is checked continuously instead of saved for the end."
		},
		{
			id: "04",
			label: "Launch",
			phase: "Release",
			title: "Production deployment, analytics, monitoring and team handover.",
			detail: "Release, monitoring and handover move as one plan so launch stays calm and your team can take ownership cleanly."
		},
		{
			id: "05",
			label: "Improve",
			phase: "Iteration",
			title: "Support, learning and focused iterations after real users arrive.",
			detail: "Real usage and feedback decide what improves next, giving every follow-up iteration a clear reason to exist."
		}
	];
	const timelineRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: timelineRef,
		offset: ["start 80%", "end 20%"]
	});
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 60,
		damping: 20,
		restDelta: .001
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "process",
		className: "relative overflow-hidden border-y border-foreground/10 bg-foreground py-24 text-background md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-[.035]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 border-b border-background/15 pb-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						invert: true,
						children: "How delivery works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 max-w-[11ch] font-display text-[clamp(3.25rem,7vw,6.75rem)] font-semibold leading-[.88] tracking-[-.065em]",
						children: [
							"Clear steps.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"No black box."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:justify-self-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-sm leading-7 text-background/65 md:text-base md:leading-8",
						children: "One senior team takes the work from first decision to dependable production. You always know what is happening, what we need from you and what comes next."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7 flex flex-wrap gap-2",
						children: [
							"5 focused phases",
							"Weekly working demos",
							"One accountable team"
						].map((item) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-background/20 px-4 py-2 font-mono text-[9px] uppercase tracking-[.18em] text-background/75",
							children: item
						}, item))
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: timelineRef,
				className: "relative mt-16 lg:mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-0 left-5 top-0 w-px bg-background/10 lg:left-1/2 lg:-translate-x-1/2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "h-full w-full origin-top bg-brand",
						style: { scaleY: smoothProgress }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "relative space-y-10 lg:space-y-0",
					children: steps.map((step, index) => {
						const isEven = index % 2 === 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							initial: {
								opacity: 0,
								y: 40
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								amount: .3
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
							className: "relative grid lg:grid-cols-2 lg:gap-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-5 top-0 z-10 flex -translate-x-1/2 items-center justify-center lg:left-1/2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand bg-foreground font-mono text-[10px] tracking-widest text-background shadow-[0_0_20px_rgba(46,197,182,.25)] transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(46,197,182,.45)]",
									children: step.id
								})
							}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `pl-14 lg:pl-0 ${isEven ? "lg:col-start-1 lg:pr-20 lg:text-right" : "lg:col-start-2 lg:pl-20"} lg:py-16`,
								children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block font-mono text-[9px] uppercase tracking-[.2em] text-brand",
									children: step.phase
								}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-3xl font-semibold tracking-[-.04em] xl:text-4xl",
									children: step.label
								}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm font-medium leading-7 text-background/85",
									children: step.title
								}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[13px] leading-6 text-background/50",
									children: step.detail
								})
								]
							}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `hidden lg:block ${isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`,
								"aria-hidden": "true"
							})
							]
						}, step.id);
					})
				})]
			})]
		})]
	});
}
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 28
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: false,
					amount: .15
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
				className: "grid gap-14 lg:grid-cols-[.75fr_1.25fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Before we start" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-5xl font-semibold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
							text: "Straight answers.",
							animateBy: "words",
							direction: "bottom",
							delay: 65,
							stepDuration: .32,
							className: "block"
						})
					}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-sm text-sm leading-7 text-muted-foreground",
						children: "Still wondering about something? Email us and a team member will reply directly."
					})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					defaultValue: "faq-0",
					className: "border-t border-border",
					children: faqs.map((f, i) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `faq-${i}`,
						className: "border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger, {
							className: "group flex w-full items-center justify-between gap-6 py-6 text-left font-display text-[1.15rem] font-semibold tracking-[-.025em] transition-colors hover:text-brand md:text-[1.35rem] [&[data-state=open]]:text-brand [&>svg]:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "max-w-[28ch]",
								children: f[0]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-5 w-5 shrink-0 items-center justify-center",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									animate: { scaleY: 1 },
									transition: {
										duration: .25,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-brand transition-transform duration-300 group-data-[state=open]:scale-y-0"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "pb-6 pr-10 text-sm leading-7 text-muted-foreground md:text-base md:leading-8",
							children: f[1]
						})]
					}, f[0]))
				})]
			})
		})
	});
}
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Standards, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Team, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Landing as component };
