import { DiagonalBars, KirkleesNav, KirkleesFooter } from "@/src/components/kirklees-ui";
import bradfordCoursesRaw from "@/data/competitor-courses/bradford/courses.json";
import comparisonData from "@/data/competitor-courses/comparison.json";
import CompetitorTracker, { type SlimCourse } from "./CompetitorTracker";
import Comparison, { type ComparisonData } from "./Comparison";

export const metadata = {
  title: "Competitor Course Tracker | Kirklees College Intelligence",
  description:
    "Live-scraped course catalogues from regional competitors. Where's our white space?",
};

type RawCourse = {
  url: string;
  title: string;
  subject_area: string | null;
  qualification: string | null;
  level: string | null;
  course_type: string | null;
  duration: string | null;
  start_date: string | null;
  study_mode: string | null;
  location: string | null;
  overview: string | null;
};

function slim(raw: RawCourse[]): SlimCourse[] {
  return raw
    .filter((c) => c.title)
    .map((c) => ({
      url: c.url,
      title: c.title,
      subject: c.subject_area || "Uncategorised",
      level: c.level || "Unknown",
      courseType: c.course_type || "Other",
      duration: c.duration || "",
      startDate: c.start_date || "",
      studyMode: c.study_mode || "",
      location: c.location || "",
      qualification: c.qualification || "",
      overview: (c.overview || "").slice(0, 400),
    }));
}

export default function CompetitorTrackerPage() {
  const bradford = slim(bradfordCoursesRaw as RawCourse[]);

  const subjectsWithCounts: Record<string, number> = {};
  bradford.forEach((c) => {
    subjectsWithCounts[c.subject] = (subjectsWithCounts[c.subject] || 0) + 1;
  });

  const levelsWithCounts: Record<string, number> = {};
  bradford.forEach((c) => {
    levelsWithCounts[c.level] = (levelsWithCounts[c.level] || 0) + 1;
  });

  const stats = {
    totalCourses: bradford.length,
    subjects: Object.keys(subjectsWithCounts).length,
    levels: Object.keys(levelsWithCounts).length,
    locations: new Set(bradford.map((c) => c.location).filter(Boolean)).size,
  };

  return (
    <main className="min-h-screen bg-white">
      <KirkleesNav activePage="competitor-tracker" />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-kirklees-navy">
        <DiagonalBars variant="medium" />

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <p className="text-kirklees-teal text-sm font-bold uppercase tracking-widest mb-4">
            Demo 3 &mdash; Competitor Course Tracker
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-4">
            What are other colleges
          </h1>

          <div className="inline-block bg-kirklees-purple px-5 py-2 mb-4">
            <span className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
              actually teaching?
            </span>
          </div>

          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
            Every course from every regional competitor, live-scraped from their public
            websites. Filter, search, and find the white space. First up:{" "}
            <strong className="text-white">Bradford College</strong> &mdash;{" "}
            {stats.totalCourses} courses across {stats.subjects} subject areas.
          </p>

          {/* Stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            <StatCard value={stats.totalCourses} label="Bradford courses" />
            <StatCard value={stats.subjects} label="subject areas" />
            <StatCard value={stats.levels} label="levels covered" />
            <StatCard value={stats.locations} label="campus locations" />
          </div>
        </div>
      </section>

      {/* ── Status banner ── */}
      <section className="bg-kirklees-grey-100 border-b border-kirklees-grey-300 py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-3 text-sm flex-wrap">
          <span className="inline-flex items-center gap-2 text-kirklees-navy">
            <span className="w-2 h-2 rounded-full bg-kirklees-green animate-pulse"></span>
            <strong>{(comparisonData as ComparisonData).totals.bradford_total} Bradford courses</strong>
          </span>
          <span className="text-kirklees-grey-400">·</span>
          <span className="inline-flex items-center gap-2 text-kirklees-navy">
            <span className="w-2 h-2 rounded-full bg-kirklees-green animate-pulse"></span>
            <strong>{(comparisonData as ComparisonData).totals.kirklees_total} Kirklees courses</strong>
          </span>
          <span className="text-kirklees-grey-400">·</span>
          <span className="text-kirklees-grey-600">
            <strong className="text-kirklees-navy">{(comparisonData as ComparisonData).totals.pure_gaps + (comparisonData as ComparisonData).totals.depth_gaps}</strong> gaps surfaced
          </span>
        </div>
      </section>

      {/* ── Subject-by-subject comparison (the core insight) ── */}
      <Comparison data={comparisonData as ComparisonData} />

      {/* ── Interactive Bradford catalogue (drill-down) ── */}
      <CompetitorTracker courses={bradford} />

      {/* ── Methodology ── */}
      <section className="bg-kirklees-grey-100 py-16 border-t border-kirklees-grey-300">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-kirklees-navy mb-4">How this works</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                num: "1",
                title: "Sitemap-driven discovery",
                body:
                  "We pull every course URL from the competitor's own XML sitemap. Complete, canonical, no crawl guesswork.",
              },
              {
                num: "2",
                title: "Structured extraction",
                body:
                  "Each course page is parsed for title, level, subject area, duration, study mode, location, qualification, and overview — using Schema.org microdata where available.",
              },
              {
                num: "3",
                title: "Comparable schema",
                body:
                  "All providers land in the same shape. Once Kirklees is loaded, white-space analysis is a single filter click.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-white border border-kirklees-grey-300 rounded-xl p-5"
              >
                <div className="bg-kirklees-teal text-white w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black mb-3">
                  {step.num}
                </div>
                <h3 className="font-bold text-kirklees-navy text-sm mb-1">{step.title}</h3>
                <p className="text-kirklees-grey-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-kirklees-grey-500 mt-8">
            Data source: public course pages on{" "}
            <a
              href="https://www.bradfordcollege.ac.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-kirklees-teal"
            >
              bradfordcollege.ac.uk
            </a>
            . Scraped on {new Date().toISOString().slice(0, 10)}. Respects robots.txt;
            polite rate-limited requests.
          </p>
        </div>
      </section>

      <KirkleesFooter />
    </main>
  );
}

function StatCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 backdrop-blur-sm">
      <div className="text-2xl md:text-3xl font-black text-white">{value}</div>
      <div className="text-xs text-white/70 uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}
