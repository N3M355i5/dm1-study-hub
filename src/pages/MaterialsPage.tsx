import { Link } from "react-router-dom";
import {
  categoryLabels,
  materials,
  materialViewerPath,
  type MaterialCategory,
} from "../data/materials";

const categoryOrder: MaterialCategory[] = [
  "lecture",
  "exercise",
  "reference",
  "exam",
  "supplementary",
];

export function MaterialsPage() {
  return (
    <div className="page materials-page">
      <header className="page-header">
        <p className="breadcrumb">
          <Link to="/">Home</Link> / Materials
        </p>
        <h1>Course Materials</h1>
        <p className="lead">
          All lecture slides, exercise sheets, formula sheet, and exam resources —
          read online without leaving the site.
        </p>
      </header>

      {categoryOrder.map((category) => {
        const items = materials.filter((m) => m.category === category);
        if (!items.length) return null;

        return (
          <section key={category} className="section">
            <h2>{categoryLabels[category]}</h2>
            <div className="material-grid">
              {items.map((m) => (
                <Link key={m.id} to={materialViewerPath(m.id)} className="material-card">
                  <div className="material-card-icon">PDF</div>
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                  <span className="material-card-cta">Read online →</span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
