const demos = [
  {
    number: 1,
    title: "Local Skills Demand Dashboard",
    subtitle: "What does the local labour market actually need?",
    description:
      "A live intelligence dashboard mapping real employer demand in the Kirklees area against the college's curriculum. See which skills are in demand, which sectors are growing, and where the gaps are — powered by 4,631 live job vacancies and official labour market statistics.",
    dataPoints: [
      "4,631 live job vacancies (Reed API)",
      "21 SIC sectors with employment data (NOMIS/BRES)",
      "Salary benchmarks: £25,307–£32,063 average",
      "West Yorkshire LSIP skills priorities",
      "Claimant count, employment rates, business counts",
    ],
    questions: [
      "Are we teaching what local employers need?",
      "Which sectors are growing fastest?",
      "What salary outcomes can our students expect?",
      "Where should we invest in new curriculum?",
    ],
    color: "kirklees-teal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Apprenticeship Opportunity Scanner",
    subtitle: "Where are the apprenticeship opportunities — and who's offering them?",
    description:
      "A real-time scanner that maps live apprenticeship vacancies, tracks employer demand by sector and level, and benchmarks Kirklees College against 640 apprenticeship standards. Identifies employers not yet partnered with the college and sectors with rising demand.",
    dataPoints: [
      "303 live apprenticeship vacancies (gov.uk + Reed)",
      "640 relevant apprenticeship standards (IfATE API)",
      "288 rows of Kirklees starts/achievements/participation",
      "22-year time series by sector and level",
      "1,980 starts, 810 achievements, 5,730 participating (2025/26)",
    ],
    questions: [
      "Which employers should we approach next?",
      "What apprenticeship levels are growing fastest?",
      "Are we covering the standards with most demand?",
      "How do our completion rates compare?",
    ],
    color: "kirklees-green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Competitor Course Tracker",
    subtitle: "What are other colleges doing — and where is the white space?",
    description:
      "A competitive intelligence dashboard comparing Kirklees College against 8 regional competitors. See their course offerings, Ofsted ratings, marketing positioning, and identify curriculum gaps and opportunities that no one else is filling.",
    dataPoints: [
      "8 competitor institution profiles",
      "Ofsted ratings comparison (2 Outstanding, 6 Good)",
      "Course subject overlap and gap analysis",
      "6 identified curriculum gaps (Dental, Pharmacy, Law, etc.)",
      "Competitive threat assessment by catchment area",
    ],
    questions: [
      "Are we missing courses our competitors are winning on?",
      "How does our Ofsted compare regionally?",
      "Where do we have unique strengths no one else has?",
      "Which sixth forms are pulling students we should reach?",
    ],
    color: "kirklees-teal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Widening Participation Radar",
    subtitle: "Where are the barriers — and are we reaching the communities that need us most?",
    description:
      "A geographic intelligence tool mapping deprivation, demographics, and access barriers across every neighbourhood in Kirklees. Overlays the college's campus locations against 259 areas with deprivation scores to identify communities the college should be targeting for outreach.",
    dataPoints: [
      "259 LSOAs with 40+ deprivation indicators each (IMD 2019)",
      "Census 2021: age, ethnicity, qualifications, economic activity",
      "Population density across 1,888 areas",
      "Income, employment, education, and health deprivation scores",
      "Children and young people sub-domain analysis",
    ],
    questions: [
      "Which communities face the greatest barriers to learning?",
      "Are our campuses accessible to the most deprived areas?",
      "Where should we focus outreach and recruitment?",
      "What does our catchment area really look like?",
    ],
    color: "kirklees-green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Student Sentiment Monitor",
    subtitle: "What are learners, parents, and staff actually saying about us?",
    description:
      "A reputation intelligence dashboard aggregating reviews, ratings, and public commentary from multiple platforms. Compares Kirklees College's sentiment against 4 regional competitors and highlights themes to celebrate and issues to address — before they reach the boardroom.",
    dataPoints: [
      "RateMyApprenticeship: 8.9/10 (83 reviews, Top 5 nationally)",
      "Ofsted Good (March 2023) — strengths and areas for improvement",
      "Reviews from Trustpilot, WhatUni, UniCompare, Glassdoor",
      "Social media: Facebook 14K, Instagram 8.3K followers",
      "4 competitor sentiment profiles for benchmarking",
    ],
    questions: [
      "What are students and parents publicly saying about us?",
      "How does our reputation compare to competitors?",
      "What recurring themes should we address?",
      "Where are we outperforming — and should be shouting about it?",
    ],
    color: "kirklees-teal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-kirklees-navy">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/kirklees-logo.svg" alt="Kirklees College" className="h-12 brightness-0 invert" />
          <span className="text-white/60 text-sm font-light tracking-wide">
            AI-Powered Prototyping Session
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-kirklees-navy via-kirklees-navy-light to-kirklees-logo-teal text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-kirklees-teal font-semibold text-sm uppercase tracking-widest mb-4">
            Demonstration Session &mdash; April 2026
          </p>
          <h1 className="text-5xl font-extrabold leading-tight mb-6 max-w-4xl">
            From idea to working prototype
            <span className="text-kirklees-teal"> in hours, not months.</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed mb-10">
            Using <strong className="text-white">AI-assisted development</strong> and{" "}
            <strong className="text-white">real public data</strong>, we can build
            intelligent dashboards and decision tools for Kirklees College — fast
            enough to start during a morning meeting and have a working prototype
            before you leave.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-kirklees-teal mb-1">4,631</div>
              <div className="text-white/70 text-sm">Live job vacancies analysed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-kirklees-green mb-1">10,000+</div>
              <div className="text-white/70 text-sm">Deprivation &amp; demographic data points</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-kirklees-teal mb-1">8</div>
              <div className="text-white/70 text-sm">Competitor institutions profiled</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-kirklees-grey-50 border-b border-kirklees-grey-300">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-kirklees-navy mb-8">How this works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kirklees-teal text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-kirklees-navy mb-1">You choose two</h3>
                <p className="text-kirklees-grey-500 text-sm leading-relaxed">
                  Pick two demos from the five options below. All the data is already
                  gathered and ready to build with.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kirklees-teal text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-kirklees-navy mb-1">We build live</h3>
                <p className="text-kirklees-grey-500 text-sm leading-relaxed">
                  While you continue your visit, we build a working prototype using
                  AI-assisted development — real code, real data, real deployment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kirklees-teal text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-kirklees-navy mb-1">You see the result</h3>
                <p className="text-kirklees-grey-500 text-sm leading-relaxed">
                  Before you leave, we walk through the working prototype together —
                  live on the web, populated with real Kirklees data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demos */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-kirklees-navy mb-3">
              Choose two to build today
            </h2>
            <p className="text-kirklees-grey-500 max-w-2xl mx-auto">
              Each option uses publicly available data that has already been
              gathered and validated. No internal systems or data sharing required
              for the demo.
            </p>
          </div>

          <div className="space-y-8">
            {demos.map((demo) => (
              <div
                key={demo.number}
                className="rounded-2xl border border-kirklees-grey-300 overflow-hidden hover:border-kirklees-teal/40 transition-colors duration-300"
              >
                {/* Card header */}
                <div
                  className={`px-8 py-6 flex items-start gap-5 ${
                    demo.number % 2 === 1
                      ? "bg-gradient-to-r from-kirklees-navy to-kirklees-navy-light text-white"
                      : "bg-gradient-to-r from-kirklees-logo-teal to-kirklees-navy text-white"
                  }`}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center">
                    {demo.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                        Option {demo.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold">{demo.title}</h3>
                    <p className="text-white/70 mt-1">{demo.subtitle}</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-8 py-6">
                  <p className="text-kirklees-grey-600 leading-relaxed mb-6">
                    {demo.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Data sources */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-kirklees-teal mb-3">
                        Real data available
                      </h4>
                      <ul className="space-y-2">
                        {demo.dataPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-kirklees-grey-600">
                            <svg
                              className="w-4 h-4 text-kirklees-green flex-shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Questions it answers */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-kirklees-navy mb-3">
                        Questions it answers
                      </h4>
                      <ul className="space-y-2">
                        {demo.questions.map((q, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-kirklees-grey-600">
                            <span className="text-kirklees-teal flex-shrink-0 mt-0.5 font-bold">&rarr;</span>
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-kirklees-grey-50 border-t border-kirklees-grey-300">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-kirklees-navy mb-8">Our approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Only public data",
                desc: "Every dataset used is publicly available. No internal systems accessed, no personal data processed.",
              },
              {
                title: "Respectful collection",
                desc: "All data gathered respecting robots.txt, site terms, rate limits, and API usage policies.",
              },
              {
                title: "Insight, not surveillance",
                desc: "Tools designed to inform strategic decisions, not to monitor individuals or invade privacy.",
              },
              {
                title: "Built to hand over",
                desc: "Everything we build is yours — the code, the data, the deployment. No lock-in, full transparency.",
              },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 border border-kirklees-grey-300">
                <h3 className="font-bold text-kirklees-navy mb-2 text-sm">{p.title}</h3>
                <p className="text-kirklees-grey-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kirklees-navy text-white/50 text-xs">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/kirklees-logo.svg" alt="Kirklees College" className="h-8 brightness-0 invert opacity-40" />
            <span>Prepared for Kirklees College &mdash; April 2026</span>
          </div>
          <span>Powered by AI-assisted development</span>
        </div>
      </footer>
    </main>
  );
}
