"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, FileDown } from "lucide-react";
import { Spotlight, GridBackground } from "@/components/ui/spotlight";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { personalInfo, socialLinks } from "@/lib/data";

/** GitHub brand icon */
function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/** LinkedIn brand icon */
function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/**
 * Hero — Full-viewport hero section with Spotlight effect, status badge,
 * staggered headline animation, and CTA buttons.
 */
export function Hero() {
  const scrollToWork = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Split headline into words for staggered animation
  const headlineWords = personalInfo.headline.split(" ");

  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 pt-28 pb-12 sm:pt-36 sm:pb-16">
      {/* Background effects */}
      <GridBackground />
      <Spotlight
        className="z-0"
        fill="rgba(16, 185, 129, 0.08)"
      />

      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto my-auto max-w-4xl text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-2 text-sm text-emerald-400 backdrop-blur-sm"
        >
          {/* Pulsing green dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          {personalInfo.status}
        </motion.div>

        {/* Headline — staggered word animation */}
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.5 + i * 0.08,
              }}
              className="mr-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg"
        >
          {personalInfo.subheadline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton variant="primary" onClick={scrollToWork}>
            <ArrowDown size={16} />
            View Work
          </MagneticButton>

          <MagneticButton variant="secondary" onClick={scrollToContact}>
            <Mail size={16} />
            Get in Touch
          </MagneticButton>

          <MagneticButton
            variant="ghost"
            href={personalInfo.resumeUrl}
            download
          >
            <FileDown size={16} />
            Resume
          </MagneticButton>

          <MagneticButton
            variant="ghost"
            href={socialLinks.github}
          >
            <GitHubIcon size={16} />
            GitHub
          </MagneticButton>

          <MagneticButton
            variant="ghost"
            href={socialLinks.linkedin}
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-10 sm:mt-14"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto flex h-10 w-6 items-start justify-center rounded-full border border-white/[0.15] p-1.5"
          >
            <motion.div className="h-2 w-1 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
