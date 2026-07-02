import { Link, useLocation } from "@tanstack/react-router";
import { type ReactNode } from "react";
import StaggeredMenu from "@/components/react-bits/StaggeredMenu";
import { SendIcon } from "@/components/animate-ui/icons/send";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={"mx-auto w-full max-w-[1200px] px-6 md:px-10 " + className}>{children}</div>
  );
}

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="The Velnix home"
      className="flex items-center gap-2.5 font-display text-[15px] font-bold tracking-[-.04em]"
    >
      <img
        src={light ? "/velnix-mark-light.png" : "/velnix-mark-dark.png"}
        alt=""
        width={1206}
        height={978}
        className="h-7 w-auto"
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
      className={
        "group inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-all " +
        classes +
        " border-transparent"
      }
    >
      {children}
      <SendIcon
        size={14}
        className="transition-transform group-hover:translate-x-0.5"
        animateOnHover
      />
    </a>
  );
}

export function SiteHeader() {
  const location = useLocation();

  return (
    <StaggeredMenu
      logoUrl="/velnix-mark-dark.png"
      position="right"
      items={[
        { label: "Home", ariaLabel: "Go to home page", link: "/" },
        { label: "Work", ariaLabel: "View work", link: "/work" },
        { label: "Team", ariaLabel: "View team", link: "/team" },
        { label: "Blog", ariaLabel: "Read blog", link: "/blog" },
      ]}
      socialItems={[
        { label: "Email", link: "mailto:hello@thevelnix.com" },
        { label: "LinkedIn", link: "https://www.linkedin.com/company/the-velnix" },
        { label: "Instagram", link: "https://www.instagram.com/the_velnix?igsh=dDhnNjRmcTB5eWdw" },
        { label: "X / Twitter", link: "https://x.com/The_Velnix" },
        { label: "Dribbble", link: "https://dribbble.com/the-velnix" },
      ]}
      displaySocials
      displayItemNumbering
      menuButtonColor="#0f1115"
      openMenuButtonColor="#0f1115"
      changeMenuColorOnOpen
      colors={["#111318", "#2EC5B6", "#F5F3EF"]}
      accentColor="#2EC5B6"
      currentPath={location.pathname}
      currentHash={location.hash}
    />
  );
}

export function SiteFooter({ hideCta = false }: { hideCta?: boolean }) {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background text-foreground">
      <div className="absolute inset-0 grid-bg opacity-[.05]" />
      <img
        src="/velnix-mark-dark.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-[-4rem] h-72 w-auto opacity-[.03] md:h-[26rem]"
      />
      <Container className="relative py-14 md:py-16">
        <div className="grid gap-10 py-10 md:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr_1.4fr]">
          <div>
            <Brand light={false} />
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
              Product strategy, design and engineering for teams moving from ambitious idea to
              dependable production.
            </p>
          </div>
          <FooterColumn
            title="Navigate"
            links={[
              ["Services", "/#services"],
              ["Work", "/work"],
              ["Process", "/#process"],
              ["Team", "/team"],
              ["Blog", "/blog"],
            ]}
          />
          <FooterColumn
            title="Social"
            links={[
              ["LinkedIn", "https://www.linkedin.com/company/the-velnix"],
              ["Instagram", "https://www.instagram.com/the_velnix?igsh=dDhnNjRmcTB5eWdw"],
              ["X / Twitter", "https://x.com/The_Velnix"],
              ["Dribbble", "https://dribbble.com/the-velnix"],
            ]}
          />
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              Address
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground">
              FF-09 Saffrin icon
              <br />
              OPP seniro citizen garden, Anand, Gujarat, India
              <br />
              Working globally / IST
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <a
              href="mailto:hello@thevelnix.com"
              className="mt-4 block text-sm text-foreground transition-colors hover:text-brand"
            >
              hello@thevelnix.com
            </a>
            <div className="mt-6 rounded-2xl border border-border bg-surface/60 p-4">
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                Office hours
              </p>
              <p className="mt-2 text-sm leading-7 text-foreground whitespace-nowrap">
                Mon-Fri, 10:00 - 18:00 IST
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 font-mono text-[9px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
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
      <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <div className="mt-4 flex flex-col items-start gap-2.5 text-sm">
        {links.map(([label, href]) => {
          const isLocal =
            href.startsWith("/") && !href.startsWith("/#") && !href.startsWith("http");
          return isLocal ? (
            <Link
              key={label}
              to={href}
              className="text-foreground transition-all hover:translate-x-1 hover:text-brand"
            >
              {label}
            </Link>
          ) : (
            <a
              key={label}
              href={href}
              className="text-foreground transition-all hover:translate-x-1 hover:text-brand"
            >
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
