import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SendIcon } from "@/components/animate-ui/icons/send";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SmoothScroll } from "../components/smooth-scroll";
import GradualBlur from "@/components/react-bits/GradualBlur";
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
                Return home <SendIcon size={15} className="ml-2" animateOnHover />
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
      { property: "og:url", content: "https://thevelnix.com" },
      { property: "og:image", content: "https://thevelnix.com/velnix-mark-dark.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@TheVelnix" },
      { name: "twitter:title", content: "The Velnix — From Idea to Production" },
      {
        name: "twitter:description",
        content:
          "AI-Native Product & Engineering Studio. We design, build, and scale software products, AI systems, and mobile applications.",
      },
      { name: "twitter:image", content: "https://thevelnix.com/velnix-mark-dark.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/velnix-mark-dark.png" },
      { rel: "shortcut icon", type: "image/png", href: "/velnix-mark-dark.png" },
      { rel: "apple-touch-icon", href: "/velnix-mark-dark.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Azeret+Mono:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Manrope:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap",
      },
      { rel: "canonical", href: "https://thevelnix.com" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "The Velnix",
    "legalName": "Velnix Studio",
    "url": "https://thevelnix.com",
    "logo": "https://thevelnix.com/velnix-mark-dark.png",
    "image": "https://thevelnix.com/velnix-mark-dark.png",
    "description": "AI-Native Product & Engineering Studio. We design, build, and scale software products, AI systems, and mobile applications.",
    "sameAs": [
      "https://x.com/The_Velnix",
      "https://github.com/Mihir-Rabari",
      "https://linkedin.com",
      "https://dribbble.com/the-velnix"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "founders": [
      {
        "@type": "Person",
        "name": "Mihir Rabari"
      },
      {
        "@type": "Person",
        "name": "Khushi Trivedi"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Preloader({ progress }: { progress: number }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0b0d]"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-3">
          <motion.img
            src="/velnix-mark-light.png"
            alt="The Velnix"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-14 w-auto"
          />
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[15px] font-bold tracking-[0.2em] text-white"
          >
            THE VELNIX
          </motion.span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-[2px] w-40 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="absolute top-0 bottom-0 left-0 bg-brand"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1200; // 1.2s loading simulation
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 250);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">{loading && <Preloader progress={progress} />}</AnimatePresence>
      <SmoothScroll />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-32 overflow-hidden"
      >
        <GradualBlur
          target="page"
          position="bottom"
          height="8rem"
          strength={2.8}
          divCount={9}
          curve="bezier"
          opacity={1}
          className="bottom-page-blur"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/90 to-transparent" />
      </div>
    </QueryClientProvider>
  );
}
