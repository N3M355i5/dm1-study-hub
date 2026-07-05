import type { Exercise } from "./types";

export const exercises6to10: Exercise[] = [
  {
    id: 6,
    title: "Exercise 6 — K-Means Clustering",
    moduleIds: ["k-means", "similarity-distance"],
    source: "Exercise 6.pdf · SoSe 2026",
    tag: "core",
    questions: [
      {
        id: "e6-q1",
        number: 1,
        text: "What is clustering vs classification? Real-life examples?",
        steps: [
          { title: "Clustering", body: "Unsupervised: group similar objects without labels. Discover structure in data." },
          { title: "Classification", body: "Supervised: learn from labeled data to predict class of new instances." },
          { title: "Examples", body: "Clustering: customer segments, gene grouping. Classification: spam detection, disease diagnosis." },
        ],
      },
      {
        id: "e6-q2",
        number: 2,
        text: "Describe K-Means: objective, centroid, termination, pros/cons.",
        steps: [
          { title: "Algorithm", body: "1) Pick K centroids. 2) Assign each point to nearest centroid. 3) Recompute centroids as cluster means. 4) Repeat until assignments stable." },
          { title: "Objective SSE", body: "Minimize SSE = Σᵢ Σ_{x∈Cᵢ} ||x − cᵢ||²", latex: "SSE = \\sum_{i=1}^{K} \\sum_{x \\in C_i} dist(x, c_i)^2" },
          { title: "Centroid", body: "c_ij = (Σ x_j)/|Cᵢ| — arithmetic mean of cluster members." },
          { title: "Pros/cons", body: "Pros: simple, fast O(K·d·n·I). Cons: needs K, sensitive to init/outliers, assumes spherical equal-size clusters." },
        ],
      },
      {
        id: "e6-q3",
        number: 3,
        text: "Manhattan, Euclidean, Cosine — formulas and ranges.",
        steps: [
          { title: "Euclidean", body: "d = √(Σ(xᵢ−yᵢ)²). Range [0,∞). 0 iff identical.", latex: "d_E = \\sqrt{\\sum_i (x_i - y_i)^2}" },
          { title: "Manhattan", body: "d = Σ|xᵢ−yᵢ|. Range [0,∞). Grid-like distance.", latex: "d_M = \\sum_i |x_i - y_i|" },
          { title: "Cosine", body: "cos(x,y) = (x·y)/(||x||·||y||). Range [−1,1] or [0,1] for non-negative. Direction similarity, not magnitude.", latex: "\\cos(x,y) = \\frac{\\sum x_i y_i}{\\|x\\|\\|y\\|}" },
        ],
      },
      {
        id: "e6-q4",
        number: 4,
        text: "K=2 K-Means on Table (init centroids p10, p11). Full iteration trace.",
        steps: [
          { title: "Initial centroids", body: "μ₁⁽⁰⁾ = p10 = (7, 3)\nμ₂⁽⁰⁾ = p11 = (6.5, 1)", highlight: "C1 center (7,3) · C2 center (6.5,1)" },
          {
            title: "Iteration 1 — assign to nearest centroid",
            body: "Cluster 1 {p10,p11,p9}: p9(6,2) closer to (7,3)? d(p9,(7,3))=√2≈1.41, d(p9,(6.5,1))=√2.06\nCluster 1: p9,p10,p11 (right-ish points)\nCluster 2: p1–p8 (left and top-left group)\nDetailed: bottom-right {p9,p10,p11} vs rest {p1..p8}",
          },
          {
            title: "Iteration 1 — recompute centroids",
            body: "C1 = {p9,p10,p11}: μ₁ = ((6+7+6.5)/3, (2+3+1)/3) = (6.5, 2)\nC2 = {p1..p8}: μ₂ = ((1+2+3+3+2+2+2.5+4)/8, (1+2+1+2.5+8+6+7+7)/8) = (2.44, 4.31)",
          },
          {
            title: "Iteration 2",
            body: "Reassign all points to (6.5,2) vs (2.44,4.31). Top cluster {p5,p6,p7,p8} goes to upper centroid; lower-right stays together.",
          },
          {
            title: "Convergence",
            body: "Continue until no point changes cluster. Final: C1 ≈ {(6,2),(7,3),(6.5,1)} bottom-right, C2 ≈ remaining 8 points. Compute SSE = Σ dist² to assigned centroid.",
            highlight: "Show assignment table each iteration in exam",
          },
        ],
      },
      {
        id: "e6-q5",
        number: 5,
        text: "Bisecting K-Means — how differs from standard K-Means?",
        steps: [
          { title: "Idea", body: "Start with one cluster. Repeatedly bisect the cluster with highest SSE (most inhomogeneous) using 2-Means until K leaf clusters." },
          { title: "Advantage", body: "Deterministic hierarchy; less sensitive to initialization than random K-Means; can produce clusters of different sizes." },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Exercise 7 — Bisecting K-Means & DBSCAN",
    moduleIds: ["k-means", "dbscan"],
    source: "Exercise 7.pdf · E7 Additional datasets.pdf · SoSe 2026",
    tag: "core",
    questions: [
      {
        id: "e7-q1",
        number: 1,
        text: "Bisecting K-Means K=3 leaf clusters (init p10, p11). Full trace.",
        steps: [
          { title: "Setup", body: "Same 11 points as Ex 6. First bisect entire set with k=2, init (7,3) and (6.5,1)." },
          { title: "After 1st bisection converges", body: "Split cluster with higher SSE. Typically the larger 8-point cluster vs 3-point group." },
          { title: "2nd bisection", body: "Apply 2-Means on the SSE-max cluster only. Third leaf cluster emerges." },
          { title: "Final 3 clusters", body: "Report 3 centroids, assignments, total SSE. See E7 Additional Practice for worked 6-point example with SSE_final = 1.8333.", highlight: "3 leaf clusters with centroids and SSE" },
        ],
      },
      {
        id: "e7-q2",
        number: 2,
        text: "DBSCAN: explain ε, minPts, core, border, noise points.",
        steps: [
          { title: "ε", body: "Neighborhood radius — max distance for two points to be neighbors." },
          { title: "minPts", body: "Minimum neighbors (including self) within ε to qualify as core point." },
          { title: "Core", body: "|N_ε(p)| ≥ minPts — dense region center." },
          { title: "Border", body: "Not core, but within ε of some core point." },
          { title: "Noise", body: "Neither core nor border — outlier." },
        ],
      },
      {
        id: "e7-q3",
        number: 3,
        text: "Directly density-reachable, density-reachable, density-connected.",
        steps: [
          { title: "Directly density-reachable", body: "q in N_ε(p) and p is core. (One step from core to neighbor.)" },
          { title: "Density-reachable", body: "Chain of core points p→p₁→…→pₙ→q where each step is directly density-reachable." },
          { title: "Density-connected", body: "p and q both density-reachable from same core o — same cluster component." },
        ],
      },
      {
        id: "e7-q4",
        number: 4,
        text: "How DBSCAN finds clusters after labeling points.",
        steps: [
          { title: "Algorithm", body: "1) Mark core/border/noise. 2) Start cluster from unvisited core. 3) Expand via density-reachable points. 4) Repeat for next unvisited core." },
          { title: "Result", body: "Border points attach to nearby core's cluster. Noise excluded." },
        ],
      },
      {
        id: "e7-q5",
        number: 5,
        text: "DBSCAN ε=1.5, minPts=3 on points A–F. Classify each point.",
        steps: [
          { title: "Distances", body: "d(A,B)=√0.5≈0.71. d(A,C)=√32≈5.66. d(D,E)=1. d(D,F)=0.5. d(E,F)=√0.25=0.5. d(C,D)=√5≈2.24." },
          { title: "ε=1.5 neighborhoods", body: "N(A)={A,B} count 2. N(B)={A,B} count 2. N(D)={D,E,F} count 3. N(E)={D,E,F} count 3. N(F)={D,E,F} count 3. N(C)={C} count 1." },
          { title: "Point types (minPts=3)", body: "Core: D, E, F (≥3 neighbors). A, B: only 2 neighbors → not core. C: alone → noise. A, B: within ε of each other but no core nearby → noise (or border if connected — neither reaches 3).", highlight: "Core: D,E,F · Noise: A,B,C" },
          { title: "Clusters", body: "Cluster 1 = {D, E, F}. A, B, C are noise (isolated from dense triple)." },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Exercise 8 — Hierarchical Clustering (HAC)",
    moduleIds: ["hierarchical-clustering"],
    source: "Exercise 8.pdf · E8 Additional Questions.pdf · SoSe 2026",
    tag: "core",
    questions: [
      {
        id: "e8-q1",
        number: 1,
        text: "Divisive vs agglomerative hierarchical clustering.",
        steps: [
          { title: "Agglomerative (bottom-up)", body: "Start: each point = cluster. Repeatedly merge closest pair until one cluster." },
          { title: "Divisive (top-down)", body: "Start: all points in one cluster. Repeatedly split until desired k or singletons." },
        ],
      },
      {
        id: "e8-q2",
        number: 2,
        text: "Linkage methods — MIN, MAX, Group Average, Centroid, Ward.",
        steps: [
          { title: "MIN (single link)", body: "d(C1,C2) = min{d(x,y) : x∈C1, y∈C2}. Tends to chaining." },
          { title: "MAX (complete link)", body: "d(C1,C2) = max{d(x,y)}. Compact clusters." },
          { title: "Group average", body: "Average of all pairwise cross-cluster distances." },
          { title: "Centroid", body: "Distance between cluster centroids." },
          { title: "Ward", body: "Minimize increase in total SSE when merging." },
        ],
      },
      {
        id: "e8-q3",
        number: 3,
        text: "Single/MIN linkage dendrogram for A–F (Ex 8 dataset).",
        steps: [
          { title: "Pairwise distances", body: "d(A,B)=0.707. d(D,E)=1. d(D,F)=0.5. d(E,F)=0.707. d(C,D)=2.24." },
          { title: "Merge sequence", body: "1) A∪B at 0.707\n2) D∪E at 1.0\n3) {D,E}∪F at 0.707\n4) {A,B}∪C at d(A,C)=2.24? Actually next: check MIN between {A,B} and C: min(d(A,C),d(B,C))..." },
          { title: "Final merges", body: "Left group {A,B,C} merges with right {D,E,F} at MIN cross distance ≈ 2.24 (C to D/E/F).", highlight: "Draw dendrogram with merge heights" },
        ],
      },
      {
        id: "e8-q4",
        number: 4,
        text: "Distance C1={A,B} and C2={D,E,F} using MAX and Group Average.",
        steps: [
          { title: "Cross distances", body: "d(A,D)=3.16, d(A,E)=4.24, d(A,F)=3.04, d(B,D)=2.50, d(B,E)=3.54, d(B,F)=2.92" },
          { title: "MAX linkage", body: "d_MAX = max(all 6 pairs) = 4.24 (B to E)", highlight: "MAX = 4.24" },
          { title: "Group average", body: "d_AVG = (3.16+4.24+3.04+2.50+3.54+2.92)/6 = 3.23", highlight: "Group Average ≈ 3.23" },
        ],
      },
      {
        id: "e8-q5",
        number: 5,
        text: "Add Z=(2,2) to C1. MAX distance to C2 — same or not?",
        steps: [
          { title: "New distances from Z", body: "Z to D=(3,4): √5≈2.24. Z to E: √8≈2.83. Z to F: √3.25≈1.80." },
          { title: "MAX with Z in C1", body: "Previous MAX was 4.24 (B–E). New pairs include Z–E ≈ 2.83 — still below 4.24 unless B–E was not the max. Recompute all 9 pairs: max may still be B–E or A–E.", highlight: "Generally: not remain the same — recompute MAX" },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Exercise 9 — Cluster Evaluation",
    moduleIds: ["cluster-evaluation"],
    source: "Exercise 9.pdf · E9 Additional Questions.pdf · SoSe 2026",
    tag: "core",
    questions: [
      {
        id: "e9-q1",
        number: 1,
        text: "Internal vs external indices. Purity for Z1 and Z2.",
        steps: [
          { title: "Internal vs external", body: "Internal: no ground truth (Silhouette, SSE). External: compare to known classes (Purity, Rand, Jaccard)." },
          { title: "Purity formula", body: "purity(Z) = (1/N) Σ_k max_j |C_k ∩ L_j| — fraction in dominant true class per cluster.", latex: "purity(Z) = \\frac{1}{N} \\sum_k \\max_j |C_k \\cap L_j|" },
          { title: "Z1 (K=3)", body: "X1={1,2,3}→3A pure=1. X2={5,6,7,9,10,15}→max(1A,3B,1C)=3/6=0.5. X3={4,8,11,12,13,14}→4C/6=0.667.\npurity(Z1) = (3·1 + 6·0.5 + 6·0.667)/15 = (3+3+4)/15 = 10/15 = 0.667", highlight: "Purity(Z1) = 0.667" },
          { title: "Z2 (K=5)", body: "More smaller clusters → often higher purity (singleton effect). Compute similarly per cluster.", highlight: "Problem: purity favors many small clusters" },
        ],
      },
      {
        id: "e9-q2",
        number: 2,
        text: "Rand Index and Jaccard for Z3 (p1–p6).",
        steps: [
          { title: "Classes", body: "A={p1,p2}, B={p3,p4}, C={p5,p6}. Clusters: Y1={p1,p2}, Y2={p3,p5}, Y3={p4,p6}." },
          { title: "Count pairs (upper triangle)", body: "f11 (same cluster & class): (p1,p2) only → 1\nf10 (same cluster, diff class): (p3,p5), (p4,p6) → 2\nf01 (diff cluster, same class): none → 0\nf00 (diff cluster, diff class): remaining → 12" },
          { title: "Rand Index", body: "RI = (f11+f00)/(f11+f10+f01+f00) = (1+12)/15 = 13/15 ≈ 0.867", latex: "RI = \\frac{1+12}{15} = 0.867" },
          { title: "Jaccard", body: "J = f11/(f11+f10+f01) = 1/(1+2+0) = 1/3 ≈ 0.333", highlight: "RI ≈ 0.867 · J = 0.333" },
        ],
      },
      {
        id: "e9-q3",
        number: 3,
        text: "Cohesion & separation for Y1 in Z3 with normalized distances.",
        steps: [
          { title: "Coordinates", body: "p1(1,4), p2(2,5), p3(2,4), p4(3,3), p5(4,1), p6(3,1). d_max = √20 between p2 and p6." },
          { title: "Centroids", body: "center(Y1)=(1.5,4.5), center(Y2)=(3,2.5), center(Y3)=(3,2)" },
          { title: "Cohesion Y1", body: "d_N(p1,c1) = d_E(p1,c1)/√20. Average over Y1, then cohesion = 1 − avg." },
          { title: "Separation Y1", body: "separation = (1/(|ζ|−1)) Σ d_N(center(Y1), center(Y')) for Y'≠Y1.", highlight: "Use normalized distances throughout" },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Exercise 10 — Silhouette & Feature Selection",
    moduleIds: ["cluster-evaluation", "feature-selection"],
    source: "Exercise Sheet 10.pdf · SoSe 2026",
    tag: "core",
    questions: [
      {
        id: "e10-q1",
        number: 1,
        text: "Silhouette coefficient for cluster G2 = {s3,s4,s5}.",
        steps: [
          { title: "Coordinates", body: "s3(5,6), s4(6,8), s5(5,1). G1={s1,s2}, G3={s6,s7,s8}." },
          { title: "Centroid G2", body: "center(G2) = ((5+6+5)/3, (6+8+1)/3) = (5.33, 5)" },
          { title: "a(x) for each point in G2", body: "a(s3) = avg(d(s3,s4), d(s3,s5)) = avg(√5, √26) ≈ avg(2.24, 5.10) = 3.67\nSimilarly for s4, s5." },
          { title: "b(x) — nearest other cluster", body: "For s3: avg dist to G1 vs G3. b(s3) = min(avg to G1, avg to G3)." },
          { title: "Silhouette per point", body: "s(x) = 1 − a/b if a<b else b/a − 1. Cluster silhouette = mean of s3,s4,s5.", highlight: "Report s(s3), s(s4), s(s5) and mean" },
        ],
      },
      {
        id: "e10-q2",
        number: 2,
        text: "Feature selection: purpose, methods, search categories.",
        steps: [
          { title: "Purpose", body: "Remove redundant/irrelevant features → reduce dimension, cost, overfitting; improve model quality." },
          { title: "Methods", body: "SFG (sequential forward), SBG (sequential backward), BG (bidirectional), RG (random), Filters, Wrappers." },
          { title: "Search categories", body: "Exhaustive (all subsets), Heuristic (SFG/SBG/BG with termination), Non-deterministic (RG anytime)." },
        ],
      },
      {
        id: "e10-q3",
        number: 3,
        text: "Inter-feature redundancy measure (correlation).",
        steps: [
          { title: "Measure", body: "Pearson correlation for numerical features. High |r| → redundant." },
          { title: "Data types", body: "Numerical directly. Categorical: Cramér's V or chi-square. Mixed: appropriate encoding." },
          { title: "Range", body: "Correlation r ∈ [−1,1]. |r|→1 ideal for redundancy detection (want to remove). |r|→0 means independent." },
          { title: "Usage", body: "If new feature highly correlates with selected set → candidate for removal." },
        ],
      },
      {
        id: "e10-q4",
        number: 4,
        text: "Wrapper performance criterion for feature subset quality.",
        steps: [
          { title: "Measure", body: "Train classifier on feature subset S, evaluate on validation (accuracy, F1, etc.). U(S) = performance." },
          { title: "Data types", body: "Any if classifier handles them (with preprocessing)." },
          { title: "Range", body: "Depends on metric. Higher accuracy = better. Catastrophic = below baseline/chance." },
          { title: "Usage", body: "SFG adds feature if U increases; SBG removes if U unchanged or improves." },
        ],
      },
    ],
  },
];

export const additionalExercises: Exercise[] = [
  {
    id: 61,
    title: "E6 Additional — K-Means Worksheet",
    moduleIds: ["k-means"],
    source: "E6 Additional Worksheet.pdf",
    tag: "additional",
    questions: [
      {
        id: "e6a-q1",
        number: 1,
        text: "K=2 on 6-point dataset. Init μ1=q5(6,2), μ2=q6(7,3). Full iteration.",
        steps: [
          { title: "Points", body: "q1(1,7), q2(2,8), q3(3,7), q4(5,1), q5(6,2), q6(7,3)." },
          { title: "Iteration 1 assign", body: "Top group {q1,q2,q3} → nearest to (6,2)? Actually (7,3) vs (6,2):\nq1 closer to neither strongly — q1(1,7) far from both.\nq4,q5,q6 → cluster with (6,2)/(7,3).\nq1,q2,q3 → other cluster." },
          { title: "New centroids", body: "Recompute means for each group, reassign until stable.", highlight: "Two clusters: upper-left vs lower-right" },
        ],
      },
    ],
  },
  {
    id: 71,
    title: "E7 Additional — Bisecting K-Means & DBSCAN Solutions",
    moduleIds: ["k-means", "dbscan"],
    source: "E7 Additional datasets.pdf (includes full solutions)",
    tag: "additional",
    questions: [
      {
        id: "e7a-q1",
        number: 1,
        text: "Bisecting K-Means K=3 on P1–P6. Deterministic inits.",
        steps: [
          { title: "1st bisection iter 1", body: "Init (1,1) and (9,1). C_A={P1,P2,P3}, C_B={P4,P5,P6}.\nμ_A=(1.33,1.33), μ_B=(7.33,4.33). SSE_A=1.33, SSE_B=21.33.", highlight: "Split C_B (higher SSE)" },
          { title: "2nd bisection", body: "Init (6,6) and (9,1) on {P4,P5,P6}.\nC_U={P4,P5} μ=(6.5,6), C_V={P6} μ=(9,1)." },
          { title: "Final", body: "Cluster1 {P1,P2,P3} SSE=1.33\nCluster2 {P4,P5} SSE=0.5\nCluster3 {P6} SSE=0\nTotal SSE = 1.8333", highlight: "SSE_final = 1.8333" },
        ],
      },
      {
        id: "e7a-q2",
        number: 2,
        text: "DBSCAN ε=1.0, minPts=3 on A–F extended set.",
        steps: [
          { title: "Core points", body: "A,B,C: |N_ε|≥3. D: border (|N|=2, neighbor of core B)." },
          { title: "Noise", body: "E,F: only 2 neighbors each, not near core → noise." },
          { title: "Cluster", body: "Cluster1 = {A,B,C,D}. Noise = {E,F}." },
          { title: "minPts=2 extension", body: "E,F become core → Cluster2 = {E,F}.", highlight: "Density threshold changes result" },
        ],
      },
    ],
  },
  {
    id: 81,
    title: "E8 Additional — HAC with Solutions",
    moduleIds: ["hierarchical-clustering"],
    source: "E8 Additional Questions.pdf (includes solutions)",
    tag: "additional",
    questions: [
      {
        id: "e8a-q1",
        number: 1,
        text: "Single linkage on extended A–F dataset. Complete distance matrix.",
        steps: [
          { title: "Key distances", body: "d(A,B)=0.82, d(D,E)=0.92, d(B,C)=1.44, d(E,F)=1.53, d(C,D)=4.24." },
          { title: "Merge order", body: "1) A∪B @0.82  2) D∪E @0.92  3) {A,B}∪C @1.44  4) {D,E}∪F @1.53  5) final @4.24", highlight: "Final merge height = 4.24" },
        ],
      },
      {
        id: "e8a-q2",
        number: 2,
        text: "C1={A,B,C} vs C2={D,E,F}: all linkage methods.",
        steps: [
          { title: "Results", body: "MAX = 8.77\nGroup Average = 6.49\nCentroid = 6.48\nWard ΔSSE = 63.02", highlight: "Complete table from solution sheet" },
        ],
      },
    ],
  },
  {
    id: 91,
    title: "E9 Additional — Purity, Rand, Cohesion",
    moduleIds: ["cluster-evaluation"],
    source: "E9 Additional Questions.pdf (includes solutions)",
    tag: "additional",
    questions: [
      {
        id: "e9a-q1",
        number: 1,
        text: "Purity Z_A vs Z_B (12 instances, K=3 vs K=5).",
        steps: [
          { title: "Purity Z_A", body: "purity(Z_A) = 3/12·2/3 + 4/12·3/4 + 5/12·4/5 = 2/12+3/12+4/12 = 9/12 = 0.75", highlight: "0.75" },
          { title: "Purity Z_B", body: "purity(Z_B) = 10/12 ≈ 0.83", highlight: "Z_B higher — illustrates purity bias toward more clusters" },
        ],
      },
    ],
  },
];
