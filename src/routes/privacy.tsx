import { createFileRoute } from "@tanstack/react-router";
import BlurText from "@/components/react-bits/BlurText";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import { Container, SiteFooter, SiteHeader } from "../components/site-shell";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy | The Velnix" }] }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Container className="max-w-[800px] pb-24 pt-36">
        <p className="font-mono text-[10px] uppercase tracking-widest text-brand">
          Legal / Updated June 21, 2026
        </p>
        <h1 className="mt-5 font-display text-6xl">
          <BlurText
            text="Privacy policy"
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
                text="The short version"
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
              This website does not store project briefs submitted through the contact form. The
              form prepares an email in your own email application. We receive information only when
              you choose to send that email.
            </ScrollReveal>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">
              <BlurText
                text="Information you provide"
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
              When you contact The Velnix, we may receive your name, email address, company details
              and project information. We use it to respond, assess a potential engagement and
              provide requested services.
            </ScrollReveal>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">
              <BlurText
                text="Sharing and retention"
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
              We do not sell personal information. We share it only with service providers required
              to operate our business, when legally required, or with your permission. Enquiry
              information is retained only as long as reasonably needed for business and legal
              purposes.
            </ScrollReveal>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">
              <BlurText
                text="Your choices"
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
              You may request access, correction or deletion of personal information we hold by
              emailing hello@thevelnix.com. Applicable rights depend on your location.
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
              Questions about this policy can be sent to{" "}
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
