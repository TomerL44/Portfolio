"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { timelineEntries } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Timeline — Vertical timeline with glowing accent nodes and scroll-triggered reveals.
 */
export function Timeline() {
  const icons = {
    education: GraduationCap,
    project: Code2,
    work: Briefcase,
  };

  return (
    <section id="experience" className="relative px-4 py-24 sm:py-32">
      <SectionHeading
        title="Experience & Education"
        subtitle="The journey so far."
      />

      <div className="relative mx-auto max-w-2xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-emerald-500/40 via-white/[0.08] to-transparent sm:left-8" />

        <div className="space-y-12">
          {timelineEntries.map((entry, i) => {
            const Icon = icons[entry.type];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline node */}
                <div
                  className={cn(
                    "absolute left-1.5 top-1 flex h-6 w-6 items-center justify-center rounded-full border sm:left-5 sm:h-7 sm:w-7",
                    entry.current
                      ? "border-emerald-500/60 bg-emerald-500/20 shadow-lg shadow-emerald-500/20"
                      : "border-white/[0.15] bg-white/[0.05]"
                  )}
                >
                  <Icon
                    size={13}
                    className={
                      entry.current ? "text-emerald-400" : "text-white/40"
                    }
                  />
                  {/* Glow ring for current */}
                  {entry.current && (
                    <div className="absolute inset-0 animate-ping rounded-full border border-emerald-500/30" />
                  )}
                </div>

                {/* Content */}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.1] hover:bg-white/[0.04]">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-emerald-400/80">
                      {entry.year}
                    </span>
                    {entry.current && (
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-white/90 sm:text-lg">
                    {entry.title}
                  </h3>
                  <p className="mb-2 text-sm text-white/40">{entry.subtitle}</p>
                  <p className="text-sm leading-relaxed text-white/50">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
