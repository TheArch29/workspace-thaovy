"use client";

import { motion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  distance?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 24,
}: ScrollRevealProps) {
  const initialOffset =
    direction === "up"
      ? { y: distance, x: 0 }
      : direction === "left"
        ? { x: -distance, y: 0 }
        : direction === "right"
          ? { x: distance, y: 0 }
          : { x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: SMOOTH_EASE }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function StaggerGroup({ children, className, stagger = 0.09 }: StaggerGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.58, ease: SMOOTH_EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Cute Bespoke Scrapbook Line-Art Elements */
export function CutePaperclip({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="34"
      height="68"
      viewBox="0 0 34 68"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M23.5 16V48C23.5 55.18 17.68 61 10.5 61C3.32 61 2 55.18 2 48V15.5C2 8.04 8.04 2 15.5 2C22.96 2 29 8.04 29 15.5V45.5C29 50.19 25.19 54 20.5 54C15.81 54 12 50.19 12 45.5V18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CuteBow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="44"
      height="30"
      viewBox="0 0 44 30"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 13.5C17.5 6.5 8 4 5.5 9.5C3.5 14 11.5 17.5 20.5 15M22 13.5C26.5 6.5 36 4 38.5 9.5C40.5 14 32.5 17.5 23.5 15M22 14.5C19 20 14.5 25 11.5 27.5M22 14.5C25 20 29.5 25 32.5 27.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="14" r="2.6" fill="currentColor" />
    </svg>
  );
}

export function CuteSparkle({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2C12.7 7.6 16.4 11.3 22 12C16.4 12.7 12.7 16.4 12 22C11.3 16.4 7.6 12.7 2 12C7.6 11.3 11.3 7.6 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CuteHeart({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 20.4C12 20.4 4 14.9 4 9.2C4 6.5 6.1 4.5 8.6 4.5C10.2 4.5 11.4 5.3 12 6.5C12.6 5.3 13.8 4.5 15.4 4.5C17.9 4.5 20 6.5 20 9.2C20 14.9 12 20.4 12 20.4Z"
        fill="currentColor"
      />
    </svg>
  );
}
