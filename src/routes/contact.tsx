import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import BlurText from "@/components/react-bits/BlurText";
import { useState, type ReactNode } from "react";
import { Eyebrow } from "@/components/section";
import { Container, SiteFooter, SiteHeader } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Start a Project | The Velnix" },
      {
        name: "description",
        content:
          "Tell The Velnix about your product, AI system or engineering project. Get a useful response within two business days.",
      },
    ],
  }),
  component: ContactPage,
});

type Draft = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  brief: string;
};

const serviceOptions = [
  "MVP / new product",
  "AI system or automation",
  "Scale an existing product",
  "Fractional product / CTO",
  "Not sure yet",
];

const budgetOptions = ["Still defining it", "Under ₹5 Lakhs", "₹5L - ₹15 Lakhs", "₹15L - ₹40 Lakhs", "₹40 Lakhs+"];

const timelineOptions = [
  "As soon as possible",
  "Within 1-2 months",
  "Within 3-6 months",
  "Just exploring",
];
const stepMeta = [
  { title: "Your details", description: "Who should we reply to?" },
  { title: "Project shape", description: "What kind of work, budget and timing?" },
  { title: "The brief", description: "Tell us what you're building." },
] as const;

function ContactPage() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [draft, setDraft] = useState<Draft>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    brief: "",
  });

  function update<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
    if (error) setError("");
    if (fieldErrors[key]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function next() {
    if (step === 0) {
      const errors: Record<string, string> = {};
      if (!draft.name.trim()) {
        errors.name = "Name is required";
      } else if (draft.name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!draft.email.trim()) {
        errors.email = "Work email is required";
      } else if (!emailRegex.test(draft.email.trim())) {
        errors.email = "Please enter a valid email address";
      }

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
    const body = encodeURIComponent(
      [
        `Name: ${draft.name || "Not provided"}`,
        `Email: ${draft.email || "Not provided"}`,
        `Company: ${draft.company || "Not provided"}`,
        `Project type: ${draft.service || "Not provided"}`,
        `Investment: ${draft.budget || "Not provided"}`,
        `Ideal start: ${draft.timeline || "Not provided"}`,
        "",
        "Project brief:",
        draft.brief,
      ].join("\n"),
    );

    setStatus("sent");
    window.location.href = `mailto:hello@thevelnix.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="absolute inset-0 grid-bg opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <Eyebrow>Start a project</Eyebrow>
            <h1 className="mt-5 font-display text-[clamp(2.8rem,8vw,7rem)] font-semibold leading-[.92] tracking-[-.055em]">
              <BlurText
                text="Tell us what you need."
                animateBy="words"
                direction="bottom"
                delay={65}
                stepDuration={0.34}
                className="block"
              />
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              Early idea or tangled production system, both are welcome. Share the context you have
              and we'll reply with useful next steps within two business days.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Form ── */}
      <section className="py-16 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.06 }}
            className="mx-auto max-w-3xl"
          >
            {/* Step indicator */}
            <div className="mb-12 flex items-start justify-center">
              {stepMeta.map((s, i) => {
                const isActive = i === step;
                const isDone = i < step;
                return (
                  <div key={s.title} className="flex flex-1 items-start">
                    <button
                      type="button"
                      onClick={() => { setError(""); setStep(i); }}
                      className="group flex flex-col items-center gap-2.5 cursor-pointer"
                    >
                      <span
                        className={`relative flex h-9 w-9 items-center justify-center rounded-full border-2 font-mono text-xs font-semibold transition-all duration-300 ${isActive
                            ? "border-foreground bg-foreground text-background scale-110"
                            : isDone
                              ? "border-brand bg-brand text-brand-foreground"
                              : "border-border bg-background text-muted-foreground group-hover:border-border-strong"
                          }`}
                      >
                        {isDone ? (
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        ) : (
                          <span>{String(i + 1).padStart(2, "0")}</span>
                        )}
                      </span>
                      <span
                        className={`text-xs font-medium transition-colors duration-200 ${isActive ? "text-foreground" : "text-muted-foreground"
                          }`}
                      >
                        {s.title}
                      </span>
                    </button>

                    {/* Connector line */}
                    {i < stepMeta.length - 1 && (
                      <div className="relative mt-[18px] mx-2 h-[2px] flex-1 overflow-hidden rounded-full bg-border">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-brand"
                          initial={false}
                          animate={{ width: isDone ? "100%" : "0%" }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Step heading */}
            <div className="mb-8">
              <h2 className="font-display text-2xl font-semibold tracking-[-.03em] md:text-3xl">
                {stepMeta[step].title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {stepMeta[step].description}
              </p>
            </div>

            {/* Step content */}
            <AnimatePresence mode="wait">
              {step === 0 ? (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-6"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Your name *">
                      <TextInput
                        value={draft.name}
                        onChange={(value) => update("name", value)}
                        placeholder="Mihir Rabari"
                        autoComplete="name"
                        error={fieldErrors.name}
                      />
                    </Field>
                    <Field label="Work email *">
                      <TextInput
                        value={draft.email}
                        onChange={(value) => update("email", value)}
                        placeholder="you@company.com"
                        autoComplete="email"
                        type="email"
                        error={fieldErrors.email}
                      />
                    </Field>
                  </div>
                  <Field label="Company">
                    <TextInput
                      value={draft.company}
                      onChange={(value) => update("company", value)}
                      placeholder="Company or product name"
                      autoComplete="organization"
                    />
                  </Field>
                </motion.div>
              ) : step === 1 ? (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-8"
                >
                  <div>
                    <span className="mb-3 block text-xs font-medium text-foreground">
                      What do you need? *
                    </span>
                    <OptionSelector
                      value={draft.service}
                      options={serviceOptions}
                      onChange={(value) => update("service", value)}
                      columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                    />
                  </div>

                  <div>
                    <span className="mb-3 block text-xs font-medium text-foreground">
                      Indicative investment *
                    </span>
                    <OptionSelector
                      value={draft.budget}
                      options={budgetOptions}
                      onChange={(value) => update("budget", value)}
                      columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                    />
                  </div>

                  <div>
                    <span className="mb-3 block text-xs font-medium text-foreground">
                      Ideal start *
                    </span>
                    <OptionSelector
                      value={draft.timeline}
                      options={timelineOptions}
                      onChange={(value) => update("timeline", value)}
                      columns="grid-cols-1 sm:grid-cols-2"
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-6"
                >
                  {/* Summary of previous selections */}
                  {(draft.service || draft.budget || draft.timeline) && (
                    <div className="flex flex-wrap items-center gap-2">
                      {[draft.service, draft.budget, draft.timeline]
                        .filter(Boolean)
                        .map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  )}

                  <Field label="Tell us about the project *">
                    <TextArea
                      value={draft.brief}
                      onChange={(value) => update("brief", value)}
                      placeholder="What are you building, who is it for, what exists today, and what needs to happen next?"
                      error={fieldErrors.brief}
                    />
                  </Field>
                </motion.div>
              )}
            </AnimatePresence>

            {error ? (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-destructive"
              >
                {error}
              </motion.p>
            ) : null}

            {/* Footer */}
            <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-[11px] leading-5 text-muted-foreground">
                Your details stay in your browser until you submit. Submitting prepares the
                brief in your email app so you remain in control of sending it.
              </p>
              <div className="flex gap-3">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={back}
                    className="inline-flex h-11 items-center rounded-full border border-border-strong bg-background px-5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-foreground cursor-pointer"
                  >
                    Back
                  </button>
                )}
                {step < stepMeta.length - 1 ? (
                  <button
                    type="button"
                    onClick={next}
                    className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-brand-foreground cursor-pointer"
                  >
                    Continue
                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submit}
                    className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-brand-foreground cursor-pointer"
                  >
                    Send brief
                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                  </button>
                )}
              </div>
            </div>

            <AnimatePresence>
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="mt-4 flex items-center gap-2 text-sm text-brand"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Your email app should now be open with the full brief ready to send.
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <SiteFooter hideCta />
    </main>
  );
}

/* ── Helper components ── */

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-medium tracking-[.02em] text-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  autoComplete,
  type = "text",
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="w-full">
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:ring-1 ${error
            ? "border-destructive hover:border-destructive focus:border-destructive focus:ring-destructive/30"
            : "border-border hover:border-border-strong focus:border-brand focus:ring-brand/30"
          }`}
      />
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </div>
  );
}

function TextArea({
  value,
  onChange,
  placeholder,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="w-full">
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={6}
        placeholder={placeholder}
        className={`min-h-[200px] w-full resize-y rounded-xl border bg-background px-4 py-3 text-sm leading-7 outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:ring-1 ${error
            ? "border-destructive hover:border-destructive focus:border-destructive focus:ring-destructive/30"
            : "border-border hover:border-border-strong focus:border-brand focus:ring-brand/30"
          }`}
      />
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </div>
  );
}

function OptionSelector({
  value,
  options,
  onChange,
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
}: {
  value: string;
  options: string[];
  onChange: (val: string) => void;
  columns?: string;
}) {
  return (
    <div className={`grid gap-3 ${columns}`}>
      {options.map((option) => {
        const isSelected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`relative flex items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all duration-200 cursor-pointer ${isSelected
                ? "border-brand bg-brand/[0.04] text-foreground"
                : "border-border bg-background hover:border-border-strong"
              }`}
          >
            <span className="text-sm font-medium leading-snug">
              {option}
            </span>
            <div
              className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border transition-all ${isSelected
                  ? "border-brand bg-brand"
                  : "border-border"
                }`}
            >
              {isSelected && (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="h-2.5 w-2.5 text-brand-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </motion.svg>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
