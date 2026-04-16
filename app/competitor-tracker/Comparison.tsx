"use client";

import { useMemo, useState } from "react";

export type CourseRef = {
  title: string;
  level: string;
  qualification: string;
  url: string;
  duration?: string;
  study_mode?: string;
  attendance?: string;
  study_area?: string;
};

export type SubjectMatch = {
  subject: string;
  bradford_count: number;
  kirklees_count: number;
  bradford_max_level: number | null;
  kirklees_max_level: number | null;
  status: "pure_gap" | "depth_gap" | "parity" | "kirklees_leads" | "no_signal";
  bradford_courses: CourseRef[];
  kirklees_courses: CourseRef[];
};

export type ComparisonData = {
  generated_at: string;
  totals: {
    bradford_total: number;
    kirklees_total: number;
    bradford_subjects: number;
    pure_gaps: number;
    depth_gaps: number;
    parity: number;
    kirklees_leads: number;
  };
  subject_matches: SubjectMatch[];
  kirklees_unmatched: CourseRef[];
};

const STATUS_META: Record<
  SubjectMatch["status"],
  { label: string; emoji: string; tone: string; sortOrder: number; description: string }
> = {
  pure_gap: {
    label: "Pure gap",
    emoji: "🔴",
    tone: "bg-red-50 border-red-200 text-red-700",
    sortOrder: 0,
    description: "Bradford teaches it. Kirklees doesn't.",
  },
  depth_gap: {
    label: "Depth gap",
    emoji: "🟡",
    tone: "bg-amber-50 border-amber-200 text-amber-700",
    sortOrder: 1,
    description: "Both teach it, but Kirklees has materially fewer courses.",
  },
  parity: {
    label: "Parity",
    emoji: "✅",
    tone: "bg-green-50 border-green-200 text-green-700",
    sortOrder: 2,
    description: "Comparable breadth and depth.",
  },
  kirklees_leads: {
    label: "Kirklees leads",
    emoji: "🟢",
    tone: "bg-kirklees-purple/10 border-kirklees-purple/30 text-kirklees-purple",
    sortOrder: 3,
    description: "Kirklees has more courses or deeper level coverage.",
  },
  no_signal: {
    label: "No signal",
    emoji: "⚪",
    tone: "bg-kirklees-grey-100 border-kirklees-grey-300 text-kirklees-grey-500",
    sortOrder: 4,
    description: "No Bradford courses in this subject.",
  },
};

function levelLabel(rank: number | null) {
  if (rank == null || rank < 0) return "—";
  if (rank === 0) return "Entry";
  return `L${rank}`;
}

export default function Comparison({ data }: { data: ComparisonData }) {
  const [statusFilter, setStatusFilter] = useState<SubjectMatch["status"] | "all">(
    "all"
  );
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (statusFilter === "all") return data.subject_matches;
    return data.subject_matches.filter((s) => s.status === statusFilter);
  }, [data, statusFilter]);

  const counts = data.totals;

  return (
    <section className="bg-white py-12 border-b border-kirklees-grey-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <div className="mb-8">
          <p className="text-kirklees-teal text-sm font-bold uppercase tracking-widest mb-3">
            White-space analysis
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-kirklees-navy leading-tight mb-3">
            Bradford vs Kirklees &mdash; subject by subject
          </h2>
          <p className="text-kirklees-grey-600 max-w-3xl text-base leading-relaxed">
            Bradford&rsquo;s {counts.bradford_subjects} subject areas, anchored against{" "}
            {counts.kirklees_total} Kirklees courses (deduped to latest cohort). Match
            is keyword-based across course title, qualification, and overview text. Each
            subject sorted from biggest gap to biggest lead.
          </p>
        </div>

        {/* Headline stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <StatusCard
            label="Pure gaps"
            count={counts.pure_gaps}
            sub="Bradford teaches it, Kirklees doesn't"
            tone="bg-red-50 text-red-700 border-red-200"
            onClick={() => setStatusFilter("pure_gap")}
          />
          <StatusCard
            label="Depth gaps"
            count={counts.depth_gaps}
            sub="Both teach it, Kirklees thinner"
            tone="bg-amber-50 text-amber-700 border-amber-200"
            onClick={() => setStatusFilter("depth_gap")}
          />
          <StatusCard
            label="Parity"
            count={counts.parity}
            sub="Comparable on both sides"
            tone="bg-green-50 text-green-700 border-green-200"
            onClick={() => setStatusFilter("parity")}
          />
          <StatusCard
            label="Kirklees leads"
            count={counts.kirklees_leads}
            sub="Kirklees has more or deeper"
            tone="bg-kirklees-purple/10 text-kirklees-purple border-kirklees-purple/30"
            onClick={() => setStatusFilter("kirklees_leads")}
          />
        </div>

        {/* Filter row */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-bold text-kirklees-grey-500 uppercase tracking-wider mr-2">
            Filter:
          </span>
          {[
            { v: "all" as const, l: `All ${data.subject_matches.length}` },
            { v: "pure_gap" as const, l: `🔴 Pure gaps` },
            { v: "depth_gap" as const, l: `🟡 Depth gaps` },
            { v: "parity" as const, l: `✅ Parity` },
            { v: "kirklees_leads" as const, l: `🟢 Kirklees leads` },
          ].map((opt) => (
            <button
              key={opt.v}
              onClick={() => setStatusFilter(opt.v)}
              className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
                statusFilter === opt.v
                  ? "bg-kirklees-navy text-white border-kirklees-navy"
                  : "bg-white text-kirklees-grey-600 border-kirklees-grey-300 hover:border-kirklees-teal hover:text-kirklees-navy"
              }`}
            >
              {opt.l}
            </button>
          ))}
        </div>

        {/* Subject rows */}
        <div className="space-y-2">
          {filtered.map((subj) => (
            <SubjectRow
              key={subj.subject}
              subj={subj}
              expanded={expanded === subj.subject}
              onToggle={() =>
                setExpanded(expanded === subj.subject ? null : subj.subject)
              }
            />
          ))}
        </div>

        {/* Kirklees-unique callout */}
        {data.kirklees_unmatched.length > 0 && (
          <div className="mt-10 bg-kirklees-navy text-white rounded-2xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h3 className="text-xl font-black">
                Kirklees specialisms outside Bradford&rsquo;s taxonomy
              </h3>
              <span className="bg-kirklees-teal text-white text-sm font-bold px-3 py-1 rounded-full">
                {data.kirklees_unmatched.length} courses
              </span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              These Kirklees courses didn&rsquo;t map to any of Bradford&rsquo;s 25
              subject areas. They represent territory where Kirklees is the regional
              specialist (Animal Care, Process Manufacturing, niche adult learning).
            </p>
            <KirkleesUniqueList courses={data.kirklees_unmatched} />
          </div>
        )}

        {/* Methodology footnote */}
        <div className="mt-10 text-xs text-kirklees-grey-500 leading-relaxed">
          <strong className="text-kirklees-navy">How matching works:</strong> Bradford
          subject areas are the anchor taxonomy. For each subject, we test Kirklees
          course title + qualification + overview text against a curated keyword
          signature using word-boundary regex. A Kirklees course can match multiple
          subjects (counted once per subject). Generated{" "}
          {new Date(data.generated_at).toLocaleString("en-GB")}.
        </div>
      </div>
    </section>
  );
}

function StatusCard({
  label,
  count,
  sub,
  tone,
  onClick,
}: {
  label: string;
  count: number;
  sub: string;
  tone: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-left rounded-xl border-2 p-4 hover:shadow-md transition-all ${tone}`}
    >
      <div className="text-3xl font-black">{count}</div>
      <div className="text-sm font-bold mt-1">{label}</div>
      <div className="text-xs opacity-80 mt-1">{sub}</div>
    </button>
  );
}

function SubjectRow({
  subj,
  expanded,
  onToggle,
}: {
  subj: SubjectMatch;
  expanded: boolean;
  onToggle: () => void;
}) {
  const meta = STATUS_META[subj.status];
  return (
    <div className="border border-kirklees-grey-300 rounded-xl overflow-hidden bg-white hover:border-kirklees-teal/50 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex flex-col md:flex-row md:items-center gap-3 p-4 text-left hover:bg-kirklees-grey-100/50"
      >
        <span
          className={`inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${meta.tone}`}
        >
          {meta.emoji} {meta.label}
        </span>

        <h3 className="font-black text-kirklees-navy text-base flex-1 truncate">
          {subj.subject}
        </h3>

        <div className="flex items-center gap-4 text-xs">
          <Score
            label="Bradford"
            count={subj.bradford_count}
            level={levelLabel(subj.bradford_max_level)}
            color="text-kirklees-purple"
          />
          <span className="text-kirklees-grey-400 font-bold">vs</span>
          <Score
            label="Kirklees"
            count={subj.kirklees_count}
            level={levelLabel(subj.kirklees_max_level)}
            color="text-kirklees-teal"
          />
          <span className="text-kirklees-grey-400 text-lg font-bold w-4">
            {expanded ? "−" : "+"}
          </span>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-kirklees-grey-300 grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-kirklees-grey-300">
          <CourseList
            heading="Bradford courses"
            color="text-kirklees-purple"
            courses={subj.bradford_courses}
            badgeWord="Bradford"
          />
          <CourseList
            heading="Kirklees matches"
            color="text-kirklees-teal"
            courses={subj.kirklees_courses}
            badgeWord="Kirklees"
            emptyMessage={
              subj.status === "pure_gap"
                ? "No matching courses at Kirklees."
                : "No matches found."
            }
          />
        </div>
      )}
    </div>
  );
}

function Score({
  label,
  count,
  level,
  color,
}: {
  label: string;
  count: number;
  level: string;
  color: string;
}) {
  return (
    <div className="text-center">
      <div className={`font-black text-lg ${color}`}>{count}</div>
      <div className="text-[10px] uppercase tracking-wider text-kirklees-grey-500">
        {label} · {level}
      </div>
    </div>
  );
}

function CourseList({
  heading,
  color,
  courses,
  emptyMessage = "No courses.",
}: {
  heading: string;
  color: string;
  courses: CourseRef[];
  badgeWord: string;
  emptyMessage?: string;
}) {
  return (
    <div className="p-4">
      <h4 className={`text-xs font-black uppercase tracking-wider mb-3 ${color}`}>
        {heading} ({courses.length})
      </h4>
      {courses.length === 0 ? (
        <p className="text-sm text-kirklees-grey-500 italic">{emptyMessage}</p>
      ) : (
        <ul className="space-y-1.5">
          {courses.slice(0, 30).map((c, i) => (
            <li key={i} className="text-sm">
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-kirklees-navy hover:text-kirklees-teal flex items-baseline gap-2 group"
              >
                <span className="text-[10px] font-bold text-kirklees-grey-500 uppercase whitespace-nowrap mt-0.5">
                  {c.level}
                </span>
                <span className="leading-snug group-hover:underline">{c.title}</span>
              </a>
              {c.qualification && (
                <p className="text-[11px] text-kirklees-grey-500 ml-9 italic mt-0.5">
                  {c.qualification}
                </p>
              )}
            </li>
          ))}
          {courses.length > 30 && (
            <li className="text-xs text-kirklees-grey-500 italic pt-2">
              + {courses.length - 30} more
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

function KirkleesUniqueList({ courses }: { courses: CourseRef[] }) {
  // Group by study_area
  const groups: Record<string, CourseRef[]> = {};
  for (const c of courses) {
    const k = c.study_area || "Other";
    (groups[k] ||= []).push(c);
  }
  const ordered = Object.entries(groups).sort((a, b) => b[1].length - a[1].length);
  return (
    <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
      {ordered.map(([area, list]) => (
        <div key={area}>
          <p className="text-kirklees-teal text-xs font-bold uppercase tracking-wider mb-1.5">
            {area} &middot; {list.length}
          </p>
          <ul className="text-xs text-white/80 space-y-1">
            {list.slice(0, 10).map((c, i) => (
              <li key={i} className="leading-tight">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-kirklees-teal hover:underline"
                >
                  {c.title}
                </a>
              </li>
            ))}
            {list.length > 10 && (
              <li className="italic text-white/40">+ {list.length - 10} more</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
