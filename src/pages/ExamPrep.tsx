import { Link } from "react-router-dom";
import { modules, studyPlan } from "../data/syllabus";
import { getMaterialsByModule } from "../data/materials";
import { MaterialLinks } from "../components/MaterialLinks";

const checklist = [
  { topic: "Build decision tree manually (golf / vertebrate dataset)", module: "decision-trees" },
  { topic: "Compute Gini, Entropy, Information Gain", module: "decision-trees" },
  { topic: "Apply Naive Bayes with Laplace smoothing", module: "naive-bayes" },
  { topic: "Build confusion matrix & compute Precision, Recall, F₁", module: "evaluation-basics" },
  { topic: "Explain cross-validation vs hold-out", module: "evaluation-basics" },
  { topic: "Apply McNemar test (compute mcn statistic)", module: "evaluation-best-model" },
  { topic: "Run K-Means by hand for 2-3 iterations", module: "k-means" },
  { topic: "Compute Jaccard & Rand Index for binary vectors", module: "similarity-distance" },
  { topic: "Build HAC dendrogram with MIN/MAX linkage", module: "hierarchical-clustering" },
  { topic: "Classify points as core/border/noise in DBSCAN", module: "dbscan" },
  { topic: "Compute Silhouette coefficient for a point", module: "cluster-evaluation" },
  { topic: "Trace SFG/SBG feature selection algorithm", module: "feature-selection" },
];

export function ExamPrep() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Exam Preparation</h1>
        <p>
          Written exam · Votierung required: vote on ≥70% of tasks <em>or</em> reach 35 votes total.
          Attend only your assigned exercise group.
        </p>
      </header>

      <MaterialLinks
        items={getMaterialsByModule("exam-prep")}
        title="Exam PDFs"
      />

      <section className="section exam-alert">
        <h2>High-Yield Exam Topics</h2>
        <p>These appear repeatedly in exercises and the example exam:</p>
        <div className="high-yield-grid">
          {["Decision Trees", "Naive Bayes", "Confusion Matrix", "McNemar Test", "K-Means", "HAC", "DBSCAN", "Silhouette", "Feature Selection"].map((t) => (
            <span key={t} className="yield-tag">{t}</span>
          ))}
        </div>
      </section>

        <section className="section">
        <h2>Exercise solutions</h2>
        <p>Every question has step-by-step worked solutions. <Link to="/exercises">Open exercise hub →</Link></p>
      </section>

      <section className="section">
        <h2>Master Checklist</h2>
        <p>Can you do each of these without looking at notes?</p>
        <ul className="checklist">
          {checklist.map((item) => (
            <li key={item.topic}>
              <input type="checkbox" id={item.module} />
              <label htmlFor={item.module}>
                {item.topic}
                <Link to={`/module/${item.module}`} className="check-link">Review →</Link>
              </label>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>4-Week Crash Plan</h2>
        <div className="exam-plan">
          {studyPlan.map((week) => (
            <div key={week.week} className="exam-week">
              <h3>Week {week.week}</h3>
              <p>{week.focus}</p>
              <ol>
                {week.modules.map((id) => {
                  const m = modules.find((mod) => mod.id === id);
                  return m ? (
                    <li key={id}>
                      <Link to={`/module/${id}`}>{m.title}</Link>
                      {" — "}
                      {m.exerciseRefs?.join(", ") || "Review concepts"}
                    </li>
                  ) : null;
                })}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Exercise Sheet Mapping</h2>
        <div className="md-table-wrap">
        <table className="exam-table">
          <thead>
            <tr><th>Exercise</th><th>Topic</th><th>Module</th></tr>
          </thead>
          <tbody>
            {[
              ["Exercise 1", "Classification basics", "classification-underpinnings"],
              ["Exercise 2", "Decision trees", "decision-trees"],
              ["Exercise 3", "DT + Naive Bayes", "naive-bayes"],
              ["Exercise 4", "Evaluation metrics", "evaluation-basics"],
              ["Exercise 5", "Sampling & ensembles", "evaluation-basics"],
              ["Exercise 6", "Model comparison", "evaluation-best-model"],
              ["Exercise 7", "K-Means", "k-means"],
              ["Exercise 8", "Hierarchical clustering", "hierarchical-clustering"],
              ["Exercise 9", "Cluster evaluation (Purity, Rand, Jaccard)", "cluster-evaluation"],
              ["Exercise 10", "Silhouette & feature selection", "feature-selection"],
            ].map(([ex, topic, mod]) => (
              <tr key={ex}>
                <td>{ex}</td>
                <td>{topic}</td>
                <td><Link to={`/module/${mod}`}>Review</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </section>
    </div>
  );
}
