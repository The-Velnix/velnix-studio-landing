import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

interface ButtonColorfulProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  href?: string;
}

export function ButtonColorful({
  className,
  label = "Explore Components",
  href,
  ...props
}: ButtonColorfulProps) {
  const content: ReactNode = (
    <span className="relative flex items-center justify-center gap-2">
      <span>{label}</span>
      <svg
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </span>
  );

  const isLocal =
    href && href.startsWith("/") && !href.startsWith("/#") && !href.startsWith("http");

  return (
    <Button
      asChild={Boolean(href)}
      className={cn(
        "group relative h-12 overflow-hidden rounded-full bg-foreground px-6",
        "text-background transition-all duration-300 hover:-translate-y-0.5",
        "shadow-[0_6px_20px_rgb(0_0_0_/_0.12)] hover:shadow-[0_12px_28px_rgb(0_0_0_/_0.18)]",
        className,
      )}
      {...props}
    >
      {href ? isLocal ? <Link to={href}>{content}</Link> : <a href={href}>{content}</a> : content}
    </Button>
  );
}
