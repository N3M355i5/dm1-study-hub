import { useState, useMemo, useCallback, type PointerEvent } from "react";

type Point = { id: string; x: number; y: number; cx?: number; cy?: number };

const INITIAL: Point[] = [
  { id: "p1", x: 1, y: 1 }, { id: "p2", x: 2, y: 2 }, { id: "p3", x: 3, y: 1.5 },
  { id: "p4", x: 3, y: 2.5 }, { id: "p5", x: 2, y: 8 }, { id: "p6", x: 2, y: 6 },
  { id: "p7", x: 2.5, y: 7 }, { id: "p8", x: 4, y: 7 }, { id: "p9", x: 6, y: 2 },
  { id: "p10", x: 7, y: 3 }, { id: "p11", x: 6.5, y: 1 },
];

const COLORS = ["#6366f1", "#14b8a6"];

function dist(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function KMeansViz() {
  const [points] = useState(INITIAL);
  const [centroids, setCentroids] = useState([
    { x: 7, y: 3, color: COLORS[0] },
    { x: 6.5, y: 1, color: COLORS[1] },
  ]);
  const [step, setStep] = useState(0);
  const [dragging, setDragging] = useState<number | null>(null);

  const assignments = useMemo(() =>
    points.map((p) => {
      let best = 0;
      let bestD = Infinity;
      centroids.forEach((c, i) => {
        const d = dist(p, c);
        if (d < bestD) { bestD = d; best = i; }
      });
      return best;
    }), [points, centroids]);

  const sse = useMemo(() =>
    points.reduce((sum, p, i) => sum + dist(p, centroids[assignments[i]]) ** 2, 0),
    [points, centroids, assignments]);

  const runStep = () => {
    const next = centroids.map((c, i) => {
      const cluster = points.filter((_, j) => assignments[j] === i);
      if (!cluster.length) return c;
      return {
        ...c,
        x: cluster.reduce((s, p) => s + p.x, 0) / cluster.length,
        y: cluster.reduce((s, p) => s + p.y, 0) / cluster.length,
      };
    });
    setCentroids(next);
    setStep((s) => s + 1);
  };

  const reset = () => {
    setCentroids([
      { x: 7, y: 3, color: COLORS[0] },
      { x: 6.5, y: 1, color: COLORS[1] },
    ]);
    setStep(0);
  };

  const sx = (v: number) => 40 + v * 38;
  const sy = (v: number) => 260 - v * 28;

  const onCentroidPointerDown = useCallback((idx: number, e: PointerEvent<SVGCircleElement>) => {
    e.preventDefault();
    const handle = e.currentTarget;
    handle.setPointerCapture(e.pointerId);
    setDragging(idx);
    const svg = handle.ownerSVGElement;
    if (!svg) return;

    const updateFromClient = (clientX: number, clientY: number) => {
      const pt = svg.createSVGPoint();
      pt.x = clientX;
      pt.y = clientY;
      const ctm = svg.getScreenCTM();
      if (!ctm) return;
      const p = pt.matrixTransform(ctm.inverse());
      setCentroids((prev) => prev.map((c, i) =>
        i === idx
          ? {
              ...c,
              x: Math.max(0.5, Math.min(8, (p.x - 40) / 38)),
              y: Math.max(0.5, Math.min(9, (260 - p.y) / 28)),
            }
          : c
      ));
    };

    const onMove = (ev: globalThis.PointerEvent) => updateFromClient(ev.clientX, ev.clientY);
    const onUp = (ev: globalThis.PointerEvent) => {
      setDragging(null);
      handle.releasePointerCapture(ev.pointerId);
      handle.removeEventListener("pointermove", onMove);
      handle.removeEventListener("pointerup", onUp);
      handle.removeEventListener("pointercancel", onUp);
    };

    handle.addEventListener("pointermove", onMove);
    handle.addEventListener("pointerup", onUp);
    handle.addEventListener("pointercancel", onUp);
  }, []);

  return (
    <div className="viz-card interactive">
      <div className="viz-header">
        <h4>K-Means Lab — Exercise 6 dataset</h4>
        <div className="viz-stats">
          <span>Step <strong>{step}</strong></span>
          <span>SSE <strong>{sse.toFixed(2)}</strong></span>
        </div>
      </div>
      <p className="viz-hint">Drag or touch centroids (rings) · Tap &quot;Assign &amp; Update&quot; to run one iteration</p>

      <svg viewBox="0 0 360 280" className="viz-svg kmeans-svg">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <line key={`gx${i}`} x1={sx(i)} y1={20} x2={sx(i)} y2={260} className="grid-line" />
        ))}
        {points.map((p, i) => (
          <g key={p.id}>
            <line
              x1={sx(p.x)} y1={sy(p.y)}
              x2={sx(centroids[assignments[i]].x)} y2={sy(centroids[assignments[i]].y)}
              stroke={centroids[assignments[i]].color}
              strokeWidth="1.5" strokeDasharray="4" opacity="0.35"
            />
            <circle cx={sx(p.x)} cy={sy(p.y)} r="7" fill={centroids[assignments[i]].color} className="data-point" />
            <text x={sx(p.x)} y={sy(p.y) - 10} textAnchor="middle" className="point-label">{p.id}</text>
          </g>
        ))}
        {centroids.map((c, i) => (
          <g key={i}>
            <circle
              cx={sx(c.x)} cy={sy(c.y)} r="18"
              fill="transparent"
              className="centroid-hit"
              onPointerDown={(e) => onCentroidPointerDown(i, e)}
            />
            <circle
              cx={sx(c.x)} cy={sy(c.y)} r="14"
              fill="none" stroke={c.color} strokeWidth="3"
              className="centroid-handle"
              style={{ cursor: dragging === i ? "grabbing" : "grab", pointerEvents: "none" }}
            />
            <text x={sx(c.x)} y={sy(c.y) + 4} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">C{i + 1}</text>
          </g>
        ))}
      </svg>

      <div className="cluster-legend">
        {centroids.map((c, i) => (
          <span key={i} style={{ color: c.color }}>
            C{i + 1}: ({c.x.toFixed(2)}, {c.y.toFixed(2)}) · {points.filter((_, j) => assignments[j] === i).length} pts
          </span>
        ))}
      </div>

      <div className="viz-controls">
        <button type="button" className="btn primary" onClick={runStep}>Assign &amp; Update</button>
        <button type="button" className="btn ghost" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
