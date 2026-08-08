"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Github, Mail, Briefcase } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const details = [
  { icon: Briefcase, label: "Role", value: "Data Scientist @ Deeptech Startup", href: null },
  { icon: GraduationCap, label: "Education", value: "MSc Data Science & Analytics, Brunel University London", href: null },
  { icon: MapPin, label: "Location", value: "Mumbai, India", href: null },
  { icon: Github, label: "GitHub", value: "github.com/shreyashniv", href: "https://github.com/shreyashniv" },
  { icon: Mail, label: "Email", value: "shreyashnivagune@gmail.com", href: "mailto:shreyashnivagune@gmail.com" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          ref={ref}
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
          className="font-mono text-xs text-accent-green mb-3 tracking-widest"
        >
          # about.py
        </motion.p>

        <motion.h2
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
          className="font-display text-display-lg text-text-primary mb-10"
        >
          Background
        </motion.h2>

        <div className="grid md:grid-cols-[1fr_320px] gap-12 md:gap-16">
          {/* Bio */}
          <motion.div
            initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}
            className="space-y-5 text-text-secondary leading-relaxed"
          >
            <motion.p variants={fadeUp}>
              I&apos;m a Data Scientist at a deeptech startup, working at the intersection of machine learning,
              statistical reasoning, and domain knowledge. My job isn&apos;t just to build models — it&apos;s to
              understand the problem space well enough to make models that are actually useful. That means spending
              as much time on domain analysis as on code.
            </motion.p>
            <motion.p variants={fadeUp}>
              My academic background is in MSc Data Science &amp; Analytics at Brunel University London, where I
              developed a strong foundation in statistical modelling, ML theory, and applied analytics. I work
              primarily in Python — scikit-learn, PyTorch, and the broader data stack — but I&apos;m equally
              comfortable in R for statistical work and SQL for anything data pipeline related.
            </motion.p>
            <motion.p variants={fadeUp}>
              What makes my work different is the domain layer. I don&apos;t treat data as abstract — I care about
              what it represents. Whether it&apos;s industrial sensor readings, healthcare waiting lists, financial
              risk signals, or sports performance metrics, I try to understand the domain first and let that shape
              the modelling decisions. Good data science is domain-aware data science.
            </motion.p>

            {/* Inline code block */}
            <motion.div
              variants={fadeUp}
              className="bg-surface border border-border rounded-card p-4 font-mono text-xs space-y-1 mt-2"
            >
              <p><span className="text-accent-purple">def</span> <span className="text-accent">approach</span><span className="text-text-secondary">(problem):</span></p>
              <p className="pl-4"><span className="text-accent-purple">return</span> <span className="text-accent-green">&quot;understand domain → clean data → model → explain → decide&quot;</span></p>
            </motion.div>
          </motion.div>

          {/* Detail cards */}
          <motion.div
            initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}
            className="space-y-2"
          >
            {details.map((item) => {
              const Icon = item.icon;
              const card = (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-3.5 rounded-card bg-surface border border-border hover:border-border-hover transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-sm bg-background border border-border flex items-center justify-center mt-0.5">
                    <Icon size={13} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-text-muted mb-0.5">{item.label}</p>
                    <p className="text-sm text-text-primary break-all">{item.value}</p>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
                  {card}
                </a>
              ) : <div key={item.label}>{card}</div>;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
