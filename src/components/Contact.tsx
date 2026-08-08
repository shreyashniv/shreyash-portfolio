"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const links = [
  { icon: Mail, label: "Email", value: "shreyashnivagune@gmail.com", href: "mailto:shreyashnivagune@gmail.com", note: "Best for collaboration" },
  { icon: Github, label: "GitHub", value: "github.com/shreyashniv", href: "https://github.com/shreyashniv", note: "15+ repositories" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          ref={ref}
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
          className="font-mono text-xs text-accent-green mb-3 tracking-widest"
        >
          # contact.py
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left */}
          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-display-lg text-text-primary mb-4">
              Let&apos;s build
              <br />
              something.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed mb-8 text-sm">
              Open to data science roles, ML collaborations, and interesting domain problems.
              If you&apos;re working on something where data quality and rigorous analysis matter — let&apos;s talk.
            </motion.p>

            <motion.div variants={stagger} className="space-y-2">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    variants={fadeUp}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-4 rounded-card bg-surface border border-border hover:border-border-hover transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-sm bg-background border border-border flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-text-muted mb-0.5">{link.label}</p>
                      <p className="text-sm text-text-primary">{link.value}</p>
                      <p className="font-mono text-xs text-text-muted mt-0.5">{link.note}</p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}>
            {submitted ? (
              <motion.div variants={fadeUp} className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
                <div className="w-10 h-10 rounded-sm border border-accent-green/40 bg-accent-green/10 flex items-center justify-center">
                  <Send size={18} className="text-accent-green" />
                </div>
                <p className="font-mono text-accent-green text-sm">message_sent = True</p>
                <p className="text-text-secondary text-sm">I&apos;ll get back to you shortly.</p>
              </motion.div>
            ) : (
              <motion.form variants={stagger} onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", label: "name: str", type: "text", placeholder: "Your name" },
                  { name: "email", label: "email: str", type: "email", placeholder: "your@email.com" },
                ].map((f) => (
                  <motion.div key={f.name} variants={fadeUp}>
                    <label htmlFor={f.name} className="block font-mono text-xs text-text-muted mb-1.5">{f.label}</label>
                    <input
                      id={f.name} name={f.name} type={f.type} required
                      placeholder={f.placeholder}
                      value={form[f.name as keyof typeof form]}
                      onChange={handleChange}
                      className="w-full bg-surface border border-border hover:border-border-hover focus:border-accent rounded-card px-4 py-2.5 font-mono text-sm text-text-primary placeholder-text-muted outline-none transition-colors duration-200"
                    />
                  </motion.div>
                ))}
                <motion.div variants={fadeUp}>
                  <label htmlFor="message" className="block font-mono text-xs text-text-muted mb-1.5">message: str</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder="What are you working on?"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border hover:border-border-hover focus:border-accent rounded-card px-4 py-2.5 font-mono text-sm text-text-primary placeholder-text-muted outline-none transition-colors duration-200 resize-none"
                  />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-dim text-background font-mono text-sm font-medium rounded-sm transition-colors duration-200"
                  >
                    <Send size={13} />
                    send_message()
                  </button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
