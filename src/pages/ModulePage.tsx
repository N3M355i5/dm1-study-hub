import { Link } from "react-router-dom";
import { getModule } from "../data/syllabus";
import { getMaterialsByModule } from "../data/materials";
import { Formula } from "../components/Formula";
import { VisualPanel } from "../components/VisualPanel";
import { MaterialLinks } from "../components/MaterialLinks";

export function ModulePage({ moduleId }: { moduleId: string }) {
  const mod = getModule(moduleId);
  const moduleMaterials = getMaterialsByModule(moduleId);

  if (!mod) {
    return (
      <div className="page">
        <h1>Module not found</h1>
        <Link to="/">← Back to home</Link>
      </div>
    );
  }

  return (
    <div className="page module-page">
      <header className="page-header">
        <p className="breadcrumb">
          <Link to="/">Home</Link> / {mod.title}
        </p>
        <h1>{mod.title}</h1>
        <p className="module-summary">{mod.summary}</p>
        {mod.bookRef && <p className="book-ref">📖 {mod.bookRef}</p>}
      </header>

      <VisualPanel visualId={mod.visual} />

      <MaterialLinks items={moduleMaterials} />

      <section className="section">
        <h2>Key Concepts</h2>
        <ul className="concept-list">
          {mod.concepts.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      {mod.formulas && mod.formulas.length > 0 && (
        <section className="section">
          <h2>Formulas</h2>
          <div className="formula-grid">
            {mod.formulas.map((f) => (
              <div key={f.label} className="formula-card">
                <h4>{f.label}</h4>
                <Formula latex={f.latex} />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <h2>Exam Tips</h2>
        <ul className="exam-tips">
          {mod.examTips.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>

      {mod.exerciseRefs && (
        <section className="section">
          <h2>Related Exercises</h2>
          <div className="exercise-tags">
            {mod.exerciseRefs.map((e) => (
              <span key={e} className="exercise-tag">{e}</span>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <h2>YouTube Study Resources</h2>
        <div className="youtube-grid">
          {mod.youtube.map((v) => (
            <a key={v.url} href={v.url} target="_blank" rel="noopener noreferrer" className="youtube-card">
              <div className="yt-icon">▶</div>
              <div>
                <strong>{v.title}</strong>
                <span>{v.channel}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
