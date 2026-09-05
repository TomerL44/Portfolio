"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * TypingEffect — Typewriter animation that types out text character by character.
 */
export function TypingEffect({
  text,
  className,
  speed = 40,
  delay = 500,
}: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, started]);

  return (
    <span className={cn("", className)}>
      {displayedText}
      <span className="animate-pulse text-emerald-400">|</span>
    </span>
  );
}
