import { createFileRoute } from "@tanstack/react-router";
import BlurText from "@/components/react-bits/BlurText";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import { Container, SiteFooter, SiteHeader } from "../components/site-shell";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms | The Velnix" }] }),
  component: Terms,
});

function Terms() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Container className="max-w-[800px] pb-24 pt-36">
        <p className="font-mono text-[10px] uppercase tracking-widest text-brand">
          Legal / Updated June 21, 2026
        </p>
        <h1 className="mt-5 font-display text-6xl">
          <BlurText
            text="Website terms"
            animateBy="words"
            direction="bottom"
            delay={60}
            stepDuration={0.32}
            className="block"
          />
        </h1>
        <div className="mt-12 space-y-10 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="font-display text-3xl text-foreground">
              <BlurText
                text="Using this website"
                animateBy="words"
                direction="bottom"
                delay={45}
                stepDuration={0.28}
                className="block"
              />
            </h2>
            <ScrollReveal
              containerClassName="mt-3"
              textClassName="text-sm leading-7 text-muted-foreground"
              baseOpacity={0.18}
              baseRotation={2}
              blurStrength={6}
            >
              You may use this website for lawful informational purposes. Do not attempt to disrupt,
              probe or misuse the website or its supporting systems.
            </ScrollReveal>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">
              <BlurText
                text="Content"
                animateBy="words"
                direction="bottom"
                delay={45}
                stepDuration={0.28}
                className="block"
              />
            </h2>
            <ScrollReveal
              containerClassName="mt-3"
              textClassName="text-sm leading-7 text-muted-foreground"
              baseOpacity={0.18}
              baseRotation={2}
              blurStrength={6}
            >
              Website content is provided for general information and may change. It is not a
              binding proposal, warranty or professional advice. Project scope, pricing, ownership
              and service commitments are governed only by a separately signed agreement.
            </ScrollReveal>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">
              <BlurText
                text="Intellectual property"
                animateBy="words"
                direction="bottom"
                delay={45}
                stepDuration={0.28}
                className="block"
              />
            </h2>
            <ScrollReveal
              containerClassName="mt-3"
              textClassName="text-sm leading-7 text-muted-foreground"
              baseOpacity={0.18}
              baseRotation={2}
              blurStrength={6}
            >
              Unless stated otherwise, The Velnix owns the website design, copy and original
              materials. Product and client marks belong to their respective owners.
            </ScrollReveal>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">
              <BlurText
                text="Liability"
                animateBy="words"
                direction="bottom"
                delay={45}
                stepDuration={0.28}
                className="block"
              />
            </h2>
            <ScrollReveal
              containerClassName="mt-3"
              textClassName="text-sm leading-7 text-muted-foreground"
              baseOpacity={0.18}
              baseRotation={2}
              blurStrength={6}
            >
              To the extent permitted by law, The Velnix is not liable for loss arising solely from
              reliance on this website or from temporary website unavailability.
            </ScrollReveal>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">
              <BlurText
                text="Contact"
                animateBy="words"
                direction="bottom"
                delay={45}
                stepDuration={0.28}
                className="block"
              />
            </h2>
            <ScrollReveal
              containerClassName="mt-3"
              textClassName="text-sm leading-7 text-muted-foreground"
              baseOpacity={0.18}
              baseRotation={2}
              blurStrength={6}
            >
              Questions may be sent to{" "}
              <a className="text-foreground underline" href="mailto:hello@thevelnix.com">
                hello@thevelnix.com
              </a>
              .
            </ScrollReveal>
          </section>
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}
