// components/EmsLogo.tsx
import React from "react";
import clsx from "clsx";

type PresetSize = "S" | "M" | "XL";

interface EmsLogoProps {
  size?: PresetSize | number;
  color?: "black" | "white";
  className?: string;
  showText?: boolean;
  hidePointsOnMobile?: boolean;
  label?: string;
}

const PRESETS: Record<PresetSize, {
  logo: string;
  circle: string;
  marginRight: string;
  h2: string;
  h3: string;
}> = {
  S: {
    logo: "w-7 h-6",
    circle: "w-2 h-2",
    marginRight: "mr-3",
    h2: "text-[18px] logo-title font-medium scale-x-115 relative top-0.5",
    h3: "text-[8px] logo-title tracking-[.16em] relative bottom-0.5",
  },
  M: {
    logo: "w-14 h-12",
    circle: "w-4 h-4",
    marginRight: "mr-6",
    h2: "text-4xl logo-title font-medium scale-x-115",
    h3: "text-base logo-title tracking-[.16em]",
  },
  XL: {
    logo: "w-28 h-24",
    circle: "w-8 h-8",
    marginRight: "mr-[48px]",
    h2: "text-[72px] logo-title font-medium scale-x-115 relative top-[1px]",
    h3: "text-[32px] logo-title tracking-[.16em] relative bottom-[16px]",
  },
};

export default function EmsLogo({
  size = "M",
  color = "black",
  className = "",
  showText = true,
  hidePointsOnMobile = false,
  label = "Logo EMS Audit"
}: EmsLogoProps) {
  const isCustomSize = typeof size === "number";
  const preset = !isCustomSize ? PRESETS[size] : PRESETS.M;
  const inlineStyle = isCustomSize
    ? { width: size, height: size }
    : undefined;

  const baseCircleColor = color === "white" ? "bg-white" : "bg-black";
  const textColor = color === "white" ? "text-white" : "text-black";

  const circles = [
    { pos: "left-0 bottom-0", color: baseCircleColor },
    { pos: "right-0 bottom-0", color: "bg-lime-400" },
    { pos: "left-1/2 top-0 -translate-x-1/2", color: baseCircleColor },
  ];

  return (
    <span
      role="img"
      aria-label={label}
      className={clsx("inline-flex items-center", className)}
    >
      {/* Container wrapping points + text */}
      <span className="inline-flex items-center">
        {/* Points block */}
        <span
          className={clsx(
            "relative",
            preset.logo,
            preset.marginRight,
            "top-0.5",
            hidePointsOnMobile && "hidden lg:block"
          )}
          style={inlineStyle}
        >
          {circles.map(({ pos, color }, i) => (
            <span
              key={i}
              className={clsx("absolute rounded-full", preset.circle, pos, color)}
            />
          ))}
        </span>

        {/* Text block */}
        {showText && (
          <span className={clsx("flex flex-col justify-center text-center", textColor)}>
            <h2 className={clsx(preset.h2)}>
              EMS <span className="text-lime-400">A</span>udit
            </h2>
            <h3 className={clsx(preset.h3)}>
              expertise & conseil
            </h3>
          </span>
        )}
      </span>
    </span>
  );
}
