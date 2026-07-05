export function SilhouetteViz() {
  return (
    <div className="viz-card">
      <h4>Silhouette Coefficient</h4>
      <p className="viz-hint">a(x) = cohesion within cluster, b(x) = separation to nearest other cluster.</p>
      <svg viewBox="0 0 460 220" className="silhouette-svg">
        {/* Cluster A */}
        <ellipse cx="100" cy="110" rx="70" ry="55" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
        <text x="100" y="30" textAnchor="middle" fill="#1d4ed8" fontSize="13" fontWeight="600">Cluster A</text>
        {[[80, 100], [100, 120], [120, 95], [90, 130]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="7" fill="#3b82f6" />
        ))}
        <circle cx="100" cy="110" r="10" fill="#1d4ed8" stroke="#fff" strokeWidth="2" />
        <text x="100" y="114" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">x</text>

        {/* Cluster B */}
        <ellipse cx="320" cy="110" rx="70" ry="55" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" opacity="0.6" />
        <text x="320" y="30" textAnchor="middle" fill="#be185d" fontSize="13" fontWeight="600">Cluster B</text>
        {[[300, 100], [320, 120], [340, 95], [310, 130]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="7" fill="#ec4899" />
        ))}

        {/* a(x) arrows within A */}
        <line x1="100" y1="110" x2="80" y2="100" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="100" y1="110" x2="120" y2="95" stroke="#16a34a" strokeWidth="2" />
        <text x="55" y="85" fill="#16a34a" fontSize="11" fontWeight="600">a(x)</text>

        {/* b(x) arrow to B */}
        <line x1="100" y1="110" x2="300" y2="100" stroke="#dc2626" strokeWidth="2" strokeDasharray="6" />
        <text x="200" y="85" fill="#dc2626" fontSize="11" fontWeight="600">b(x)</text>

        {/* Scale */}
        <rect x="150" y="175" width="160" height="30" rx="6" fill="#f8fafc" stroke="#e2e8f0" />
        <rect x="155" y="185" width="40" height="10" rx="2" fill="#dc2626" />
        <text x="175" y="168" textAnchor="middle" fill="#64748b" fontSize="9">−1</text>
        <rect x="200" y="185" width="40" height="10" rx="2" fill="#f59e0b" />
        <text x="220" y="168" textAnchor="middle" fill="#64748b" fontSize="9">0</text>
        <rect x="245" y="185" width="60" height="10" rx="2" fill="#16a34a" />
        <text x="305" y="168" textAnchor="middle" fill="#64748b" fontSize="9">+1</text>
        <text x="230" y="210" textAnchor="middle" fill="#334155" fontSize="10">s(x) ≈ +1 → well clustered</text>

        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="#16a34a" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
