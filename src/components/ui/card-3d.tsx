"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Card3D — Interactive 3D tilt card with spotlight overlay.
 * Tracks mouse position to apply perspective transforms and a radial spotlight.
 */
export function Card3D({
  children,
  className,
  containerClassName,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightX, setSpotlightX] = useState(50);
  const [spotlightY, setSpotlightY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max 8 degrees)
    const rY = ((x - centerX) / centerX) * 8;
    const rX = ((centerY - y) / centerY) * 8;

    setRotateX(rX);
    setRotateY(rY);
    setSpotlightX((x / rect.width) * 100);
    setSpotlightY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setSpotlightX(50);
    setSpotlightY(50);
  };

  return (
    <div
      className={cn("perspective-[1000px]", containerClassName)}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md transition-colors duration-300",
          "hover:border-white/[0.15]",
          className
        )}
      >
        {/* Spotlight overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${spotlightX}% ${spotlightY}%, rgba(16,185,129,0.12), transparent 50%)`,
          }}
        />

        {/* Card content */}
        <div className="relative z-20">{children}</div>
      </motion.div>
    </div>
  );
}
