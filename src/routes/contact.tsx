import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { CheckIcon } from "@/components/animate-ui/icons/check";
import { ClockIcon } from "@/components/animate-ui/icons/clock";
import { CompassIcon } from "@/components/animate-ui/icons/compass";
import { LayersIcon } from "@/components/animate-ui/icons/layers";
import { SendIcon } from "@/components/animate-ui/icons/send";
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

const budgetOptions = ["Still defining it", "Under $5k", "$5k-$15k", "$15k-$40k", "$40k+"];

const timelineOptions = [
  "As soon as possible",
  "Within 1-2 months",
  "Within 3-6 months",
  "Just exploring",
];

const steps = [
  {
    key: "intro",
    step: "01",
    title: "Your details",
    description: "Tell us who to reply to and which company or product this belongs to.",
    icon: CompassIcon,
  },
  {
    key: "scope",
    step: "02",
    title: "Project shape",
    description: "Choose the type of engagement, budget range and timing so we can respond well.",
    icon: LayersIcon,
  },
  {
    key: "brief",
    step: "03",
    title: "The brief",
    description: "Share the context, goal and anything we should know before replying.",
    icon: ClockIcon,
  },
] as const;

function ContactPage() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [error, setError] = useState("");
  const [draft, setDraft] = useState<Draft>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    brief: "",
  });

  const progress = ((step + 1) / steps.length) * 100;

  function update<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
    if (error) setError("");
  }

  function next() {
    if (step === 0 && (!draft.name.trim() || !draft.email.trim())) {
      setError("Please add your name and work email before continuing.");
      return;
    }
    if (step === 1 && (!draft.service || !draft.budget || !draft.timeline)) {
      setError("Please choose a service, budget and timeline.");
      return;
    }
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function back() {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
  }

  function submit() {
    if (!draft.brief.trim()) {
      setError("Please tell us a little about the project before sending.");
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
      <section className="relative overflow-hidden border-b border-border pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="absolute inset-0 grid-bg opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="absolute left-1/2 top-12 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand/[.08] blur-[120px]" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <Eyebrow>Start a project</Eyebrow>
            <h1 className="mt-5 font-display text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[.92] tracking-[-.055em]">
              Tell us what needs
              <br />
              <span className="font-accent font-light italic text-brand">to get shipped.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              Early idea or tangled production system, both are welcome. Share the context you have
              and we will reply with useful next steps within two business days.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-14">
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-[0_20px_60px_rgb(0_0_0_/_0.04)]">
              <p className="font-mono text-[9px] uppercase tracking-[.24em] text-brand">
                What happens next
              </p>
              <div className="mt-5 space-y-4">
                {[
                  ["Senior review", "A senior team member reads every brief."],
                  ["Useful response", "We reply with questions, risks and a sensible next step."],
                  ["Focused call", "If there is a fit, we schedule a 30-minute call."],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-border bg-background p-4">
                    <p className="font-medium">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-border bg-foreground p-6 text-background">
              <p className="font-mono text-[9px] uppercase tracking-[.24em] text-brand">
                Need a quicker path?
              </p>
              <a
                href="mailto:hello@thevelnix.com"
                className="mt-4 inline-flex text-lg font-medium text-background transition-opacity hover:opacity-80"
              >
                hello@thevelnix.com
              </a>
              <p className="mt-4 text-sm leading-7 text-background/70">
                If email is easier, send a short note and we will reply with the right next step.
              </p>
            </div>
          </motion.aside>

          <motion.section
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.06 }}
            className="rounded-[32px] border border-border bg-surface p-4 shadow-[0_28px_90px_rgb(0_0_0_/_0.05)] md:p-6"
          >
            <div className="rounded-[28px] border border-border bg-background p-5 md:p-7">
              <div className="flex flex-col gap-6 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[.24em] text-brand">
                    Project brief
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-.03em] md:text-4xl">
                    A clean way to gather the right context.
                  </h2>
                </div>
                <div className="w-full max-w-xs">
                  <div className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[.22em] text-muted-foreground">
                    <span>Step {steps[step].step}</span>
                    <span>{String(steps.length).padStart(2, "0")}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-brand"
                      initial={false}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-[.82fr_1.18fr]">
                <div className="rounded-3xl border border-border bg-surface p-5">
                  <div className="space-y-3">
                    {steps.map((item, index) => {
                      const active = index === step;
                      const done = index < step;
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => {
                            setError("");
                            setStep(index);
                          }}
                          className={`flex w-full items-start gap-4 rounded-2xl border px-4 py-4 text-left transition-all ${
                            active
                              ? "border-brand bg-background shadow-[0_12px_30px_rgb(0_0_0_/_0.04)]"
                              : "border-border bg-transparent hover:border-border-strong hover:bg-background/70"
                          }`}
                        >
                          <span
                            className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                              active
                                ? "bg-brand text-brand-foreground"
                                : done
                                  ? "bg-foreground text-background"
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <Icon size={18} animateOnHover={active} />
                          </span>
                          <span className="min-w-0">
                            <span className="block font-mono text-[9px] uppercase tracking-[.22em] text-brand">
                              {item.step}
                            </span>
                            <span className="mt-1 block font-display text-lg font-semibold">
                              {item.title}
                            </span>
                            <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                              {item.description}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-5 rounded-2xl border border-border bg-background p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[.22em] text-muted-foreground">
                      Current selection
                    </p>
                    <div className="mt-3 grid gap-3 text-sm">
                      <SummaryRow label="Service" value={draft.service || "Not chosen yet"} />
                      <SummaryRow label="Budget" value={draft.budget || "Not chosen yet"} />
                      <SummaryRow label="Timeline" value={draft.timeline || "Not chosen yet"} />
                    </div>
                  </div>
                </div>

                <div className="min-w-0">
                  <AnimatePresence mode="wait">
                    {step === 0 ? (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -18 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="grid gap-5"
                      >
                        <div className="grid gap-5 md:grid-cols-2">
                          <Field label="Your name *">
                            <TextInput
                              value={draft.name}
                              onChange={(value) => update("name", value)}
                              placeholder="Mihir Rabari"
                              autoComplete="name"
                            />
                          </Field>
                          <Field label="Work email *">
                            <TextInput
                              value={draft.email}
                              onChange={(value) => update("email", value)}
                              placeholder="you@company.com"
                              autoComplete="email"
                              type="email"
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
                        className="grid gap-5 md:grid-cols-2"
                      >
                        <Field label="What do you need? *">
                          <AnimatedSelect
                            value={draft.service}
                            placeholder="Select a workstream"
                            options={serviceOptions}
                            onChange={(value) => update("service", value)}
                          />
                        </Field>
                        <Field label="Indicative investment *">
                          <AnimatedSelect
                            value={draft.budget}
                            placeholder="Choose a range"
                            options={budgetOptions}
                            onChange={(value) => update("budget", value)}
                          />
                        </Field>
                        <Field label="Ideal start *" className="md:col-span-2">
                          <AnimatedSelect
                            value={draft.timeline}
                            placeholder="Select timing"
                            options={timelineOptions}
                            onChange={(value) => update("timeline", value)}
                          />
                        </Field>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -18 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="grid gap-5"
                      >
                        <Field label="Tell us about the project *">
                          <TextArea
                            value={draft.brief}
                            onChange={(value) => update("brief", value)}
                            placeholder="What are you building, who is it for, what exists today, and what needs to happen next?"
                          />
                        </Field>
                        <div className="grid gap-4 rounded-3xl border border-border bg-surface p-5 md:grid-cols-3">
                          <InfoCard
                            title="Fast response"
                            copy="We reply with sensible next steps within two business days."
                          />
                          <InfoCard
                            title="No black box"
                            copy="You work directly with the people doing the work, not a long handoff chain."
                          />
                          <InfoCard
                            title="Prepared handover"
                            copy="We plan the transition from the start so the work remains useful after launch."
                          />
                        </div>
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

                  <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="max-w-md text-[11px] leading-5 text-muted-foreground">
                      Your details stay in your browser until you submit. Submitting prepares the
                      brief in your email app so you remain in control of sending it.
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {step > 0 ? (
                        <button
                          type="button"
                          onClick={back}
                          className="inline-flex h-12 items-center rounded-full border border-border-strong bg-background px-5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-foreground"
                        >
                          Back
                        </button>
                      ) : null}
                      {step < steps.length - 1 ? (
                        <button
                          type="button"
                          onClick={next}
                          className="inline-flex h-12 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-brand-foreground"
                        >
                          Continue
                          <SendIcon size={15} className="ml-2" animateOnHover />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={submit}
                          className="inline-flex h-12 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-brand-foreground"
                        >
                          Prepare project email
                          <SendIcon size={15} className="ml-2" animateOnHover />
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
                        <CheckIcon size={16} animate />
                        Your email app should now be open with the full brief ready to send.
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.section>
        </Container>
      </section>
      <SiteFooter />
    </main>
  );
}

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
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  type?: string;
}) {
  return (
    <motion.input
      whileFocus={{ scale: 1.01 }}
      transition={{ duration: 0.18 }}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="h-12 w-full rounded-2xl border border-border bg-background px-4 text-sm outline-none transition-[border-color,box-shadow,transform] placeholder:text-muted-foreground/60 hover:border-border-strong focus:border-brand focus:shadow-[0_0_0_3px_rgb(46_197_182_/_0.12)]"
    />
  );
}

function TextArea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <motion.textarea
      whileFocus={{ scale: 1.005 }}
      transition={{ duration: 0.18 }}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      rows={7}
      placeholder={placeholder}
      className="min-h-[210px] w-full resize-y rounded-2xl border border-border bg-background px-4 py-3 text-sm leading-7 outline-none transition-[border-color,box-shadow,transform] placeholder:text-muted-foreground/60 hover:border-border-strong focus:border-brand focus:shadow-[0_0_0_3px_rgb(46_197_182_/_0.12)]"
    />
  );
}

function AnimatedSelect({
  value,
  options,
  placeholder,
  onChange,
}: {
  value: string;
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <motion.button
        type="button"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => setOpen((current) => !current)}
        className="flex h-12 w-full items-center justify-between rounded-2xl border border-border bg-background px-4 text-left text-sm outline-none transition-[border-color,box-shadow] hover:border-border-strong focus:border-brand focus:shadow-[0_0_0_3px_rgb(46_197_182_/_0.12)]"
      >
        <span className={value ? "text-foreground" : "text-muted-foreground/60"}>{value || placeholder}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }}>
          <span className="relative block h-3 w-3">
            <span className="absolute left-0 top-1.5 h-0.5 w-1.8 rounded-full bg-muted-foreground transition-colors group-hover:bg-foreground" />
            <span className="absolute right-0 top-1.5 h-0.5 w-1.8 rounded-full bg-muted-foreground transition-colors group-hover:bg-foreground" />
          </span>
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-30 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-background shadow-[0_20px_60px_rgb(0_0_0_/_0.08)]"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors hover:bg-surface"
              >
                <span>{option}</span>
                {value === option ? <CheckIcon size={14} animate /> : null}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border px-3 py-2">
      <span className="font-mono text-[9px] uppercase tracking-[.22em] text-muted-foreground">
        {label}
      </span>
      <span className="min-w-0 truncate text-sm text-foreground">{value}</span>
    </div>
  );
}

function InfoCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <p className="font-medium">{title}</p>
      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{copy}</p>
    </div>
  );
}
