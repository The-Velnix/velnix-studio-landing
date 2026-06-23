// @ts-nocheck
import { motion } from "framer-motion";
import { useState } from "react";

const defaultItems = [
  { link: "/#services", text: "AI Systems" },
  { link: "/#work", text: "Mobile" },
  { link: "/#process", text: "Infrastructure" },
  { link: "/#team", text: "Strategy" },
];

export default function FlowingMenu({
  items = defaultItems,
  speed = 18,
  textColor = "#0f1115",
  bgColor = "#f5f3ef",
  marqueeBgColor = "#0f1115",
  marqueeTextColor = "#ffffff",
  borderColor = "#d8d4cc",
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate items to ensure smooth infinite loop at -50%
  const firstHalf = [...items, ...items, ...items];
  const secondHalf = [...items, ...items, ...items];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full overflow-hidden border py-4 transition-all duration-500 rounded-full md:py-5 shadow-[0_12px_40px_rgba(0,0,0,.03)] cursor-pointer"
      style={{
        backgroundColor: isHovered ? marqueeBgColor : bgColor,
        borderColor: isHovered ? "#1f2229" : borderColor,
      }}
    >
      <div className="relative flex w-full items-center overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex w-max items-center whitespace-nowrap font-display text-[clamp(0.95rem,1.8vw,1.45rem)] font-semibold uppercase tracking-[.2em]"
        >
          {/* First Half */}
          <span className="flex items-center">
            {firstHalf.map((item, idx) => (
              <span key={`first-${idx}`} className="flex items-center">
                <a
                  href={item.link}
                  className="mx-5 transition-colors duration-300 hover:text-brand"
                  style={{ color: isHovered ? marqueeTextColor : textColor }}
                >
                  {item.text}
                </a>
                <span className="mx-2 text-brand">•</span>
              </span>
            ))}
          </span>

          {/* Second Half */}
          <span className="flex items-center">
            {secondHalf.map((item, idx) => (
              <span key={`second-${idx}`} className="flex items-center">
                <a
                  href={item.link}
                  className="mx-5 transition-colors duration-300 hover:text-brand"
                  style={{ color: isHovered ? marqueeTextColor : textColor }}
                >
                  {item.text}
                </a>
                <span className="mx-2 text-brand">•</span>
              </span>
            ))}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
