import type { ReactNode } from "react";
import { ConfusionMatrixViz } from "./visuals/ConfusionMatrixViz";
import { DecisionTreeViz } from "./visuals/DecisionTreeViz";
import { KMeansViz } from "./visuals/KMeansViz";
import { DendrogramViz } from "./visuals/DendrogramViz";
import { SilhouetteViz } from "./visuals/SilhouetteViz";
import { DBSCANViz } from "./visuals/DBSCANViz";
import { ClassificationPhasesViz } from "./visuals/ClassificationPhasesViz";
import { NaiveBayesViz } from "./visuals/NaiveBayesViz";

const MAP: Record<string, ReactNode> = {
  "confusion-matrix": <ConfusionMatrixViz tp={3} fp={1} fn={2} tn={4} />,
  "decision-tree": <DecisionTreeViz />,
  "k-means": <KMeansViz />,
  dendrogram: <DendrogramViz />,
  silhouette: <SilhouetteViz />,
  dbscan: <DBSCANViz />,
  "classification-phases": <ClassificationPhasesViz />,
  "naive-bayes": <NaiveBayesViz />,
};

export function VisualPanel({ visualId }: { visualId?: string }) {
  if (!visualId || !MAP[visualId]) return null;
  return <div className="visual-panel">{MAP[visualId]}</div>;
}
