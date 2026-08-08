"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BrainCircuit, BarChart2, Database, FlaskConical, LineChart, Cpu } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

const skills = [
  {
    icon: BrainCircuit,
    name: "Machine Learning",
    type: "class",
    description: "Supervised and unsupervised modelling — from baseline to production-ready with proper validation.",
    tags: ["scikit-learn", "RandomForest", "XGBoost", "PCA", "Clustering"],
    color: "text-accent",
  },
  {
    icon: Cpu,
    name: "Deep Learning",
    type: "class",
    description: "Neural architectures for classification, sequence modelling, and representation learning.",
    tags: ["PyTorch", "Neural Networks", "CNNs", "Transfer Learning"],
    color: "text-accent-purple",
  },
  {
    icon: FlaskConical,
    name: "Statistics & Inference",
    type: "class",
    description: "Hypothesis testing, regression modelling, and statistical reasoning applied to real datasets.",
    tags: ["R", "Regression", "Hypothesis Testing", "Bayesian", "A/B Testing"],
    color: "text-accent-green",
  },
  {
    icon: LineChart,
    name: "Data Analysis & Viz",
    type: "class",
    description: "Exploratory analysis and visualisations that communicate findings, not just show data.",
    tags: ["Pandas", "Matplotlib", "Seaborn", "Power BI", "ggplot2"],
    color: "text-accent-orange",
  },
  {
    icon: Database,
    name: "Data Engineering",
    type: "class",
    description: "ETL pipelines, schema design, and structured storage that makes downstream analysis reliable.",
    tags: ["SQL", "PostgreSQL", "Python ETL", "Star Schema", "Pandas"],
    color: "text-accent",
  },
  {
    icon: BarChart2,
    name: "Domain Analytics",
    type: "class",
    description: "Translating domain knowledge into model design — healthcare, finance, sports, industrial.",
    tags: ["Healthcare", "FinTech", "Explainable AI", "SHAP", "Decision Support"],
    color: "text-accent-purple",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          ref={ref}
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
          className="font-mono text-xs text-accent-green mb-3 tracking-widest"
        >
          # skills.py
        </motion.p>

        <motion.h2
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
          className="font-display text-display-lg text-text-primary mb-10"
        >
          Stack &amp; expertise
        </motion.h2>

        <motion.div
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                className="p-5 rounded-card bg-surface border border-border hover:border-border-hover transition-colors duration-200 flex flex-col gap-4 group"
              >
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-background border border-border flex items-center justify-center">
                    <Icon size={15} className={skill.color} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-text-muted mb-0.5">
                      <span className="text-accent-purple">class </span>
                    </p>
                    <h3 className="font-display font-semibold text-text-primary text-sm">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">{skill.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded-sm bg-background border border-border text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
