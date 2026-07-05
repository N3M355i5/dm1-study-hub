import { useState } from "react";
import { Link } from "react-router-dom";
import { allExercises, getExercise } from "../data/exercises";
import { StepSolution } from "../components/StepSolution";
import { VisualPanel } from "../components/VisualPanel";

const EXERCISE_VISUALS: Record<number, string> = {
  2: "naive-bayes",
  3: "decision-tree",
  4: "confusion-matrix",
  6: "k-means",
  7: "dbscan",
  8: "dendrogram",
  9: "silhouette",
  10: "silhouette",
};

export function ExerciseDetailPage({ exerciseId }: { exerciseId: number }) {
  const ex = getExercise(exerciseId);
  const idx = allExercises.findIndex((e) => e.id === exerciseId);
  const prev = idx > 0 ? allExercises[idx - 1] : null;
  const next = idx < allExercises.length - 1 ? allExercises[idx + 1] : null;

  const [openQ, setOpenQ] = useState<number | null>(0);

  if (!ex) {
    return (
      <div className="page">
        <h1>Exercise not found</h1>
        <Link to="/exercises">← All exercises</Link>
      </div>
    );
  }

  return (
    <div className="page exercise-detail">
      <header className="page-header">
        <p className="breadcrumb">
          <Link to="/exercises">Exercises</Link> / {ex.title}
        </p>
        <h1>{ex.title}</h1>
        <p className="lead">{ex.source}</p>
        {ex.tag === "additional" && <span className="badge-pill">Additional practice</span>}
      </header>

      {EXERCISE_VISUALS[ex.id] && <VisualPanel visualId={EXERCISE_VISUALS[ex.id]} />}

      <div className="question-accordion">
        {ex.questions.map((q, qi) => (
          <div key={q.id} className={`question-panel ${openQ === qi ? "open" : ""}`}>
            <button
              type="button"
              className="question-header"
              onClick={() => setOpenQ(openQ === qi ? null : qi)}
            >
              <span className="q-num">Q{q.number}</span>
              <span className="q-text">{q.text}</span>
              <span className="q-chevron">{openQ === qi ? "−" : "+"}</span>
            </button>
            {openQ === qi && (
              <div className="question-content">
                <StepSolution steps={q.steps} />
              </div>
            )}
          </div>
        ))}
      </div>

      <footer className="exercise-nav">
        {prev ? <Link to={`/exercises/${prev.id}`} className="btn ghost">← {prev.title.split("—")[0].trim()}</Link> : <span />}
        {next && <Link to={`/exercises/${next.id}`} className="btn primary">{next.title.split("—")[0].trim()} →</Link>}
      </footer>
    </div>
  );
}
