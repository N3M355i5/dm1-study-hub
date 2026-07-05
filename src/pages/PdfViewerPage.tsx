import { Link } from "react-router-dom";
import { categoryLabels, getMaterial } from "../data/materials";

export function PdfViewerPage({ materialId }: { materialId: string }) {
  const material = getMaterial(materialId);

  if (!material) {
    return (
      <div className="page">
        <h1>PDF not found</h1>
        <Link to="/materials">← All materials</Link>
      </div>
    );
  }

  const pdfUrl = material.file;

  return (
    <div className="page pdf-viewer-page">
      <header className="pdf-viewer-header">
        <div>
          <p className="breadcrumb">
            <Link to="/materials">Materials</Link> / {material.title}
          </p>
          <h1>{material.title}</h1>
          <p className="pdf-viewer-meta">
            {categoryLabels[material.category]} · {material.description}
          </p>
        </div>
        <div className="pdf-viewer-actions">
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="btn primary">
            Open PDF
          </a>
          <a href={pdfUrl} download className="btn secondary">
            Download
          </a>
        </div>
      </header>

      <p className="pdf-viewer-hint">
        If the viewer does not load on your phone, tap <strong>Open PDF</strong> to read it in your browser.
      </p>

      <div className="pdf-frame-wrap">
        <object data={pdfUrl} type="application/pdf" className="pdf-object" aria-label={material.title}>
          <iframe
            src={pdfUrl}
            title={material.title}
            className="pdf-frame"
          />
        </object>
      </div>
    </div>
  );
}
