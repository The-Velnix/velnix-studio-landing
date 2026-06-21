// @ts-nocheck
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const getVariation = (distance, radius, fromSettings, toSettings, falloff) => {
  const progress = clamp(1 - distance / radius, 0, 1);
  const eased = falloff === 'linear' ? progress : progress * progress * (3 - 2 * progress);
  const fromWght = fromSettings.wght ?? 400;
  const fromOpsz = fromSettings.opsz ?? 24;
  const toWght = toSettings.wght ?? fromWght;
  const toOpsz = toSettings.opsz ?? fromOpsz;

  const wght = Math.round(fromWght + (toWght - fromWght) * eased);
  const opsz = Math.round(fromOpsz + (toOpsz - fromOpsz) * eased);

  return `'wght' ${wght}, 'opsz' ${opsz}`;
};

const parseSettings = (value) => {
  const map = {};
  if (!value) return map;
  value.split(',').forEach((part) => {
    const [tag, raw] = part.trim().split(/\s+/);
    if (!tag || !raw) return;
    const cleanTag = tag.replace(/['"]/g, '');
    const num = Number(raw);
    if (Number.isFinite(num)) map[cleanTag] = num;
  });
  return map;
};

export default function VariableProximity({
  label = '',
  className = '',
  containerRef,
  fromFontVariationSettings = "'wght' 350, 'opsz' 24",
  toFontVariationSettings = "'wght' 900, 'opsz' 88",
  radius = 180,
  falloff = 'gaussian',
  animateBy = 'letters',
  direction = 'top',
  delay = 0,
  stepDuration = 0.35,
}) {
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(false);
  const rootRef = useRef(null);
  const rafRef = useRef(0);
  const cursorRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const chars = useMemo(() => (animateBy === 'letters' ? Array.from(label) : label.split(' ')), [animateBy, label]);
  const fromSettings = useMemo(() => parseSettings(fromFontVariationSettings), [fromFontVariationSettings]);
  const toSettings = useMemo(() => parseSettings(toFontVariationSettings), [toFontVariationSettings]);

  useEffect(() => {
    const node = containerRef?.current ?? rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [containerRef]);

  useEffect(() => {
    const node = containerRef?.current ?? rootRef.current;
    if (!node) return;

    const updateCursor = (x, y) => {
      cursorRef.current.x = x;
      cursorRef.current.y = y;
    };

    const onMove = (event) => {
      updateCursor(event.clientX, event.clientY);
      setActive(true);
    };

    const onLeave = () => setActive(false);

    node.addEventListener('mousemove', onMove);
    node.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousemove', onMove);

    const rect = node.getBoundingClientRect();
    updateCursor(rect.left + rect.width / 2, rect.top + rect.height / 2);
    mouseRef.current = { x: cursorRef.current.x, y: cursorRef.current.y };

    return () => {
      node.removeEventListener('mousemove', onMove);
      node.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousemove', onMove);
    };
  }, [containerRef]);

  useEffect(() => {
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 10;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 10;

      const node = containerRef?.current ?? rootRef.current;
      if (node) {
        const parentRect = node.getBoundingClientRect();
        const maxDistance = Math.max(180, parentRect.width * 0.22);
        const spans = node.querySelectorAll('[data-variable-proximity-char]');

        spans.forEach((span) => {
          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          };
          const dx = mouseRef.current.x - charCenter.x;
          const dy = mouseRef.current.y - charCenter.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          span.style.fontVariationSettings = getVariation(distance, radius ?? maxDistance, fromSettings, toSettings, falloff);
          span.style.opacity = active || inView ? '1' : '0.98';
          span.style.transform = distance < 2 ? 'translateY(0)' : 'translateY(0)';
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, containerRef, falloff, fromSettings, inView, radius, toSettings]);

  return (
    <span
      ref={rootRef}
      className={`inline-flex flex-wrap justify-center leading-[1.05] ${className}`.trim()}
      style={{
        willChange: 'transform',
        fontVariationSettings: fromFontVariationSettings,
        paddingBottom: '0.08em',
      }}
    >
      {chars.map((char, index) => {
        const segment = char === ' ' ? '\u00A0' : char;
        return (
          <motion.span
            key={`${char}-${index}`}
            data-variable-proximity-char
            initial={false}
            animate={inView ? { y: 0, opacity: 1 } : { y: direction === 'top' ? -2 : 2, opacity: 0.96 }}
            transition={{ duration: stepDuration, delay: (index * delay) / 1000 }}
            className="inline-block"
            style={{
              willChange: 'font-variation-settings, transform, opacity',
            }}
          >
            {segment}
          </motion.span>
        );
      })}
    </span>
  );
}
