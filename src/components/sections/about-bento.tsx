"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Heart, BarChart3 } from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { techStack, metrics, passions } from "@/lib/data";

/**
 * AnimatedCounter — Counts up from 0 to a target value when visible.
 */
function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/**
 * AboutBento — Bento Grid section with bio, tech stack, metrics, and passions.
 */
export function AboutBento() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <SectionHeading
        title="About Me"
        subtitle="Engineer at heart, builder by trade."
      />

      <BentoGrid className="auto-rows-[minmax(180px,auto)]">
        {/* Card 1: Bio — spans 2 columns */}
        <BentoCard
          colSpan={2}
          title="Who I Am"
          className="flex flex-col justify-center"
        >
          <p className="text-sm leading-relaxed text-white/60 sm:text-base">
            I&apos;m a Software Engineering student at Braude Academic College driven by building
            systems that are both <span className="text-emerald-400">performant</span> and{" "}
            <span className="text-cyan-400">reliable</span>. Whether it&apos;s writing a
            cycle-accurate retro console emulator in C++, engineering autonomous AI agents with LangGraph, or architecting client-server platforms — I care deeply about craftsmanship.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
            With a background spanning military network infrastructure in the C4I Corps and rigorous computer science coursework, I excel in high-ownership environments where deep technical foundations matter.
          </p>
        </BentoCard>

        {/* Card 2: Tech Stack — spans 2 rows */}
        <BentoCard
          rowSpan={2}
          title="Tech Stack"
          className="overflow-y-auto"
        >
          <div className="space-y-4">
            {techStack.map((category) => (
              <div key={category.title}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/30">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <span
                      key={item.name}
                      className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/60 transition-all duration-200 hover:border-emerald-500/30 hover:bg-emerald-500/[0.06] hover:text-emerald-400"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Card 3: Metrics */}
        <BentoCard title="By the Numbers" className="flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter
                    target={metric.value}
                    suffix={metric.suffix}
                  />
                </div>
                <p className="mt-1 text-xs text-white/40">{metric.label}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Card 4: Passions */}
        <BentoCard title="Current Obsessions" className="flex flex-col justify-center">
          <div className="space-y-2.5">
            {passions.map((passion, i) => (
              <motion.div
                key={passion}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2.5"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10">
                  {i === 0 ? (
                    <Cpu size={13} className="text-emerald-400" />
                  ) : i === 1 ? (
                    <BarChart3 size={13} className="text-cyan-400" />
                  ) : (
                    <Heart size={13} className="text-emerald-400" />
                  )}
                </div>
                <span className="text-sm text-white/60">{passion}</span>
              </motion.div>
            ))}
          </div>
        </BentoCard>
      </BentoGrid>
    </section>
  );
}
