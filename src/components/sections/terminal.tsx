"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { TerminalIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { terminalCommands } from "@/lib/data";

interface TerminalLine {
  type: "input" | "output";
  content: string;
}

/**
 * Terminal — Interactive CLI easter egg component.
 * Users can type commands like help, skills, projects, contact, or clear.
 */
export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "output",
      content:
        '  Welcome to tomer.sh — Type "help" to see available commands.',
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    if (trimmed === "clear") {
      setLines([]);
      return;
    }

    const output = terminalCommands[trimmed];
    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: cmd },
    ];

    if (output) {
      newLines.push({ type: "output", content: output });
    } else if (trimmed === "") {
      // Do nothing for empty input
    } else {
      newLines.push({
        type: "output",
        content: `  Command not found: "${trimmed}". Type "help" for available commands.`,
      });
    }

    setLines(newLines);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <section className="relative px-4 py-24 sm:py-32">
      <SectionHeading
        title="Easter Egg"
        subtitle="For the curious developers."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0f] shadow-2xl shadow-black/40"
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.03] px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/30">
            <TerminalIcon size={12} />
            tomer.sh
          </div>
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="h-72 cursor-text overflow-y-auto p-4 font-mono text-sm sm:h-80"
        >
          {lines.map((line, i) => (
            <div key={i} className="mb-1">
              {line.type === "input" ? (
                <div className="flex gap-2">
                  <span className="text-emerald-400">❯</span>
                  <span className="text-white/70">{line.content}</span>
                </div>
              ) : (
                <pre className="whitespace-pre-wrap text-white/50">
                  {line.content}
                </pre>
              )}
            </div>
          ))}

          {/* Input line */}
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white/80 outline-none placeholder:text-white/20"
              placeholder="Type a command..."
              spellCheck={false}
              autoComplete="off"
            />
            {/* Blinking cursor */}
            <span className="animate-pulse text-emerald-400/60">▊</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
