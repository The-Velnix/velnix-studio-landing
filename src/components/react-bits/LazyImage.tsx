import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  placeholderClassName?: string;
  threshold?: number;
  rootMargin?: string;
  priority?: boolean;
};

export default function LazyImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  placeholderClassName = "",
  threshold = 0.18,
  rootMargin = "180px",
  priority = false,
}: LazyImageProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(priority);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (priority || inView || !ref.current) return;
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, priority, rootMargin, threshold]);

  return (
    <div ref={ref} className={"relative overflow-hidden " + className}>
      {!loaded && (
        <div
          className={
            "absolute inset-0 animate-pulse bg-gradient-to-br from-brand/10 via-surface to-border/30 " +
            placeholderClassName
          }
        />
      )}
      {inView && (
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          onLoad={() => setLoaded(true)}
          initial={reduce ? false : { opacity: 0, scale: 1.06, filter: "blur(10px)" }}
          animate={
            loaded || reduce
              ? { opacity: 1, scale: 1, filter: "blur(0px)" }
              : { opacity: 0, scale: 1.06, filter: "blur(10px)" }
          }
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={"h-full w-full object-cover " + imgClassName}
        />
      )}
    </div>
  );
}
