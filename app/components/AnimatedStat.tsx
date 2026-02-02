"use client";

import { useEffect, useRef, useState } from "react";

function parseStatValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return { number: parseInt(match[1], 10), suffix: match[2] ?? "" };
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

interface AnimatedStatProps {
  value: string;
  label: string;
  delayMs?: number;
  durationMs?: number;
}

export function AnimatedStat({
  value,
  label,
  delayMs = 0,
  durationMs = 900,
}: AnimatedStatProps) {
  const { number: target, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const startAfter = setTimeout(() => {
      setStarted(true);
    }, delayMs);
    return () => clearTimeout(startAfter);
  }, [inView, delayMs]);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeOutExpo(progress);
      const current = Math.round(eased * target);
      setDisplay(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [started, target, durationMs]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-[var(--accent)] bg-[var(--card)]/50 p-4 transition-colors duration-300 md:p-5 flex flex-col justify-between"
    >
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--foreground)] md:mt-2 md:text-sm">
        {label}
      </p>
      <p className="text-2xl font-bold md:text-3xl text-[var(--accent)]">
        {display}
        {suffix}
      </p>
    </div>
  );
}
