import type { ButtonHTMLAttributes, ReactNode } from "react";
import { SendIcon } from "@/components/animate-ui/icons/send";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <>
      <span className="absolute inset-0 bg-brand transition-opacity duration-300 group-hover:opacity-90" />
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_58%)] opacity-70" />
      <span className="relative flex items-center justify-center gap-2.5">
        <span className="text-brand-foreground">{label}</span>
        <SendIcon size={15} className="text-brand-foreground" animateOnHover />
      </span>
    </>
  );

  return (
    <Button
      asChild={Boolean(href)}
      className={cn(
        "group relative h-12 overflow-hidden rounded-full border border-brand/20 bg-foreground px-6",
        "text-background shadow-[0_10px_30px_rgb(0_0_0_/_0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgb(0_0_0_/_0.18)]",
        className,
      )}
      {...props}
    >
      {href ? <a href={href}>{content}</a> : content}
    </Button>
  );
}
