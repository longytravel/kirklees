export function KirkleesChevron({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 242 469" className={className} fill="none">
      <polygon fill={color} opacity={0.8} points="241.7,120.8 241.84,219.87 121.07,99.04 0.03,220.13 0,120.51 120.9,0" />
      <polygon fill={color} opacity={0.4} points="0.13,324.56 0,225.49 120.76,346.31 241.81,225.22 241.84,324.84 120.94,445.36" />
      <polygon fill={color} opacity={0.25} points="241.9,468.89 0.17,468.89 0.16,398.33 241.9,398.33" />
    </svg>
  );
}

export function KirkleesNav({ activePage }: { activePage: "home" | "how-it-works" }) {
  return (
    <header className="bg-kirklees-navy sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/kirklees-logo.svg" alt="Kirklees College" className="h-10 brightness-0 invert" />
        </a>
        <nav className="flex items-center gap-1">
          <a
            href="/"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activePage === "home"
                ? "bg-kirklees-teal text-white"
                : "text-white/60 hover:text-white hover:bg-white/10"
            }`}
          >
            The Session
          </a>
          <a
            href="/how-it-works"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activePage === "how-it-works"
                ? "bg-kirklees-teal text-white"
                : "text-white/60 hover:text-white hover:bg-white/10"
            }`}
          >
            How It Works
          </a>
        </nav>
      </div>
    </header>
  );
}

export function KirkleesFooter() {
  return (
    <footer className="bg-kirklees-navy border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-start justify-between">
          <div>
            <img src="/kirklees-logo.svg" alt="Kirklees College" className="h-8 brightness-0 invert opacity-50 mb-3" />
            <p className="text-white/40 text-xs max-w-sm">
              Prepared exclusively for Kirklees College. All data used in these demos
              is publicly available. April 2026.
            </p>
          </div>
          <div className="text-right">
            <p className="text-kirklees-teal text-sm font-semibold mb-1">Powered by</p>
            <p className="text-white/60 text-sm">Claude Code + BMAD Methodology</p>
            <p className="text-white/40 text-xs mt-1">AI-assisted development</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SectionDivider({ variant = "teal" }: { variant?: "teal" | "green" | "navy" }) {
  const colors = {
    teal: "from-transparent via-kirklees-teal to-transparent",
    green: "from-transparent via-kirklees-green to-transparent",
    navy: "from-transparent via-kirklees-navy/30 to-transparent",
  };
  return <div className={`h-px bg-gradient-to-r ${colors[variant]} max-w-4xl mx-auto`} />;
}
