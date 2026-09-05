"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * BentoGrid — Asymmetric card grid layout inspired by Bento UI patterns.
 */
export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * BentoCard — A single card in the Bento Grid with glassmorphic styling.
 */
export function BentoCard({
  className,
  title,
  description,
  children,
  colSpan = 1,
  rowSpan = 1,
}: {
  className?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  colSpan?: number;
  rowSpan?: number;
}) {
  const colClass =
    colSpan === 2
      ? "md:col-span-2"
      : colSpan === 3
      ? "md:col-span-3"
      : "md:col-span-1";

  const rowClass =
    rowSpan === 2
      ? "md:row-span-2"
      : rowSpan === 3
      ? "md:row-span-3"
      : "md:row-span-1";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300",
        "hover:border-white/[0.15] hover:bg-white/[0.05]",
        colClass,
        rowClass,
        className
      )}
    >
      {/* Subtle hover glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/[0.05] via-transparent to-cyan-500/[0.05]" />
      </div>

      <div className="relative z-10">
        {title && (
          <h3 className="mb-2 text-lg font-semibold text-white/90">{title}</h3>
        )}
        {description && (
          <p className="mb-4 text-sm leading-relaxed text-white/50">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
