import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import BlurText from "@/components/react-bits/BlurText";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
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
              <BlurText
                text="Tell us what needs to get shipped."
                animateBy="words"
                direction="bottom"
                delay={65}
                stepDuration={0.34}
                className="block"
              />
            </h1>
            <ScrollReveal
              containerClassName="mx-auto mt-6 max-w-2xl"
              textClassName="text-base leading-8 text-muted-foreground md:text-lg"
              baseOpacity={0.18}
              baseRotation={2}
              blurStrength={6}
            >
              Early idea or tangled production system, both are welcome. Share the context you have
              and we will reply with useful next steps within two business days.
            </ScrollReveal>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="flex justify-center">
          <motion.section
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.06 }}
            className="w-full max-w-6xl rounded-[32px] border border-border bg-surface p-4 shadow-[0_28px_90px_rgb(0_0_0_/_0.05)] md:p-8"
          >
            <div className="rounded-[28px] border border-border bg-background p-6 md:p-10">
              <div className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[.24em] text-brand">
                    Project brief
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-.03em] md:text-4xl">
                    <BlurText
                      text="A clean way to gather the right context."
                      animateBy="words"
                      direction="bottom"
                      delay={60}
                      stepDuration={0.3}
                      className="block"
                    />
                  </h2>
                </div>
                <div className="w-full max-w-xs">
                  <div className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[.22em] text-muted-foreground">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
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

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center justify-between border-b border-border pb-8">
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
                      className="flex items-center gap-3 text-left group cursor-pointer transition-all duration-200"
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          active
                            ? "bg-brand border-brand text-brand-foreground shadow-[0_0_15px_rgba(46,197,182,0.25)] scale-105"
                            : done
                              ? "bg-foreground border-foreground text-background"
                              : "bg-surface border-border text-muted-foreground group-hover:border-border-strong group-hover:bg-background/80"
                        }`}
                      >
                        {done ? <CheckIcon size={14} animate /> : <Icon size={16} />}
                      </div>
                      <div>
                        <span className="block font-mono text-[8px] uppercase tracking-[.22em] text-brand">
                          Step {item.step}
                        </span>
                        <span
                          className={`block font-display text-sm font-semibold transition-colors duration-200 ${
                            active
                              ? "text-foreground"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 min-w-0">
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
                      className="grid gap-8"
                    >
                      <div>
                        <span className="block font-mono text-[9px] uppercase tracking-[.22em] text-brand mb-3">
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
                        <span className="block font-mono text-[9px] uppercase tracking-[.22em] text-brand mb-3">
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
                        <span className="block font-mono text-[9px] uppercase tracking-[.22em] text-brand mb-3">
                          Ideal start *
                        </span>
                        <OptionSelector
                          value={draft.timeline}
                          options={timelineOptions}
                          onChange={(value) => update("timeline", value)}
                          columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
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
                      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-surface/50 p-4">
                        <span className="font-mono text-[9px] uppercase tracking-[.22em] text-muted-foreground mr-2">
                          Selection:
                        </span>
                        {draft.service && (
                          <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-3 py-1 text-xs text-brand font-medium">
                            {draft.service}
                          </span>
                        )}
                        {draft.budget && (
                          <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-3 py-1 text-xs text-brand font-medium">
                            {draft.budget}
                          </span>
                        )}
                        {draft.timeline && (
                          <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-3 py-1 text-xs text-brand font-medium">
                            {draft.timeline}
                          </span>
                        )}
                      </div>

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

                <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-md text-[11px] leading-5 text-muted-foreground">
                    Your details stay in your browser until you submit. Submitting prepares the
                    brief in your email app so you remain in control of sending it.
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={back}
                        className="inline-flex h-12 items-center rounded-full border border-border-strong bg-background px-5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-foreground cursor-pointer"
                      >
                        Back
                      </button>
                    ) : null}
                    {step < steps.length - 1 ? (
                      <button
                        type="button"
                        onClick={next}
                        className="inline-flex h-12 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-brand-foreground cursor-pointer"
                      >
                        Continue
                        <SendIcon size={15} className="ml-2" animateOnHover />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={submit}
                        className="inline-flex h-12 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-brand-foreground cursor-pointer"
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
          </motion.section>
        </Container>
      </section>
      <SiteFooter hideCta />
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
      className="h-14 w-full rounded-2xl border border-border bg-background/50 px-5 text-base outline-none transition-all duration-300 placeholder:text-muted-foreground/45 hover:border-border-strong/80 hover:bg-background focus:border-brand focus:bg-background focus:shadow-[0_0_20px_rgba(46,197,182,0.15)] focus:scale-[1.01]"
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
      className="min-h-[240px] w-full resize-y rounded-2xl border border-border bg-background/50 px-5 py-4 text-base leading-7 outline-none transition-all duration-300 placeholder:text-muted-foreground/45 hover:border-border-strong/80 hover:bg-background focus:border-brand focus:bg-background focus:shadow-[0_0_20px_rgba(46,197,182,0.15)] focus:scale-[1.005]"
    />
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
    <div className={`grid gap-3.5 ${columns}`}>
      {options.map((option) => {
        const isSelected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`relative flex items-center justify-between rounded-2xl border p-4.5 text-left transition-all duration-300 cursor-pointer ${
              isSelected
                ? "border-brand bg-brand/[0.04] text-foreground shadow-[0_0_20px_rgba(46,197,182,0.12)] scale-[1.02]"
                : "border-border bg-surface hover:border-border-strong hover:bg-background/80"
            }`}
          >
            <span className="font-display font-medium text-sm md:text-[15px] leading-snug">
              {option}
            </span>
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all ${
                isSelected
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border bg-background"
              }`}
            >
              {isSelected && (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="h-3 w-3 text-brand-foreground"
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

function InfoCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <p className="font-medium">{title}</p>
      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{copy}</p>
    </div>
  );
}
