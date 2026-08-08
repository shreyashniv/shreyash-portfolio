"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          ref={ref}
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
          className="font-mono text-xs text-accent-green mb-3 tracking-widest"
        >
          # projects.py
        </motion.p>

        <motion.h2
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
          className="font-display text-display-lg text-text-primary mb-2"
        >
          Projects
        </motion.h2>

        <motion.p
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
          className="font-mono text-sm text-text-secondary mb-10"
        >
          <span className="text-text-muted">// </span>
          ML · analytics · domain-driven — from data to decision
        </motion.p>

        <motion.div
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}
          className="grid md:grid-cols-2 gap-4"
        >
          {projects.map((project, i) => (
            <motion.div key={project.id} variants={fadeUp}>
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
