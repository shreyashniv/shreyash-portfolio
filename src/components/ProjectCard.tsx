import { ExternalLink, BookOpen } from "lucide-react";
import type { Project } from "@/data/projects";

const tagColors: Record<string, string> = {
  "Predictive Maintenance": "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
  "Explainable AI": "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
  "Time Series": "text-accent bg-accent/10 border-accent/20",
  "Anomaly Detection": "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
  "Credit Risk": "text-accent-green bg-accent-green/10 border-accent-green/20",
  "LLM Integration": "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
  "FinTech": "text-accent-green bg-accent-green/10 border-accent-green/20",
  "Risk Modelling": "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
  "Statistical Modelling": "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
  "Criminology": "text-accent bg-accent/10 border-accent/20",
  "Public Policy": "text-accent bg-accent/10 border-accent/20",
  "Regression": "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
  "Sports Analytics": "text-accent-green bg-accent-green/10 border-accent-green/20",
  "Classification": "text-accent bg-accent/10 border-accent/20",
  "Clustering": "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
  "Healthcare Analytics": "text-accent-green bg-accent-green/10 border-accent-green/20",
  "RTT Data": "text-accent bg-accent/10 border-accent/20",
  "Risk Flagging": "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
  "KPIs": "text-accent-green bg-accent-green/10 border-accent-green/20",
  "ETL": "text-accent bg-accent/10 border-accent/20",
  "Star Schema": "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
  "Sales Analytics": "text-accent-green bg-accent-green/10 border-accent-green/20",
  "DAX": "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="flex flex-col gap-4 p-5 rounded-card bg-surface border border-border hover:border-border-hover transition-all duration-200 h-full group">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-text-muted">{num}</span>
        <div className="flex items-center gap-2">
          {project.highlight && (
            <span className="font-mono text-xs text-accent-green bg-accent-green/10 border border-accent-green/20 px-2 py-0.5 rounded-sm">
              {project.highlight}
            </span>
          )}
          <span className="font-mono text-xs text-text-muted border border-border px-2 py-0.5 rounded-sm bg-background">
            {project.status}
          </span>
        </div>
      </div>

      {/* Title */}
      <div>
        <h3 className="font-display font-bold text-text-primary mb-1.5">{project.name}</h3>
        <p className="font-mono text-xs text-accent">
          <span className="text-text-muted">// </span>{project.subtitle}
        </p>
      </div>

      {/* Use case */}
      <p className="text-sm text-text-secondary leading-relaxed flex-1">{project.useCase}</p>

      {/* Topic tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-2.5 py-0.5 rounded-sm border font-medium ${tagColors[tag] ?? "text-text-secondary bg-surface border-border"}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tool) => (
          <span key={tool} className="font-mono text-xs px-2 py-0.5 rounded-sm bg-background border border-border text-text-muted">
            {tool}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex gap-2 pt-1 border-t border-border">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 font-mono text-xs px-3 py-2 rounded-sm bg-accent hover:bg-accent-dim text-background font-medium transition-colors duration-200"
        >
          <ExternalLink size={12} />
          view_repo()
        </a>
        <a
          href={`${project.github}#readme`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 font-mono text-xs px-3 py-2 rounded-sm border border-border hover:border-border-hover text-text-secondary hover:text-text-primary transition-all duration-200"
        >
          <BookOpen size={12} />
          readme.md
        </a>
      </div>
    </article>
  );
}
