"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * SectionHeading — Reusable section title with animated emerald accent underline.
 */
export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base text-white/50 sm:text-lg">{subtitle}</p>
      )}
      {/* Animated accent bar */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: align === "center" ? 80 : 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={cn(
          "mt-4 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </motion.div>
  );
}
