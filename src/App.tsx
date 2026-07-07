import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  CalendarDays,
  CheckCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  Clock,
  Download,
  FileSearch,
  Flag,
  Gauge,
  Layers,
  LayoutDashboard,
  ListChecks,
  Menu,
  Play,
  RotateCcw,
  Search,
  Settings,
  Sparkles,
  Target,
  Trash2,
  Upload,
  X
} from "lucide-react";
import { content } from "./data/content";
import type {
  AreaProgress,
  DayContent,
  DayProgress,
  DayStatus,
  JobApplication,
  ProgressState,
  SearchRecord,
  WeakArea
} from "./types";
import {
  applyStatus,
  backupAndReplaceProgress,
  calculateStats,
  createInitialProgress,
  createJobApplication,
  createWeakArea,
  createWeekProgress,
  exportProgress,
  findSuggestedDay,
  getDayProgress,
  loadProgress,
  normalizeImportedProgress,
  saveProgress,
  statusLabel,
  updateAreaProgress,
  updateWeekProgress,
  upsertDayProgress,
  validateImportedProgress
} from "./lib/progress";
import "./styles/app.css";

type ViewKey = "dashboard" | "roadmap" | "study" | "library" | "trackers" | "settings";
type RouteState = { view: ViewKey; dayId?: string };

const views: Array<{ key: ViewKey; label: string; icon: typeof LayoutDashboard }> = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "roadmap", label: "Roadmap", icon: CalendarDays },
  { key: "study", label: "Study Day", icon: Play },
  { key: "library", label: "Library", icon: BookOpen },
  { key: "trackers", label: "Trackers", icon: ListChecks },
  { key: "settings", label: "Settings", icon: Settings }
];

export default function App() {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress(content));
  const [route, setRoute] = useState<RouteState>(() => readRouteFromHash());
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  useEffect(() => {
    const onHashChange = () => setRoute(readRouteFromHash());
    window.addEventListener("hashchange", onHashChange);
    if (!window.location.hash) {
      navigateToRoute({ view: "dashboard" });
    }
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [route.view, route.dayId]);

  useEffect(() => {
    if (route.view !== "study" || !route.dayId) return;
    const dayExists = content.days.some((day) => day.id === route.dayId);
    if (!dayExists || progress.activeDayId === route.dayId) return;
    setProgress((current) => ({ ...current, activeDayId: route.dayId as string, updatedAt: new Date().toISOString() }));
  }, [progress.activeDayId, route]);

  const activeDay = useMemo(() => {
    if (route.view === "study" && route.dayId) {
      return content.days.find((day) => day.id === route.dayId) ?? findSuggestedDay(content, progress);
    }
    return content.days.find((day) => day.id === progress.activeDayId) ?? findSuggestedDay(content, progress);
  }, [progress, route]);

  const setActiveDay = (dayId: string, nextView: ViewKey = "study") => {
    setProgress((current) => ({ ...current, activeDayId: dayId, updatedAt: new Date().toISOString() }));
    navigateToRoute({ view: nextView, dayId: nextView === "study" ? dayId : undefined });
  };

  const navigate = (view: ViewKey, dayId?: string) => {
    const nextDayId = dayId ?? activeDay.id;
    navigateToRoute({ view, dayId: view === "study" ? nextDayId : undefined });
  };

  return (
    <div className="app-shell">
      <header className="top-nav" aria-label="Primary navigation">
        <div className="top-nav-row">
          <div className="brand">
            <div className="brand-mark">IP</div>
            <div>
              <strong>Interview Prep OS</strong>
              <span>Local progress tracker</span>
            </div>
          </div>
          <button
            className="mobile-nav-toggle"
            onClick={() => setIsMobileNavOpen((isOpen) => !isOpen)}
            aria-expanded={isMobileNavOpen}
            aria-controls="primary-navigation"
          >
            {isMobileNavOpen ? <X size={20} /> : <Menu size={20} />}
            <span>{isMobileNavOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
        <nav
          className={isMobileNavOpen ? "top-nav-links nav-open" : "top-nav-links"}
          id="primary-navigation"
        >
          {views.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                className={route.view === item.key ? "nav-button active" : "nav-button"}
                onClick={() => navigate(item.key)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="nav-footer">
          <code>{content.contentHash}</code>
        </div>
      </header>

      <main className="main-panel">
        {route.view === "dashboard" && (
          <DashboardView progress={progress} onNavigate={navigate} onSelectDay={setActiveDay} />
        )}
        {route.view === "roadmap" && <RoadmapView progress={progress} onSelectDay={setActiveDay} />}
        {route.view === "study" && (
          <StudyDayView
            activeDay={activeDay}
            progress={progress}
            setProgress={setProgress}
            onSelectDay={setActiveDay}
          />
        )}
        {route.view === "library" && <LibraryView onSelectDay={setActiveDay} />}
        {route.view === "trackers" && <TrackersView progress={progress} setProgress={setProgress} />}
        {route.view === "settings" && <SettingsView progress={progress} setProgress={setProgress} />}
      </main>
    </div>
  );
}

function DashboardView({
  progress,
  onNavigate,
  onSelectDay
}: {
  progress: ProgressState;
  onNavigate: (view: ViewKey, dayId?: string) => void;
  onSelectDay: (dayId: string) => void;
}) {
  const stats = calculateStats(content, progress);
  const suggestedDay = findSuggestedDay(content, progress);
  const suggestedProgress = getDayProgress(progress, suggestedDay);
  const currentWeek = content.weeks.find((week) => week.id === suggestedDay.weekId);
  const readyAreas = Object.values(progress.areas).filter((area) => area.status === "Ready").length;
  const cautionAreas = Object.values(progress.areas).filter((area) => area.status === "Caution").length;

  return (
    <section className="screen">
      <ScreenHeader
        eyebrow="Dashboard"
        title="Today's prep command center"
        action={
          <button className="primary-button" onClick={() => onSelectDay(suggestedDay.id)}>
            <Play size={18} />
            Continue Day {suggestedDay.dayNumber}
          </button>
        }
      />

      <div className="metric-grid">
        <MetricCard icon={Gauge} label="Overall progress" value={`${stats.completionPercent}%`} detail={`${stats.completedDays} of ${stats.totalDays} days complete`} />
        <MetricCard icon={Activity} label="Active days" value={String(stats.inProgressDays)} detail="Days currently in progress" />
        <MetricCard icon={Target} label="Open weak areas" value={String(stats.openWeakAreas)} detail="Recovery work still open" />
        <MetricCard icon={CheckCircle2} label="Weekly scores" value={String(stats.scoredWeeks)} detail="Assessments with recorded scores" />
      </div>

      <div className="dashboard-layout">
        <article className="panel hero-panel">
          <div>
            <p className="kicker">Current focus</p>
            <h2>Day {suggestedDay.dayNumber}: {suggestedDay.title}</h2>
            <p>{suggestedDay.metadata["Main Goal"] ?? "Complete today's guided prep tasks."}</p>
          </div>
          <div className="day-meta-grid">
            <Meta label="Status" value={statusLabel(suggestedProgress.status)} />
            <Meta label="Month" value={String(suggestedDay.monthNumber)} />
            <Meta label="Week" value={String(suggestedDay.weekNumber)} />
            <Meta label="Time" value={suggestedDay.metadata["Estimated Time"] ?? "Planned block"} />
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <h2>This week</h2>
            <button className="ghost-button" onClick={() => onNavigate("roadmap")}>Open roadmap</button>
          </div>
          <p className="muted">{currentWeek?.title ?? "Week focus"}</p>
          <div className="week-strip">
            {currentWeek?.dayIds.map((dayId) => {
              const day = content.days.find((candidate) => candidate.id === dayId);
              if (!day) return null;
              const status = progress.days[day.id]?.status ?? "not-started";
              return (
                <button key={day.id} className={`day-pill ${status}`} onClick={() => onSelectDay(day.id)}>
                  {day.dayNumber}
                </button>
              );
            })}
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <h2>Readiness snapshot</h2>
            <button className="ghost-button" onClick={() => onNavigate("trackers")}>Update</button>
          </div>
          <div className="readiness-row">
            <span>Ready areas</span>
            <strong>{readyAreas}</strong>
          </div>
          <div className="readiness-row">
            <span>Caution areas</span>
            <strong>{cautionAreas}</strong>
          </div>
          <div className="readiness-row">
            <span>Open weak areas</span>
            <strong>{stats.openWeakAreas}</strong>
          </div>
        </article>

        <article className="panel wide-panel">
          <div className="panel-heading">
            <h2>Month progress</h2>
            <button className="ghost-button" onClick={() => onNavigate("roadmap")}>View all</button>
          </div>
          <div className="month-progress-grid">
            {content.months.map((month) => {
              const monthDays = content.days.filter((day) => day.monthId === month.id);
              const complete = monthDays.filter((day) => progress.days[day.id]?.status === "complete").length;
              const percent = Math.round((complete / monthDays.length) * 100);
              return (
                <div className="month-progress" key={month.id}>
                  <span>Month {month.monthNumber}</span>
                  <strong>{percent}%</strong>
                  <div className="progress-bar"><span style={{ width: `${percent}%` }} /></div>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}

function RoadmapView({ progress, onSelectDay }: { progress: ProgressState; onSelectDay: (dayId: string) => void }) {
  return (
    <section className="screen">
      <ScreenHeader eyebrow="Roadmap" title="Six-month guided curriculum" />
      <div className="roadmap">
        {content.months.map((month) => (
          <article className="panel month-card" key={month.id}>
            <div className="panel-heading">
              <div>
                <p className="kicker">Month {month.monthNumber}</p>
                <h2>{month.title}</h2>
              </div>
              <span className="source-label">{month.sourcePath}</span>
            </div>
            <div className="week-grid">
              {month.weekIds.map((weekId) => {
                const week = content.weeks.find((candidate) => candidate.id === weekId);
                if (!week) return null;
                return (
                  <div className="week-card" key={week.id}>
                    <div className="week-card-heading">
                      <strong>Week {week.weekNumber}</strong>
                      <span>{week.title}</span>
                    </div>
                    <div className="day-grid">
                      {week.dayIds.map((dayId) => {
                        const day = content.days.find((candidate) => candidate.id === dayId);
                        if (!day) return null;
                        const status = progress.days[day.id]?.status ?? "not-started";
                        return (
                          <button
                            key={day.id}
                            className={`day-tile ${status}`}
                            title={day.title}
                            onClick={() => onSelectDay(day.id)}
                          >
                            <span>{day.dayNumber}</span>
                            <small>{statusLabel(status)}</small>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function StudyDayView({
  activeDay,
  progress,
  setProgress,
  onSelectDay
}: {
  activeDay: DayContent;
  progress: ProgressState;
  setProgress: React.Dispatch<React.SetStateAction<ProgressState>>;
  onSelectDay: (dayId: string) => void;
}) {
  const [isProgressPanelOpen, setIsProgressPanelOpen] = useState(false);
  const dayProgress = getDayProgress(progress, activeDay);
  const visibleSections = activeDay.sections.filter((section) => section.kind !== "checklist");
  const dayIndex = content.days.findIndex((day) => day.id === activeDay.id);
  const previousDay = dayIndex > 0 ? content.days[dayIndex - 1] : null;
  const nextDay = dayIndex >= 0 && dayIndex < content.days.length - 1 ? content.days[dayIndex + 1] : null;
  const dayWeakAreas = progress.weakAreas.filter((area) => {
    return area.sourceDayId === activeDay.id || area.evidence.includes(`Day ${activeDay.dayNumber}`);
  });

  const updateDay = (updater: (current: DayProgress) => DayProgress) => {
    setProgress((current) => upsertDayProgress(current, activeDay.id, updater));
  };

  const toggleSection = (sectionId: string) => {
    updateDay((current) => {
      const hasSection = current.completedSections.includes(sectionId);
      return {
        ...current,
        status: current.status === "not-started" ? "in-progress" : current.status,
        completedSections: hasSection
          ? current.completedSections.filter((id) => id !== sectionId)
          : [...current.completedSections, sectionId]
      };
    });
  };

  const toggleChecklist = (itemId: string) => {
    updateDay((current) => ({
      ...current,
      status: current.status === "not-started" ? "in-progress" : current.status,
      checklist: {
        ...current.checklist,
        [itemId]: !current.checklist[itemId]
      }
    }));
  };

  const setAllChecklistItems = (checked: boolean) => {
    updateDay((current) => ({
      ...current,
      status: current.status === "not-started" ? "in-progress" : current.status,
      checklist: Object.fromEntries(activeDay.checklistItems.map((item) => [item.id, checked]))
    }));
  };

  const markDayComplete = () => {
    updateDay((current) => ({
      ...current,
      status: "complete",
      completedSections: [...new Set([...current.completedSections, ...visibleSections.map((section) => section.id)])],
      checklist: {
        ...current.checklist,
        ...Object.fromEntries(activeDay.checklistItems.map((item) => [item.id, true]))
      },
      completedAt: new Date().toISOString()
    }));
  };

  const addWeakAreaFromDay = () => {
    const weakText = dayProgress.weakAreaNote.trim();
    if (!weakText) return;
    setProgress((current) => {
      const nextProgress = upsertDayProgress(current, activeDay.id, (existing) => ({ ...existing, weakAreaNote: "" }));
      return {
        ...nextProgress,
        weakAreas: [
          createWeakArea({
            sourceDayId: activeDay.id,
            category: "General",
            weakArea: weakText,
            evidence: `Logged from Day ${activeDay.dayNumber}`,
            recoveryTask: "Schedule retake or explanation practice"
          }),
          ...nextProgress.weakAreas
        ],
        updatedAt: new Date().toISOString()
      };
    });
  };

  const checklistDone = activeDay.checklistItems.filter((item) => dayProgress.checklist[item.id]).length;
  const sectionsDone = visibleSections.filter((section) => dayProgress.completedSections.includes(section.id)).length;
  const totalWorkItems = visibleSections.length + activeDay.checklistItems.length;
  const doneWorkItems = sectionsDone + checklistDone;
  const dayCompletionPercent = totalWorkItems === 0 ? 0 : Math.round((doneWorkItems / totalWorkItems) * 100);

  return (
    <section className="screen">
      <ScreenHeader
        eyebrow={`Month ${activeDay.monthNumber} / Week ${activeDay.weekNumber}`}
        title={`Day ${activeDay.dayNumber}: ${activeDay.title}`}
        action={
          <div className="day-nav-actions">
            <button
              className="ghost-button"
              disabled={!previousDay}
              onClick={() => previousDay && onSelectDay(previousDay.id)}
            >
              <ArrowLeft size={18} />
              Previous
            </button>
            <button
              className="ghost-button"
              disabled={!nextDay}
              onClick={() => nextDay && onSelectDay(nextDay.id)}
            >
              Next
              <ArrowRight size={18} />
            </button>
          </div>
        }
      />

      <article className="panel study-summary-card">
        <div className="study-goal">
          <p className="kicker">Main goal</p>
          <p>{activeDay.metadata["Main Goal"] ?? "Complete today's guided prep tasks."}</p>
        </div>
        <div className="study-summary-progress">
          <div className="summary-progress-heading">
            <span className={`status-badge ${dayProgress.status}`}>{statusLabel(dayProgress.status)}</span>
            <strong>{dayCompletionPercent}% complete</strong>
          </div>
          <div className="progress-bar"><span style={{ width: `${dayCompletionPercent}%` }} /></div>
          <div className="summary-stat-row">
            <span>{sectionsDone}/{visibleSections.length} sections</span>
            <span>{checklistDone}/{activeDay.checklistItems.length} checks</span>
            <span>{dayWeakAreas.length} weak areas</span>
          </div>
        </div>
        <button className="primary-button complete-day-button" onClick={markDayComplete}>
          <CheckCheck size={18} />
          Mark day complete
        </button>
      </article>

      <section className="panel progress-accordion">
        <button
          className="progress-accordion-toggle"
          onClick={() => setIsProgressPanelOpen((isOpen) => !isOpen)}
          aria-expanded={isProgressPanelOpen}
        >
          <div>
            <p className="kicker">Daily progress details</p>
            <strong>
              {statusLabel(dayProgress.status)} · {dayCompletionPercent}% · {checklistDone}/{activeDay.checklistItems.length} checks
            </strong>
          </div>
          <span>{isProgressPanelOpen ? "Hide details" : "Show notes, checklist, artifacts"}</span>
        </button>

        {isProgressPanelOpen && (
          <div className="progress-accordion-body">
            <div className="progress-detail-card progress-status-card">
              <h3><BarChart3 size={18} /> Status and scores</h3>
              <label className="field">
                <span>Status</span>
                <select
                  value={dayProgress.status}
                  onChange={(event) => updateDay((current) => applyStatus(current, event.target.value as DayStatus))}
                >
                  <option value="not-started">Not started</option>
                  <option value="in-progress">In progress</option>
                  <option value="complete">Complete</option>
                </select>
              </label>
              <div className="mini-stats compact-stats">
                <span>{sectionsDone}/{visibleSections.length} sections</span>
                <span>{checklistDone}/{activeDay.checklistItems.length} checks</span>
              </div>
              <div className="score-input-row">
                <label className="field compact-field">
                  <span>Mini-test score</span>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={dayProgress.miniTestScore ?? ""}
                    onChange={(event) => updateDay((current) => ({ ...current, miniTestScore: numberOrNull(event.target.value) }))}
                  />
                </label>
                <label className="field compact-field">
                  <span>Self-score / 5</span>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={dayProgress.selfScore ?? ""}
                    onChange={(event) => updateDay((current) => ({ ...current, selfScore: numberOrNull(event.target.value) }))}
                  />
                </label>
              </div>
            </div>

            <div className="progress-detail-card checklist-box">
              <div className="sidebar-section-heading">
                <strong><ClipboardList size={18} /> Completion checklist</strong>
                <button
                  className="text-button"
                  onClick={() => setAllChecklistItems(checklistDone !== activeDay.checklistItems.length)}
                >
                  {checklistDone === activeDay.checklistItems.length ? "Clear" : "Check all"}
                </button>
              </div>
              {activeDay.checklistItems.length === 0 ? (
                <p className="muted">No checklist parsed for this day.</p>
              ) : (
                activeDay.checklistItems.map((item) => (
                  <label key={item.id} className="check-row">
                    <input
                      type="checkbox"
                      checked={Boolean(dayProgress.checklist[item.id])}
                      onChange={() => toggleChecklist(item.id)}
                    />
                    <span>{item.text}</span>
                  </label>
                ))
              )}
            </div>

            <div className="progress-detail-card notes-artifacts-card">
              <h3><FileSearch size={18} /> Notes and artifacts</h3>
              <label className="field">
                <span>Notes</span>
                <textarea
                  rows={4}
                  value={dayProgress.notes}
                  onChange={(event) => updateDay((current) => ({ ...current, notes: event.target.value }))}
                />
              </label>
              <label className="field">
                <span>Artifact links or paths</span>
                <textarea
                  rows={3}
                  value={dayProgress.artifactLinks.join("\n")}
                  onChange={(event) =>
                    updateDay((current) => ({
                      ...current,
                      artifactLinks: event.target.value.split("\n").map((line) => line.trim()).filter(Boolean)
                    }))
                  }
                />
              </label>
              <div className="artifact-list">
                <strong>Expected artifacts</strong>
                {activeDay.outputArtifacts.length === 0 ? (
                  <p className="muted">No artifacts parsed.</p>
                ) : (
                  activeDay.outputArtifacts.map((artifact) => <code key={artifact}>{artifact}</code>)
                )}
              </div>
            </div>

            <div className="progress-detail-card weak-area-mini-list">
              <div className="sidebar-section-heading">
                <strong><AlertTriangle size={18} /> Weak areas</strong>
                <span>{dayWeakAreas.length}</span>
              </div>
              <label className="field">
                <span>Weak-area note</span>
                <textarea
                  rows={3}
                  value={dayProgress.weakAreaNote}
                  onChange={(event) => updateDay((current) => ({ ...current, weakAreaNote: event.target.value }))}
                />
              </label>
              <button className="secondary-button" onClick={addWeakAreaFromDay}>Add to weak areas</button>
              {dayWeakAreas.length === 0 ? (
                <p className="muted">No weak areas saved for this day yet.</p>
              ) : (
                dayWeakAreas.map((area) => (
                  <div className="weak-area-chip" key={area.id}>
                    <div>
                      <span>{area.weakArea}</span>
                      <small>{area.status}</small>
                    </div>
                    <button
                      className="icon-danger-button"
                      aria-label={`Delete weak area ${area.id}`}
                      onClick={() =>
                        setProgress((current) => ({
                          ...current,
                          weakAreas: current.weakAreas.filter((item) => item.id !== area.id),
                          updatedAt: new Date().toISOString()
                        }))
                      }
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </section>

      <div className="study-layout">
        <article className="study-content">
          <MetadataSummary day={activeDay} />

          {visibleSections.map((section) => (
            <section className="content-section" key={section.id}>
              <label
                className={
                  dayProgress.completedSections.includes(section.id)
                    ? "section-check checked"
                    : "section-check"
                }
              >
                <input
                  type="checkbox"
                  checked={dayProgress.completedSections.includes(section.id)}
                  onChange={() => toggleSection(section.id)}
                />
                <span>Mark section complete</span>
              </label>
              <MarkdownHtml html={section.html} />
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}

function LibraryView({ onSelectDay }: { onSelectDay: (dayId: string) => void }) {
  const [query, setQuery] = useState("");
  const [selectedDocumentId, setSelectedDocumentId] = useState(content.documents[0]?.id ?? "");
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null);
  const selectedDocument = content.documents.find((document) => document.id === selectedDocumentId) ?? content.documents[0];
  const selectedRecord = selectedRecordId
    ? content.searchRecords.find((record) => record.id === selectedRecordId) ?? null
    : null;
  const selectedHtml = selectedRecord ? htmlForSearchRecord(selectedRecord) : selectedDocument?.html;

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return content.searchRecords
      .filter((record) => `${record.title} ${record.subtitle} ${record.text}`.toLowerCase().includes(normalized))
      .slice(0, 30);
  }, [query]);

  const categories = [...new Set(content.documents.map((document) => document.category))];

  return (
    <section className="screen">
      <ScreenHeader eyebrow="Library" title="Search and browse the source material" />
      <div className="library-layout">
        <aside className="library-sidebar panel">
          <label className="search-box">
            <Search size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search DSA-001, RabbitMQ, ProblemDetails..."
            />
          </label>
          {query ? (
            <div className="search-results">
              {results.length === 0 && <p className="muted">No matches found.</p>}
              {results.map((record) => (
                <button
                  className="result-row"
                  key={record.id}
                  onClick={() => {
                    if (record.type === "day") {
                      onSelectDay(record.sourceId);
                    } else if (record.type === "document") {
                      setSelectedDocumentId(record.sourceId);
                      setSelectedRecordId(null);
                    } else {
                      setSelectedRecordId(record.id);
                    }
                  }}
                >
                  <strong>{record.title}</strong>
                  <span>{record.subtitle}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="document-list">
              {categories.map((category) => (
                <div key={category}>
                  <h3>{category}</h3>
                  {content.documents
                    .filter((document) => document.category === category)
                    .map((document) => (
                      <button
                        key={document.id}
                        className={selectedDocumentId === document.id ? "doc-button active" : "doc-button"}
                        onClick={() => {
                          setSelectedDocumentId(document.id);
                          setSelectedRecordId(null);
                        }}
                      >
                        {document.title}
                      </button>
                    ))}
                </div>
              ))}
            </div>
          )}
        </aside>
        <article className="panel markdown-panel">
          <div className="panel-heading">
            <div>
              <p className="kicker">{selectedRecord?.type ?? selectedDocument?.category}</p>
              <h2>{selectedRecord?.title ?? selectedDocument?.title}</h2>
            </div>
            <FileSearch size={22} />
          </div>
          <MarkdownHtml html={selectedHtml ?? ""} />
        </article>
      </div>
    </section>
  );
}

function TrackersView({
  progress,
  setProgress
}: {
  progress: ProgressState;
  setProgress: React.Dispatch<React.SetStateAction<ProgressState>>;
}) {
  const [newWeakArea, setNewWeakArea] = useState("");
  const [openTrackers, setOpenTrackers] = useState<Record<string, boolean>>({
    weakAreas: true,
    weeklyScores: false,
    readiness: false,
    jobs: false
  });

  const toggleTracker = (tracker: string) => {
    setOpenTrackers((current) => ({ ...current, [tracker]: !current[tracker] }));
  };

  const updateWeakArea = (id: string, updater: (weakArea: WeakArea) => WeakArea) => {
    setProgress((current) => ({
      ...current,
      weakAreas: current.weakAreas.map((weakArea) => (weakArea.id === id ? updater(weakArea) : weakArea)),
      updatedAt: new Date().toISOString()
    }));
  };

  const updateJob = (id: string, updater: (job: JobApplication) => JobApplication) => {
    setProgress((current) => ({
      ...current,
      jobApplications: current.jobApplications.map((job) => (job.id === id ? updater(job) : job)),
      updatedAt: new Date().toISOString()
    }));
  };

  return (
    <section className="screen">
      <ScreenHeader eyebrow="Trackers" title="Weak areas, scores, readiness, and applications" />
      <div className="tracker-stack">
        <TrackerPanel
          accent="warning"
          icon={AlertTriangle}
          isOpen={openTrackers.weakAreas}
          meta={`${progress.weakAreas.filter((item) => item.status === "open").length} open`}
          onToggle={() => toggleTracker("weakAreas")}
          title="Weak areas"
        >
          <div className="inline-form">
            <input
              value={newWeakArea}
              onChange={(event) => setNewWeakArea(event.target.value)}
              placeholder="Add a concrete weak area"
            />
            <button
              className="secondary-button"
              onClick={() => {
                if (!newWeakArea.trim()) return;
                setProgress((current) => ({
                  ...current,
                  weakAreas: [createWeakArea({ weakArea: newWeakArea.trim() }), ...current.weakAreas],
                  updatedAt: new Date().toISOString()
                }));
                setNewWeakArea("");
              }}
            >
              Add
            </button>
          </div>
          <div className="stack-list">
            {progress.weakAreas.length === 0 ? (
              <p className="muted">No weak areas logged yet.</p>
            ) : (
              progress.weakAreas.map((weakArea) => (
                <div className="editable-card" key={weakArea.id}>
                  <div className="editable-card-heading">
                    <span>{weakAreaSourceLabel(weakArea)}</span>
                    <button
                      className="icon-danger-button"
                      aria-label={`Delete weak area ${weakArea.id}`}
                      onClick={() =>
                        setProgress((current) => ({
                          ...current,
                          weakAreas: current.weakAreas.filter((item) => item.id !== weakArea.id),
                          updatedAt: new Date().toISOString()
                        }))
                      }
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <input
                    value={weakArea.weakArea}
                    onChange={(event) => updateWeakArea(weakArea.id, (item) => ({ ...item, weakArea: event.target.value }))}
                  />
                  <div className="two-column">
                    <input
                      value={weakArea.category}
                      onChange={(event) => updateWeakArea(weakArea.id, (item) => ({ ...item, category: event.target.value }))}
                      placeholder="Category"
                    />
                    <select
                      value={weakArea.status}
                      onChange={(event) => updateWeakArea(weakArea.id, (item) => ({ ...item, status: event.target.value as WeakArea["status"] }))}
                    >
                      <option value="open">Open</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                  <textarea
                    rows={2}
                    value={weakArea.recoveryTask}
                    onChange={(event) => updateWeakArea(weakArea.id, (item) => ({ ...item, recoveryTask: event.target.value }))}
                    placeholder="Recovery task"
                  />
                  <textarea
                    rows={2}
                    value={weakArea.evidence}
                    onChange={(event) => updateWeakArea(weakArea.id, (item) => ({ ...item, evidence: event.target.value }))}
                    placeholder="Source or evidence"
                  />
                </div>
              ))
            )}
          </div>
        </TrackerPanel>

        <TrackerPanel
          accent="info"
          icon={BarChart3}
          isOpen={openTrackers.weeklyScores}
          meta={`${Object.values(progress.weeks).filter((week) => typeof week.score === "number").length} scored`}
          onToggle={() => toggleTracker("weeklyScores")}
          title="Weekly scores"
        >
          <div className="score-table">
            {content.weeks.map((week) => {
              const weekProgress = progress.weeks[week.id] ?? createWeekProgress();
              return (
                <div className="score-row" key={week.id}>
                  <span>Week {week.weekNumber}</span>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={weekProgress.score ?? ""}
                    onChange={(event) =>
                      setProgress((current) =>
                        updateWeekProgress(current, week.id, (existing) => ({
                          ...existing,
                          score: numberOrNull(event.target.value),
                          status: scoreStatus(numberOrNull(event.target.value))
                        }))
                      )
                    }
                  />
                  <strong>{weekProgress.status}</strong>
                </div>
              );
            })}
          </div>
        </TrackerPanel>

        <TrackerPanel
          accent="success"
          icon={CheckCircle2}
          isOpen={openTrackers.readiness}
          meta={`${Object.values(progress.areas).filter((area) => area.status === "Ready").length} ready`}
          onToggle={() => toggleTracker("readiness")}
          title="Readiness areas"
        >
          <div className="area-list">
            {Object.entries(progress.areas).map(([area, areaProgress]) => (
              <div className="area-row" key={area}>
                <strong>{area}</strong>
                <select
                  value={areaProgress.status}
                  onChange={(event) =>
                    setProgress((current) =>
                      updateAreaProgress(current, area, (existing: AreaProgress) => ({
                        ...existing,
                        status: event.target.value as AreaProgress["status"]
                      }))
                    )
                  }
                >
                  <option>Not started</option>
                  <option>In progress</option>
                  <option>Caution</option>
                  <option>Ready</option>
                </select>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={areaProgress.score ?? ""}
                  onChange={(event) =>
                    setProgress((current) =>
                      updateAreaProgress(current, area, (existing) => ({
                        ...existing,
                        score: numberOrNull(event.target.value)
                      }))
                    )
                  }
                  placeholder="/5"
                />
              </div>
            ))}
          </div>
        </TrackerPanel>

        <TrackerPanel
          accent="career"
          icon={Briefcase}
          isOpen={openTrackers.jobs}
          meta={`${progress.jobApplications.length} roles`}
          onToggle={() => toggleTracker("jobs")}
          title="Job applications"
        >
          <div className="tracker-action-row">
            <button
              className="secondary-button"
              onClick={() =>
                setProgress((current) => ({
                  ...current,
                  jobApplications: [createJobApplication(), ...current.jobApplications],
                  updatedAt: new Date().toISOString()
                }))
              }
            >
              Add role
            </button>
          </div>
          <div className="job-list">
            {progress.jobApplications.length === 0 ? (
              <p className="muted">No applications tracked yet.</p>
            ) : (
              progress.jobApplications.map((job) => (
                <div className="job-row" key={job.id}>
                  <button
                    className="icon-danger-button job-delete-button"
                    aria-label={`Delete job application ${job.id}`}
                    onClick={() =>
                      setProgress((current) => ({
                        ...current,
                        jobApplications: current.jobApplications.filter((item) => item.id !== job.id),
                        updatedAt: new Date().toISOString()
                      }))
                    }
                  >
                    <Trash2 size={16} />
                  </button>
                  <input value={job.company} onChange={(event) => updateJob(job.id, (item) => ({ ...item, company: event.target.value }))} placeholder="Company" />
                  <input value={job.role} onChange={(event) => updateJob(job.id, (item) => ({ ...item, role: event.target.value }))} placeholder="Role" />
                  <input value={job.status} onChange={(event) => updateJob(job.id, (item) => ({ ...item, status: event.target.value }))} placeholder="Status" />
                  <input value={job.nextFollowUp} onChange={(event) => updateJob(job.id, (item) => ({ ...item, nextFollowUp: event.target.value }))} placeholder="Next follow-up" />
                  <textarea value={job.notes} onChange={(event) => updateJob(job.id, (item) => ({ ...item, notes: event.target.value }))} placeholder="Notes" />
                </div>
              ))
            )}
          </div>
        </TrackerPanel>
      </div>
    </section>
  );
}

function TrackerPanel({
  accent,
  children,
  icon: Icon,
  isOpen,
  meta,
  onToggle,
  title
}: {
  accent: "warning" | "info" | "success" | "career";
  children: React.ReactNode;
  icon: typeof Gauge;
  isOpen: boolean;
  meta: string;
  onToggle: () => void;
  title: string;
}) {
  return (
    <article className={`panel tracker-panel tracker-${accent}`}>
      <button className="tracker-toggle" onClick={onToggle} aria-expanded={isOpen}>
        <span className="tracker-title-group">
          <span className="tracker-icon"><Icon size={20} /></span>
          <span>
            <span className="tracker-eyebrow">{title}</span>
            <strong>{meta}</strong>
          </span>
        </span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="tracker-panel-body">{children}</div>}
    </article>
  );
}

function SettingsView({
  progress,
  setProgress
}: {
  progress: ProgressState;
  setProgress: React.Dispatch<React.SetStateAction<ProgressState>>;
}) {
  const [importCandidate, setImportCandidate] = useState<ProgressState | null>(null);
  const [importSummary, setImportSummary] = useState("");
  const [importError, setImportError] = useState("");

  const handleImportFile = async (file: File | undefined) => {
    if (!file) return;
    setImportCandidate(null);
    setImportError("");
    try {
      const parsed = JSON.parse(await file.text());
      const validation = validateImportedProgress(parsed);
      if (!validation.valid) {
        setImportError(validation.reason);
        return;
      }
      const normalized = normalizeImportedProgress(parsed, content.contentHash, content.days[0]?.id ?? "day-001");
      setImportCandidate(normalized);
      setImportSummary(
        [
          `${Object.keys(normalized.days).length} day progress records`,
          `${normalized.weakAreas.length} weak areas`,
          `${normalized.jobApplications.length} job applications`,
          parsed.contentHash === content.contentHash ? "Content hash matches" : "Content hash differs; matching stable IDs will be used"
        ].join(". ")
      );
    } catch {
      setImportError("Could not read that JSON file.");
    }
  };

  return (
    <section className="screen">
      <ScreenHeader eyebrow="Settings" title="Local storage, export, and import" />
      <div className="settings-grid">
        <article className="panel">
          <Download size={26} />
          <h2>Export progress</h2>
          <p className="muted">Download your local progress as a JSON backup that can be imported later.</p>
          <button className="primary-button" onClick={() => exportProgress(progress)}>
            <Download size={18} />
            Export JSON
          </button>
        </article>

        <article className="panel">
          <Upload size={26} />
          <h2>Import progress</h2>
          <p className="muted">Import replaces current local progress after creating a local backup.</p>
          <input type="file" accept="application/json,.json" onChange={(event) => handleImportFile(event.target.files?.[0])} />
          {importError && <p className="error-text">{importError}</p>}
          {importCandidate && (
            <div className="import-preview">
              <strong>Import preview</strong>
              <p>{importSummary}</p>
              <button
                className="primary-button"
                onClick={() => {
                  const imported = backupAndReplaceProgress(importCandidate, progress);
                  setProgress(imported);
                  setImportCandidate(null);
                  setImportSummary("Import complete.");
                }}
              >
                Replace current progress
              </button>
            </div>
          )}
        </article>

        <article className="panel">
          <RotateCcw size={26} />
          <h2>Reset local data</h2>
          <p className="muted">Clear progress in this browser and start from Day 1. Export first if you want a backup.</p>
          <button
            className="danger-button"
            onClick={() => {
              if (!window.confirm("Reset all local progress in this browser?")) return;
              setProgress(createInitialProgress(content.contentHash, content.days[0]?.id ?? "day-001"));
            }}
          >
            Reset progress
          </button>
        </article>

        <article className="panel">
          <h2>Content source</h2>
          <div className="settings-list">
            <Meta label="Source folder" value={content.sourceRoot} />
            <Meta label="Generated at" value={new Date(content.generatedAt).toLocaleString()} />
            <Meta label="Months" value={String(content.months.length)} />
            <Meta label="Weeks" value={String(content.weeks.length)} />
            <Meta label="Days" value={String(content.days.length)} />
            <Meta label="Documents" value={String(content.documents.length)} />
          </div>
        </article>
      </div>
    </section>
  );
}

function ScreenHeader({
  eyebrow,
  title,
  action
}: {
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <header className="screen-header">
      <div>
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      {action}
    </header>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  detail
}: {
  icon: typeof Gauge;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <article className="metric-card">
      <Icon size={22} />
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </article>
  );
}

function MetadataSummary({ day }: { day: DayContent }) {
  const metadataEntries = Object.entries(day.metadata).filter(([key]) => key !== "Main Goal");

  return (
    <article className="metadata-summary-card">
      <div className="metadata-summary-heading">
        <span className="metadata-summary-icon"><Sparkles size={20} /></span>
        <div>
          <p className="kicker">Day context</p>
          <h2>What this session looks like</h2>
        </div>
      </div>
      <div className="metadata-summary-list">
        {metadataEntries.map(([key, value]) => (
          <div className="metadata-summary-item" key={key}>
            <span className="metadata-item-icon">{metadataIconFor(key)}</span>
            <div>
              <span>{key}</span>
              <strong>{value}</strong>
            </div>
          </div>
        ))}
        <div className="metadata-summary-item">
          <span className="metadata-item-icon"><FileSearch size={18} /></span>
          <div>
            <span>Source</span>
            <strong>{day.sourcePath}</strong>
          </div>
        </div>
      </div>
    </article>
  );
}

function metadataIconFor(label: string) {
  if (/time/i.test(label)) return <Clock size={18} />;
  if (/week|month/i.test(label)) return <CalendarDays size={18} />;
  if (/phase/i.test(label)) return <Layers size={18} />;
  if (/difficulty/i.test(label)) return <Flag size={18} />;
  return <Sparkles size={18} />;
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="meta-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function MarkdownHtml({ html }: { html: string }) {
  return <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />;
}

function htmlForSearchRecord(record: SearchRecord): string {
  if (record.type === "assessment") {
    return content.weeks.find((week) => week.id === record.sourceId)?.assessment?.html ?? "";
  }
  if (record.type === "checkpoint") {
    return content.months.find((month) => month.id === record.sourceId)?.checkpoint?.html ?? "";
  }
  if (record.type === "document") {
    return content.documents.find((document) => document.id === record.sourceId)?.html ?? "";
  }
  return content.days.find((day) => day.id === record.sourceId)?.html ?? "";
}

function weakAreaSourceLabel(weakArea: WeakArea): string {
  if (weakArea.sourceDayId) {
    const sourceDay = content.days.find((day) => day.id === weakArea.sourceDayId);
    if (sourceDay) return `Day ${sourceDay.dayNumber}: ${sourceDay.title}`;
    return `Saved from ${weakArea.sourceDayId}`;
  }
  const dayMatch = weakArea.evidence.match(/Day\s+(\d+)/i);
  if (dayMatch) {
    const sourceDay = content.days.find((day) => day.dayNumber === Number(dayMatch[1]));
    if (sourceDay) return `Day ${sourceDay.dayNumber}: ${sourceDay.title}`;
  }
  return weakArea.date ? `Manual entry: ${weakArea.date}` : "Manual entry";
}

function readRouteFromHash(): RouteState {
  const rawHash = window.location.hash.replace(/^#\/?/, "");
  const [rawView, rawDayId] = rawHash.split("/");
  const view = views.some((item) => item.key === rawView) ? (rawView as ViewKey) : "dashboard";
  if (view === "study") {
    const dayId = content.days.some((day) => day.id === rawDayId) ? rawDayId : undefined;
    return { view, dayId };
  }
  return { view };
}

function navigateToRoute(route: RouteState): void {
  const nextHash = route.view === "study" && route.dayId ? `#/study/${route.dayId}` : `#/${route.view}`;
  if (window.location.hash === nextHash) return;
  window.location.hash = nextHash;
}

function numberOrNull(value: string): number | null {
  if (value.trim() === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function scoreStatus(score: number | null): string {
  if (score === null) return "Not taken";
  if (score >= 75) return "Passing";
  if (score >= 60) return "Recovery";
  return "Blocked";
}
