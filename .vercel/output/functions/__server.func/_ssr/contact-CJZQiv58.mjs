import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as AnimatePresence, s as motion } from "../_libs/framer-motion.mjs";
import { a as SiteFooter, n as Container, o as SiteHeader } from "./site-shell-DxiiIEQP.mjs";
import { t as BlurText } from "./BlurText-6uJa6ZI_.mjs";
import { t as Eyebrow } from "./section-D4ViLxCP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CJZQiv58.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var serviceOptions = [
	"MVP / new product",
	"AI system or automation",
	"Scale an existing product",
	"Fractional product / CTO",
	"Not sure yet"
];
var budgetOptions = [
	"Still defining it",
	"Under ₹5 Lakhs",
	"₹5L - ₹15 Lakhs",
	"₹15L - ₹40 Lakhs",
	"₹40 Lakhs+"
];
var timelineOptions = [
	"As soon as possible",
	"Within 1-2 months",
	"Within 3-6 months",
	"Just exploring"
];
var stepMeta = [
	{
		title: "Your details",
		description: "Who should we reply to?"
	},
	{
		title: "Project shape",
		description: "What kind of work, budget and timing?"
	},
	{
		title: "The brief",
		description: "Tell us what you're building."
	}
];
function ContactPage() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)("");
	const [fieldErrors, setFieldErrors] = (0, import_react.useState)({});
	const [draft, setDraft] = (0, import_react.useState)({
		name: "",
		email: "",
		company: "",
		service: "",
		budget: "",
		timeline: "",
		brief: ""
	});
	function update(key, value) {
		setDraft((current) => ({
			...current,
			[key]: value
		}));
		if (error) setError("");
		if (fieldErrors[key]) setFieldErrors((prev) => {
			const next = { ...prev };
			delete next[key];
			return next;
		});
	}
	function next() {
		if (step === 0) {
			const errors = {};
			if (!draft.name.trim()) errors.name = "Name is required";
			else if (draft.name.trim().length < 2) errors.name = "Name must be at least 2 characters";
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!draft.email.trim()) errors.email = "Work email is required";
			else if (!emailRegex.test(draft.email.trim())) errors.email = "Please enter a valid email address";
			if (Object.keys(errors).length > 0) {
				setFieldErrors(errors);
				setError("Please correct the errors in the form before continuing.");
				return;
			}
		}
		if (step === 1 && (!draft.service || !draft.budget || !draft.timeline)) {
			setError("Please choose a service, budget and timeline.");
			return;
		}
		setStep((current) => Math.min(current + 1, stepMeta.length - 1));
	}
	function back() {
		setError("");
		setStep((current) => Math.max(current - 1, 0));
	}
	function submit() {
		if (!draft.brief.trim()) {
			setFieldErrors({ brief: "Project brief is required" });
			setError("Please tell us a little about the project before sending.");
			return;
		}
		if (draft.brief.trim().length < 15) {
			setFieldErrors({ brief: "Brief is too short (min 15 characters)" });
			setError("Please provide a slightly more detailed brief (at least 15 characters).");
			return;
		}
		const subject = encodeURIComponent(`Project enquiry from ${draft.name || "a new contact"}`);
		const body = encodeURIComponent([
			`Name: ${draft.name || "Not provided"}`,
			`Email: ${draft.email || "Not provided"}`,
			`Company: ${draft.company || "Not provided"}`,
			`Project type: ${draft.service || "Not provided"}`,
			`Investment: ${draft.budget || "Not provided"}`,
			`Ideal start: ${draft.timeline || "Not provided"}`,
			"",
			"Project brief:",
			draft.brief
		].join("\n"));
		setStatus("sent");
		window.location.href = `mailto:hello@thevelnix.com?subject=${subject}&body=${body}`;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden border-b border-border pb-16 pt-28 md:pb-24 md:pt-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 18
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .65,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "mx-auto max-w-4xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Start a project" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-5 font-display text-[clamp(2.8rem,8vw,7rem)] font-semibold leading-[.92] tracking-[-.055em]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlurText, {
									text: "Tell us what you need.",
									animateBy: "words",
									direction: "bottom",
									delay: 65,
									stepDuration: .34,
									className: "block"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg",
								children: "Early idea or tangled production system, both are welcome. Share the context you have and we'll reply with useful next steps within two business days."
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 22
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .12
					},
					transition: {
						duration: .7,
						delay: .06
					},
					className: "mx-auto max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-12 flex items-start justify-center",
							children: stepMeta.map((s, i) => {
								const isActive = i === step;
								const isDone = i < step;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 items-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setError("");
											setStep(i);
										},
										className: "group flex flex-col items-center gap-2.5 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `relative flex h-9 w-9 items-center justify-center rounded-full border-2 font-mono text-xs font-semibold transition-all duration-300 ${isActive ? "border-foreground bg-foreground text-background scale-110" : isDone ? "border-brand bg-brand text-brand-foreground" : "border-border bg-background text-muted-foreground group-hover:border-border-strong"}`,
											children: isDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "h-4 w-4",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 2.5,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M5 13l4 4L19 7"
												})
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(i + 1).padStart(2, "0") })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-xs font-medium transition-colors duration-200 ${isActive ? "text-foreground" : "text-muted-foreground"}`,
											children: s.title
										})]
									}), i < stepMeta.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative mt-[18px] mx-2 h-[2px] flex-1 overflow-hidden rounded-full bg-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											className: "absolute inset-y-0 left-0 bg-brand",
											initial: false,
											animate: { width: isDone ? "100%" : "0%" },
											transition: {
												duration: .4,
												ease: [
													.16,
													1,
													.3,
													1
												]
											}
										})
									})]
								}, s.title);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold tracking-[-.03em] md:text-3xl",
								children: stepMeta[step].title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: stepMeta[step].description
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									x: 18
								},
								animate: {
									opacity: 1,
									x: 0
								},
								exit: {
									opacity: 0,
									x: -18
								},
								transition: {
									duration: .35,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								className: "grid gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Your name *",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											value: draft.name,
											onChange: (value) => update("name", value),
											placeholder: "Mihir Rabari",
											autoComplete: "name",
											error: fieldErrors.name
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Work email *",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
											value: draft.email,
											onChange: (value) => update("email", value),
											placeholder: "you@company.com",
											autoComplete: "email",
											type: "email",
											error: fieldErrors.email
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Company",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
										value: draft.company,
										onChange: (value) => update("company", value),
										placeholder: "Company or product name",
										autoComplete: "organization"
									})
								})]
							}, "step-1") : step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									x: 18
								},
								animate: {
									opacity: 1,
									x: 0
								},
								exit: {
									opacity: 0,
									x: -18
								},
								transition: {
									duration: .35,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								className: "grid gap-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-3 block text-xs font-medium text-foreground",
										children: "What do you need? *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionSelector, {
										value: draft.service,
										options: serviceOptions,
										onChange: (value) => update("service", value),
										columns: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-3 block text-xs font-medium text-foreground",
										children: "Indicative investment *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionSelector, {
										value: draft.budget,
										options: budgetOptions,
										onChange: (value) => update("budget", value),
										columns: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-3 block text-xs font-medium text-foreground",
										children: "Ideal start *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionSelector, {
										value: draft.timeline,
										options: timelineOptions,
										onChange: (value) => update("timeline", value),
										columns: "grid-cols-1 sm:grid-cols-2"
									})] })
								]
							}, "step-2") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									x: 18
								},
								animate: {
									opacity: 1,
									x: 0
								},
								exit: {
									opacity: 0,
									x: -18
								},
								transition: {
									duration: .35,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								className: "grid gap-6",
								children: [(draft.service || draft.budget || draft.timeline) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										draft.service,
										draft.budget,
										draft.timeline
									].filter(Boolean).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground",
										children: tag
									}, tag))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Tell us about the project *",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
										value: draft.brief,
										onChange: (value) => update("brief", value),
										placeholder: "What are you building, who is it for, what exists today, and what needs to happen next?",
										error: fieldErrors.brief
									})
								})]
							}, "step-3")
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: -4
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: "mt-4 text-sm text-destructive",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md text-[11px] leading-5 text-muted-foreground",
								children: "Your details stay in your browser until you submit. Submitting prepares the brief in your email app so you remain in control of sending it."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3",
								children: [step > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: back,
									className: "inline-flex h-11 items-center rounded-full border border-border-strong bg-background px-5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-foreground cursor-pointer",
									children: "Back"
								}), step < stepMeta.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: next,
									className: "group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-brand-foreground cursor-pointer",
									children: ["Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
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
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: submit,
									className: "group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-brand-foreground cursor-pointer",
									children: ["Send brief", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
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
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 6
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: { opacity: 0 },
							role: "status",
							className: "mt-4 flex items-center gap-2 text-sm text-brand",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "h-4 w-4",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2.5,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M5 13l4 4L19 7"
								})
							}), "Your email app should now be open with the full brief ready to send."]
						}) : null })
					]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { hideCta: true })
		]
	});
}
function Field({ label, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium tracking-[.02em] text-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2",
			children
		})]
	});
}
function TextInput({ value, onChange, placeholder, autoComplete, type = "text", error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange: (event) => onChange(event.target.value),
			placeholder,
			autoComplete,
			className: `h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:ring-1 ${error ? "border-destructive hover:border-destructive focus:border-destructive focus:ring-destructive/30" : "border-border hover:border-border-strong focus:border-brand focus:ring-brand/30"}`
		}), error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1.5 block text-xs text-destructive",
			children: error
		})]
	});
}
function TextArea({ value, onChange, placeholder, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			value,
			onChange: (event) => onChange(event.target.value),
			rows: 6,
			placeholder,
			className: `min-h-[200px] w-full resize-y rounded-xl border bg-background px-4 py-3 text-sm leading-7 outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:ring-1 ${error ? "border-destructive hover:border-destructive focus:border-destructive focus:ring-destructive/30" : "border-border hover:border-border-strong focus:border-brand focus:ring-brand/30"}`
		}), error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1.5 block text-xs text-destructive",
			children: error
		})]
	});
}
function OptionSelector({ value, options, onChange, columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `grid gap-3 ${columns}`,
		children: options.map((option) => {
			const isSelected = value === option;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onChange(option),
				className: `relative flex items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all duration-200 cursor-pointer ${isSelected ? "border-brand bg-brand/[0.04] text-foreground" : "border-border bg-background hover:border-border-strong"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium leading-snug",
					children: option
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border transition-all ${isSelected ? "border-brand bg-brand" : "border-border"}`,
					children: isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.svg, {
						initial: { scale: 0 },
						animate: { scale: 1 },
						className: "h-2.5 w-2.5 text-brand-foreground",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 3.5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M5 13l4 4L19 7"
						})
					})
				})]
			}, option);
		})
	});
}
//#endregion
export { ContactPage as component };
