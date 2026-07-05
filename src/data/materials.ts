export type MaterialCategory = "lecture" | "exercise" | "reference" | "exam" | "supplementary";

export type Material = {
  id: string;
  title: string;
  description: string;
  category: MaterialCategory;
  file: string;
  moduleIds?: string[];
  exerciseIds?: number[];
};

export const categoryLabels: Record<MaterialCategory, string> = {
  lecture: "Lecture slides",
  exercise: "Exercise sheets",
  reference: "Reference & handouts",
  exam: "Exam preparation",
  supplementary: "Supplementary sheets",
};

export const materials: Material[] = [
  {
    id: "course-admin",
    title: "Course Administration",
    description: "Official course info, schedule, and organizational details.",
    category: "reference",
    file: "/pdfs/course-admin.pdf",
    moduleIds: ["intro"],
  },
  {
    id: "lecture-merged",
    title: "DM I — Merged Lecture Slides",
    description: "Complete merged lecture deck covering the full course.",
    category: "reference",
    file: "/pdfs/lecture-merged.pdf",
    moduleIds: ["intro", "exam-prep"],
  },
  {
    id: "formelblatt",
    title: "Formelblatt (Formula Sheet)",
    description: "Official formula sheet for the exam.",
    category: "exam",
    file: "/pdfs/formelblatt.pdf",
    moduleIds: ["exam-prep"],
  },
  {
    id: "classification-underpinnings",
    title: "Classification — Underpinnings",
    description: "Learning vs querying phase, train/test split, representative data.",
    category: "lecture",
    file: "/pdfs/classification-underpinnings.pdf",
    moduleIds: ["classification-underpinnings", "multi-label"],
  },
  {
    id: "classification-decision-trees",
    title: "Classification — Decision Trees",
    description: "ID3, entropy, information gain, tree building and pruning.",
    category: "lecture",
    file: "/pdfs/classification-decision-trees.pdf",
    moduleIds: ["decision-trees"],
  },
  {
    id: "classification-naive-bayes",
    title: "Classification — Naive Bayes",
    description: "Bayes theorem, conditional independence, Laplace smoothing.",
    category: "lecture",
    file: "/pdfs/classification-naive-bayes.pdf",
    moduleIds: ["naive-bayes"],
  },
  {
    id: "evaluation-basics",
    title: "Model Evaluation — Basics",
    description: "Confusion matrix, accuracy, precision, recall, F1, ROC.",
    category: "lecture",
    file: "/pdfs/evaluation-basics.pdf",
    moduleIds: ["evaluation-basics"],
  },
  {
    id: "evaluation-best-model",
    title: "Model Evaluation — Best Model",
    description: "Model comparison, McNemar test, statistical significance.",
    category: "lecture",
    file: "/pdfs/evaluation-best-model.pdf",
    moduleIds: ["evaluation-best-model"],
  },
  {
    id: "clustering-lectures",
    title: "Clustering — Full Unit",
    description: "K-Means, similarity, hierarchical clustering, DBSCAN, and cluster evaluation.",
    category: "lecture",
    file: "/pdfs/clustering-lectures.pdf",
    moduleIds: ["k-means", "similarity-distance", "hierarchical-clustering", "dbscan", "cluster-evaluation"],
  },
  {
    id: "clustering-silhouette",
    title: "Clustering — Silhouette",
    description: "Silhouette coefficient and cluster quality measurement.",
    category: "lecture",
    file: "/pdfs/clustering-silhouette.pdf",
    moduleIds: ["cluster-evaluation", "feature-selection"],
  },
  {
    id: "dataeng-correlations",
    title: "Feature Selection — Correlations",
    description: "Correlation measures and feature relevance.",
    category: "lecture",
    file: "/pdfs/dataeng-correlations.pdf",
    moduleIds: ["feature-correlations"],
  },
  {
    id: "dataeng-feature-selection",
    title: "Feature Selection — Building Subspaces",
    description: "Filter, wrapper, and embedded methods for feature selection.",
    category: "lecture",
    file: "/pdfs/dataeng-feature-selection.pdf",
    moduleIds: ["feature-selection"],
  },
  {
    id: "dataeng-handout",
    title: "Data Engineering — Feature Selection Handout",
    description: "Handout on missingness, preparation, and feature selection (M, P, FS).",
    category: "lecture",
    file: "/pdfs/dataeng-handout.pdf",
    moduleIds: ["data-missingness", "data-preparation", "feature-selection"],
  },
  {
    id: "correlation-examples",
    title: "Examples on Correlation Measures",
    description: "Worked examples for correlation-based feature analysis.",
    category: "supplementary",
    file: "/pdfs/correlation-examples.pdf",
    moduleIds: ["feature-correlations"],
  },
  {
    id: "exercises-1-7-merged",
    title: "Exercises 1–7 (Merged)",
    description: "Combined PDF of exercise sheets 1 through 7.",
    category: "exercise",
    file: "/pdfs/exercises-1-7-merged.pdf",
    exerciseIds: [1, 2, 3, 4, 5, 6, 7],
  },
  ...([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const).map((n) => ({
    id: `exercise-${String(n).padStart(2, "0")}`,
    title: `Exercise ${n}`,
    description: `Official exercise sheet ${n} with questions.`,
    category: "exercise" as const,
    file: `/pdfs/exercise-${String(n).padStart(2, "0")}.pdf`,
    exerciseIds: [n],
    moduleIds: undefined as string[] | undefined,
  })),
  {
    id: "additional-e6",
    title: "E6 Additional Worksheet",
    description: "Extra K-Means practice problems.",
    category: "supplementary",
    file: "/pdfs/additional-e6.pdf",
    exerciseIds: [61],
    moduleIds: ["k-means"],
  },
  {
    id: "additional-e7",
    title: "E7 Additional Datasets",
    description: "Additional datasets for clustering exercises.",
    category: "supplementary",
    file: "/pdfs/additional-e7.pdf",
    exerciseIds: [71],
    moduleIds: ["dbscan"],
  },
  {
    id: "additional-e8",
    title: "E8 Additional Questions",
    description: "Extra hierarchical clustering questions.",
    category: "supplementary",
    file: "/pdfs/additional-e8.pdf",
    exerciseIds: [81],
    moduleIds: ["hierarchical-clustering"],
  },
  {
    id: "additional-e9",
    title: "E9 Additional Questions",
    description: "Extra cluster evaluation questions with solutions.",
    category: "supplementary",
    file: "/pdfs/additional-e9.pdf",
    exerciseIds: [91],
    moduleIds: ["cluster-evaluation"],
  },
  {
    id: "additional-e10",
    title: "E10 Additional Questions",
    description: "Extra feature selection practice.",
    category: "supplementary",
    file: "/pdfs/additional-e10.pdf",
    moduleIds: ["feature-selection"],
  },
  {
    id: "example-exam",
    title: "Example Exam",
    description: "Past example exam for practice.",
    category: "exam",
    file: "/pdfs/example-exam.pdf",
    moduleIds: ["exam-prep"],
  },
  {
    id: "sheet-dbscan",
    title: "Exercise Sheet — DBSCAN (SoSe 24)",
    description: "DBSCAN-focused exercise sheet.",
    category: "supplementary",
    file: "/pdfs/sheet-dbscan.pdf",
    moduleIds: ["dbscan"],
    exerciseIds: [7],
  },
  {
    id: "sheet-hac",
    title: "Exercise Sheet — HAC (SoSe 24)",
    description: "Hierarchical agglomerative clustering exercise sheet.",
    category: "supplementary",
    file: "/pdfs/sheet-hac.pdf",
    moduleIds: ["hierarchical-clustering"],
    exerciseIds: [8],
  },
  {
    id: "sheet-cluster-eval",
    title: "Exercise Sheet — Cluster Evaluation (SoSe 24)",
    description: "Purity, Rand index, and cluster evaluation exercises.",
    category: "supplementary",
    file: "/pdfs/sheet-cluster-eval.pdf",
    moduleIds: ["cluster-evaluation"],
    exerciseIds: [9],
  },
  {
    id: "sheet-feature-selection",
    title: "Exercise Sheet — Feature Selection (SoSe 24)",
    description: "Feature selection methods and wrapper approaches.",
    category: "supplementary",
    file: "/pdfs/sheet-feature-selection.pdf",
    moduleIds: ["feature-selection"],
    exerciseIds: [10],
  },
];

export function getMaterial(id: string): Material | undefined {
  return materials.find((m) => m.id === id);
}

export function getMaterialsByModule(moduleId: string): Material[] {
  return materials.filter((m) => m.moduleIds?.includes(moduleId));
}

export function getMaterialsByExercise(exerciseId: number): Material[] {
  return materials.filter((m) => m.exerciseIds?.includes(exerciseId));
}

export function getMaterialsByCategory(category: MaterialCategory): Material[] {
  return materials.filter((m) => m.category === category);
}

export function materialViewerPath(id: string): string {
  return `/materials/${id}`;
}
