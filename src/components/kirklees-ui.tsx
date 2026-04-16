/**
 * Kirklees College UI components — matching the real kirkleescollege.ac.uk visual language:
 * - White nav with rounded pill buttons
 * - Diagonal white bars (the signature angular design element)
 * - Purple accent blocks
 * - Navy footer with "Creating Opportunities, Changing Lives" tagline
 */

export function DiagonalBars({ variant = "light" }: { variant?: "light" | "medium" | "strong" }) {
  const opacities =
    variant === "light"   ? [0.06, 0.04, 0.03, 0.05] :
    variant === "strong"  ? [0.15, 0.12, 0.08, 0.13] :
                            [0.10, 0.07, 0.05, 0.08];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute w-[140px] h-[200%] -top-[50%] left-[5%] -rotate-[20deg]"  style={{ background: `rgba(255,255,255,${opacities[0]})` }} />
      <div className="absolute w-[100px] h-[200%] -top-[50%] left-[25%] -rotate-[20deg]" style={{ background: `rgba(255,255,255,${opacities[1]})` }} />
      <div className="absolute w-[80px]  h-[200%] -top-[50%] left-[55%] -rotate-[20deg]" style={{ background: `rgba(255,255,255,${opacities[2]})` }} />
      <div className="absolute w-[120px] h-[200%] -top-[50%] right-[8%] -rotate-[20deg]" style={{ background: `rgba(255,255,255,${opacities[3]})` }} />
    </div>
  );
}

export function KirkleesNav({ activePage }: { activePage: "home" | "how-it-works" | "competitor-tracker" }) {
  const linkClass = (page: string) =>
    `text-sm font-bold transition-colors ${
      activePage === page ? "text-kirklees-teal" : "text-kirklees-navy hover:text-kirklees-teal"
    }`;

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-kirklees-grey-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 flex-shrink-0">
          <img src="/kirklees-logo.svg" alt="Kirklees College" className="h-10" />
        </a>

        <nav className="flex items-center gap-6">
          <a href="/" className={linkClass("home")}>The Session</a>
          <a href="/competitor-tracker" className={linkClass("competitor-tracker")}>Competitor Tracker</a>
          <a href="/how-it-works" className={linkClass("how-it-works")}>How It Works</a>
          <a
            href="https://www.kirkleescollege.ac.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-kirklees-navy text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-kirklees-logo-teal transition-colors"
          >
            kirkleescollege.ac.uk
          </a>
        </nav>
      </div>
    </header>
  );
}

export function KirkleesFooter() {
  return (
    <footer className="bg-kirklees-navy">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <img src="/kirklees-logo.svg" alt="Kirklees College" className="h-8 brightness-0 invert opacity-60 mb-2" />
            <p className="text-white/30 text-sm italic mb-3">Creating Opportunities, Changing Lives</p>
            <p className="text-white/40 text-xs max-w-sm">
              Prepared exclusively for Kirklees College. All data used in these demos
              is publicly available. April 2026.
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-kirklees-teal text-sm font-semibold mb-1">Powered by</p>
            <p className="text-white/60 text-sm">Claude Code + BMAD Methodology</p>
            <p className="text-white/40 text-xs mt-1">AI-assisted development</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
