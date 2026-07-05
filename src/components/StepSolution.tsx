import { useState } from "react";
import { Formula } from "./Formula";

type Step = {
  title: string;
  body: string;
  latex?: string;
  highlight?: string;
};

export function StepSolution({ steps }: { steps: Step[] }) {
  const [revealed, setRevealed] = useState(0);
  const allShown = revealed >= steps.length;

  return (
    <div className="step-solution">
      <div className="step-progress">
        <div className="step-progress-bar"><div style={{ width: `${(revealed / steps.length) * 100}%`, height: "100%", background: "linear-gradient(90deg, #6366f1, #2dd4bf)", borderRadius: 2 }} /></div>
        <span>{revealed}/{steps.length} steps</span>
      </div>

      <ol className="step-list">
        {steps.slice(0, revealed).map((step, i) => (
          <li key={i} className="step-item visible">
            <div className="step-num">{i + 1}</div>
            <div className="step-body">
              <h4>{step.title}</h4>
              <div className="step-text">{formatBody(step.body)}</div>
              {step.latex && <Formula latex={step.latex} />}
              {step.highlight && <div className="step-highlight">{step.highlight}</div>}
            </div>
          </li>
        ))}
      </ol>

      <div className="step-actions">
        {!allShown && (
          <button type="button" className="btn primary" onClick={() => setRevealed((r) => r + 1)}>
            Show step {revealed + 1}
          </button>
        )}
        {revealed > 0 && (
          <button type="button" className="btn ghost" onClick={() => setRevealed(0)}>
            Reset
          </button>
        )}
        {!allShown && revealed === 0 && (
          <button type="button" className="btn ghost" onClick={() => setRevealed(steps.length)}>
            Show all steps
          </button>
        )}
      </div>
    </div>
  );
}

function formatBody(body: string) {
  if (body.includes("|") && body.includes("---")) {
    const lines = body.trim().split("\n");
    const rows = lines.filter((l) => l.startsWith("|"));
    if (rows.length >= 2) {
      return (
        <div className="md-table-wrap">
          <table className="md-table">
            <thead>
              <tr>
                {rows[0].split("|").filter(Boolean).map((c, i) => (
                  <th key={i}>{c.trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(2).map((row, ri) => (
                <tr key={ri}>
                  {row.split("|").filter(Boolean).map((c, ci) => (
                    <td key={ci}>{c.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
  return body.split("\n").map((line, i) => (
    <p key={i}>{line}</p>
  ));
}
