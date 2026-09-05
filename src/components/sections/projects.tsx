"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { Card3D } from "@/components/ui/card-3d";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";

/** GitHub brand icon */
function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/**
 * Projects — Featured projects showcase with 3D tilt cards.
 */
export function Projects() {
  const categoryColors: Record<string, string> = {
    Systems: "text-orange-400 border-orange-400/20 bg-orange-400/[0.06]",
    AI: "text-violet-400 border-violet-400/20 bg-violet-400/[0.06]",
    "Full-Stack": "text-emerald-400 border-emerald-400/20 bg-emerald-400/[0.06]",
    Desktop: "text-cyan-400 border-cyan-400/20 bg-cyan-400/[0.06]",
    "Cloud & AI": "text-teal-400 border-teal-400/20 bg-teal-400/[0.06]",
  };

  return (
    <section id="projects" className="relative px-4 py-24 sm:py-32">
      <SectionHeading
        title="Featured Projects"
        subtitle="Things I've built that I'm proud of."
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={
              i === projects.length - 1 && projects.length % 2 !== 0
                ? "md:col-span-2 md:mx-auto md:max-w-xl w-full"
                : undefined
            }
          >
            <Card3D className="h-full">
              <div className="flex h-full flex-col p-6 sm:p-8">
                {/* Category badge + title */}
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span
                      className={`mb-3 inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
                        categoryColors[project.category] || "text-white/50"
                      }`}
                    >
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-white/50">
                  {project.description}
                </p>

                {/* Key challenge */}
                <div className="mb-5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                  <div className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/30">
                    <Sparkles size={12} />
                    Key Challenge
                  </div>
                  <p className="text-xs leading-relaxed text-white/40">
                    {project.challenge}
                  </p>
                </div>

                {/* Tech badges */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.techBadges.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links — pushed to bottom */}
                <div className="mt-auto flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white"
                  >
                    <GitHubIcon size={14} />
                    Source
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1.5 text-xs font-medium text-emerald-400 transition-colors hover:bg-emerald-500/[0.12]"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Card3D>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
