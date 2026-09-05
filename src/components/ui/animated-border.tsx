"use client";

import { cn } from "@/lib/utils";

/**
 * AnimatedBorder — A card wrapper with a rotating gradient border beam effect.
 * Uses CSS @keyframes for continuous animation.
 */
export function AnimatedBorder({
  children,
  className,
  borderColor = "from-emerald-500 via-cyan-500 to-emerald-500",
}: {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
}) {
  return (
    <div className={cn("group relative rounded-2xl p-px", className)}>
      {/* Animated gradient border */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl bg-gradient-to-r opacity-30 blur-sm transition-opacity duration-500 group-hover:opacity-60",
          borderColor
        )}
        style={{
          animation: "border-rotate 4s linear infinite",
        }}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-2xl bg-gradient-to-r opacity-40 transition-opacity duration-500 group-hover:opacity-80",
          borderColor
        )}
      />

      {/* Inner card content */}
      <div className="relative rounded-2xl bg-[#09090b]">{children}</div>
    </div>
  );
}
