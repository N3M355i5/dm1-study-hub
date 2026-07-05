import { Link } from "react-router-dom";
import { getCoreExercises, getAdditionalExercises } from "../data/exercises";

export function ExercisesPage() {
  const core = getCoreExercises();
  const additional = getAdditionalExercises();

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">SoSe 2026 · OVGU DM I</p>
        <h1>Exercise Solutions</h1>
        <p className="lead">
          Step-by-step worked solutions for Exercises 1–10 plus additional practice sheets.
          Reveal one step at a time to learn the method, not just the answer.
        </p>
      </header>

      <section className="section">
        <h2>Core Exercises (1–10)</h2>
        <div className="exercise-grid">
          {core.map((ex) => (
            <Link key={ex.id} to={`/exercises/${ex.id}`} className="exercise-card">
              <span className="exercise-num">Ex {ex.id <= 10 ? ex.id : ""}</span>
              <h3>{ex.title}</h3>
              <p>{ex.questions.length} questions · {ex.source.split("·")[0].trim()}</p>
              <div className="exercise-tags">
                {ex.moduleIds.slice(0, 2).map((m) => (
                  <span key={m} className="tag">{m.replace(/-/g, " ")}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {additional.length > 0 && (
        <section className="section">
          <h2>Additional Practice (with solutions)</h2>
          <div className="exercise-grid">
            {additional.map((ex) => (
              <Link key={ex.id} to={`/exercises/${ex.id}`} className="exercise-card additional">
                <span className="exercise-num">Extra</span>
                <h3>{ex.title}</h3>
                <p>{ex.questions.length} questions</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
