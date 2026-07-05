import { Link } from "react-router-dom";
import { blocks, modules, studyPlan } from "../data/syllabus";
import {
  courseMeta,
  dataMiningDefinition,
  learningOverview,
  courseBlocks,
  contacts,
  exerciseRules,
  literature,
} from "../data/courseInfo";

export function Syllabus() {
  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">{courseMeta.term}</p>
        <h1>Official Course Syllabus</h1>
        <p className="lead">
          From the OVGU e-learning page — aligned with Prof. Spiliopoulou&apos;s lecture structure.
        </p>
      </header>

      <section className="section info-card">
        <h2>What is Data Mining?</h2>
        <p className="info-lead">{dataMiningDefinition.short}</p>
        <p>Data mining covers:</p>
        <ul className="info-list">
          {dataMiningDefinition.full.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p style={{ marginTop: "1rem" }}>{dataMiningDefinition.processGoal}</p>
        <ul className="info-list example-questions">
          {dataMiningDefinition.exampleQuestions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Course overview</h2>
        <ul className="info-list">
          {learningOverview.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Blocks & units</h2>
        {courseBlocks.map((block) => (
          <div key={block.id} className="block-detail">
            <h3>{block.name}</h3>
            {"units" in block && Array.isArray(block.units) && (
              <ul className="info-list">
                {block.units.map((u) =>
                  typeof u === "string" ? (
                    <li key={u}>{u}</li>
                  ) : (
                    <li key={u.code}>
                      <strong>Unit {u.code}:</strong> {u.title} — <em>{u.book}</em>
                      {"parts" in u && u.parts && (
                        <ul>
                          {u.parts.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      )}
                      {"summary" in u && <p className="unit-summary">{u.summary}</p>}
                    </li>
                  ),
                )}
              </ul>
            )}
            {"notes" in block && block.notes && (
              <div className="note-box">
                {block.notes.map((n) => (
                  <p key={n}>{n}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="section info-grid-2">
        <div className="info-card">
          <h2>Lecture & exercises</h2>
          <dl className="info-dl">
            <dt>Lecture</dt>
            <dd>{courseMeta.lectureHall}</dd>
            <dt>First lecture</dt>
            <dd>{courseMeta.firstLecture}</dd>
            <dt>First exercise</dt>
            <dd>{courseMeta.firstExercise}</dd>
            <dt>Exercise rooms</dt>
            <dd>{exerciseRules.locations}</dd>
          </dl>
        </div>
        <div className="info-card highlight-card">
          <h2>Votierung (exam prerequisite)</h2>
          <p className="voting-rule">{exerciseRules.examPrerequisite}</p>
          <p className="text-muted">{exerciseRules.format}</p>
          <p className="text-muted">{exerciseRules.attendance}</p>
          <Link to="/exam" className="btn primary" style={{ marginTop: "1rem" }}>
            Exam checklist
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Contact persons</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <span className="contact-role">Lecture</span>
            <strong>{contacts.lecture.name}</strong>
            <a href={`mailto:${contacts.lecture.email}`}>{contacts.lecture.email}</a>
          </div>
          <div className="contact-card">
            <span className="contact-role">Exercises</span>
            <strong>{contacts.exerciseLead.name}</strong>
            <a href={`mailto:${contacts.exerciseLead.email}`}>{contacts.exerciseLead.email}</a>
          </div>
          {contacts.tutors.map((t) => (
            <div key={t.groups} className="contact-card">
              <span className="contact-role">Group {t.groups}</span>
              <strong>{t.name}</strong>
              <a href={`mailto:${t.email}`}>{t.email}</a>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Literature</h2>
        <div className="literature-grid">
          <div className="info-card">
            <span className="book-id">Book M</span>
            <h3>{literature.bookM.title}</h3>
            <p className="text-muted">{literature.bookM.authors}</p>
            <p>{literature.bookM.publisher}</p>
            <ul className="info-list compact">
              {literature.bookM.chapters.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <a href={literature.bookM.url} target="_blank" rel="noopener noreferrer">
              Course book overview & slides →
            </a>
            <p className="text-muted" style={{ marginTop: "0.75rem", fontSize: "0.8125rem" }}>
              {literature.bookM.ebook}
            </p>
          </div>
          <div className="info-card">
            <span className="book-id">Book D</span>
            <h3>{literature.bookD.title}</h3>
            <p className="text-muted">{literature.bookD.authors}</p>
            <p>{literature.bookD.publisher}</p>
            <ul className="info-list compact">
              {literature.bookD.chapters.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="text-muted" style={{ marginTop: "0.75rem", fontSize: "0.8125rem" }}>
              {literature.bookD.note}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Study modules</h2>
        {blocks.filter((b) => b.id !== "exam").map((block) => (
          <div key={block.id} className="module-block">
            <h3 style={{ color: block.color }}>{block.name}</h3>
            <div className="module-list">
              {modules.filter((m) => m.block === block.id).map((m) => (
                <Link key={m.id} to={`/module/${m.id}`} className="module-row">
                  <span className="module-order">{m.order}</span>
                  <div>
                    <strong>{m.title}</strong>
                    <p>{m.summary.slice(0, 100)}…</p>
                  </div>
                  {m.visual && <span className="badge">Lab</span>}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>4-week study plan</h2>
        <div className="timeline">
          {studyPlan.map((week) => (
            <div key={week.week} className="timeline-item">
              <div className="timeline-marker">W{week.week}</div>
              <div className="timeline-content">
                <h4>{week.focus}</h4>
                <ul>
                  {week.modules.map((id) => {
                    const m = modules.find((mod) => mod.id === id);
                    return m ? (
                      <li key={id}>
                        <Link to={`/module/${id}`}>{m.title}</Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
