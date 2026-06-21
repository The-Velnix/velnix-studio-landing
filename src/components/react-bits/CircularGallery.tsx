// @ts-nocheck
import { useEffect, useMemo, useRef, useState } from 'react';
import LazyImage from './LazyImage';

const DEFAULT_ITEMS = [
  { image: 'https://picsum.photos/seed/1/800/800', text: 'Bridge' },
  { image: 'https://picsum.photos/seed/2/800/800', text: 'Desk Setup' },
  { image: 'https://picsum.photos/seed/3/800/800', text: 'Waterfall' },
  { image: 'https://picsum.photos/seed/4/800/800', text: 'Strawberries' },
  { image: 'https://picsum.photos/seed/5/800/800', text: 'Deep Diving' },
  { image: 'https://picsum.photos/seed/6/800/800', text: 'Santorini' },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (a, b, t) => a + (b - a) * t;

export default function CircularGallery({
  items,
  bend = 3,
  textColor = '#0f1115',
  borderRadius = 0.05,
  font = 'bold 30px Figtree',
  fontUrl,
  scrollSpeed = 2,
  scrollEase = 0.05,
}) {
  const rootRef = useRef(null);
  const dragRef = useRef({ active: false, x: 0 });
  const targetRotationRef = useRef(0);
  const rotationRef = useRef(0);
  const rafRef = useRef(0);
  const [rotation, setRotation] = useState(0);
  const normalizedItems = useMemo(() => (items && items.length ? items : DEFAULT_ITEMS), [items]);
  const count = normalizedItems.length;
  const radius = clamp(180 + bend * 18, 140, 280);
  const cardWidth = 'clamp(140px, 18vw, 220px)';
  const cardHeight = 'clamp(190px, 24vw, 280px)';
  const cornerRadius = `${clamp(borderRadius * 120, 12, 28)}px`;

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const onWheel = (event) => {
      event.preventDefault();
      targetRotationRef.current += event.deltaY * 0.08 * scrollSpeed;
    };

    const onPointerDown = (event) => {
      dragRef.current.active = true;
      dragRef.current.x = event.clientX;
      node.setPointerCapture?.(event.pointerId);
    };

    const onPointerMove = (event) => {
      if (!dragRef.current.active) return;
      const delta = event.clientX - dragRef.current.x;
      dragRef.current.x = event.clientX;
      targetRotationRef.current += delta * 0.45 * scrollSpeed;
    };

    const endDrag = () => {
      dragRef.current.active = false;
    };

    node.addEventListener('wheel', onWheel, { passive: false });
    node.addEventListener('pointerdown', onPointerDown);
    node.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);

    return () => {
      node.removeEventListener('wheel', onWheel);
      node.removeEventListener('pointerdown', onPointerDown);
      node.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointercancel', endDrag);
    };
  }, [scrollSpeed]);

  useEffect(() => {
    const tick = () => {
      rotationRef.current = lerp(rotationRef.current, targetRotationRef.current, scrollEase);
      setRotation(rotationRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [scrollEase]);

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      role="region"
      aria-label="Circular team gallery"
      className="relative overflow-hidden rounded-[2rem] border border-border bg-background shadow-[0_24px_90px_rgba(0,0,0,.06)] outline-none"
      style={{
        height: 'min(72vh, 760px)',
        touchAction: 'pan-y',
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-[0.18]" />
      <div className="absolute inset-x-10 top-8 z-10 flex items-center justify-between text-[9px] uppercase tracking-[.24em] text-muted-foreground">
        <span>Drag or scroll</span>
        <span style={{ color: textColor }}>{count} specialists</span>
      </div>
      <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70 bg-[radial-gradient(circle,rgba(46,197,182,0.08),transparent_68%)]" />
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand/20" />

      {normalizedItems.map((item, index) => {
        const angle = (360 / count) * index + rotation;
        const transform = `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`;
        return (
          <div
            key={`${item.text}-${index}`}
            className="absolute left-1/2 top-1/2"
            style={{
              transform,
              width: cardWidth,
              height: cardHeight,
              transition: 'transform 180ms linear',
            }}
          >
            <div
              className="group flex h-full w-full flex-col overflow-hidden border border-border bg-surface/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,.12)]"
              style={{ borderRadius: cornerRadius }}
            >
              <div className="relative flex-1 overflow-hidden">
                <LazyImage
                  src={item.image}
                  alt={item.text}
                  priority={index < 2}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                  placeholderClassName="bg-[linear-gradient(135deg,rgba(46,197,182,.18),rgba(245,243,239,.72))]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,17,21,.32),transparent_60%)]" />
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <p className="max-w-[11ch] text-sm font-semibold leading-none text-foreground">
                  {item.text}
                </p>
                <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_14px_rgba(46,197,182,.7)]" />
              </div>
            </div>
          </div>
        );
      })}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background via-background/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/30 to-transparent" />
    </div>
  );
}

