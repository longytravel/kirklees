import { KirkleesChevron, KirkleesNav, KirkleesFooter, SectionDivider } from "@/src/components/kirklees-ui";

const agents = [
  {
    name: "Mary",
    role: "Business Analyst",
    desc: "Researches your market, analyses competitors, and translates vague ideas into precise requirements. She treats every business challenge like a treasure hunt.",
    skills: "Market research, competitive analysis, requirements elicitation, domain expertise",
    color: "kirklees-teal",
  },
  {
    name: "John",
    role: "Product Manager",
    desc: "Creates the product requirements document — the blueprint for what gets built. Ensures every feature has a clear purpose and user benefit.",
    skills: "PRDs, user stories, feature prioritisation, stakeholder alignment",
    color: "kirklees-green",
  },
  {
    name: "Sally",
    role: "UX Designer",
    desc: "Designs the user experience — how the tool looks, feels, and flows. Creates intuitive interfaces that anyone can use without training.",
    skills: "UI design, user flows, wireframes, accessibility, responsive design",
    color: "kirklees-teal",
  },
  {
    name: "Winston",
    role: "Solution Architect",
    desc: "Designs the technical architecture — which technologies to use, how data flows, and how everything connects. Makes the complex simple.",
    skills: "System design, data architecture, API design, technology selection",
    color: "kirklees-green",
  },
  {
    name: "Amelia",
    role: "Senior Developer",
    desc: "Writes the actual code. Builds features story by story, following the architecture and design specs. The one who makes it real.",
    skills: "Full-stack development, React, databases, APIs, deployment",
    color: "kirklees-teal",
  },
  {
    name: "Murat",
    role: "Test Architect",
    desc: "Ensures quality at every stage. Designs test strategies, validates features work correctly, and catches issues before users see them.",
    skills: "Test design, quality assurance, acceptance testing, CI/CD pipelines",
    color: "kirklees-green",
  },
  {
    name: "Paige",
    role: "Technical Writer",
    desc: "Documents everything — from user guides to technical specs. Ensures knowledge is captured and transferable.",
    skills: "Documentation, knowledge management, user guides, API docs",
    color: "kirklees-teal",
  },
];

const bmadSteps = [
  {
    phase: "Discover",
    title: "Understand the problem",
    desc: "Mary the analyst researches the domain, gathers data, and works with you to define exactly what you need. No assumptions — just evidence.",
    duration: "30-60 minutes",
    output: "Product brief with clear requirements",
  },
  {
    phase: "Design",
    title: "Plan the solution",
    desc: "Winston architects the system, Sally designs the user experience, and John creates the development plan. Everything is documented before a line of code is written.",
    duration: "30-60 minutes",
    output: "Architecture, UX design, and development plan",
  },
  {
    phase: "Build",
    title: "Write the code",
    desc: "Amelia builds the application story by story. Each feature is small, testable, and deployable. You see progress in real time — not weeks later.",
    duration: "1-4 hours per feature",
    output: "Working, deployed software",
  },
  {
    phase: "Validate",
    title: "Test and refine",
    desc: "Murat validates quality, you review the result, and we iterate. Changes that would take weeks in traditional development happen in minutes.",
    duration: "Continuous",
    output: "Tested, refined, production-ready tool",
  },
];

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white">
      <KirkleesNav activePage="how-it-works" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-kirklees-navy via-kirklees-navy-light to-kirklees-logo-teal">
        <KirkleesChevron className="absolute -right-16 top-10 w-64 opacity-10 animate-float" color="#00abc1" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kirklees-teal to-transparent" />

        <div className="max-w-6xl mx-auto px-6 py-20 relative">
          <span className="text-kirklees-teal font-bold text-sm uppercase tracking-widest">Behind the scenes</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6 max-w-3xl">
            The methodology, the tools,
            <span className="text-kirklees-teal"> the team.</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
            A reference guide to everything powering today&apos;s session — and how your
            organisation could use these approaches every day.
          </p>
        </div>
      </section>

      {/* What is BMAD */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-kirklees-teal font-bold text-sm uppercase tracking-widest">The Methodology</span>
              <h2 className="text-3xl font-extrabold text-kirklees-navy mt-3 mb-6">
                BMAD: AI-Native Agile
              </h2>
              <p className="text-kirklees-grey-600 leading-relaxed mb-4">
                <strong className="text-kirklees-navy">BMAD</strong> is a methodology designed
                specifically for AI-assisted development. It takes the best principles of agile
                software development and adapts them for a world where AI agents do the heavy lifting.
              </p>
              <p className="text-kirklees-grey-600 leading-relaxed mb-4">
                Instead of a single developer working alone, BMAD uses a <strong className="text-kirklees-navy">team
                of specialist AI agents</strong> — each with deep expertise in their domain. An analyst
                researches. An architect designs. A developer builds. A tester validates. Just like a
                real software team, but operating at AI speed.
              </p>
              <p className="text-kirklees-grey-600 leading-relaxed mb-6">
                The human stays in control throughout. You make the decisions, set the priorities,
                and approve the direction. The AI handles the execution.
              </p>

              <div className="bg-kirklees-teal/5 border border-kirklees-teal/20 rounded-xl p-6">
                <h3 className="font-bold text-kirklees-navy text-sm mb-3">Why not just ask ChatGPT?</h3>
                <p className="text-kirklees-grey-500 text-sm leading-relaxed">
                  General AI chat can answer questions, but it can&apos;t build and deploy real software.
                  BMAD gives the AI <strong>structure, memory, and specialisation</strong>. Each agent has deep
                  expertise, follows proven processes, and produces real, production-grade output —
                  not just suggestions.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-kirklees-navy mb-6">The BMAD Process</h3>
              <div className="space-y-6">
                {bmadSteps.map((step, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-kirklees-grey-300 last:border-l-kirklees-teal">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-kirklees-teal border-2 border-white" />
                    <div className="bg-kirklees-grey-50 rounded-xl p-5 border border-kirklees-grey-200">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-kirklees-teal font-extrabold text-xs uppercase tracking-widest">{step.phase}</span>
                        <span className="text-kirklees-grey-400 text-xs">~{step.duration}</span>
                      </div>
                      <h4 className="font-bold text-kirklees-navy mb-1">{step.title}</h4>
                      <p className="text-kirklees-grey-500 text-sm leading-relaxed mb-2">{step.desc}</p>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-kirklees-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-kirklees-green text-xs font-semibold">{step.output}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The AI Team */}
      <section className="bg-kirklees-navy relative overflow-hidden">
        <KirkleesChevron className="absolute -left-10 top-20 w-40 opacity-5" color="#00abc1" />
        <KirkleesChevron className="absolute right-20 bottom-10 w-32 opacity-5 rotate-180" color="#63ac5f" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kirklees-teal/50 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 py-20 relative">
          <div className="text-center mb-14">
            <span className="text-kirklees-teal font-bold text-sm uppercase tracking-widest">The AI Team</span>
            <h2 className="text-3xl font-extrabold text-white mt-3 mb-4">
              Meet your agents
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Each agent is a specialist with deep domain expertise. They work together as a team,
              coordinated by the BMAD methodology, with you as the decision-maker.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-kirklees-teal/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-${agent.color}/20 flex items-center justify-center`}>
                    <span className={`text-${agent.color} font-extrabold text-lg`}>{agent.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{agent.name}</h3>
                    <p className={`text-${agent.color} text-xs font-semibold`}>{agent.role}</p>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-3">{agent.desc}</p>
                <p className="text-white/30 text-xs">
                  <strong className="text-white/40">Skills:</strong> {agent.skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claude Code */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-kirklees-teal font-bold text-sm uppercase tracking-widest">The Engine</span>
              <h2 className="text-3xl font-extrabold text-kirklees-navy mt-3 mb-6">
                Claude Code
              </h2>
              <p className="text-kirklees-grey-600 leading-relaxed mb-4">
                <strong className="text-kirklees-navy">Claude Code</strong> is Anthropic&apos;s
                AI coding tool. It&apos;s what powers the BMAD agents — a professional-grade
                AI that can read codebases, write production code, run tests, deploy applications,
                and work with external tools and APIs.
              </p>
              <p className="text-kirklees-grey-600 leading-relaxed mb-4">
                Unlike simple chat AI, Claude Code operates directly in the development environment.
                It reads files, writes code, runs commands, browses the web, and manages deployments.
                It&apos;s the difference between an advisor and a doer.
              </p>
              <p className="text-kirklees-grey-600 leading-relaxed">
                Combined with BMAD&apos;s agent skills, Claude Code becomes a full development team.
                Each agent runs within Claude Code with specialist instructions, tools, and expertise.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-kirklees-navy rounded-xl p-6">
                <h3 className="text-kirklees-teal font-bold text-sm mb-4">What does it cost?</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-white/70 text-sm">Claude Code subscription</span>
                    <span className="text-white font-bold">$100/month</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-white/70 text-sm">BMAD methodology</span>
                    <span className="text-kirklees-green font-bold">Free &amp; open source</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-white/70 text-sm">Vercel deployment</span>
                    <span className="text-kirklees-green font-bold">Free tier available</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Data APIs (Reed, NOMIS etc.)</span>
                    <span className="text-kirklees-green font-bold">Free</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/40 text-xs">
                    That&apos;s the cost of the tools — not the expertise. The value is in knowing
                    what to ask for and how to shape the output.
                  </p>
                </div>
              </div>

              <div className="bg-kirklees-green/5 border border-kirklees-green/20 rounded-xl p-6">
                <h3 className="font-bold text-kirklees-navy text-sm mb-2">No vendor lock-in</h3>
                <p className="text-kirklees-grey-500 text-sm leading-relaxed">
                  Everything built with these tools produces standard, open-source code.
                  You own it completely. You can modify it, host it anywhere, or hand it
                  to any developer to maintain. There&apos;s nothing proprietary to be locked into.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="teal" />

      {/* Traditional vs Vibe */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <span className="text-kirklees-teal font-bold text-sm uppercase tracking-widest">The difference</span>
            <h2 className="text-3xl font-extrabold text-kirklees-navy mt-3 mb-4">
              Traditional development vs. vibe coding
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-kirklees-grey-50 rounded-2xl p-8 border border-kirklees-grey-200">
              <h3 className="font-extrabold text-kirklees-grey-500 text-lg mb-6">Traditional approach</h3>
              <div className="space-y-4">
                {[
                  "Write a brief and go to procurement",
                  "Select a vendor (weeks to months)",
                  "Requirements gathering workshops",
                  "Design phase (weeks)",
                  "Development sprints (months)",
                  "Testing and UAT (weeks)",
                  "Deployment and training",
                  "Change requests cost time and money",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-kirklees-grey-300 flex items-center justify-center flex-shrink-0">
                      <span className="text-kirklees-grey-500 text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-kirklees-grey-500 text-sm">{step}</span>
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-kirklees-grey-300">
                  <div className="flex items-center gap-2">
                    <span className="text-kirklees-grey-400 text-sm font-bold">Typical timeline:</span>
                    <span className="text-kirklees-red font-extrabold">3–12 months</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-kirklees-grey-400 text-sm font-bold">Typical cost:</span>
                    <span className="text-kirklees-red font-extrabold">£20,000–£200,000+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-2xl">
              <div className="bg-white rounded-2xl p-8">
                <h3 className="font-extrabold text-kirklees-teal text-lg mb-6">Vibe coding with BMAD</h3>
                <div className="space-y-4">
                  {[
                    { text: "Describe what you need in plain English", time: "5 min" },
                    { text: "AI analyst researches and gathers data", time: "30 min" },
                    { text: "AI architect designs the solution", time: "15 min" },
                    { text: "AI developer builds a working prototype", time: "1-3 hours" },
                    { text: "You review, give feedback, iterate", time: "ongoing" },
                    { text: "Live on the web, ready to use", time: "same day" },
                    { text: "Changes are instant — just ask", time: "minutes" },
                    { text: "Scale up when you're ready", time: "your pace" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-kirklees-teal/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3.5 text-kirklees-teal" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-kirklees-navy text-sm font-medium">{step.text}</span>
                      </div>
                      <span className="text-kirklees-teal text-xs font-bold flex-shrink-0">{step.time}</span>
                    </div>
                  ))}
                  <div className="pt-4 mt-4 border-t border-kirklees-grey-300">
                    <div className="flex items-center gap-2">
                      <span className="text-kirklees-grey-400 text-sm font-bold">Typical timeline:</span>
                      <span className="text-kirklees-green font-extrabold">Hours to days</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-kirklees-grey-400 text-sm font-bold">Typical cost:</span>
                      <span className="text-kirklees-green font-extrabold">$100/month subscription</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you could do */}
      <section className="bg-kirklees-grey-50 border-t border-kirklees-grey-300">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <span className="text-kirklees-teal font-bold text-sm uppercase tracking-widest">The bigger picture</span>
            <h2 className="text-3xl font-extrabold text-kirklees-navy mt-3 mb-4">
              What could Kirklees College do with this?
            </h2>
            <p className="text-kirklees-grey-500 max-w-2xl mx-auto">
              Today&apos;s demo is just the start. With vibe coding capability in-house,
              the college could build tools whenever a need arises — no procurement, no waiting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Rapid prototyping",
                desc: "Got a new idea? Build a working prototype in an afternoon to test whether it's worth pursuing. Kill bad ideas early, invest in good ones fast.",
                icon: "⚡",
              },
              {
                title: "Data intelligence",
                desc: "Turn publicly available data into strategic dashboards. Labour market trends, competitor moves, demographic shifts — always up to date, always actionable.",
                icon: "📊",
              },
              {
                title: "Internal tools",
                desc: "Build the small tools that never justify a procurement process — course planners, reporting dashboards, communication tools, evidence trackers.",
                icon: "🔧",
              },
              {
                title: "Student-facing apps",
                desc: "Course finders, application trackers, support tools, campus guides — built in hours, branded to the college, deployed instantly.",
                icon: "🎓",
              },
              {
                title: "Bid and evidence support",
                desc: "Rapidly assemble evidence packs, build data visualisations for funding bids, create compelling presentations backed by real data.",
                icon: "📋",
              },
              {
                title: "Training your team",
                desc: "Vibe coding isn't just for developers. Any staff member who can describe a problem clearly can learn to build solutions with AI assistance.",
                icon: "👥",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-kirklees-grey-200 hover:border-kirklees-teal/30 hover:shadow-lg transition-all">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-kirklees-navy mb-2">{item.title}</h3>
                <p className="text-kirklees-grey-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA back */}
      <section className="bg-gradient-to-r from-kirklees-navy via-kirklees-logo-teal to-kirklees-navy relative overflow-hidden">
        <KirkleesChevron className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 opacity-10" color="white" />
        <div className="max-w-4xl mx-auto px-6 py-16 text-center relative">
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Ready to see it in action?
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Head back to the session page and pick an option to build today.
          </p>
          <a
            href="/#choose"
            className="inline-flex items-center gap-2 bg-kirklees-teal hover:bg-kirklees-teal-light text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Choose what to build
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
