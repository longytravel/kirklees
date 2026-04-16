"use client";

import { useMemo, useState } from "react";

export type SlimCourse = {
  url: string;
  title: string;
  subject: string;
  level: string;
  courseType: string;
  duration: string;
  startDate: string;
  studyMode: string;
  location: string;
  qualification: string;
  overview: string;
};

const LEVEL_ORDER = [
  "Entry Level 1",
  "Entry Level 2",
  "Entry Level 3",
  "Level 1",
  "Level 2",
  "Level 3",
  "Level 4",
  "Level 5",
  "Level 6",
  "Level 7",
  "No Qualification",
  "Unknown",
];

function levelRank(l: string) {
  const i = LEVEL_ORDER.indexOf(l);
  return i === -1 ? 99 : i;
}

function levelBadgeClass(level: string) {
  if (level.startsWith("Entry")) return "bg-kirklees-grey-300 text-kirklees-navy";
  if (level === "Level 1") return "bg-kirklees-teal/10 text-kirklees-teal";
  if (level === "Level 2") return "bg-kirklees-teal/20 text-kirklees-teal";
  if (level === "Level 3") return "bg-kirklees-purple/15 text-kirklees-purple";
  if (level === "Level 4" || level === "Level 5")
    return "bg-kirklees-green/15 text-kirklees-green";
  if (level === "Level 6" || level === "Level 7")
    return "bg-kirklees-navy text-white";
  return "bg-kirklees-grey-100 text-kirklees-grey-600";
}

export default function CompetitorTracker({ courses }: { courses: SlimCourse[] }) {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState<string>("all");
  const [level, setLevel] = useState<string>("all");
  const [courseType, setCourseType] = useState<string>("all");
  const [studyMode, setStudyMode] = useState<string>("all");
  const [expandedUrl, setExpandedUrl] = useState<string | null>(null);

  const subjects = useMemo(() => {
    const m: Record<string, number> = {};
    courses.forEach((c) => (m[c.subject] = (m[c.subject] || 0) + 1));
    return Object.entries(m).sort((a, b) => a[0].localeCompare(b[0]));
  }, [courses]);

  const levels = useMemo(() => {
    const m: Record<string, number> = {};
    courses.forEach((c) => (m[c.level] = (m[c.level] || 0) + 1));
    return Object.entries(m).sort((a, b) => levelRank(a[0]) - levelRank(b[0]));
  }, [courses]);

  const courseTypes = useMemo(() => {
    const m: Record<string, number> = {};
    courses.forEach((c) => (m[c.courseType] = (m[c.courseType] || 0) + 1));
    return Object.entries(m).sort((a, b) => a[0].localeCompare(b[0]));
  }, [courses]);

  const studyModes = useMemo(() => {
    const m: Record<string, number> = {};
    courses.forEach((c) => c.studyMode && (m[c.studyMode] = (m[c.studyMode] || 0) + 1));
    return Object.entries(m).sort((a, b) => a[0].localeCompare(b[0]));
  }, [courses]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses
      .filter((c) => subject === "all" || c.subject === subject)
      .filter((c) => level === "all" || c.level === level)
      .filter((c) => courseType === "all" || c.courseType === courseType)
      .filter((c) => studyMode === "all" || c.studyMode === studyMode)
      .filter((c) => {
        if (!q) return true;
        return (
          c.title.toLowerCase().includes(q) ||
          c.subject.toLowerCase().includes(q) ||
          c.qualification.toLowerCase().includes(q) ||
          c.overview.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => {
        const d = levelRank(a.level) - levelRank(b.level);
        if (d !== 0) return d;
        return a.title.localeCompare(b.title);
      });
  }, [courses, subject, level, courseType, studyMode, query]);

  const resetAll = () => {
    setQuery("");
    setSubject("all");
    setLevel("all");
    setCourseType("all");
    setStudyMode("all");
  };

  const activeFilters =
    (subject !== "all" ? 1 : 0) +
    (level !== "all" ? 1 : 0) +
    (courseType !== "all" ? 1 : 0) +
    (studyMode !== "all" ? 1 : 0) +
    (query ? 1 : 0);

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Filter bar */}
        <div className="bg-kirklees-grey-100 border border-kirklees-grey-300 rounded-2xl p-5 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="text-lg font-black text-kirklees-navy flex-1">
              Bradford College &mdash; full course catalogue
            </h2>
            <div className="text-sm text-kirklees-grey-600">
              Showing{" "}
              <strong className="text-kirklees-navy">{filtered.length}</strong> of{" "}
              {courses.length} courses
              {activeFilters > 0 && (
                <button
                  onClick={resetAll}
                  className="ml-3 text-xs font-bold text-kirklees-teal hover:text-kirklees-navy underline"
                >
                  Clear {activeFilters} filter{activeFilters > 1 ? "s" : ""}
                </button>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-3">
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title, overview, qualification…"
                className="w-full bg-white border border-kirklees-grey-300 rounded-lg px-4 py-2.5 text-sm text-kirklees-navy placeholder:text-kirklees-grey-500 focus:outline-none focus:border-kirklees-teal"
              />
            </div>
            <Select
              value={subject}
              onChange={setSubject}
              options={[
                { v: "all", l: `All subjects (${courses.length})` },
                ...subjects.map(([k, n]) => ({ v: k, l: `${k} (${n})` })),
              ]}
            />
            <Select
              value={level}
              onChange={setLevel}
              options={[
                { v: "all", l: `All levels` },
                ...levels.map(([k, n]) => ({ v: k, l: `${k} (${n})` })),
              ]}
            />
            <Select
              value={courseType}
              onChange={setCourseType}
              options={[
                { v: "all", l: `All course types` },
                ...courseTypes.map(([k, n]) => ({ v: k, l: `${k} (${n})` })),
              ]}
            />
            <Select
              value={studyMode}
              onChange={setStudyMode}
              options={[
                { v: "all", l: `Any mode` },
                ...studyModes.map(([k, n]) => ({ v: k, l: `${k} (${n})` })),
              ]}
            />
          </div>
        </div>

        {/* Quick-pick chips for the "interesting" subject areas */}
        {subject === "all" && !query && (
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-xs font-bold text-kirklees-grey-500 uppercase tracking-wider self-center mr-2">
              Quick picks:
            </span>
            {[
              "Dentistry",
              "Pharmacy",
              "Ophthalmics",
              "Fashion & Textiles",
              "Performing Arts",
              "Music",
            ].map((s) => {
              const count = subjects.find(([k]) => k === s)?.[1] || 0;
              if (!count) return null;
              return (
                <button
                  key={s}
                  onClick={() => setSubject(s)}
                  className="bg-kirklees-purple/10 hover:bg-kirklees-purple hover:text-white text-kirklees-purple text-xs font-bold px-3 py-1.5 rounded-full border border-kirklees-purple/30 transition-all"
                >
                  {s} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Course grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-kirklees-grey-500">
            <p className="text-lg font-bold mb-2">No matches</p>
            <p className="text-sm">
              Try widening your filters or{" "}
              <button onClick={resetAll} className="underline text-kirklees-teal">
                clear them all
              </button>
              .
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((c) => (
              <CourseCard
                key={c.url}
                course={c}
                expanded={expandedUrl === c.url}
                onToggle={() =>
                  setExpandedUrl(expandedUrl === c.url ? null : c.url)
                }
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { v: string; l: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white border border-kirklees-grey-300 rounded-lg px-3 py-2.5 text-sm text-kirklees-navy focus:outline-none focus:border-kirklees-teal"
    >
      {options.map((o) => (
        <option key={o.v} value={o.v}>
          {o.l}
        </option>
      ))}
    </select>
  );
}

function CourseCard({
  course,
  expanded,
  onToggle,
}: {
  course: SlimCourse;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="bg-white border border-kirklees-grey-300 rounded-xl p-5 hover:border-kirklees-teal/60 transition-all hover:shadow-md flex flex-col">
      <div className="flex items-start justify-between gap-2 mb-3">
        <span
          className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${levelBadgeClass(
            course.level
          )}`}
        >
          {course.level}
        </span>
        <span className="text-xs text-kirklees-grey-500">{course.courseType}</span>
      </div>

      <h3 className="font-black text-kirklees-navy text-base leading-tight mb-2">
        {course.title}
      </h3>

      {course.qualification && (
        <p className="text-xs text-kirklees-grey-600 mb-3 italic">
          {course.qualification}
        </p>
      )}

      <dl className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-kirklees-grey-600 mb-4">
        <div>
          <dt className="text-kirklees-grey-500 uppercase tracking-wider text-[10px] font-bold">
            Subject
          </dt>
          <dd className="text-kirklees-navy font-semibold">{course.subject}</dd>
        </div>
        <div>
          <dt className="text-kirklees-grey-500 uppercase tracking-wider text-[10px] font-bold">
            Duration
          </dt>
          <dd className="text-kirklees-navy font-semibold">{course.duration || "—"}</dd>
        </div>
        <div>
          <dt className="text-kirklees-grey-500 uppercase tracking-wider text-[10px] font-bold">
            Mode
          </dt>
          <dd className="text-kirklees-navy font-semibold">{course.studyMode || "—"}</dd>
        </div>
        <div>
          <dt className="text-kirklees-grey-500 uppercase tracking-wider text-[10px] font-bold">
            Starts
          </dt>
          <dd className="text-kirklees-navy font-semibold">{course.startDate || "—"}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-kirklees-grey-500 uppercase tracking-wider text-[10px] font-bold">
            Location
          </dt>
          <dd className="text-kirklees-navy font-semibold">{course.location || "—"}</dd>
        </div>
      </dl>

      {course.overview && (
        <p
          className={`text-xs text-kirklees-grey-600 leading-relaxed mb-4 ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {course.overview}
        </p>
      )}

      <div className="mt-auto flex items-center gap-3 pt-3 border-t border-kirklees-grey-300">
        {course.overview && (
          <button
            onClick={onToggle}
            className="text-xs font-bold text-kirklees-teal hover:text-kirklees-navy"
          >
            {expanded ? "Collapse" : "Read more"}
          </button>
        )}
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-kirklees-grey-500 hover:text-kirklees-navy ml-auto"
        >
          View on Bradford →
        </a>
      </div>
    </article>
  );
}
