export function NaiveBayesViz() {
  return (
    <div className="viz-card">
      <h4>Naive Bayes — Probability Tables</h4>
      <p className="viz-hint">Patient response example: P(yes)=5/15, P(no)=10/15</p>
      <div className="nb-grid">
        <div className="nb-table">
          <h5>P(I2 | Response)</h5>
          <table>
            <thead><tr><th>I2</th><th>yes</th><th>no</th></tr></thead>
            <tbody>
              <tr><td>f</td><td className="yes">5</td><td>2</td></tr>
              <tr><td>m</td><td>0</td><td className="no">8</td></tr>
            </tbody>
          </table>
        </div>
        <div className="nb-table">
          <h5>P(I26 | Response)</h5>
          <table>
            <thead><tr><th>I26</th><th>yes</th><th>no</th></tr></thead>
            <tbody>
              <tr><td>yes</td><td className="yes">2</td><td>2</td></tr>
              <tr><td>no</td><td className="yes">3</td><td className="no">8</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="nb-flow">
        <div className="nb-step">P(yes|x) ∝ P(yes) × P(f|yes) × P(VH|yes) × … × P(no|yes)</div>
        <div className="nb-step">P(no|x) ∝ P(no) × P(f|no) × P(VH|no) × … × P(no|no)</div>
        <div className="nb-result">→ Assign class with higher probability</div>
      </div>
    </div>
  );
}
