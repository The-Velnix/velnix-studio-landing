// @ts-nocheck
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { x: 35, opacity: 0 },
  show: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 280, 
      damping: 24 
    } 
  },
};

export default function StaggeredMenu(props) {
  const {
    position = "right",
    colors = ["#B497CF", "#5227FF"],
    items = [],
    socialItems = [],
    displaySocials = true,
    displayItemNumbering = true,
    className,
    logoUrl = "/velnix-mark-dark.png",
    menuButtonColor = "#0f1115",
    openMenuButtonColor = "#ffffff",
    accentColor = "#2EC5B6",
    changeMenuColorOnOpen = true,
    closeOnClickAway = true,
    onMenuOpen,
    onMenuClose,
    currentPath = "/",
    currentHash = "",
  } = props;
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);
  const panelSide = position === "left" ? "left-0" : "right-0";
  const layeredColors = useMemo(
    () => (colors && colors.length ? colors.slice(0, 3) : ["#e7e7eb", "#d7f5f0", "#c2efe9"]),
    [colors],
  );

  useEffect(() => {
    if (!buttonRef.current) return;
    buttonRef.current.style.color = open ? openMenuButtonColor : menuButtonColor;
  }, [open, menuButtonColor, openMenuButtonColor]);

  useEffect(() => {
    if (!closeOnClickAway || !open) return;
    const onDown = (event) => {
      if (panelRef.current?.contains(event.target) || buttonRef.current?.contains(event.target))
        return;
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [closeOnClickAway, open, onMenuClose]);

  useEffect(() => {
    if (changeMenuColorOnOpen && buttonRef.current) {
      buttonRef.current.style.color = open ? openMenuButtonColor : menuButtonColor;
    }
  }, [changeMenuColorOnOpen, open, menuButtonColor, openMenuButtonColor]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const closeMenuOnDesktop = (event) => {
      if (!event.matches || !openRef.current) return;
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
    };

    desktopQuery.addEventListener("change", closeMenuOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeMenuOnDesktop);
  }, [onMenuClose]);

  const toggle = () => {
    const next = !openRef.current;
    openRef.current = next;
    setOpen(next);
    if (next) {
      onMenuOpen?.();
    } else {
      onMenuClose?.();
    }
  };

  const navItems = items.length
    ? items
    : [
        { label: "Home", ariaLabel: "Go to home page", link: "/" },
        { label: "Work", ariaLabel: "View work", link: "/work" },
        { label: "Team", ariaLabel: "View team", link: "/team" },
        { label: "Blog", ariaLabel: "Read blog", link: "/blog" },
      ];

  const isActive = (link) => {
    if (link === "/") return currentPath === "/" && !currentHash;
    const [pathname, hash = ""] = link.split("#");
    if (hash) return currentPath === pathname && currentHash === `#${hash}`;
    return currentPath === link || currentPath.startsWith(`${link}/`);
  };

  return (
    <div className={`relative z-50 ${className || ""}`}>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="pointer-events-auto px-4 pt-4 md:px-6">
          <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between rounded-full border border-border/70 bg-background/88 px-4 shadow-[0_8px_30px_rgb(0_0_0_/_0.05)] backdrop-blur-xl md:px-5">
            <Link
              to="/"
              aria-label="The Velnix home"
              className="flex items-center gap-2.5 font-display text-[15px] font-bold tracking-[-.04em]"
            >
              <img src={logoUrl} alt="" className="h-7 w-auto" />
              <span>THE VELNIX</span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
              {navItems.map((item, index) => {
                const active = isActive(item.link);
                return (
                  <Link
                    key={item.label}
                    to={item.link}
                    aria-label={item.ariaLabel}
                    aria-current={active ? "page" : undefined}
                    className={`group relative rounded-full pl-6 pr-4 py-2 text-[13px] font-medium transition-all duration-300 ${active ? "bg-surface text-foreground shadow-[0_6px_18px_rgb(0_0_0_/_0.04)]" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`}
                  >
                    <span
                      className={`absolute left-2.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-brand transition-all duration-300 ${active ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`}
                    />
                    {item.label}
                    <span className="sr-only">, item {index + 1}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/contact"
                className="hidden lg:flex h-11 items-center rounded-full bg-foreground px-5 text-[13px] font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Start a project
              </Link>
              <button
                ref={buttonRef}
                type="button"
                onClick={toggle}
                aria-expanded={open}
                aria-controls="staggered-menu-panel"
                aria-label={open ? "Close menu" : "Open menu"}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-all hover:border-brand lg:hidden"
              >
                {open ? (
                  <X className="h-4 w-4 transition-transform duration-300" />
                ) : (
                  <Menu className="h-4 w-4 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-sm lg:hidden"
              onClick={toggle}
            />

            <motion.aside
              id="staggered-menu-panel"
              ref={panelRef}
              initial={{ x: position === "right" ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: position === "right" ? "100%" : "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className={`fixed top-0 ${panelSide} z-40 h-[100svh] w-full max-w-[380px] border-l border-border/80 bg-background/96 px-6 pb-8 pt-24 shadow-[0_20px_60px_rgba(0,0,0,.12)] backdrop-blur-2xl lg:hidden overflow-y-auto ${position === "right" ? "rounded-l-[2rem]" : "rounded-r-[2rem]"}`}
            >
              <div className="relative flex min-h-full flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[.24em] text-muted-foreground">
                    Navigation
                  </span>
                  <span className="rounded-full bg-brand/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[.24em] text-brand">
                    Active
                  </span>
                </div>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid gap-2 border-t border-border/70 pt-4"
                >
                  {navItems.map((item, index) => {
                    const active = isActive(item.link);
                    return (
                      <motion.div key={item.label} variants={itemVariants} whileHover={{ x: 4 }}>
                        <Link
                          to={item.link}
                          onClick={() => {
                            openRef.current = false;
                            setOpen(false);
                            onMenuClose?.();
                          }}
                          className="group flex items-center justify-between border-b border-border/60 py-4"
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`h-2 w-2 rounded-full bg-brand transition-all duration-300 ${active ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`}
                            />
                            <span
                              className={`font-display text-[clamp(1.9rem,7vw,2.8rem)] font-semibold leading-none tracking-[-.04em] ${active ? "text-brand" : "text-foreground group-hover:text-brand"}`}
                            >
                              {item.label}
                            </span>
                          </span>
                          {displayItemNumbering ? (
                            <span className="font-mono text-[9px] tracking-widest text-muted-foreground">
                              0{index + 1}
                            </span>
                          ) : null}
                        </Link>
                      </motion.div>
                    );
                  })}

                  <motion.div variants={itemVariants} className="mt-6 border-t border-border/70 pt-6">
                    <Link
                      to="/contact"
                      onClick={() => {
                        openRef.current = false;
                        setOpen(false);
                        onMenuClose?.();
                      }}
                      className="flex h-12 w-full items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background transition-all hover:bg-brand hover:text-brand-foreground hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Start a project
                    </Link>
                  </motion.div>
                </motion.div>

                {displaySocials && socialItems?.length ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="mt-auto pt-8"
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[.24em] text-muted-foreground">
                      Socials
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {socialItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.link}
                          className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-brand hover:text-brand hover:-translate-y-0.5"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
