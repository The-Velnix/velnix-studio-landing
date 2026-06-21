import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { MenuIcon } from "@/components/animate-ui/icons/menu";
import { SendIcon } from "@/components/animate-ui/icons/send";
import { XIcon } from "@/components/animate-ui/icons/x";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-10 ${className}`}>{children}</div>
  );
}

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="The Velnix home"
      className="group flex items-center gap-2.5 font-display text-[15px] font-bold tracking-[-.04em]"
    >
      <img
        src={light ? "/velnix-mark-light.png" : "/velnix-mark-dark.png"}
        alt=""
        width={1206}
        height={978}
        className="h-7 w-auto transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
      />
      THE VELNIX
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  const classes = light
    ? "bg-background text-foreground hover:bg-brand hover:text-white"
    : "bg-foreground text-background hover:bg-brand";
  return (
    <a
      href={href}
      className={`group inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-all ${classes} border-transparent`}
    >
      {children}
      <SendIcon size={14} className="transition-transform group-hover:translate-x-0.5" animateOnHover />
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);
  const links = [
    ["Services", "/#services"],
    ["Work", "/#work"],
    ["Process", "/#process"],
    ["Team", "/#team"],
    ["Blog", "/blog"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${scrolled || open ? "border-b border-border/80 bg-background/90 shadow-[0_8px_40px_rgb(0_0_0_/_0.045)] backdrop-blur-xl" : "border-b border-transparent bg-background/0"}`}
      >
      <Container className="flex h-16 items-center justify-between lg:h-[72px]">
        <Brand />
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-border/80 bg-background/80 p-1.5 shadow-[0_8px_30px_rgb(0_0_0_/_0.05)] backdrop-blur-xl lg:flex"
          aria-label="Primary navigation"
        >
          {links.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className="group relative rounded-full px-3.5 py-2 text-[13px] font-medium text-muted-foreground transition-all duration-300 hover:bg-surface hover:text-foreground"
            >
              <span className="absolute left-2 top-1/2 h-1 w-1 -translate-y-1/2 scale-0 rounded-full bg-brand transition-transform group-hover:scale-100" />
              {label}
              <span className="sr-only">, item {index + 1}</span>
            </a>
          ))}
        </nav>
        <a
          href="/contact"
          className="group hidden h-11 items-center gap-2 rounded-full border border-brand/20 bg-foreground px-5 text-[13px] font-semibold text-background shadow-[0_10px_28px_rgb(0_0_0_/_0.12)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgb(0_0_0_/_0.16)] active:translate-y-0 lg:inline-flex"
        >
          Start a project
          <SendIcon size={14} className="transition-transform group-hover:translate-x-0.5" animateOnHover />
        </a>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-colors hover:border-brand lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <XIcon size={18} animate /> : <MenuIcon size={18} animate />}
        </button>
      </Container>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-background lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
            <Container className="relative flex min-h-full flex-col pb-8 pt-10">
              <div className="border-t border-border">
                {links.map(([label, href], index) => (
                  <motion.a
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + index * 0.045, duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex items-center justify-between border-b border-border py-4 min-[390px]:py-5"
                  >
                    <span className="font-display text-[clamp(1.85rem,8.6vw,2.75rem)] font-semibold leading-none tracking-[-.04em] transition-colors group-hover:text-brand">
                      {label}
                    </span>
                    <span className="font-mono text-[9px] tracking-widest text-muted-foreground">
                      0{index + 1}
                    </span>
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.45 }}
                className="mt-auto pt-8"
              >
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex h-14 w-full items-center justify-between rounded-full border border-brand/20 bg-foreground px-6 text-sm font-semibold text-background shadow-[0_12px_30px_rgb(0_0_0_/_0.12)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgb(0_0_0_/_0.16)]"
                >
                  Start a project
                  <SendIcon size={15} animateOnHover />
                </a>
                <div className="mt-5 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  <span>India / Global</span>
                  <a href="mailto:hello@thevelnix.com">Email us</a>
                </div>
              </motion.div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-background/10 bg-foreground text-background">
      <div className="absolute inset-0 grid-bg opacity-[.04]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent" />
      <img
        src="/velnix-mark-light.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-[-4rem] h-72 w-auto opacity-[.025] md:h-[26rem]"
      />
      <Container className="relative py-14 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start justify-between gap-8 border-b border-background/15 pb-10 md:flex-row md:items-end"
        >
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[.22em] text-brand">
              Have something ambitious in mind?
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-[.98] tracking-[-.04em] md:text-7xl">
              Let&apos;s make it
              <span className="font-accent font-light italic text-background/50"> real.</span>
            </h2>
          </div>
          <a
            href="/contact"
            className="group inline-flex h-13 items-center gap-3 rounded-full bg-background px-6 text-sm font-semibold text-foreground transition-all hover:-translate-y-1 hover:bg-brand hover:text-brand-foreground"
          >
            Start a conversation
            <SendIcon size={16} animateOnHover />
          </a>
        </motion.div>

        <div className="grid gap-10 py-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Brand light />
            <p className="mt-4 max-w-sm text-sm leading-7 text-background/55">
              Product strategy, design and engineering for teams moving from ambitious idea to
              dependable production.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-background/45">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
              Select Q3 projects open
            </div>
          </div>
          <FooterColumn
            title="Navigate"
            links={[
              ["Services", "/#services"],
              ["Work", "/#work"],
              ["Process", "/#process"],
              ["Team", "/#team"],
            ]}
          />
          <FooterColumn
            title="Read"
            links={[
              ["Field notes", "/blog"],
              ["Privacy", "/privacy"],
              ["Terms", "/terms"],
            ]}
          />
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-background/40">
              Contact
            </p>
            <a
              href="mailto:hello@thevelnix.com"
              className="mt-4 block text-sm text-background/70 transition-colors hover:text-brand"
            >
              hello@thevelnix.com
            </a>
            <p className="mt-4 font-mono text-[9px] uppercase leading-5 tracking-widest text-background/35">
              India
              <br />
              Working globally / IST
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-background/10 pt-6 font-mono text-[9px] uppercase tracking-widest text-background/35 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright {new Date().getFullYear()} The Velnix</span>
          <span>Built with care. Shipped with discipline.</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<[string, string]> }) {
  return (
    <div>
      <p className="font-mono text-[9px] uppercase tracking-widest text-background/40">{title}</p>
      <div className="mt-4 flex flex-col items-start gap-2.5 text-sm">
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="text-background/65 transition-all hover:translate-x-1 hover:text-brand"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
