import { personalInfo } from "@/lib/data";

/**
 * Footer — Clean minimalist copyright footer.
 */
export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-4 py-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-white/30">
          © {new Date().getFullYear()} {personalInfo.name}. Crafted with care
          using Next.js, Tailwind CSS &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
