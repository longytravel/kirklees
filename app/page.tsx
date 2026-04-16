import { DiagonalBars, KirkleesNav, KirkleesFooter } from "@/src/components/kirklees-ui";

const demos = [
  {
    number: 1,
    title: "Local Skills Demand Dashboard",
    hook: "What do local employers actually need — and are we teaching it?",
    description:
      "A live intelligence dashboard mapping 4,631 real job vacancies across the Kirklees area against the college's curriculum. Identify growing sectors, salary benchmarks, in-demand skills, and curriculum gaps — all from real data.",
    stats: [
      { value: "4,631", label: "live vacancies" },
      { value: "£30k", label: "median salary" },
      { value: "21", label: "sectors mapped" },
    ],
  },
  {
    number: 2,
    title: "Apprenticeship Opportunity Scanner",
    hook: "Which employers should we be talking to — and what are they looking for?",
    description:
      "Scan 303 live apprenticeship vacancies across the region. Map employer demand by sector and level, identify employers not yet partnered with the college, and benchmark against 640 national apprenticeship standards.",
    stats: [
      { value: "303", label: "live vacancies" },
      { value: "640", label: "standards mapped" },
      { value: "1,980", label: "starts this year" },
    ],
  },
  {
    number: 3,
    title: "Competitor Course Tracker",
    hook: "What are other colleges doing — and where's our white space?",
    description:
      "Compare Kirklees College against regional rivals, course by course. Live-scraped catalogues, normalised for like-for-like comparison, with curriculum gaps surfaced automatically. Bradford loaded now — Kirklees baseline and five more colleges follow.",
    stats: [
      { value: "259", label: "Bradford courses" },
      { value: "25", label: "subject areas" },
      { value: "Live", label: "data pipeline" },
    ],
    href: "/competitor-tracker",
  },
  {
    number: 4,
    title: "Widening Participation Radar",
    hook: "Are we reaching the communities that need us most?",
    description:
      "Map every neighbourhood in Kirklees by deprivation, demographics, and access barriers. Overlay campus locations against 259 areas to identify where outreach should focus — supported by 10,000+ data points from the IMD and Census 2021.",
    stats: [
      { value: "259", label: "areas mapped" },
      { value: "10k+", label: "data points" },
      { value: "40+", label: "deprivation indicators" },
    ],
  },
  {
    number: 5,
    title: "Student Sentiment Monitor",
    hook: "What are learners and parents publicly saying about us — and our competitors?",
    description:
      "Aggregate reviews and ratings from RateMyApprenticeship (8.9/10, Top 5 nationally), Trustpilot, WhatUni, Ofsted, and social media. Benchmark against 4 competitors and surface themes to celebrate — or address.",
    stats: [
      { value: "8.9/10", label: "apprenticeship rating" },
      { value: "5", label: "platforms tracked" },
      { value: "4", label: "competitors compared" },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <KirkleesNav activePage="home" />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-kirklees-navy min-h-[85vh] flex items-center">
        <DiagonalBars variant="medium" />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <p className="text-kirklees-teal text-sm font-bold uppercase tracking-widest mb-8 animate-fade-in">
            Live Session &mdash; April 2026
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-4 animate-fade-in delay-1">
            What if you could build
          </h1>

          <div className="inline-block bg-kirklees-purple px-5 py-2 mb-4 animate-fade-in delay-2">
            <span className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
              a working tool
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-10 animate-fade-in delay-3">
            in hours?
          </h1>

          <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl animate-fade-in delay-4">
            <strong className="text-white">Vibe coding</strong> is a new way to build software.
            Describe what you need in plain English and an AI builds it &mdash; live.
            No technical skills required. No vendor lock-in.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in delay-5">
            <a
              href="#choose"
              className="bg-kirklees-teal hover:bg-kirklees-teal-light text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              See what we can build today
            </a>
            <a
              href="/how-it-works"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border border-white/20 transition-all"
            >
              How does this work?
            </a>
          </div>
        </div>
      </section>

      {/* ── What is vibe coding ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-kirklees-navy mb-6">
                What is vibe coding?
              </h2>
              <p className="text-kirklees-grey-600 leading-relaxed mb-4">
                Vibe coding is building software by{" "}
                <strong className="text-kirklees-navy">
                  describing what you want in natural language
                </strong>{" "}
                and letting AI write the code. You don&apos;t need to be a programmer. You
                need to understand your problem.
              </p>
              <p className="text-kirklees-grey-600 leading-relaxed mb-4">
                Combined with{" "}
                <strong className="text-kirklees-navy">BMAD</strong> (an AI-native agile
                methodology), we go from a blank page to a deployed, working prototype in
                hours &mdash; not months.
              </p>
              <p className="text-kirklees-grey-600 leading-relaxed">
                Today, we&apos;ll demonstrate this live. You choose an idea, and we start
                building it &mdash; right here, with you watching.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "You describe the problem",
                  desc: "In plain English. No specifications, no technical jargon.",
                  color: "bg-kirklees-teal",
                },
                {
                  num: "2",
                  title: "AI agents research and design",
                  desc: "Specialist AI agents gather data, analyse requirements, and design the solution.",
                  color: "bg-kirklees-purple",
                },
                {
                  num: "3",
                  title: "Working code appears in minutes",
                  desc: "Real, deployable software — not a mockup. Built live, on the web.",
                  color: "bg-kirklees-teal",
                },
                {
                  num: "4",
                  title: "Iterate in real time",
                  desc: "Don't like something? Say so. The AI adjusts immediately.",
                  color: "bg-kirklees-green",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="flex gap-4 p-5 rounded-xl bg-kirklees-grey-100 border border-kirklees-grey-300 hover:border-kirklees-teal/50 transition-colors"
                >
                  <div
                    className={`${step.color} text-white w-10 h-10 rounded-lg flex items-center justify-center text-sm font-black flex-shrink-0`}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-kirklees-navy text-sm">{step.title}</h3>
                    <p className="text-kirklees-grey-500 text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How today works ── */}
      <section className="bg-kirklees-grey-100 py-20 border-y border-kirklees-grey-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-kirklees-navy mb-4">How today works</h2>
            <p className="text-kirklees-grey-500">
              This is a hands-on demonstration, not a sales pitch. We&apos;ve already gathered
              real public data about Kirklees, its employers, its communities, and its competitors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose an idea",
                desc: "Pick one of five pre-researched options below — or suggest your own. All the data is ready.",
                color: "bg-kirklees-teal",
              },
              {
                step: "2",
                title: "Watch us build",
                desc: "We start building a working prototype live, talking through the process as we go.",
                color: "bg-kirklees-purple",
              },
              {
                step: "3",
                title: "Shape the result",
                desc: "Give feedback as we build. Want a different chart? Different data? Say the word.",
                color: "bg-kirklees-green",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-8 border border-kirklees-grey-300">
                <div
                  className={`${s.color} text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-black mb-4`}
                >
                  {s.step}
                </div>
                <h3 className="text-kirklees-navy font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-kirklees-grey-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Choose your demo ── */}
      <section id="choose" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-kirklees-navy mb-4">
              What shall we build?
            </h2>
            <p className="text-kirklees-grey-500">
              Each option is backed by real, publicly available data we&apos;ve already gathered.
              Pick the one most useful to the college &mdash; or suggest something different.
            </p>
          </div>

          <div className="grid gap-5">
            {demos.map((demo) => {
              const accent = demo.number % 2 === 0 ? "kirklees-purple" : "kirklees-teal";
              const isLive = "href" in demo && demo.href;
              const Wrapper = isLive
                ? ({ children }: { children: React.ReactNode }) => (
                    <a
                      href={(demo as { href: string }).href}
                      className="group bg-white rounded-xl border border-kirklees-grey-300 overflow-hidden hover:border-kirklees-teal hover:shadow-lg transition-all block"
                    >
                      {children}
                    </a>
                  )
                : ({ children }: { children: React.ReactNode }) => (
                    <div className="group bg-white rounded-xl border border-kirklees-grey-300 overflow-hidden hover:border-kirklees-teal hover:shadow-lg transition-all">
                      {children}
                    </div>
                  );
              return (
                <Wrapper key={demo.number}>
                  <div className="flex flex-col md:flex-row">
                    <div className={`md:w-1.5 w-full h-1 md:h-auto flex-shrink-0 bg-${accent}`} />

                    <div className="flex-1 p-6 md:p-8">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span
                              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white bg-${accent}`}
                            >
                              {demo.number}
                            </span>
                            <h3 className="text-lg font-black text-kirklees-navy group-hover:text-kirklees-teal transition-colors">
                              {demo.title}
                            </h3>
                            {isLive && (
                              <span className="inline-flex items-center gap-1.5 bg-kirklees-green/15 text-kirklees-green text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-kirklees-green animate-pulse" />
                                Live
                              </span>
                            )}
                          </div>
                          <p className="text-kirklees-purple font-semibold text-sm mb-2">
                            {demo.hook}
                          </p>
                          <p className="text-kirklees-grey-500 text-sm leading-relaxed max-w-2xl">
                            {demo.description}
                          </p>
                          {isLive && (
                            <p className="mt-3 text-kirklees-teal text-sm font-bold group-hover:translate-x-1 transition-transform">
                              Open the prototype →
                            </p>
                          )}
                        </div>

                        <div className="hidden md:flex gap-6 flex-shrink-0">
                          {demo.stats.map((stat, i) => (
                            <div key={i} className="text-center">
                              <div className={`text-2xl font-black text-${accent}`}>
                                {stat.value}
                              </div>
                              <div className="text-[11px] text-kirklees-grey-400 uppercase tracking-wider mt-1">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-6 mt-4 md:hidden">
                        {demo.stats.map((stat, i) => (
                          <div key={i}>
                            <span className={`font-black text-${accent}`}>{stat.value}</span>
                            <span className="text-kirklees-grey-400 text-xs ml-1">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Wrapper>
              );
            })}

            {/* Bring your own idea */}
            <div className="group bg-kirklees-grey-100 rounded-xl border-2 border-dashed border-kirklees-grey-400 overflow-hidden hover:border-kirklees-purple transition-all">
              <div className="p-8 text-center">
                <div className="w-14 h-14 rounded-lg bg-kirklees-purple/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-7 h-7 text-kirklees-purple"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-kirklees-navy mb-2">
                  Got a different idea?
                </h3>
                <p className="text-kirklees-grey-500 text-sm max-w-lg mx-auto">
                  These five are starting points. If there&apos;s a challenge you&apos;re facing &mdash;
                  a question you can&apos;t answer, a dataset you want to make sense of &mdash;
                  tell us and we&apos;ll build it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Data principles ── */}
      <section className="bg-kirklees-grey-100 py-16 border-y border-kirklees-grey-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Public data only", desc: "Every dataset is publicly available. No internal systems accessed.", icon: "\uD83D\uDD13" },
              { title: "Respectful collection", desc: "All data gathered respecting robots.txt, rate limits, and API terms.", icon: "\uD83E\uDD1D" },
              { title: "Insight, not surveillance", desc: "Tools designed for strategic decisions, not monitoring individuals.", icon: "\uD83C\uDFAF" },
              { title: "Yours to keep", desc: "Everything we build is yours — the code, the data, the deployment.", icon: "\uD83D\uDD11" },
            ].map((p) => (
              <div key={p.title} className="text-center p-6">
                <span className="text-2xl mb-3 block">{p.icon}</span>
                <h3 className="font-bold text-kirklees-navy text-sm mb-2">{p.title}</h3>
                <p className="text-kirklees-grey-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-kirklees-navy py-16">
        <DiagonalBars variant="light" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-2xl font-black text-white mb-4">
            Want to understand the technology behind this?
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Learn about BMAD methodology, AI agents, Claude Code, and how non-technical
            teams can build production-grade software.
          </p>
          <a
            href="/how-it-works"
            className="inline-flex items-center gap-2 bg-kirklees-teal hover:bg-kirklees-teal-light text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            How It Works
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </section>

      <KirkleesFooter />
    </main>
  );
}
