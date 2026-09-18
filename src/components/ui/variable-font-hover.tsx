import React, { useState } from "react";
import { motion } from "framer-motion";

export interface VariableFontHoverProps {
  label: string;
  className?: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const VariableFontHover: React.FC<VariableFontHoverProps> = ({
  label,
  className = "",
  fromFontVariationSettings = "'wght' 400",
  toFontVariationSettings = "'wght' 700",
  staggerDuration = 0.03,
  staggerFrom = "center",
  onClick,
  style,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const chars = label.split("");

  const getDelay = (index: number) => {
    if (staggerFrom === "first") return index * staggerDuration;
    if (staggerFrom === "last") return (chars.length - 1 - index) * staggerDuration;
    if (staggerFrom === "center") {
      const center = (chars.length - 1) / 2;
      return Math.abs(index - center) * staggerDuration;
    }
    if (typeof staggerFrom === "number") {
      return Math.abs(index - staggerFrom) * staggerDuration;
    }
    return 0;
  };

  return (
    <span
      className={`inline-flex select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={style}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          animate={{
            fontVariationSettings: isHovered
              ? toFontVariationSettings
              : fromFontVariationSettings,
            fontWeight: isHovered ? 700 : 400,
          }}
          transition={{
            duration: 0.25,
            delay: getDelay(i),
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};
