import { useState } from "react";

type Props = {
  tp: number;
  fp: number;
  fn: number;
  tn: number;
};

export function ConfusionMatrixViz({ tp: initTp, fp: initFp, fn: initFn, tn: initTn }: Props) {
  const [tp, setTp] = useState(initTp);
  const [fp, setFp] = useState(initFp);
  const [fn, setFn] = useState(initFn);
  const [tn, setTn] = useState(initTn);

  const total = tp + fp + fn + tn;
  const accuracy = total ? ((tp + tn) / total).toFixed(3) : "—";
  const precision = tp + fp ? (tp / (tp + fp)).toFixed(3) : "—";
  const recall = tp + fn ? (tp / (tp + fn)).toFixed(3) : "—";
  const f1 =
    precision !== "—" && recall !== "—" && +precision + +recall > 0
      ? ((2 * +precision * +recall) / (+precision + +recall)).toFixed(3)
      : "—";

  const cells = [
    { label: "TP", value: tp, setter: setTp, cls: "cm-tp" },
    { label: "FN", value: fn, setter: setFn, cls: "cm-fn" },
    { label: "FP", value: fp, setter: setFp, cls: "cm-fp" },
    { label: "TN", value: tn, setter: setTn, cls: "cm-tn" },
  ];

  return (
    <div className="viz-card">
      <h4>Interactive Confusion Matrix</h4>
      <p className="viz-hint">Adjust values to see metrics update in real time.</p>

      <div className="cm-grid">
        <div className="cm-corner" />
        <div className="cm-header">Predicted POS</div>
        <div className="cm-header">Predicted NEG</div>
        <div className="cm-header row">Actual POS</div>
        {cells.slice(0, 2).map((c) => (
          <div key={c.label} className={`cm-cell ${c.cls}`}>
            <span className="cm-label">{c.label}</span>
            <input
              type="number"
              min={0}
              value={c.value}
              onChange={(e) => c.setter(Math.max(0, +e.target.value || 0))}
            />
          </div>
        ))}
        <div className="cm-header row">Actual NEG</div>
        {cells.slice(2).map((c) => (
          <div key={c.label} className={`cm-cell ${c.cls}`}>
            <span className="cm-label">{c.label}</span>
            <input
              type="number"
              min={0}
              value={c.value}
              onChange={(e) => c.setter(Math.max(0, +e.target.value || 0))}
            />
          </div>
        ))}
      </div>

      <div className="metrics-row">
        <div className="metric"><span>Accuracy</span><strong>{accuracy}</strong></div>
        <div className="metric"><span>Precision</span><strong>{precision}</strong></div>
        <div className="metric"><span>Recall</span><strong>{recall}</strong></div>
        <div className="metric"><span>F₁</span><strong>{f1}</strong></div>
      </div>

      <svg viewBox="0 0 400 120" className="cm-diagram" aria-hidden>
        <rect x="10" y="10" width="180" height="100" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="100" y="45" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="600">True POS (TP+TN)</text>
        <text x="100" y="70" textAnchor="middle" fill="#166534" fontSize="22">{tp + tn}</text>
        <rect x="210" y="10" width="180" height="100" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="300" y="45" textAnchor="middle" fill="#991b1b" fontSize="14" fontWeight="600">Errors (FP+FN)</text>
        <text x="300" y="70" textAnchor="middle" fill="#991b1b" fontSize="22">{fp + fn}</text>
      </svg>
    </div>
  );
}
