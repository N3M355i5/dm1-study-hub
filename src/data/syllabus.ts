export type YouTubeResource = {
  title: string;
  url: string;
  channel: string;
  duration?: string;
};

export type Formula = {
  label: string;
  latex: string;
};

export type Module = {
  id: string;
  title: string;
  block: string;
  order: number;
  summary: string;
  concepts: string[];
  formulas?: Formula[];
  examTips: string[];
  exerciseRefs?: string[];
  youtube: YouTubeResource[];
  visual?: string;
  bookRef?: string;
};

export const blocks = [
  { id: "intro", name: "Introduction", color: "#6366f1" },
  { id: "classification", name: "Classification", color: "#0ea5e9" },
  { id: "evaluation", name: "Model Evaluation", color: "#10b981" },
  { id: "clustering", name: "Clustering", color: "#f59e0b" },
  { id: "data", name: "Data Engineering", color: "#ec4899" },
  { id: "exam", name: "Exam Prep", color: "#ef4444" },
] as const;

export const modules: Module[] = [
  {
    id: "intro",
    title: "Introduction to Data Mining",
    block: "intro",
    order: 1,
    summary:
      "Data mining derives models from data — and covers how to ask answerable questions, evaluate models, and prepare data. The course goal is knowledge extraction: answers like the best patient treatment, machine failure timing, or customer segments for recommenders.",
    concepts: [
      "Definition: methods that derive models from data + question formulation + evaluation + data preparation",
      "DM as a process extracting knowledge — answers to real questions (treatment, failure prediction, recommender groups)",
      "Learning forms: supervised first (classification), unsupervised (clustering), then in-between forms",
      "Blocks: Classification · Clustering · Evaluation · Data Engineering",
      "Classification block includes multi-label learning; Data block covers missingness (M), preparation (P), feature selection (FS)",
      "Exam prerequisite: ≥70% Votierung tasks OR 35 votes total",
      "Lecture: G22A/H2, Thu 11:00 · Prof. Myra Spiliopoulou · Exercises: Christian Beyer",
    ],
    examTips: [
      "Know the course structure — exam questions often map directly to lecture blocks",
      "Understand WHY data mining is used (diagnosis, personalization) — not just algorithms",
      "Familiarize yourself with the patient-response running example used throughout lectures",
    ],
    youtube: [
      {
        title: "What is Data Mining?",
        url: "https://www.youtube.com/watch?v=ED4LeeE7hkw",
        channel: "Simplilearn",
      },
      {
        title: "Introduction to Data Mining — Full Course",
        url: "https://www.youtube.com/watch?v=HssE0G2_3X0",
        channel: "GeeksforGeeks",
      },
      {
        title: "CRISP-DM Data Mining Process",
        url: "https://www.youtube.com/watch?v=8Km0TAK2JpY",
        channel: "StatQuest",
      },
    ],
    bookRef: "Book M (Tan et al.) Ch. 2–3 · Book D (Garcia et al.) for Data block",
  },
  {
    id: "multi-label",
    title: "Multi-Label Classification",
    block: "classification",
    order: 5,
    summary:
      "Multi-label learning assigns each instance to a subset of labels (not just one class). Covered in Block Classification with dedicated evaluation procedures.",
    concepts: [
      "Single-label: each instance ∈ exactly one class. Multi-label: instance can have multiple labels simultaneously",
      "Example: document tagged with several topics, image with multiple objects",
      "Evaluation differs from standard confusion matrix — label-based metrics (Hamming loss, subset accuracy, F1 per label)",
      "Transformation approaches: binary relevance, classifier chains, label powerset",
      "Connects to Block Evaluation for comparing multi-label models",
    ],
    examTips: [
      "Know the difference between multi-class (one of many) and multi-label (many of many)",
      "Understand why standard accuracy is insufficient for multi-label",
    ],
    youtube: [
      {
        title: "Multi-Label Classification",
        url: "https://www.youtube.com/watch?v=5qTj8N7y1yE",
        channel: "StatQuest",
      },
    ],
    bookRef: "Book M, parts of Ch. 4–6",
  },
  {
    id: "classification-underpinnings",
    title: "Classification — Underpinnings",
    block: "classification",
    order: 2,
    summary:
      "Classification builds a model (classifier ξ) from labeled training data, then uses it as an oracle to assign classes to new instances.",
    concepts: [
      "Learning phase: input classes C = {C₁,…,Cₖ}, training set D = ∪Dᵢ must be representative of population",
      "Querying phase: classifier assigns each new instance x ∈ D to a class",
      "Train/test split: D_train for model induction, D_test for model deduction & evaluation",
      "Example datasets: Vertebrate (mammal yes/no), Golf (play yes/no), Patient responses",
      "After building classifiers → evaluate quality → compare models to find the best",
    ],
    examTips: [
      "Be able to explain the two phases with the vertebrate or golf dataset",
      "Know the difference between induction (learning) and deduction (applying)",
      "Exercise 1–2 typically cover classification basics and manual tree building",
    ],
    exerciseRefs: ["Exercise 1", "Exercise 2"],
    youtube: [
      {
        title: "Classification in Machine Learning",
        url: "https://www.youtube.com/watch?v=0v93qSNcL_g",
        channel: "StatQuest",
      },
      {
        title: "Train, Test, & Validation Sets",
        url: "https://www.youtube.com/watch?v=fSytzGwwBmw",
        channel: "StatQuest",
      },
      {
        title: "Machine Learning Fundamentals",
        url: "https://www.youtube.com/watch?v=ukzFI9rgwfU",
        channel: "StatQuest",
      },
    ],
    visual: "classification-phases",
    bookRef: "Tan et al. Ch. 3–4",
  },
  {
    id: "decision-trees",
    title: "Decision Trees",
    block: "classification",
    order: 3,
    summary:
      "Decision trees recursively split data using attribute tests. Learn Hunt's algorithm, impurity measures, and the difference between bushy (ID3) and binary (C4.5) trees.",
    concepts: [
      "Hunt's algorithm: if all instances in node v have same label → leaf; else split(v) and recurse",
      "Impurity measures: Misclassification Rate, Gini index, Entropy",
      "Information Gain: Δ(v,a) = I(v) − Σ (|u|/|v|)·I(u) — pick attribute with max gain",
      "Multi-split (bushy): one child per attribute value — used in ID3",
      "Binary split: one child for value z, one for 'not z' — used in C4.5/CART",
      "Continuous attributes: discretize via threshold search (greedy or supervised binning)",
      "ID3 uses entropy & information gain; stops when pure or no attributes left",
    ],
    formulas: [
      { label: "Misclassification Rate", latex: "MR(v) = 1 - \\max_{y \\in L} p(y|v)" },
      { label: "Gini Index", latex: "Gini(v) = 1 - \\sum_{y \\in L} p(y|v)^2" },
      { label: "Entropy", latex: "H(v) = -\\sum_{y \\in L} p(y|v) \\log p(y|v)" },
      {
        label: "Information Gain",
        latex: "\\Delta(v,a) = I(v) - \\sum_{u \\in children(v,a)} \\frac{|u|}{|v|} I(u)",
      },
    ],
    examTips: [
      "Compute Gini/Entropy for given nodes — exam favorites!",
      "Manually build a tree for the golf or patient dataset",
      "Know when multi-split vs binary split is used",
      "Compare impurity values: pure node → Gini=0, Entropy=0",
    ],
    exerciseRefs: ["Exercise 2", "Exercise 3", "Exercise Sheet 2"],
    youtube: [
      {
        title: "Decision Trees — Main Ideas",
        url: "https://www.youtube.com/watch?v=7VeUPuOj0KE",
        channel: "StatQuest",
      },
      {
        title: "Information Gain & Entropy",
        url: "https://www.youtube.com/watch?v=ErFnC9zVeCU",
        channel: "StatQuest",
      },
      {
        title: "Gini Impurity",
        url: "https://www.youtube.com/watch?v=7kWAGW9jEY4",
        channel: "StatQuest",
      },
      {
        title: "ID3 Algorithm Explained",
        url: "https://www.youtube.com/watch?v=UdTKxSnC-eg",
        channel: "Abhishek Sharma",
      },
    ],
    visual: "decision-tree",
    bookRef: "Tan et al. Ch. 3 (Eq. 3.4–3.8)",
  },
  {
    id: "naive-bayes",
    title: "Naive Bayes Classification",
    block: "classification",
    order: 4,
    summary:
      "Naive Bayes applies Bayes' theorem with a conditional independence assumption: all attributes contribute equally and independently to the class prediction.",
    concepts: [
      "Bayes: P(H|E) = P(E|H)·P(H) / P(E)",
      "Naive assumption: P(E|H) = ∏ P(Eᵢ|H) — attributes independent given class",
      "Learning: compute P((a,z)|y) for each attribute-value pair and label y",
      "Classification: assign argmax_y P(y|x) using learned probabilities",
      "Zero-frequency problem: unseen values give P=0 → use Laplace estimator",
      "Laplace: P((a,zᵢ)|y) = (|D(a,zᵢ)∩D_y| + w/n_a) / (|D_y| + w)",
      "Numerical attributes: assume Gaussian distribution, use density f(x)",
      "Missing values: marginalize over possible values or skip attribute",
    ],
    formulas: [
      { label: "Bayes Theorem", latex: "P(H|E) = \\frac{P(E|H) \\cdot P(H)}{P(E)}" },
      {
        label: "Naive Bayes",
        latex: "P(y|x) \\propto P(y) \\prod_{i=1}^{n} P(x_i|y)",
      },
      {
        label: "Laplace Estimator",
        latex: "P((a,z_i)|y) = \\frac{|D(a,z_i) \\cap D_y| + w/n_a}{|D_y| + w}",
      },
      {
        label: "Gaussian Density",
        latex: "f(x) = \\frac{1}{\\sqrt{2\\pi\\sigma}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}",
      },
    ],
    examTips: [
      "Work through the patient dataset example step by step",
      "Apply Laplace smoothing when a count is zero",
      "For mixed attributes: categorical tables + Gaussian for numerical",
      "NB works well despite naive assumption unless many redundant attributes",
    ],
    exerciseRefs: ["Exercise 3", "Exercise 4"],
    youtube: [
      {
        title: "Naive Bayes — Clearly Explained",
        url: "https://www.youtube.com/watch?v=O2L2Uv9FujQ",
        channel: "StatQuest",
      },
      {
        title: "Bayes' Theorem",
        url: "https://www.youtube.com/watch?v=HZGCoVF3YvM",
        channel: "3Blue1Brown",
      },
      {
        title: "Naive Bayes Classifier",
        url: "https://www.youtube.com/watch?v=TKMiW50F5WA",
        channel: "Simplilearn",
      },
    ],
    visual: "naive-bayes",
    bookRef: "Tan et al. Ch. 5",
  },
  {
    id: "evaluation-basics",
    title: "Model Evaluation — Basics",
    block: "evaluation",
    order: 6,
    summary:
      "Evaluate classifiers using confusion matrices, quality metrics, sampling strategies, ensemble methods, and techniques for imbalanced classes.",
    concepts: [
      "Confusion matrix (binary): TP, FP, FN, TN — extend to l-ary classification",
      "Accuracy = (f₁₁+f₀₀)/(total) or #hits/#testInstances",
      "Precision = f₁₁/(f₁₁+f₀₁), Recall = f₁₁/(f₁₁+f₁₀)",
      "F-measure: F = 2·precision·recall/(precision+recall)",
      "F_β generalization weights recall vs precision",
      "Sensitivity = recall for class 1; Specificity = recall for class 0",
      "Ordinal targets: use RMSE or MAE instead of accuracy",
      "Sampling: hold-out, cross-validation, bootstrap (with/without replacement)",
      "Ensemble: bagging, boosting, voting to combine classifiers",
      "Imbalanced classes: oversampling, undersampling, cost-sensitive learning",
    ],
    formulas: [
      { label: "Accuracy (binary)", latex: "Acc = \\frac{f_{11} + f_{00}}{f_{11}+f_{10}+f_{01}+f_{00}}" },
      { label: "Precision", latex: "Prec = \\frac{f_{11}}{f_{11}+f_{01}}" },
      { label: "Recall", latex: "Rec = \\frac{f_{11}}{f_{11}+f_{10}}" },
      { label: "F-measure", latex: "F = \\frac{2 \\cdot Prec \\cdot Rec}{Prec + Rec}" },
      { label: "RMSE (ordinal)", latex: "RMSE = \\sqrt{\\frac{1}{|D_{test}|} \\sum_{x}(y_x - \\hat{y}_x)^2}" },
    ],
    examTips: [
      "Build confusion matrix from classifier rules and test data",
      "Compute precision, recall, F-measure by hand",
      "Know when accuracy is misleading (imbalanced data)",
      "Explain cross-validation vs simple hold-out",
    ],
    exerciseRefs: ["Exercise 4", "Exercise 5"],
    youtube: [
      {
        title: "Confusion Matrix",
        url: "https://www.youtube.com/watch?v=Kdsp6soqA7o",
        channel: "StatQuest",
      },
      {
        title: "Sensitivity, Specificity, Precision, Recall",
        url: "https://www.youtube.com/watch?v=vP_7XrKgvM8",
        channel: "StatQuest",
      },
      {
        title: "Cross Validation",
        url: "https://www.youtube.com/watch?v=fSytzGwwBmw",
        channel: "StatQuest",
      },
      {
        title: "ROC and AUC",
        url: "https://www.youtube.com/watch?v=4jRBrLanCKk",
        channel: "StatQuest",
      },
    ],
    visual: "confusion-matrix",
    bookRef: "Tan et al. Ch. 4, 10",
  },
  {
    id: "evaluation-best-model",
    title: "Finding the Best Model",
    block: "evaluation",
    order: 7,
    summary:
      "Distinguish 'good' (better than chance) from 'best' (among n models). Use statistical testing — McNemar test, p-values, confidence intervals.",
    concepts: [
      "Good model: performance better than baseline (majority class or random classifier)",
      "Best model: highest performance among M₁,…,Mₙ on same test set",
      "Statistical testing: H₀ = no real difference; reject if p-value small enough",
      "McNemar test for paired classifier comparison on same test data",
      "mcn = sign(a−b)·(a−b)²/(a+b) where a=errors by M not M₁, b=vice versa",
      "At 99% confidence, reject H₀ if mcn > 6.635 (χ² distribution)",
      "Test sample size matters: small test set → unreliable accuracy estimates",
      "Cost-sensitive classification: different misclassification costs",
    ],
    formulas: [
      {
        label: "McNemar Statistic",
        latex: "mcn = \\text{sign}(a-b) \\cdot \\frac{(a-b)^2}{a+b}",
      },
    ],
    examTips: [
      "Compare classifier to majority-class baseline",
      "Apply McNemar test with given a, b values",
      "Explain why 85% on 30 records ≠ better than 75% on 5000 records",
      "Know one-sided vs two-sided tests conceptually",
    ],
    exerciseRefs: ["Exercise 5", "Exercise 6"],
    youtube: [
      {
        title: "P-values — Meaning & Interpretation",
        url: "https://www.youtube.com/watch?v=vemZtEM63GY",
        channel: "StatQuest",
      },
      {
        title: "Statistical Significance",
        url: "https://www.youtube.com/watch?v=5Z9OIYA8He8",
        channel: "StatQuest",
      },
      {
        title: "McNemar's Test",
        url: "https://www.youtube.com/watch?v=5Z9OIYA8He8",
        channel: "StatQuest",
      },
    ],
    bookRef: "Tan et al. Ch. 10",
  },
  {
    id: "k-means",
    title: "K-Means Clustering",
    block: "clustering",
    order: 8,
    summary:
      "K-Means partitions data into K clusters by iteratively assigning points to nearest centroids and recomputing centroids until convergence.",
    concepts: [
      "Algorithm: (1) pick K initial centroids, (2) assign points, (3) recompute centroids, repeat",
      "Objective: minimize SSE = Σᵢ Σ_{x∈Cᵢ} dist(x,cᵢ)²",
      "Centroid: c_ij = (Σ_{x∈Cᵢ} x_j) / |Cᵢ|",
      "Complexity: O(K · |F| · |D| · I) for I iterations",
      "Sensitive to initialization — different starts → different clusters",
      "Disadvantages: favors spherical, equal-size, equal-density clusters; sensitive to outliers",
      "Bisecting K-Means: repeatedly split most inhomogeneous cluster with 2-Means",
      "Choosing K: elbow method, silhouette, domain knowledge",
    ],
    formulas: [
      {
        label: "SSE (Sum of Squared Errors)",
        latex: "SSE = \\sum_{i=1}^{K} \\sum_{x \\in C_i} dist(x, c_i)^2",
      },
      {
        label: "Centroid",
        latex: "c_{ij} = \\frac{\\sum_{x \\in C_i} x_j}{|C_i|}",
      },
    ],
    examTips: [
      "Run K-Means by hand for 2–3 iterations on small 2D data",
      "Explain why initialization matters with an example",
      "Compare K-Means vs Bisecting K-Means advantages",
      "Know when K-Means fails (non-spherical clusters, outliers)",
    ],
    exerciseRefs: ["Exercise 6", "Exercise Sheet 6"],
    youtube: [
      {
        title: "K-means Clustering",
        url: "https://www.youtube.com/watch?v=4b5d3muPQmA",
        channel: "StatQuest",
      },
      {
        title: "K-means Clustering — Visual Explanation",
        url: "https://www.youtube.com/watch?v=5shPvu_KLcU",
        channel: "Google Developers",
      },
      {
        title: "Elbow Method for Optimal K",
        url: "https://www.youtube.com/watch?v=3T2Ke9S0fCs",
        channel: "StatQuest",
      },
    ],
    visual: "k-means",
    bookRef: "Tan et al. Ch. 8",
  },
  {
    id: "similarity-distance",
    title: "Similarity & Distance Functions",
    block: "clustering",
    order: 9,
    summary:
      "Clustering depends on how you measure similarity between objects. Know distance metrics, binary similarity coefficients, and similarity matrices.",
    concepts: [
      "Similarity s(x,y): s≤1, s(x,y)=1↔x=y, symmetric",
      "Distance d(x,y): d≥0, d=0↔x=y, symmetric, triangle inequality",
      "Often: similarity = complement of normalized distance",
      "Euclidean: f₁(x,y) = √(Σ(xᵢ−yᵢ)²)",
      "Manhattan: f₂(x,y) = Σ|xᵢ−yᵢ|",
      "Cosine similarity: f₃ for document vectors",
      "Binary attributes: agree₁₁, agree₀₀, disagree₁₀, disagree₀₁",
      "Rand Index = (agree₁₁+agree₀₀) / total pairs",
      "Jaccard = agree₁₁ / (agree₁₁+disagree₁₀+disagree₀₁)",
    ],
    formulas: [
      { label: "Euclidean Distance", latex: "d(x,y) = \\sqrt{\\sum_{i=1}^{n}(x_i - y_i)^2}" },
      { label: "Manhattan Distance", latex: "d(x,y) = \\sum_{i=1}^{n}|x_i - y_i|" },
      {
        label: "Jaccard Coefficient",
        latex: "J(x,y) = \\frac{a_{11}}{a_{11}+a_{10}+a_{01}}",
      },
      {
        label: "Rand Index",
        latex: "RI = \\frac{a_{11}+a_{00}}{a_{11}+a_{00}+a_{10}+a_{01}}",
      },
    ],
    examTips: [
      "Compute Jaccard and Rand Index for given binary vectors",
      "State properties of valid distance functions",
      "Choose appropriate metric for the data type (numeric vs binary vs text)",
    ],
    exerciseRefs: ["Exercise 7"],
    youtube: [
      {
        title: "Distance Metrics",
        url: "https://www.youtube.com/watch?v=5W7076wrwOQ",
        channel: "StatQuest",
      },
      {
        title: "Cosine Similarity",
        url: "https://www.youtube.com/watch?v=6t2n9sM7jP4",
        channel: "StatQuest",
      },
    ],
    bookRef: "Tan et al. Ch. 2, 8",
  },
  {
    id: "hierarchical-clustering",
    title: "Hierarchical Clustering (HAC)",
    block: "clustering",
    order: 10,
    summary:
      "Hierarchical clustering builds a dendrogram (tree of clusters). Cut the tree horizontally to get K clusters. Agglomerative (bottom-up) is most common.",
    concepts: [
      "Dendrogram: tree where horizontal cut at height h gives cluster partition",
      "Agglomerative (bottom-up): start with each point as cluster, merge closest pairs",
      "Divisive (top-down): start with one cluster, split until k clusters",
      "Linkage methods define inter-cluster distance:",
      "MIN (single link): min distance between any pair across clusters",
      "MAX (complete link): max distance between any pair",
      "Group average: average of all pairwise distances",
      "Centroid link: distance between cluster centroids",
      "Ward's method: minimize increase in squared error (SSE)",
      "MIN tends to chaining; MAX tends to compact clusters",
    ],
    examTips: [
      "Build agglomerative dendrogram step by step on small dataset",
      "Compute MIN/MAX linkage distances between clusters",
      "Draw horizontal cut and identify resulting clusters",
      "Compare linkage methods — know chaining effect of single link",
    ],
    exerciseRefs: ["Exercise 8 - HAC", "Exercise Sheet 4"],
    youtube: [
      {
        title: "Hierarchical Clustering",
        url: "https://www.youtube.com/watch?v=7xHsRkOdVwo",
        channel: "StatQuest",
      },
      {
        title: "Linkage Methods Explained",
        url: "https://www.youtube.com/watch?v=illBoopUJR0",
        channel: "StatQuest",
      },
    ],
    visual: "dendrogram",
    bookRef: "Tan et al. Ch. 8",
  },
  {
    id: "dbscan",
    title: "DBSCAN — Density-Based Clustering",
    block: "clustering",
    order: 11,
    summary:
      "DBSCAN finds clusters of arbitrary shape by connecting density-reachable points. Identifies noise/outliers automatically.",
    concepts: [
      "Parameters: ε (neighborhood radius), MinPts (minimum points for core point)",
      "Core point: has ≥ MinPts neighbors within ε",
      "Border point: within ε of a core point but not core itself",
      "Noise point: neither core nor border",
      "Density-reachable: chain of core points connecting p to q",
      "Density-connected: both reachable from same core point",
      "Cluster: maximal set of density-connected points",
      "Advantages: arbitrary shapes, handles noise, no need to specify K",
      "Disadvantages: sensitive to ε and MinPts; struggles with varying density",
    ],
    examTips: [
      "Classify points as core/border/noise given ε and MinPts",
      "Identify clusters formed by DBSCAN on a grid",
      "Compare DBSCAN vs K-Means for given scenarios",
    ],
    exerciseRefs: ["Exercise Sheet 7 - DBSCAN"],
    youtube: [
      {
        title: "DBSCAN Clustering",
        url: "https://www.youtube.com/watch?v=RDZUdYNsQSA",
        channel: "StatQuest",
      },
      {
        title: "DBSCAN — Density Based Clustering",
        url: "https://www.youtube.com/watch?v=5E_3B2V-YJM",
        channel: "Google Developers",
      },
    ],
    visual: "dbscan",
    bookRef: "Tan et al. Ch. 8",
  },
  {
    id: "cluster-evaluation",
    title: "Cluster Evaluation — Silhouette",
    block: "clustering",
    order: 12,
    summary:
      "Internal indices evaluate clustering quality without ground truth. The Silhouette coefficient measures how well each point fits its cluster. Use the corrected slide (replacement for 56/71) — the original clustering deck had an error in the definition.",
    concepts: [
      "a(x) = average distance of x to other members of its cluster (cohesion)",
      "b(x) = min over other clusters Y of avg distance from x to Y (separation)",
      "silhouette(x) = 1 − a/b if a<b; else b/a − 1 (range [−1, 1])",
      "silhouette near +1 → well clustered; near 0 → border; negative → wrong cluster",
      "Cluster silhouette: average over points in cluster",
      "Overall Silh(ζ) = average over all clusters",
      "External indices (when labels exist): Rand Index, Jaccard on cluster pairs",
    ],
    formulas: [
      {
        label: "Cohesion a(x)",
        latex: "a(x) = \\frac{\\sum_{u \\in X \\setminus \\{x\\}} d(x,u)}{|X|-1}",
      },
      {
        label: "Separation b(x)",
        latex: "b(x) = \\min_{Y \\neq X} \\frac{\\sum_{u \\in Y} d(x,u)}{|Y|}",
      },
      {
        label: "Silhouette",
        latex: "s(x) = \\begin{cases} 1 - a(x)/b(x) & \\text{if } a(x) < b(x) \\\\ b(x)/a(x) - 1 & \\text{otherwise} \\end{cases}",
      },
    ],
    examTips: [
      "Compute silhouette for individual points step by step",
      "Explain why |X|−1 in a(x) but |Y| in b(x) — not a typo!",
      "Use silhouette to compare different K values or algorithms",
    ],
    exerciseRefs: ["Exercise 9 - Cluster Evaluation"],
    youtube: [
      {
        title: "Silhouette Analysis",
        url: "https://www.youtube.com/watch?v=5C_ApurJq0E",
        channel: "StatQuest",
      },
    ],
    visual: "silhouette",
    bookRef: "Tan et al. Ch. 8, Rousseeuw 1987 · 2_Clustering_Silhouette.pdf (corrected)",
  },
  {
    id: "data-missingness",
    title: "Unit M — Dealing with Missingness",
    block: "data",
    order: 13,
    summary:
      "Many algorithms cannot handle missing values; some implicitly fill them. Learn forms of missingness, their semantics, and mitigation — remember: absence of a value is often informative and should not always be replaced.",
    concepts: [
      "MCAR, MAR, MNAR — missing completely/at random vs informative missingness",
      "Deletion: listwise vs pairwise — when safe to drop rows/columns",
      "Imputation: mean/mode, regression, k-NN imputation — risks of distorting structure",
      "Informative missingness: missingness itself as a feature (e.g. patient skipped questionnaire)",
      "Naive Bayes and decision trees handle missing values differently",
      "Book D Chapter 4 is the primary reference for this unit",
    ],
    examTips: [
      "Explain when imputation is harmful vs helpful",
      "Know MCAR/MAR/MNAR definitions",
      "Connect to patient dataset missing values in lectures",
    ],
    youtube: [
      { title: "Handling Missing Data", url: "https://www.youtube.com/watch?v=O6KSDJ2xxN0", channel: "StatQuest" },
    ],
    bookRef: "Book D (Garcia et al.) Ch. 4",
  },
  {
    id: "data-preparation",
    title: "Unit P — Preparing Data for Learning",
    block: "data",
    order: 14,
    summary:
      "Learning algorithms assume values are correct — errors mislead models. This unit covers error detection, correction, de-duplication, and normalization.",
    concepts: [
      "Error detection: outlier analysis, constraint checking, cross-field rules",
      "Error correction vs removal — trade-offs for small datasets",
      "De-duplication: exact vs fuzzy matching on key attributes",
      "Normalization: min-max scaling, z-score, why distance-based methods need it",
      "Discretization of continuous attributes for categorical learners",
      "Book D Chapter 3 — data preparation basic models",
    ],
    examTips: [
      "Know when to normalize (K-Means, distance-based) vs when not (tree splits on raw thresholds)",
      "Explain duplicate detection strategies",
    ],
    youtube: [
      { title: "Data Normalization", url: "https://www.youtube.com/watch?v=8d0UQvnW0E4", channel: "StatQuest" },
    ],
    bookRef: "Book D (Garcia et al.) Ch. 3",
  },
  {
    id: "feature-correlations",
    title: "Unit FS — Correlations in Feature Space",
    block: "data",
    order: 15,
    summary:
      "First part of feature selection: detect redundant attributes via correlation and related measures. Material from DataEng_B3_1 and Examples on Correlation Measures.",
    concepts: [
      "Pearson correlation for numerical features — detect linear redundancy",
      "Chi-square, Cramér's V for categorical associations",
      "Correlation matrix heatmaps — pairs with |r| > threshold are candidates for removal",
      "Redundant features increase dimensionality without information → curse of dimensionality",
      "Examples on Correlation Measures.pdf — worked correlation calculations",
    ],
    examTips: [
      "Compute Pearson r for small datasets",
      "Explain ideal vs catastrophic correlation values for redundancy detection",
      "Exercise 10 Q3 covers inter-feature redundancy measure",
    ],
    exerciseRefs: ["Exercise 10", "Examples on Correlation Measures.pdf"],
    youtube: [
      { title: "Correlation and Covariance", url: "https://www.youtube.com/watch?v=xZ_z8KWkhXE", channel: "StatQuest" },
    ],
    bookRef: "Book D Ch. 7 · DataEng_B3_1_FeatureSelection_1_Correlations.pdf",
  },
  {
    id: "feature-selection",
    title: "Unit FS — Selecting Features & Building Subspaces",
    block: "data",
    order: 16,
    summary:
      "Feature selection chooses an optimal subset of features to reduce dimensionality, remove redundancy, and improve model quality.",
    concepts: [
      "Goals: discard redundant/irrelevant features, reduce cost, improve accuracy, simplify models",
      "Search strategies: Sequential Forward (SFG), Sequential Backward (SBG), Bidirectional (BG)",
      "SFG: start empty, add best feature each step until criterion met",
      "SBG: start with all features, remove worst each step",
      "Search types: exhaustive (small F), heuristic (SFG/SBG/BG), non-deterministic (random RG)",
      "Filter methods: evaluate features independently (correlation, chi-square, mutual info)",
      "Wrapper methods: use classifier performance as goodness measure U",
      "Embedded methods: feature selection built into learning (e.g., tree importance)",
      "Redundant attributes: highly correlated features add noise without information",
    ],
    examTips: [
      "Trace SFG/SBG algorithms on small feature set",
      "Classify search methods: exhaustive vs heuristic vs random",
      "Explain filter vs wrapper trade-off (speed vs accuracy)",
      "Connect to curse of dimensionality and missing values",
    ],
    exerciseRefs: ["Exercise 10 - Feature Selection"],
    youtube: [
      {
        title: "Feature Selection",
        url: "https://www.youtube.com/watch?v=Ya-T6G2R5gQ",
        channel: "StatQuest",
      },
      {
        title: "Filter vs Wrapper Methods",
        url: "https://www.youtube.com/watch?v=RlBp4fRvcj4",
        channel: "Machine Learning Explained",
      },
    ],
    bookRef: "Book D Ch. 7 · DataEng_B3_2_FeatureSelection_2_BuildingFsubspaces.pdf",
  },
  {
    id: "exam-prep",
    title: "Exam Preparation Guide",
    block: "exam",
    order: 17,
    summary:
      "Structured study plan for the DM I written exam at OVGU. Covers all exercise types, common exam patterns, and revision checklist.",
    concepts: [
      "Written exam — Votierung prerequisite: vote ≥70% of tasks OR reach 35 votes total",
      "Exercise sheets 1–10 map directly to exam question types",
      "High-yield topics: manual DT building, NB calculation, confusion matrix metrics",
      "HAC dendrogram construction, DBSCAN point classification",
      "Silhouette coefficient computation, K-Means iterations",
      "McNemar test, baseline comparison, statistical significance",
      "Feature selection algorithm tracing (SFG/SBG)",
      "Review example_exam.pdf and Exercise 1–8 merged for practice patterns",
    ],
    examTips: [
      "Week 1: Classification (DT + NB) — redo Exercises 1–4",
      "Week 2: Evaluation — redo Exercises 4–6, practice McNemar",
      "Week 3: Clustering — redo Exercises 6–9, HAC + DBSCAN + Silhouette",
      "Week 4: Feature selection + mixed review — Exercise 10 + example exam",
      "During exam: show all calculation steps; partial credit is given",
      "Check units and label axes on any diagrams you draw",
    ],
    exerciseRefs: [
      "example_exam.pdf",
      "Exercise 1–7 Merged.pdf",
      "All SoSe 24 Exercise Sheets",
    ],
    youtube: [
      {
        title: "Data Mining Full Course Review",
        url: "https://www.youtube.com/watch?v=HssE0G2_3X0",
        channel: "GeeksforGeeks",
      },
      {
        title: "Machine Learning Interview Prep",
        url: "https://www.youtube.com/watch?v=ukzFI9rgwfU",
        channel: "StatQuest",
      },
    ],
  },
];

export function getModule(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

export function getModulesByBlock(blockId: string): Module[] {
  return modules.filter((m) => m.block === blockId).sort((a, b) => a.order - b.order);
}

export const studyPlan = [
  { week: 1, focus: "Intro + Classification (DT, NB, multi-label)", modules: ["intro", "classification-underpinnings", "decision-trees", "naive-bayes", "multi-label"] },
  { week: 2, focus: "Evaluation (basics + best model) + start clustering", modules: ["evaluation-basics", "evaluation-best-model", "k-means"] },
  { week: 3, focus: "Clustering (similarity, HAC, DBSCAN, silhouette)", modules: ["similarity-distance", "hierarchical-clustering", "dbscan", "cluster-evaluation"] },
  { week: 4, focus: "Data Engineering (M, P, FS) + exercises + exam review", modules: ["data-missingness", "data-preparation", "feature-correlations", "feature-selection", "exam-prep"] },
];
