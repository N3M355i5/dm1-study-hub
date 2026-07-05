export function DecisionTreeViz() {
  return (
    <div className="viz-card">
      <h4>Decision Tree — Vertebrate Example</h4>
      <p className="viz-hint">From Tan et al. Ch. 4 — classifying mammals vs non-mammals.</p>
      <svg viewBox="0 0 520 340" className="tree-svg" aria-label="Decision tree diagram">
        {/* Root */}
        <rect x="200" y="10" width="120" height="36" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
        <text x="260" y="33" textAnchor="middle" fill="#0c4a6e" fontSize="12" fontWeight="600">Body Temp?</text>

        {/* Level 1 edges & nodes */}
        <line x1="260" y1="46" x2="130" y2="80" stroke="#64748b" strokeWidth="2" />
        <line x1="260" y1="46" x2="390" y2="80" stroke="#64748b" strokeWidth="2" />
        <text x="175" y="68" fill="#64748b" fontSize="10">warm</text>
        <text x="330" y="68" fill="#64748b" fontSize="10">cold</text>

        <rect x="70" y="80" width="120" height="36" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
        <text x="130" y="103" textAnchor="middle" fill="#0c4a6e" fontSize="11" fontWeight="600">Gives Birth?</text>

        <rect x="350" y="80" width="80" height="36" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="390" y="103" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="600">Non-mammal</text>

        {/* Level 2 warm branch */}
        <line x1="130" y1="116" x2="60" y2="160" stroke="#64748b" strokeWidth="2" />
        <line x1="130" y1="116" x2="200" y2="160" stroke="#64748b" strokeWidth="2" />
        <text x="80" y="142" fill="#64748b" fontSize="10">yes</text>
        <text x="175" y="142" fill="#64748b" fontSize="10">no</text>

        <rect x="10" y="160" width="100" height="36" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="60" y="183" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="600">Mammal ✓</text>

        <rect x="150" y="160" width="100" height="36" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
        <text x="200" y="183" textAnchor="middle" fill="#0c4a6e" fontSize="11" fontWeight="600">Has Legs?</text>

        {/* Level 3 */}
        <line x1="200" y1="196" x2="150" y2="240" stroke="#64748b" strokeWidth="2" />
        <line x1="200" y1="196" x2="250" y2="240" stroke="#64748b" strokeWidth="2" />

        <rect x="100" y="240" width="100" height="36" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="150" y="263" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="600">Mammal ✓</text>

        <rect x="200" y="240" width="100" height="36" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="250" y="263" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="600">Non-mammal</text>

        {/* Impurity legend */}
        <rect x="340" y="160" width="160" height="160" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
        <text x="420" y="185" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="600">Split Criteria</text>
        <text x="355" y="210" fill="#475569" fontSize="10">• Gini = 1 − Σp(y)²</text>
        <text x="355" y="230" fill="#475569" fontSize="10">• Entropy = −Σp(y)log p(y)</text>
        <text x="355" y="250" fill="#475569" fontSize="10">• Pick max Info Gain</text>
        <text x="355" y="280" fill="#64748b" fontSize="10">Pure node → Gini=0</text>
        <text x="355" y="300" fill="#64748b" fontSize="10">Entropy=0</text>
      </svg>
    </div>
  );
}
