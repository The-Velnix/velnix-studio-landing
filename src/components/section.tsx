import type { ReactNode } from "react";
import { motion } from "framer-motion";
import BlurText from "@/components/react-bits/BlurText";
import ScrollReveal from "@/components/react-bits/ScrollReveal";

export function Eyebrow({ children, invert = false }: { children: ReactNode; invert?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] ${invert ? "text-background/60" : "text-muted-foreground"}`}
    >
      <span className={`h-px w-6 ${invert ? "bg-background/40" : "bg-border-strong"}`} />
      {children}
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  titleText,
  body,
}: {
  eyebrow: string;
  title?: ReactNode;
  titleText?: string;
  body?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px", amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.025em] md:text-6xl">
          {titleText ? (
            <BlurText
              text={titleText}
              animateBy="words"
              direction="bottom"
              delay={75}
              stepDuration={0.34}
              className="block"
            />
          ) : (
            title
          )}
        </h2>
      </div>
      {body && (
        <ScrollReveal
          containerClassName="max-w-md"
          textClassName="text-sm leading-7 text-muted-foreground md:text-base"
          baseOpacity={0.16}
          baseRotation={2}
          blurStrength={6}
          threshold={0.2}
        >
          {body}
        </ScrollReveal>
      )}
    </motion.div>
  );
}
