"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: d },
  }),
};

// Simulated terminal lines
const terminalLines = [
  { prompt: ">>>", code: "import shreyash as ds", color: "text-text-secondary" },
  { prompt: ">>>", code: "ds.role", color: "text-text-secondary" },
  { output: "'Data Scientist @ Deeptech Startup'", color: "text-accent-green" },
  { prompt: ">>>", code: "ds.stack", color: "text-text-secondary" },
  { output: "['Python', 'ML', 'Deep Learning', 'Statistics', 'SQL']", color: "text-accent" },
  { prompt: ">>>", code: "ds.status", color: "text-text-secondary" },
  { output: "'Open to collaboration'", color: "text-accent-orange" },
];

const stats = [
  { value: "6+", label: "Projects" },
  { value: "MSc", label: "Data Science" },
  { value: "15+", label: "Repositories" },
  { value: "Deeptech", label: "Industry" },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-14 section-pad">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-[1fr_420px] gap-12 md:gap-8 items-center">

          {/* ── Left ── */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
              <span className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-sm border border-accent-green/30 text-accent-green bg-accent-green/5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div custom={0.1} initial="hidden" animate="visible" variants={fadeUp}>
              <p className="font-mono text-xs text-text-muted mb-2">
                <span className="text-accent-purple">const</span>{" "}
                <span className="text-accent">name</span>{" "}
                <span className="text-text-secondary">= </span>
              </p>
              <h1 className="font-display text-display-xl text-text-primary leading-none tracking-tight">
                Shreyash
                <br />
                <span className="text-accent">Nivagune</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.p
              custom={0.2} initial="hidden" animate="visible" variants={fadeUp}
              className="font-mono text-sm text-text-secondary"
            >
              <span className="text-accent-purple">// </span>
              Data Scientist · ML · Statistics · Domain-driven decisions
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.35} initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-dim text-background text-sm font-mono font-medium rounded-sm transition-colors duration-200"
              >
                <ChevronRight size={14} />
                explore_projects()
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:border-border-hover text-text-secondary hover:text-text-primary text-sm font-mono rounded-sm transition-all duration-200"
              >
                <Mail size={14} />
                get_in_touch()
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={0.45} initial="hidden" animate="visible" variants={fadeUp}
              className="grid grid-cols-4 gap-4 pt-4 border-t border-border"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-mono text-lg font-semibold text-accent">{s.value}</p>
                  <p className="font-mono text-xs text-text-muted mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Terminal block ── */}
          <motion.div
            custom={0.2} initial="hidden" animate="visible" variants={fadeUp}
            className="hidden md:block"
          >
            {/* Window chrome */}
            <div className="rounded-card border border-border overflow-hidden shadow-glow">
              {/* Title bar */}
              <div className="bg-surface-2 border-b border-border px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#f85149] opacity-80" />
                  <span className="w-3 h-3 rounded-full bg-[#d29922] opacity-80" />
                  <span className="w-3 h-3 rounded-full bg-[#3fb950] opacity-80" />
                </div>
                <span className="ml-2 font-mono text-xs text-text-muted">Python 3.11.0 — profile.py</span>
              </div>

              {/* Terminal body */}
              <div className="bg-background p-5 font-mono text-sm space-y-1.5">
                {terminalLines.map((line, i) => (
                  <div key={i} className="flex gap-2">
                    {"prompt" in line && (
                      <span className="text-accent-green flex-shrink-0">{line.prompt}</span>
                    )}
                    {"code" in line && (
                      <span className="text-text-primary">{line.code}</span>
                    )}
                    {"output" in line && (
                      <span className={`${line.color} pl-0`}>{line.output}</span>
                    )}
                  </div>
                ))}
                {/* Blinking cursor */}
                <div className="flex gap-2 pt-1">
                  <span className="text-accent-green">{">>>"}</span>
                  <span className="w-2 h-4 bg-accent-green opacity-80 animate-pulse inline-block mt-0.5" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
