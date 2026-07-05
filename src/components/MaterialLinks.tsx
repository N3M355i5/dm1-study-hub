import { Link } from "react-router-dom";
import type { Material } from "../data/materials";
import { materialViewerPath } from "../data/materials";

export function MaterialLinks({
  items,
  title = "Course PDFs",
}: {
  items: Material[];
  title?: string;
}) {
  if (!items.length) return null;

  const unique = items.filter(
    (m, i, arr) => arr.findIndex((x) => x.id === m.id) === i
  );

  return (
    <section className="section">
      <h2>{title}</h2>
      <p className="section-lead">
        Read the original lecture slides and exercise sheets in your browser.
      </p>
      <div className="material-links">
        {unique.map((m) => (
          <Link key={m.id} to={materialViewerPath(m.id)} className="material-link-card">
            <span className="material-link-icon">📄</span>
            <div>
              <strong>{m.title}</strong>
              <span>{m.description}</span>
            </div>
            <span className="material-link-arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
