export function ClassificationPhasesViz() {
  return (
    <div className="viz-card">
      <h4>Two Phases of Classification</h4>
      <svg viewBox="0 0 520 160" className="phases-svg">
        {/* Learning phase */}
        <rect x="10" y="20" width="220" height="120" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
        <text x="120" y="45" textAnchor="middle" fill="#1d4ed8" fontSize="14" fontWeight="700">Learning Phase</text>
        <text x="120" y="68" textAnchor="middle" fill="#475569" fontSize="11">Training set D (labeled)</text>
        <text x="120" y="88" textAnchor="middle" fill="#475569" fontSize="11">↓ Classification Algorithm</text>
        <text x="120" y="108" textAnchor="middle" fill="#475569" fontSize="11">↓</text>
        <rect x="60" y="115" width="120" height="22" rx="4" fill="#3b82f6" />
        <text x="120" y="130" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600">Classifier ξ</text>

        {/* Arrow */}
        <line x1="240" y1="80" x2="280" y2="80" stroke="#64748b" strokeWidth="2" />
        <polygon points="280,80 272,76 272,84" fill="#64748b" />

        {/* Querying phase */}
        <rect x="290" y="20" width="220" height="120" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
        <text x="400" y="45" textAnchor="middle" fill="#15803d" fontSize="14" fontWeight="700">Querying Phase</text>
        <text x="400" y="68" textAnchor="middle" fill="#475569" fontSize="11">New instance x (unlabeled)</text>
        <text x="400" y="88" textAnchor="middle" fill="#475569" fontSize="11">↓ Classifier ξ (oracle)</text>
        <text x="400" y="108" textAnchor="middle" fill="#475569" fontSize="11">↓</text>
        <rect x="350" y="115" width="100" height="22" rx="4" fill="#22c55e" />
        <text x="400" y="130" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600">Class label</text>
      </svg>
    </div>
  );
}
