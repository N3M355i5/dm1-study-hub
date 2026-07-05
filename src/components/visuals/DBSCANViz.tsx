import { useState } from "react";

type Pt = { id: string; x: number; y: number; type: "core" | "border" | "noise" };

const POINTS: Pt[] = [
  { id: "A", x: 1, y: 1, type: "core" },
  { id: "B", x: 1.5, y: 1.5, type: "core" },
  { id: "C", x: 5, y: 5, type: "core" },
  { id: "D", x: 3, y: 4, type: "border" },
  { id: "E", x: 4, y: 4, type: "core" },
  { id: "F", x: 3, y: 3.5, type: "core" },
];

const EPS = 1.5;
const MINPTS = 3;

function dist(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function DBSCANViz() {
  const [selected, setSelected] = useState<string | null>("D");
  const [eps, setEps] = useState(EPS);
  const [minPts, setMinPts] = useState(MINPTS);

  const neighborhoods = POINTS.map((p) =>
    POINTS.filter((q) => dist(p, q) <= eps)
  );

  const computedTypes = POINTS.map((p, i) => {
    const n = neighborhoods[i].length;
    if (n >= minPts) return "core";
    const nearCore = POINTS.some((q, j) =>
      neighborhoods[j].length >= minPts && dist(p, q) <= eps
    );
    return nearCore ? "border" : "noise";
  });

  const colors = { core: "#6366f1", border: "#f59e0b", noise: "#94a3b8" };
  const selIdx = POINTS.findIndex((p) => p.id === selected);
  const sx = (v: number) => 50 + v * 45;
  const sy = (v: number) => 220 - v * 35;

  return (
    <div className="viz-card interactive">
      <div className="viz-header">
        <h4>DBSCAN Explorer — Exercise 7</h4>
      </div>

      <div className="viz-sliders">
        <label>
          ε = {eps.toFixed(1)}
          <input type="range" min="0.5" max="3" step="0.1" value={eps} onChange={(e) => setEps(+e.target.value)} />
        </label>
        <label>
          minPts = {minPts}
          <input type="range" min="1" max="5" step="1" value={minPts} onChange={(e) => setMinPts(+e.target.value)} />
        </label>
      </div>

      <svg viewBox="0 0 400 240" className="viz-svg dbscan-svg">
        {POINTS.map((p, i) => (
          <g key={p.id}>
            {selected === p.id && (
              <circle cx={sx(p.x)} cy={sy(p.y)} r={eps * 45} fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="6" opacity="0.6" />
            )}
            <circle
              cx={sx(p.x)} cy={sy(p.y)} r={computedTypes[i] === "core" ? 12 : 9}
              fill={colors[computedTypes[i]]}
              className="data-point clickable"
              onClick={() => setSelected(p.id)}
            />
            <text x={sx(p.x)} y={sy(p.y) + 4} textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600">{p.id}</text>
          </g>
        ))}
      </svg>

      {selIdx >= 0 && (
        <div className="viz-info-panel">
          <strong>Point {selected}</strong>
          <span>Type: <em>{computedTypes[selIdx]}</em></span>
          <span>|N_ε| = {neighborhoods[selIdx].length} (need ≥ {minPts} for core)</span>
          <span>Neighbors: {neighborhoods[selIdx].map((p) => p.id).join(", ")}</span>
        </div>
      )}

      <div className="viz-legend-row">
        {(["core", "border", "noise"] as const).map((t) => (
          <span key={t}><i style={{ background: colors[t] }} /> {t}</span>
        ))}
      </div>
    </div>
  );
}
