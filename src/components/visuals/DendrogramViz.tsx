export function DendrogramViz() {
  return (
    <div className="viz-card">
      <h4>Hierarchical Clustering — Dendrogram</h4>
      <p className="viz-hint">Horizontal cut at height h determines the number of clusters.</p>
      <svg viewBox="0 0 480 280" className="dendro-svg" aria-label="Dendrogram">
        {/* Points */}
        {["A", "B", "C", "D", "E", "F"].map((label, i) => (
          <text key={label} x={60 + i * 70} y="265" textAnchor="middle" fill="#334155" fontSize="13" fontWeight="600">
            {label}
          </text>
        ))}

        {/* Vertical lines to leaves */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i} x1={60 + i * 70} y1="240" x2={60 + i * 70} y2="220" stroke="#64748b" strokeWidth="2" />
        ))}

        {/* Merge A-B at height 20 */}
        <line x1="60" y1="220" x2="130" y2="220" stroke="#64748b" strokeWidth="2" />
        <line x1="95" y1="220" x2="95" y2="180" stroke="#64748b" strokeWidth="2" />
        <text x="95" y="175" textAnchor="middle" fill="#94a3b8" fontSize="9">0.3</text>

        {/* Merge C-D at height 25 */}
        <line x1="200" y1="220" x2="270" y2="220" stroke="#64748b" strokeWidth="2" />
        <line x1="235" y1="220" x2="235" y2="170" stroke="#64748b" strokeWidth="2" />
        <text x="235" y="165" textAnchor="middle" fill="#94a3b8" fontSize="9">0.5</text>

        {/* E-F separate */}
        <line x1="340" y1="220" x2="410" y2="220" stroke="#64748b" strokeWidth="2" />
        <line x1="375" y1="220" x2="375" y2="190" stroke="#64748b" strokeWidth="2" />
        <text x="375" y="185" textAnchor="middle" fill="#94a3b8" fontSize="9">0.4</text>

        {/* Merge AB with CD */}
        <line x1="95" y1="180" x2="235" y2="180" stroke="#64748b" strokeWidth="2" />
        <line x1="165" y1="180" x2="165" y2="120" stroke="#64748b" strokeWidth="2" />
        <text x="165" y="115" textAnchor="middle" fill="#94a3b8" fontSize="9">1.2</text>

        {/* Merge with EF */}
        <line x1="165" y1="120" x2="375" y2="190" stroke="#64748b" strokeWidth="2" />
        <line x1="270" y1="120" x2="270" y2="60" stroke="#64748b" strokeWidth="2" />
        <text x="270" y="55" textAnchor="middle" fill="#94a3b8" fontSize="9">2.8</text>

        {/* Cut lines */}
        <line x1="20" y1="150" x2="460" y2="150" stroke="#ef4444" strokeWidth="2" strokeDasharray="8" />
        <text x="450" y="145" fill="#ef4444" fontSize="11" fontWeight="600">cut → 3 clusters</text>

        <line x1="20" y1="100" x2="460" y2="100" stroke="#f59e0b" strokeWidth="2" strokeDasharray="8" />
        <text x="450" y="95" fill="#f59e0b" fontSize="11" fontWeight="600">cut → 2 clusters</text>

        {/* Linkage legend */}
        <rect x="10" y="10" width="150" height="70" rx="6" fill="#f8fafc" stroke="#e2e8f0" />
        <text x="85" y="28" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="600">Linkage</text>
        <text x="20" y="48" fill="#475569" fontSize="9">MIN = single link</text>
        <text x="20" y="62" fill="#475569" fontSize="9">MAX = complete link</text>
        <text x="20" y="76" fill="#475569" fontSize="9">Ward = min SSE increase</text>
      </svg>
    </div>
  );
}
