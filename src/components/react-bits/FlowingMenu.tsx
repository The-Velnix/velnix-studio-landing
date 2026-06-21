// @ts-nocheck
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const fallbackItems = [
  { link: '/#services', text: 'Strategy', image: '' },
  { link: '/#work', text: 'Build', image: '' },
  { link: '/#process', text: 'Launch', image: '' },
  { link: '/#team', text: 'Team', image: '' },
];

function defaultImage(label, start = '#2EC5B6', end = '#0f1115') {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${start}" />
          <stop offset="100%" stop-color="${end}" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" rx="48" fill="url(#g)" />
      <circle cx="610" cy="120" r="140" fill="rgba(255,255,255,0.12)" />
      <circle cx="210" cy="380" r="170" fill="rgba(255,255,255,0.08)" />
      <text x="60" y="440" font-family="Manrope, Arial, sans-serif" font-size="84" font-weight="700" fill="#ffffff">${label}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function FlowingMenu({
  items = fallbackItems,
  speed = 15,
  textColor = '#0f1115',
  bgColor = '#ffffff',
  marqueeBgColor = '#0f1115',
  marqueeTextColor = '#ffffff',
  borderColor = '#e5e7eb',
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const preparedItems = useMemo(
    () =>
      items.map((item, index) => ({
        ...item,
        image:
          item.image ||
          defaultImage(
            item.text,
            ['#d7f5f0', '#2EC5B6', '#f5f3ef', '#c2efe9'][index % 4],
            ['#0f1115', '#111827', '#243b53', '#334155'][index % 4]
          ),
      })),
    [items]
  );

  return (
    <div
      className="relative overflow-hidden rounded-[1.75rem] border shadow-[0_20px_60px_rgba(0,0,0,.05)]"
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <div className="grid gap-0 md:grid-cols-4">
        {preparedItems.map((item, index) => (
          <motion.a
            key={`${item.text}-${index}`}
            href={item.link}
            onHoverStart={() => setActiveIndex(index)}
            onHoverEnd={() => setActiveIndex(null)}
            className="group relative flex min-h-[110px] items-center justify-center overflow-hidden border-b px-5 py-6 md:min-h-[130px] md:border-r md:border-b-0 last:border-r-0"
            style={{ borderColor }}
          >
            <span
              className="relative z-10 font-display text-[clamp(1rem,2.2vw,1.55rem)] font-semibold uppercase tracking-[.22em] transition-opacity duration-300 group-hover:opacity-20"
              style={{ color: textColor }}
            >
              {item.text}
            </span>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: marqueeBgColor }}
                >
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{ backgroundImage: `radial-gradient(circle at top, ${textColor} 0, transparent 55%)` }}
                  />
                  <div className="relative flex w-full items-center gap-4 px-5 md:px-6">
                    <div
                      className="h-16 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-cover bg-center md:h-20 md:w-28"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="min-w-0 overflow-hidden">
                      <motion.div
                        animate={{ x: [0, -60] }}
                        transition={{ duration: Math.max(7, speed), ease: 'linear', repeat: Infinity }}
                        className="flex w-max items-center gap-4 whitespace-nowrap font-display text-[clamp(1.15rem,2.8vw,2.1rem)] font-semibold uppercase tracking-[.16em]"
                        style={{ color: marqueeTextColor }}
                      >
                        <span>{item.text}</span>
                        <span>•</span>
                        <span>{item.text}</span>
                        <span>•</span>
                        <span>{item.text}</span>
                        <span>•</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
