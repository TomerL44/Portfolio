"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * MagneticButton — A button that magnetically pulls toward the cursor on hover.
 * Uses Framer Motion spring physics for the magnetic effect.
 */
export function MagneticButton({
  children,
  className,
  onClick,
  href,
  download,
  variant = "primary",
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean | string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Pull toward cursor with 25% of the distance
    x.set((e.clientX - centerX) * 0.25);
    y.set((e.clientY - centerY) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantClasses = {
    primary:
      "bg-emerald-500/90 text-white hover:bg-emerald-400/90 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30",
    secondary:
      "border border-white/[0.12] bg-white/[0.04] text-white/80 hover:bg-white/[0.08] hover:text-white backdrop-blur-sm",
    ghost:
      "text-white/60 hover:text-white hover:bg-white/[0.05]",
  };

  const Comp = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <Comp
        href={href}
        onClick={onClick}
        download={download}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(
          "inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200",
          variantClasses[variant],
          className
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
