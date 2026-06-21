// @ts-nocheck
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  scrollContainerRef = undefined,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  threshold = 0.15,
  rootMargin = "0px",
}) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const isString = typeof children === "string";

  const splitChildren = useMemo(() => {
    if (!isString) return null;
    return children.split(/(\s+)/).map((segment, index) => ({ segment, index }));
  }, [children, isString]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin,
        root: scrollContainerRef?.current ?? null,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, scrollContainerRef, threshold]);

  const wordTransition = (index) => ({
    duration: 0.55,
    delay: index * 0.045,
    ease: [0.16, 1, 0.3, 1],
  });

  const wordInitial = {
    opacity: baseOpacity,
    y: 18,
    rotateX: 12,
    filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
  };

  const wordAnimate = {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
  };

  return (
    <motion.p
      ref={containerRef}
      initial={false}
      animate={inView ? { rotate: 0, opacity: 1 } : { rotate: baseRotation, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={containerClassName}
      style={{ transformStyle: "preserve-3d" }}
    >
      {isString ? (
        <span className={textClassName}>
          {splitChildren.map(({ segment, index }) => {
            if (/^\s+$/.test(segment)) {
              return <span key={index}>{segment}</span>;
            }

            return (
              <motion.span
                key={index}
                className="inline-block will-change-[transform,filter,opacity]"
                initial={wordInitial}
                animate={inView ? wordAnimate : wordInitial}
                transition={wordTransition(index)}
                style={{ display: "inline-block", transformOrigin: "50% 100%" }}
              >
                {segment}
              </motion.span>
            );
          })}
        </span>
      ) : (
        <motion.div
          className={textClassName}
          initial={wordInitial}
          animate={inView ? wordAnimate : wordInitial}
          transition={wordTransition(0)}
        >
          {children}
        </motion.div>
      )}
    </motion.p>
  );
}
