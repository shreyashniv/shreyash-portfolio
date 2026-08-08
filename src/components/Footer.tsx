export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        <p className="font-mono text-xs text-text-muted">
          <span className="text-accent-green"># </span>© 2026 Shreyash Nivagune
        </p>
        <p className="font-mono text-xs text-text-muted">
          built_with(<span className="text-accent">&quot;Next.js&quot;</span>)
        </p>
      </div>
    </footer>
  );
}
