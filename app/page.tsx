import { KirkleesChevron, KirkleesNav, KirkleesFooter, SectionDivider } from "@/src/components/kirklees-ui";

const demos = [
  {
    number: 1,
    title: "Local Skills Demand Dashboard",
    hook: "What do local employers actually need — and are we teaching it?",
    description:
      "A live intelligence dashboard mapping 4,631 real job vacancies across the Kirklees area against the college's curriculum. Identify growing sectors, salary benchmarks, in-demand skills, and curriculum gaps — all from real data, updated in real-time.",
    stats: [
      { value: "4,631", label: "live vacancies" },
      { value: "£30k", label: "median salary" },
      { value: "21", label: "sectors mapped" },
    ],
    accent: "kirklees-teal",
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
    accent: "kirklees-green",
  },
  {
    number: 3,
    title: "Competitor Course Tracker",
    hook: "What are other colleges doing — and where's our white space?",
    description:
      "Compare Kirklees College against 8 regional competitors. See their course offerings, Ofsted ratings, marketing positioning, and identify 6 curriculum gaps no one else is filling — like Dental Nursing, Pharmacy, and Performing Arts.",
    stats: [
      { value: "8", label: "competitors profiled" },
      { value: "6", label: "gaps identified" },
      { value: "2", label: "Outstanding-rated rivals" },
    ],
    accent: "kirklees-teal",
  },
  {
    number: 4,
    title: "Widening Participation Radar",
    hook: "Are we reaching the communities that need us most?",
    description:
      "Map every neighbourhood in Kirklees by deprivation, demographics, and access barriers. Overlay campus locations against 259 areas to identify where outreach should focus — supported by 10,000+ data points from the Index of Multiple Deprivation and Census 2021.",
    stats: [
      { value: "259", label: "areas mapped" },
      { value: "10k+", label: "data points" },
      { value: "40+", label: "deprivation indicators" },
    ],
    accent: "kirklees-green",
  },
  {
    number: 5,
    title: "Student Sentiment Monitor",
    hook: "What are learners and parents publicly saying about us — and our competitors?",
    description:
      "Aggregate reviews, ratings, and public commentary from RateMyApprenticeship (8.9/10, Top 5 nationally), Trustpilot, WhatUni, Ofsted, and social media. Benchmark against 4 competitors and surface themes to celebrate — or address.",
    stats: [
      { value: "8.9/10", label: "apprenticeship rating" },
      { value: "5", label: "platforms tracked" },
      { value: "4", label: "competitors compared" },
    ],
    accent: "kirklees-teal",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <KirkleesNav activePage="home" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-kirklees-navy via-kirklees-navy-light to-kirklees-logo-teal min-h-[85vh] flex items-center">
        {/* Decorative chevrons */}
        <KirkleesChevron
          className="absolute -right-20 -top-10 w-80 h-auto opacity-10 animate-float"
          color="#00abc1"
        />
        <KirkleesChevron
          className="absolute -left-16 bottom-0 w-60 h-auto opacity-5 rotate-180"
          color="#63ac5f"
        />
        {/* Accent circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-kirklees-teal/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-kirklees-green/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-kirklees-teal/20 border border-kirklees-teal/30 rounded-full px-4 py-1.5 mb-8 animate-fade-up">
              <div className="w-2 h-2 bg-kirklees-teal rounded-full animate-pulse" />
              <span className="text-kirklees-teal text-sm font-semibold">Live Session &mdash; April 2026</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-up stagger-1">
              What if you could build
              <span className="block text-kirklees-teal mt-1">a working tool in hours?</span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-2xl animate-fade-up stagger-2">
              <strong className="text-white">Vibe coding</strong> is a new way to build software.
              Instead of months of specifications, procurement, and development — you describe what
              you need in plain English and an AI builds it with you, live.
            </p>
            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-2xl animate-fade-up stagger-3">
              No technical skills required. No vendor lock-in. Just real tools, built from real data,
              in a fraction of the time.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up stagger-4">
              <a
                href="#choose"
                className="bg-kirklees-teal hover:bg-kirklees-teal-light text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-kirklees-teal/20"
              >
                See what we can build today
              </a>
              <a
                href="/how-it-works"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all"
              >
                How does this work?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is vibe coding */}
      <section className="bg-white relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kirklees-teal to-transparent" />
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-kirklees-teal font-bold text-sm uppercase tracking-widest">The concept</span>
              <h2 className="text-3xl font-extrabold text-kirklees-navy mt-3 mb-6">
                What is vibe coding?
              </h2>
              <p className="text-kirklees-grey-600 leading-relaxed mb-4">
                Vibe coding is the practice of building software by <strong className="text-kirklees-navy">describing
                what you want in natural language</strong> and letting AI write the code. You don&apos;t
                need to be a programmer. You need to understand your problem.
              </p>
              <p className="text-kirklees-grey-600 leading-relaxed mb-4">
                Combined with a structured methodology called <strong className="text-kirklees-navy">BMAD</strong> (an
                AI-native approach to agile development), we can go from a blank page to a deployed,
                working prototype in hours — not months.
              </p>
              <p className="text-kirklees-grey-600 leading-relaxed">
                Today, we&apos;ll demonstrate this live. You choose an idea, and we start building
                it — right here, with you watching.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "💬",
                  title: "You describe the problem",
                  desc: "In plain English. No specifications, no technical jargon.",
                  border: "border-kirklees-teal/30",
                  bg: "bg-kirklees-teal/5",
                },
                {
                  icon: "🤖",
                  title: "AI agents research and design",
                  desc: "A team of specialist AI agents gather data, analyse requirements, and design the solution.",
                  border: "border-kirklees-green/30",
                  bg: "bg-kirklees-green/5",
                },
                {
                  icon: "⚡",
                  title: "Working code appears in minutes",
                  desc: "Real, deployable software — not a mockup or a PowerPoint. Built live, on the web.",
                  border: "border-kirklees-teal/30",
                  bg: "bg-kirklees-teal/5",
                },
                {
                  icon: "🔄",
                  title: "Iterate in real time",
                  desc: "Don't like something? Say so. The AI adjusts immediately. You're in control throughout.",
                  border: "border-kirklees-green/30",
                  bg: "bg-kirklees-green/5",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-5 rounded-xl border ${step.border} ${step.bg} hover:scale-[1.02] transition-transform`}
                >
                  <span className="text-2xl flex-shrink-0">{step.icon}</span>
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

      {/* The session */}
      <section className="bg-kirklees-navy relative overflow-hidden">
        <KirkleesChevron className="absolute right-10 top-1/2 -translate-y-1/2 w-48 opacity-5" color="#00abc1" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kirklees-teal/50 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 py-20 relative">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-kirklees-teal font-bold text-sm uppercase tracking-widest">Today&apos;s session</span>
            <h2 className="text-3xl font-extrabold text-white mt-3 mb-4">
              How today works
            </h2>
            <p className="text-white/60">
              This is a hands-on demonstration, not a sales pitch. We&apos;ve already done the
              preparation — gathering real public data about Kirklees, its employers, its
              communities, and its competitors.
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
                desc: "We'll start building a working prototype live, talking through the process as we go. You'll see exactly how vibe coding works.",
                color: "bg-kirklees-green",
              },
              {
                step: "3",
                title: "Shape the result",
                desc: "Give feedback as we build. Want a different chart? Different data view? Say the word and it changes instantly.",
                color: "bg-kirklees-teal",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className={`${s.color} text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl font-extrabold mb-4`}>
                  {s.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose your demo */}
      <section id="choose" className="bg-kirklees-grey-50 relative">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-kirklees-teal via-kirklees-green to-kirklees-teal" />
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-kirklees-teal font-bold text-sm uppercase tracking-widest">Pick one</span>
            <h2 className="text-3xl font-extrabold text-kirklees-navy mt-3 mb-4">
              What shall we build?
            </h2>
            <p className="text-kirklees-grey-500">
              Each option is backed by real, publicly available data we&apos;ve already gathered.
              Pick the one that would be most useful to the college — or suggest something completely different.
            </p>
          </div>

          <div className="grid gap-6">
            {demos.map((demo) => (
              <div
                key={demo.number}
                className="group bg-white rounded-2xl border border-kirklees-grey-300 overflow-hidden hover:border-kirklees-teal/50 hover:shadow-xl hover:shadow-kirklees-teal/5 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left accent */}
                  <div className={`md:w-2 w-full h-1 md:h-auto bg-${demo.accent} flex-shrink-0`} />

                  <div className="flex-1 p-8">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`w-8 h-8 rounded-lg bg-${demo.accent}/10 text-${demo.accent} flex items-center justify-center text-sm font-extrabold`}>
                            {demo.number}
                          </span>
                          <h3 className="text-xl font-extrabold text-kirklees-navy group-hover:text-kirklees-logo-teal transition-colors">
                            {demo.title}
                          </h3>
                        </div>
                        <p className="text-kirklees-teal font-semibold text-sm mb-3">{demo.hook}</p>
                        <p className="text-kirklees-grey-500 text-sm leading-relaxed max-w-2xl">
                          {demo.description}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="hidden md:flex gap-6 flex-shrink-0">
                        {demo.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className={`text-2xl font-extrabold text-${demo.accent}`}>{stat.value}</div>
                            <div className="text-[11px] text-kirklees-grey-400 uppercase tracking-wider mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile stats */}
                    <div className="flex gap-6 mt-4 md:hidden">
                      {demo.stats.map((stat, i) => (
                        <div key={i}>
                          <span className={`font-extrabold text-${demo.accent}`}>{stat.value}</span>
                          <span className="text-kirklees-grey-400 text-xs ml-1">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Bring your own */}
            <div className="group bg-white rounded-2xl border-2 border-dashed border-kirklees-grey-300 overflow-hidden hover:border-kirklees-teal transition-all duration-300">
              <div className="p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-kirklees-teal/10 to-kirklees-green/10 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-kirklees-teal">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-kirklees-navy mb-2">
                  Got a different idea?
                </h3>
                <p className="text-kirklees-grey-500 text-sm max-w-lg mx-auto">
                  These five are just starting points. If there&apos;s a challenge you&apos;re facing right now —
                  a question you can&apos;t answer, a report you wish you had, a dataset you want to make sense of —
                  tell us and we&apos;ll see what we can build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data principles */}
      <section className="bg-white">
        <SectionDivider variant="teal" />
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Public data only",
                desc: "Every dataset is publicly available. No internal systems accessed for the demo.",
                icon: "🔓",
              },
              {
                title: "Respectful collection",
                desc: "All data gathered respecting robots.txt, rate limits, and API terms of use.",
                icon: "🤝",
              },
              {
                title: "Insight, not surveillance",
                desc: "Tools designed for strategic decisions, not monitoring individuals.",
                icon: "🎯",
              },
              {
                title: "Yours to keep",
                desc: "Everything we build is yours — the code, the data, the deployment. No lock-in.",
                icon: "🔑",
              },
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

      {/* CTA to how it works */}
      <section className="bg-gradient-to-r from-kirklees-navy via-kirklees-logo-teal to-kirklees-navy relative overflow-hidden">
        <KirkleesChevron className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 opacity-10" color="white" />
        <div className="max-w-4xl mx-auto px-6 py-16 text-center relative">
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Want to understand the technology behind this?
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Learn about BMAD methodology, AI agents, Claude Code, and how non-technical
            teams can build production-grade software.
          </p>
          <a
            href="/how-it-works"
            className="inline-flex items-center gap-2 bg-white text-kirklees-navy font-bold px-8 py-4 rounded-xl hover:bg-kirklees-teal-pale transition-all hover:scale-105"
          >
            How It Works
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>

      <KirkleesFooter />
    </main>
  );
}
