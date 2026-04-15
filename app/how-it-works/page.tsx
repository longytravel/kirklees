import { DiagonalBars, KirkleesNav, KirkleesFooter } from "@/src/components/kirklees-ui";

const agents = [
  {
    name: "Mary",
    role: "Business Analyst",
    desc: "Researches your market, analyses competitors, and translates vague ideas into precise requirements.",
    skills: "Market research, competitive analysis, requirements elicitation, domain expertise",
  },
  {
    name: "John",
    role: "Product Manager",
    desc: "Creates the product requirements document — the blueprint for what gets built. Ensures every feature has a clear purpose.",
    skills: "PRDs, user stories, feature prioritisation, stakeholder alignment",
  },
  {
    name: "Sally",
    role: "UX Designer",
    desc: "Designs the user experience — how the tool looks, feels, and flows. Creates intuitive interfaces anyone can use.",
    skills: "UI design, user flows, wireframes, accessibility, responsive design",
  },
  {
    name: "Winston",
    role: "Solution Architect",
    desc: "Designs the technical architecture — which technologies to use, how data flows, and how everything connects.",
    skills: "System design, data architecture, API design, technology selection",
  },
  {
    name: "Amelia",
    role: "Senior Developer",
    desc: "Writes the actual code. Builds features story by story, following the architecture and design specs.",
    skills: "Full-stack development, React, databases, APIs, deployment",
  },
  {
    name: "Murat",
    role: "Test Architect",
    desc: "Ensures quality at every stage. Designs test strategies, validates features, and catches issues early.",
    skills: "Test design, quality assurance, acceptance testing, CI/CD pipelines",
  },
  {
    name: "Paige",
    role: "Technical Writer",
    desc: "Documents everything — from user guides to technical specs. Ensures knowledge is captured and transferable.",
    skills: "Documentation, knowledge management, user guides, API docs",
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
    desc: "Winston architects the system, Sally designs the user experience, and John creates the development plan. Everything is documented before code is written.",
    duration: "30-60 minutes",
    output: "Architecture, UX design, and development plan",
  },
  {
    phase: "Build",
    title: "Write the code",
    desc: "Amelia builds the application story by story. Each feature is small, testable, and deployable. You see progress in real time.",
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

const agentColors = ["bg-kirklees-teal", "bg-kirklees-purple", "bg-kirklees-teal", "bg-kirklees-green", "bg-kirklees-purple", "bg-kirklees-teal", "bg-kirklees-green"];
const agentTextColors = ["text-kirklees-teal", "text-kirklees-purple", "text-kirklees-teal", "text-kirklees-green", "text-kirklees-purple", "text-kirklees-teal", "text-kirklees-green"];

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white">
      <KirkleesNav activePage="how-it-works" />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-kirklees-navy py-20">
        <DiagonalBars variant="medium" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <p className="text-kirklees-teal text-sm font-bold uppercase tracking-widest mb-4">
            Behind the scenes
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
            The methodology, the tools,
          </h1>
          <div className="inline-block bg-kirklees-purple px-4 py-1 mb-6">
            <span className="text-3xl md:text-4xl font-black text-white">the team.</span>
          </div>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
            A reference guide to everything powering today&apos;s session &mdash; and how your
            organisation could use these approaches every day.
          </p>
        </div>
      </section>

      {/* ── What is BMAD ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black text-kirklees-navy mb-6">
                BMAD: AI-Native Agile
              </h2>
              <p className="text-kirklees-grey-600 leading-relaxed mb-4">
                <strong className="text-kirklees-navy">BMAD</strong> is a methodology designed
                specifically for AI-assisted development. It takes the best principles of agile
                software development and adapts them for a world where AI agents do the heavy lifting.
              </p>
              <p className="text-kirklees-grey-600 leading-relaxed mb-4">
                Instead of a single developer working alone, BMAD uses a{" "}
                <strong className="text-kirklees-navy">team of specialist AI agents</strong> &mdash;
                each with deep expertise in their domain. An analyst researches. An architect designs.
                A developer builds. A tester validates. Just like a real software team, but at AI speed.
              </p>
              <p className="text-kirklees-grey-600 leading-relaxed mb-6">
                The human stays in control throughout. You make the decisions, set the priorities,
                and approve the direction. The AI handles the execution.
              </p>

              <div className="bg-kirklees-purple/5 border border-kirklees-purple/20 rounded-xl p-6">
                <h3 className="font-bold text-kirklees-navy text-sm mb-3">Why not just ask ChatGPT?</h3>
                <p className="text-kirklees-grey-500 text-sm leading-relaxed">
                  General AI chat can answer questions, but it can&apos;t build and deploy real software.
                  BMAD gives the AI <strong>structure, memory, and specialisation</strong>. Each agent has deep
                  expertise, follows proven processes, and produces real, production-grade output &mdash;
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
                    <div className="bg-kirklees-grey-100 rounded-xl p-5 border border-kirklees-grey-300">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-kirklees-purple font-black text-xs uppercase tracking-widest">
                          {step.phase}
                        </span>
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

      {/* ── The AI Team ── */}
      <section className="relative overflow-hidden bg-kirklees-navy py-20">
        <DiagonalBars variant="light" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-white mb-4">Meet your agents</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Each agent is a specialist with deep domain expertise. They work together,
              coordinated by the BMAD methodology, with you as the decision-maker.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {agents.map((agent, idx) => (
              <div
                key={agent.name}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-kirklees-teal/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg ${agentColors[idx]}/20 flex items-center justify-center`}>
                    <span className={`${agentTextColors[idx]} font-black text-lg`}>{agent.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{agent.name}</h3>
                    <p className={`${agentTextColors[idx]} text-xs font-semibold`}>{agent.role}</p>
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

      {/* ── Claude Code ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-kirklees-navy mb-6">Claude Code</h2>
              <p className="text-kirklees-grey-600 leading-relaxed mb-4">
                <strong className="text-kirklees-navy">Claude Code</strong> is Anthropic&apos;s
                AI coding tool. It powers the BMAD agents &mdash; a professional-grade AI that can
                read codebases, write production code, run tests, deploy applications, and work with
                external tools and APIs.
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
                  {[
                    { item: "Claude Code subscription", cost: "$100/month", free: false },
                    { item: "BMAD methodology", cost: "Free & open source", free: true },
                    { item: "Vercel deployment", cost: "Free tier available", free: true },
                    { item: "Data APIs (Reed, NOMIS etc.)", cost: "Free", free: true },
                  ].map((row, i) => (
                    <div key={i} className={`flex justify-between items-center ${i < 3 ? "border-b border-white/10 pb-3" : ""}`}>
                      <span className="text-white/70 text-sm">{row.item}</span>
                      <span className={`font-bold ${row.free ? "text-kirklees-green" : "text-white"}`}>
                        {row.cost}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/40 text-xs">
                    That&apos;s the cost of the tools &mdash; not the expertise. The value is in knowing
                    what to ask for and how to shape the output.
                  </p>
                </div>
              </div>

              <div className="bg-kirklees-green/5 border border-kirklees-green/20 rounded-xl p-6">
                <h3 className="font-bold text-kirklees-navy text-sm mb-2">No vendor lock-in</h3>
                <p className="text-kirklees-grey-500 text-sm leading-relaxed">
                  Everything produces standard, open-source code. You own it completely.
                  Modify it, host it anywhere, hand it to any developer. Nothing proprietary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Traditional vs Vibe ── */}
      <section className="bg-kirklees-grey-100 py-20 border-y border-kirklees-grey-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-kirklees-navy mb-4">
              Traditional development vs. vibe coding
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="bg-white rounded-xl p-8 border border-kirklees-grey-300">
              <h3 className="font-black text-kirklees-grey-500 text-lg mb-6">Traditional approach</h3>
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
                    <span className="text-kirklees-red font-black">3&ndash;12 months</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-kirklees-grey-400 text-sm font-bold">Typical cost:</span>
                    <span className="text-kirklees-red font-black">&pound;20,000&ndash;&pound;200,000+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vibe coding */}
            <div className="bg-white rounded-xl p-8 border-2 border-kirklees-teal">
              <h3 className="font-black text-kirklees-teal text-lg mb-6">Vibe coding with BMAD</h3>
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
                    <span className="text-kirklees-green font-black">Hours to days</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-kirklees-grey-400 text-sm font-bold">Typical cost:</span>
                    <span className="text-kirklees-green font-black">$100/month subscription</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you could do ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-kirklees-navy mb-4">
              What could Kirklees College do with this?
            </h2>
            <p className="text-kirklees-grey-500 max-w-2xl mx-auto">
              Today&apos;s demo is just the start. With vibe coding capability in-house,
              the college could build tools whenever a need arises &mdash; no procurement, no waiting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Rapid prototyping", desc: "Got a new idea? Build a working prototype in an afternoon to test whether it's worth pursuing.", icon: "\u26A1" },
              { title: "Data intelligence", desc: "Turn public data into strategic dashboards. Labour market trends, competitor moves, demographic shifts.", icon: "\uD83D\uDCCA" },
              { title: "Internal tools", desc: "Build the small tools that never justify procurement — course planners, reporting dashboards, evidence trackers.", icon: "\uD83D\uDD27" },
              { title: "Student-facing apps", desc: "Course finders, application trackers, support tools, campus guides — built in hours, branded to the college.", icon: "\uD83C\uDF93" },
              { title: "Bid and evidence support", desc: "Rapidly assemble evidence packs, build data visualisations for funding bids, create compelling presentations.", icon: "\uD83D\uDCCB" },
              { title: "Training your team", desc: "Vibe coding isn't just for developers. Any staff member who can describe a problem clearly can learn to build.", icon: "\uD83D\uDC65" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-kirklees-grey-100 rounded-xl p-6 border border-kirklees-grey-300 hover:border-kirklees-teal/40 hover:shadow-md transition-all"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-kirklees-navy mb-2">{item.title}</h3>
                <p className="text-kirklees-grey-500 text-sm leading-relaxed">{item.desc}</p>
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
            Ready to see it in action?
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Head back to the session page and pick an option to build today.
          </p>
          <a
            href="/#choose"
            className="inline-flex items-center gap-2 bg-kirklees-teal hover:bg-kirklees-teal-light text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            Choose what to build
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
