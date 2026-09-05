"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, FileDown, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { personalInfo, socialLinks } from "@/lib/data";

/** GitHub brand icon */
function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/** LinkedIn brand icon */
function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/**
 * Contact — Minimalist contact card with email copy, phone, resume, and social links.
 */
export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = personalInfo.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socials = [
    {
      label: "GitHub",
      Icon: GitHubIcon,
      href: socialLinks.github,
      color: "hover:text-white hover:border-white/20",
    },
    {
      label: "LinkedIn",
      Icon: LinkedInIcon,
      href: socialLinks.linkedin,
      color: "hover:text-blue-400 hover:border-blue-400/20",
    },
    {
      label: "Email",
      Icon: Mail,
      href: socialLinks.email,
      color: "hover:text-emerald-400 hover:border-emerald-400/20",
    },
    {
      label: "Phone",
      Icon: Phone,
      href: `tel:${personalInfo.phone}`,
      color: "hover:text-emerald-400 hover:border-emerald-400/20",
    },
    {
      label: "Resume",
      Icon: FileDown,
      href: personalInfo.resumeUrl,
      download: true,
      color: "hover:text-cyan-400 hover:border-cyan-400/20",
    },
  ];

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <SectionHeading
        title="Get in Touch"
        subtitle="Always open to interesting conversations."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-md"
      >
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 text-center backdrop-blur-md">
          <p className="mb-6 text-sm leading-relaxed text-white/50">
            Whether you have a project idea, a collaboration opportunity, or
            just want to chat about programming and AI, my inbox is
            always open.
          </p>

          {/* Email copy button */}
          <button
            onClick={copyEmail}
            className="group mb-6 inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/[0.1] bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-white/70 transition-all duration-200 hover:border-emerald-500/30 hover:bg-emerald-500/[0.06] hover:text-emerald-400"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-400" />
                Copied to clipboard!
              </>
            ) : (
              <>
                <Copy size={16} />
                {personalInfo.email}
              </>
            )}
          </button>

          {/* Social links */}
          <div className="flex justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                download={social.download ? "" : undefined}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-white/40 transition-all duration-200 ${social.color}`}
                aria-label={social.label}
              >
                <social.Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
