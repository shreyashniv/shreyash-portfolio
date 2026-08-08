"use client";

import { useEffect, useState } from "react";
import { Github, Terminal } from "lucide-react";

const navLinks = [
  { label: "about.py", href: "#about" },
  { label: "skills.py", href: "#skills" },
  { label: "projects.py", href: "#projects" },
  { label: "contact.py", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-sm text-accent hover:text-text-primary transition-colors duration-200"
        >
          <Terminal size={15} />
          <span>shreyash<span className="text-accent-green">@ds</span><span className="text-text-muted">:~$</span></span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs px-3 py-1.5 rounded-sm text-text-muted hover:text-accent hover:bg-surface transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* GitHub */}
        <a
          href="https://github.com/shreyashniv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-sm border border-border hover:border-border-hover text-text-secondary hover:text-text-primary transition-all duration-200"
        >
          <Github size={13} />
          <span className="hidden md:inline">shreyashniv</span>
        </a>
      </nav>
    </header>
  );
}
