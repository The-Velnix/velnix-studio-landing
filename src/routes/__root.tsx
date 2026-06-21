import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SmoothScroll } from "../components/smooth-scroll";
import { Container, SiteFooter, SiteHeader } from "../components/site-shell";

function NotFoundComponent() {
  const reduce = useReducedMotion();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative flex min-h-[88svh] items-center overflow-hidden border-b border-border pb-20 pt-28">
        <div className="absolute inset-0 grid-bg opacity-45 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70 md:h-[780px] md:w-[780px]" />
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand/35 [animation:hero-orbit_36s_linear_infinite] md:h-[500px] md:w-[500px]">
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_28px_var(--brand)]" />
        </div>
        <Container className="relative z-10 text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="font-mono text-[9px] uppercase tracking-[.25em] text-brand"
          >
            Route status / not found
          </motion.p>
          <div className="mt-5 overflow-hidden">
            <motion.h1
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(7rem,24vw,18rem)] font-semibold leading-[.75] tracking-[-.08em]"
            >
              404
            </motion.h1>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-.03em] md:text-5xl">
              This route never{" "}
              <span className="font-accent font-light italic text-muted-foreground">shipped.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted-foreground md:text-base">
              The page may have moved, changed name, or never made it into production. The useful
              parts of the site are still close by.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                className="inline-flex h-12 items-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-all hover:-translate-y-1 hover:bg-brand"
              >
                Return home <span className="ml-2">-&gt;</span>
              </Link>
              <a
                href="/#work"
                className="inline-flex h-12 items-center rounded-full border border-border-strong bg-background/80 px-6 text-sm font-semibold transition-all hover:-translate-y-1 hover:border-foreground"
              >
                Explore our work
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
      <SiteFooter />
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Velnix — From Idea to Production" },
      {
        name: "description",
        content:
          "AI-Native Product & Engineering Studio. We design, build, and scale software products, AI systems, and mobile applications.",
      },
      { name: "author", content: "The Velnix" },
      { property: "og:title", content: "The Velnix — From Idea to Production" },
      {
        property: "og:description",
        content:
          "AI-Native Product & Engineering Studio. We design, build, and scale software products, AI systems, and mobile applications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@TheVelnix" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg?v=2" },
      { rel: "shortcut icon", type: "image/svg+xml", href: "/favicon.ico?v=2" },
      { rel: "apple-touch-icon", href: "/velnix-mark-dark.png?v=2" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Sora:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
