import { createFileRoute } from "@tanstack/react-router";
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
        <h1 className="mt-5 font-display text-6xl">Website terms</h1>
        <div className="mt-12 space-y-10 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="font-display text-3xl text-foreground">Using this website</h2>
            <p className="mt-3">
              You may use this website for lawful informational purposes. Do not attempt to disrupt,
              probe or misuse the website or its supporting systems.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">Content</h2>
            <p className="mt-3">
              Website content is provided for general information and may change. It is not a
              binding proposal, warranty or professional advice. Project scope, pricing, ownership
              and service commitments are governed only by a separately signed agreement.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">Intellectual property</h2>
            <p className="mt-3">
              Unless stated otherwise, The Velnix owns the website design, copy and original
              materials. Product and client marks belong to their respective owners.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">Liability</h2>
            <p className="mt-3">
              To the extent permitted by law, The Velnix is not liable for loss arising solely from
              reliance on this website or from temporary website unavailability.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-foreground">Contact</h2>
            <p className="mt-3">
              Questions may be sent to{" "}
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
