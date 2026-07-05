import { Link } from "react-router-dom";
import { blocks, modules, studyPlan } from "../data/syllabus";
import { getCoreExercises } from "../data/exercises";

export function Home() {
  const totalModules = modules.filter((m) => m.block !== "exam").length;
  const exercises = getCoreExercises();

  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">OVGU · Data Mining I · SoSe 2026</p>
        <h1>Learn DM I with step-by-step solutions</h1>
        <p className="hero-sub">
          Official OVGU DM I syllabus, step-by-step exercise solutions, and interactive labs —
          from classification and clustering to data engineering (missingness, feature selection).
        </p>
        <div className="hero-actions">
          <Link to="/exercises" className="btn primary">Exercise Solutions</Link>
          <Link to="/syllabus" className="btn secondary">Study Plan</Link>
        </div>
      </header>

      <section className="stats-row">
        <div className="stat-card">
          <span className="stat-num">{exercises.length}</span>
          <span className="stat-label">Exercise sheets</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">{totalModules}</span>
          <span className="stat-label">Lecture topics</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">8</span>
          <span className="stat-label">Interactive labs</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">4</span>
          <span className="stat-label">Week plan</span>
        </div>
      </section>

      <section className="section">
        <h2>Start with exercises</h2>
        <div className="exercise-grid">
          {exercises.slice(0, 6).map((ex) => (
            <Link key={ex.id} to={`/exercises/${ex.id}`} className="exercise-card">
              <span className="exercise-num">Exercise {ex.id}</span>
              <h3>{ex.title.split("—")[1]?.trim() || ex.title}</h3>
              <p>{ex.questions.length} questions with step-by-step solutions</p>
            </Link>
          ))}
        </div>
        <p style={{ marginTop: "1rem" }}>
          <Link to="/exercises">View all exercises including 7–10 & additional sheets →</Link>
        </p>
      </section>

      <section className="section">
        <h2>4-Week Study Plan</h2>
        <div className="plan-grid">
          {studyPlan.map((week) => (
            <div key={week.week} className="plan-card">
              <div className="exercise-num">Week {week.week}</div>
              <p style={{ margin: "0.5rem 0", fontSize: "0.9375rem" }}>{week.focus}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Course blocks</h2>
        <div className="block-grid">
          {blocks.filter((b) => b.id !== "exam").map((block) => {
            const first = modules.find((m) => m.block === block.id);
            return (
              <Link key={block.id} to={first ? `/module/${first.id}` : "/"} className="block-card">
                <h3 style={{ fontSize: "0.9375rem" }}>{block.name}</h3>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
