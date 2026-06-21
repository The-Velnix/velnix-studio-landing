import { createFileRoute } from "@tanstack/react-router";
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
        <h1 className="mt-5 font-display text-6xl">Privacy policy</h1>
        <div className="mt-12 space-y-10 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="font-display text-3xl text-foreground">The short version</h2>
            <p className="mt-3">
              This website does not store project briefs submitted through the contact form. The
              form prepares an email in your own email application. We receive information only when
              you choose to send that email.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">Information you provide</h2>
            <p className="mt-3">
              When you contact The Velnix, we may receive your name, email address, company details
              and project information. We use it to respond, assess a potential engagement and
              provide requested services.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">Sharing and retention</h2>
            <p className="mt-3">
              We do not sell personal information. We share it only with service providers required
              to operate our business, when legally required, or with your permission. Enquiry
              information is retained only as long as reasonably needed for business and legal
              purposes.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">Your choices</h2>
            <p className="mt-3">
              You may request access, correction or deletion of personal information we hold by
              emailing hello@thevelnix.com. Applicable rights depend on your location.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">Contact</h2>
            <p className="mt-3">
              Questions about this policy can be sent to{" "}
              <a className="text-foreground underline" href="mailto:hello@thevelnix.com">
                hello@thevelnix.com
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}
