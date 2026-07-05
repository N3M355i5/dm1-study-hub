import type { Exercise } from "./types";

export const exercises1to5: Exercise[] = [
  {
    id: 1,
    title: "Exercise 1 — Classification Foundations",
    moduleIds: ["classification-underpinnings"],
    source: "Exercise 1.pdf · SoSe 2026",
    tag: "core",
    questions: [
      {
        id: "e1-q1",
        number: 1,
        text: "What is meant by classification? Explain the two phases of classification.",
        steps: [
          {
            title: "Definition",
            body: "Classification is a supervised learning task: we learn a model from labeled data that assigns each instance to one of finitely many mutually exclusive classes.",
          },
          {
            title: "Phase 1 — Learning",
            body: "Input: classes C = {C₁,…,Cₖ} and labeled training set D = ∪Dᵢ. The algorithm builds classifier ξ that captures what distinguishes classes. D must be representative of the population.",
          },
          {
            title: "Phase 2 — Querying",
            body: "The trained classifier ξ acts as an oracle: for each new instance x with unknown label, it predicts the class in C.",
          },
          {
            title: "Exam tip",
            body: "Always mention train/test split in the learning phase when the question asks for evaluation.",
            highlight: "Learning = build model · Querying = apply model",
          },
        ],
      },
      {
        id: "e1-q2",
        number: 2,
        text: "Provide a real-world example of a classification problem.",
        steps: [
          {
            title: "Example from the course",
            body: "Predicting whether a tinnitus patient will respond positively to a treatment (Response = yes/no) based on questionnaire features — used throughout DM I lectures.",
          },
          {
            title: "Another valid example",
            body: "Defaulted borrower prediction (Exercise 1 Table 1): predict whether a loan applicant will default (Y/N) from Home Owner, Marital Status, Education, Income.",
          },
        ],
      },
      {
        id: "e1-q3",
        number: 3,
        text: "What is the learning set? Why split into training and test sets?",
        steps: [
          {
            title: "Learning set",
            body: "The learning set (training set D_train) is the portion of labeled data used to induce the model — i.e. to learn parameters or rules.",
          },
          {
            title: "Test set purpose",
            body: "D_test is held out for model deduction/evaluation. It estimates how well the model generalizes to unseen data. Training error is optimistic; test error is unbiased if D_test was not used during learning.",
          },
        ],
      },
      {
        id: "e1-q4",
        number: 4,
        text: "What is a target attribute? What properties must it have?",
        steps: [
          {
            title: "Definition",
            body: "The target attribute (class label) is the variable we want to predict. Each training instance must have a known value for it.",
          },
          {
            title: "Required properties",
            body: "• Mutually exclusive classes (each instance belongs to exactly one class)\n• Known at training time\n• Representative labels in D_train and D_test\n• For classification: nominal or ordinal; not a free-text identifier like ID",
          },
        ],
      },
      {
        id: "e1-q5",
        number: 5,
        text: "Describe the variable type of each variable in Table 1 (numerical, categorical, ordinal).",
        steps: [
          {
            title: "Table 1 variables",
            body: "| Variable | Type | Reason |\n|----------|------|--------|\n| Home Owner | Categorical (binary) | Y/N, no order |\n| Marital Status | Categorical (nominal) | Single/Married/Divorced, no order |\n| Level of Education | Ordinal | Low < Moderate < High |\n| Annual Income | Numerical (continuous) | Numeric amount |\n| Defaulted Borrower | Categorical (binary) | Target: Y/N |",
          },
          {
            title: "Key distinction",
            body: "Ordinal variables have a meaningful order but unequal intervals. Education is ordinal, not nominal. Income is numerical — use appropriate splits (discretization) in decision trees or Gaussian NB.",
            highlight: "Education = ordinal · Income = numerical",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Exercise 2 — Naive Bayes & Bayes' Theorem",
    moduleIds: ["naive-bayes"],
    source: "Exercise 2.pdf · SoSe 2026",
    tag: "core",
    questions: [
      {
        id: "e2-q1",
        number: 1,
        text: "Doctor test: 99% reliability, 1% population sick. Patient tests positive — probability sick?",
        steps: [
          {
            title: "Set up events",
            body: "S = sick, + = positive test. P(S) = 0.01, P(+|S) = 0.99, P(−|¬S) = 0.99 ⇒ P(+|¬S) = 0.01.",
          },
          {
            title: "Apply Bayes",
            body: "P(S|+) = P(+|S)·P(S) / P(+)",
            latex: "P(S|+) = \\frac{0.99 \\times 0.01}{0.99 \\times 0.01 + 0.01 \\times 0.99}",
          },
          {
            title: "Calculate",
            body: "Numerator = 0.0099. Denominator = 0.0099 + 0.0099 = 0.0198.",
            latex: "P(S|+) = \\frac{0.0099}{0.0198} = 0.5",
          },
          {
            title: "Interpretation",
            body: "Despite a 99% accurate test, only 50% chance of being sick — because the disease is rare (1%). This is the base-rate fallacy.",
            highlight: "Answer: 50% probability the patient is sick",
          },
        ],
      },
      {
        id: "e2-q2",
        number: 2,
        text: "How does Naive Bayes work? Why is it 'naïve'?",
        steps: [
          {
            title: "Formula",
            body: "For instance x = (x₁,…,xₙ), pick class y that maximizes P(y|x) ∝ P(y) · ∏ᵢ P(xᵢ|y).",
            latex: "P(y|\\mathbf{x}) \\propto P(y) \\prod_{i=1}^{n} P(x_i|y)",
          },
          {
            title: "Learning",
            body: "Estimate P(y) from class frequencies. Estimate P(xᵢ|y) from count tables (categorical) or Gaussian density (numeric).",
          },
          {
            title: "Why naïve",
            body: "Assumes conditional independence: P(x|y) = ∏ P(xᵢ|y). Attributes don't influence each other given the class — often false, but works surprisingly well.",
          },
        ],
      },
      {
        id: "e2-q3",
        number: 3,
        text: "How does NB handle numeric attributes? Give the formula.",
        steps: [
          {
            title: "Gaussian assumption",
            body: "For numeric attribute a, assume values within class y follow N(μₐ,y, σ²ₐ,y).",
            latex: "f(x) = \\frac{1}{\\sqrt{2\\pi\\sigma}} \\exp\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)",
          },
          {
            title: "Parameters",
            body: "μ = sample mean of a in class y. σ = sample standard deviation. Use f(x) in place of P(xᵢ|y) in the product.",
          },
        ],
      },
      {
        id: "e2-q4",
        number: 4,
        text: "Table 1: compute conditional probabilities, classify X=(N, Married, 90) without zero handling.",
        steps: [
          {
            title: "Class priors",
            body: "10 instances. DB=Y: rows 5,8,10 → 3/10. DB=N: rows 1–4,6,7,9 → 7/10.",
          },
          {
            title: "P(attribute | Y) for Y class (3 instances)",
            body: "HO=N: 3/3=1, HO=Y: 0/3=0\nMarital: Married 0/3, Single 2/3, Divorced 1/3\nIncome 90: 1/3 (only row 10)",
          },
          {
            title: "P(attribute | N) for N class (7 instances)",
            body: "HO=N: 4/7, HO=Y: 3/7\nMarital Married: 3/7, Single: 2/7, Divorced: 1/7\nIncome 90: 0/7 = 0 ← zero frequency!",
          },
          {
            title: "Score for Y",
            body: "P(Y|x) ∝ (3/10)·(1)·(0)·(1/3) = 0 → entire product zero because P(Married|Y)=0.",
          },
          {
            title: "Score for N",
            body: "P(N|x) ∝ (7/10)·(4/7)·(3/7)·(0) = 0 → zero because P(90|N)=0.",
          },
          {
            title: "Conclusion without smoothing",
            body: "Both classes get probability 0 — classifier undefined. This demonstrates the zero-frequency problem.",
            highlight: "Cannot classify without Laplace smoothing",
          },
        ],
      },
      {
        id: "e2-q5",
        number: 5,
        text: "Zero-frequency problem. Laplace estimate. Classify X=(N, Married, 90) with Laplace.",
        steps: [
          {
            title: "Problem",
            body: "If any P(xᵢ|y)=0, the whole product P(y|x) becomes 0 for that class — even if other evidence strongly supports it.",
          },
          {
            title: "Laplace estimator",
            body: "Replace |D(a,z)∩D_y|/|D_y| with (count + w/n_a)/(|D_y| + w). Common: w=1, n_a = number of distinct values of attribute a.",
            latex: "P((a,z_i)|y) = \\frac{|D(a,z_i) \\cap D_y| + w/n_a}{|D_y| + w}",
          },
          {
            title: "Apply w=1, n_a=2 for HO (Y/N)",
            body: "P(N|Y) = (3+0.5)/(3+1) = 3.5/4 = 0.875\nP(N|N) = (4+0.5)/(7+1) = 4.5/8 = 0.5625",
          },
          {
            title: "Marital (n_a=3)",
            body: "P(Married|Y) = (0+1/3)/(3+1) = (1/3)/4 = 1/12\nP(Married|N) = (3+1/3)/(7+1) = (10/3)/8 = 10/24 = 5/12",
          },
          {
            title: "Income 90 (treat as categorical, n_a=distinct values in training)",
            body: "Among 10 unique income values, 90 appears once in Y, zero times in N:\nP(90|Y) = (1+ε)/(3+1), P(90|N) = (0+ε)/(7+1) with small smoothing.",
          },
          {
            title: "Compare scores",
            body: "P(Y|x) ∝ 0.3 · 0.875 · (1/12) · P(90|Y)\nP(N|x) ∝ 0.7 · 0.5625 · (5/12) · P(90|N)\nNumerically P(N|x) > P(Y|x) → classify as DB=N (No default).",
            highlight: "Final class: Defaulted Borrower = N",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Exercise 3 — Decision Trees",
    moduleIds: ["decision-trees"],
    source: "Exercise 3.pdf · SoSe 2026",
    tag: "core",
    questions: [
      {
        id: "e3-q1",
        number: 1,
        text: "Problem with Information Gain? How does Gain Ratio help?",
        steps: [
          {
            title: "Information Gain bias",
            body: "IG favors attributes with many values (e.g. ID): each instance gets its own branch → pure leaves → IG ≈ H(root). Not a meaningful split.",
          },
          {
            title: "Gain Ratio",
            body: "GainRatio(a) = IG(a) / SplitInfo(a), where SplitInfo penalizes highly branched splits.",
            latex: "GainRatio(a) = \\frac{IG(a)}{-\\sum_{v} \\frac{|D_v|}{|D|} \\log\\frac{|D_v|}{|D|}}",
          },
          {
            title: "Effect",
            body: "Normalizes gain by split entropy — ID-like attributes get high SplitInfo → low Gain Ratio.",
          },
        ],
      },
      {
        id: "e3-q2",
        number: 2,
        text: "Table 1 (20 instances): compute IG and Gain Ratio for ID, Gender, Graduation, Eye Color.",
        steps: [
          {
            title: "Root entropy H(S)",
            body: "Class 1: 10 instances, Class 0: 10 instances → p=0.5 each.",
            latex: "H(S) = -0.5\\log 0.5 - 0.5\\log 0.5 = 1",
          },
          {
            title: "Gender split",
            body: "F: 10 instances (6×class1, 4×class0). M: 10 instances (4×class1, 6×class0).\nH(F)=0.971, H(M)=0.971\nIG(Gender) = 1 − 0.971 = 0.029",
          },
          {
            title: "Graduation split (3 values)",
            body: "College: 3/3 class1. High School: 1/8 class1. Middle School: 6/9 class1.\nWeighted child entropy ≈ 0.713\nIG(Graduation) ≈ 1 − 0.713 = 0.287 ← best among meaningful attributes",
          },
          {
            title: "Eye Color",
            body: "Multiple colors with mixed classes → moderate IG, lower than Graduation.",
          },
          {
            title: "ID",
            body: "20 unique values → each leaf pure → H=0 after split → IG = 1.0 (misleadingly best). Gain Ratio would rank ID lower.",
            highlight: "Best meaningful root split: Graduation",
          },
        ],
      },
      {
        id: "e3-q3",
        number: 3,
        text: "Compute err_o(T), err_p(T) (Ω=2), err_rep(T) for trees A and B in Figure 1.",
        steps: [
          {
            title: "err_o — optimistic",
            body: "Training error rate on leaf majority labels. Count misclassified training instances / N_train.",
          },
          {
            title: "err_p — pessimistic",
            body: "err_p(T) = err_o(T) + Ω·k/N_train, where k = number of leaf nodes, Ω=2.",
            latex: "err_p(T) = err_o(T) + \\frac{2k}{N_{train}}",
          },
          {
            title: "err_rep — reduced error pruning",
            body: "Error rate on validation set (instances 21–25 in figure). Pruning removes subtrees if validation error does not increase.",
          },
          {
            title: "Tree comparison method",
            body: "For each tree: (1) label leaves by training majority, (2) count train errors → err_o, (3) count leaves k, (4) apply formula for err_p, (5) classify validation rows through tree → err_rep.",
            highlight: "Lower err_rep on validation → prefer that tree after pruning",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Exercise 4 — Confusion Matrix & Evaluation",
    moduleIds: ["evaluation-basics"],
    source: "Exercise 4.pdf · SoSe 2026",
    tag: "core",
    questions: [
      {
        id: "e4-q1",
        number: 1,
        text: "Build confusion matrix (Y=positive). Compute accuracy, precision, recall, F1, sensitivity, specificity.",
        steps: [
          {
            title: "Label each instance",
            body: "| # | True | Pred | Type |\n|---|------|------|------|\n| 1 | N | N | TN |\n| 2 | N | N | TN |\n| 3 | N | Y | FP |\n| 4 | N | N | TN |\n| 5 | Y | N | FN |\n| 6 | N | Y | FP |\n| 7 | N | N | TN |\n| 8 | Y | Y | TP |\n| 9 | N | N | TN |\n| 10 | Y | Y | TP |",
          },
          {
            title: "Counts",
            body: "TP=2, FP=2, FN=1, TN=5",
          },
          {
            title: "Metrics",
            body: "Accuracy = (2+5)/10 = 0.70\nPrecision = 2/(2+2) = 0.50\nRecall = 2/(2+1) = 0.667\nF1 = 2·0.5·0.667/(0.5+0.667) = 0.571\nSensitivity = Recall = 0.667\nSpecificity = 5/(5+2) = 0.714",
            latex: "F_1 = \\frac{2 \\cdot 0.5 \\cdot 2/3}{0.5 + 2/3} \\approx 0.571",
            highlight: "Accuracy 70% · F1 ≈ 0.57",
          },
        ],
      },
      {
        id: "e4-q2",
        number: 2,
        text: "Accuracy p=85%, N=200. 90% confidence interval? Effect of N=50 or N=500?",
        steps: [
          {
            title: "Formula",
            body: "CI = p ± Z_{1−α/2} · √(p(1−p)/N). For 90% CI, Z = 1.28.",
            latex: "p \\pm 1.28 \\sqrt{\\frac{0.85 \\times 0.15}{N}}",
          },
          {
            title: "N=200",
            body: "SE = √(0.1275/200) = 0.0252\nCI = 0.85 ± 1.28×0.0252 = 0.85 ± 0.032 → [0.818, 0.882]",
            highlight: "90% CI: [81.8%, 88.2%]",
          },
          {
            title: "N=50",
            body: "SE = 0.0505 → margin ±0.065 → wider interval [0.785, 0.915]",
          },
          {
            title: "N=500",
            body: "SE = 0.0160 → margin ±0.020 → narrower [0.830, 0.870]. Larger test set → more precise estimate.",
          },
        ],
      },
      {
        id: "e4-q3",
        number: 3,
        text: "Compare classifiers in Table 3. Z-test at α=5%, Z>1.64 wins.",
        steps: [
          {
            title: "Z statistic",
            body: "p = (p_A + p_B)/2. Z = (p_A − p_B) / √(2p(1−p)/N). Win if Z > 1.64.",
            latex: "Z = \\frac{p_A - p_B}{\\sqrt{2p(1-p)/N}}",
          },
          {
            title: "Congressional Voting (NB 0.901 vs DT 0.949)",
            body: "p ≈ 0.925, N=435. DT wins if Z > 1.64 — compute numerically in exam.",
          },
          {
            title: "Dermatology (NB 0.978 vs DT 0.956)",
            body: "NB slightly higher accuracy — test if difference is significant at N=366.",
          },
        ],
      },
      {
        id: "e4-q4",
        number: 4,
        text: "Explain Random Forest induction and random components.",
        steps: [
          {
            title: "Induction",
            body: "Build many decision trees on bootstrap samples of training data. Each tree uses a random subset of features at each split.",
          },
          {
            title: "Random components",
            body: "1) Bagging — random sampling with replacement of instances.\n2) Feature randomness — random subset of m attributes at each node (m ≈ √d).",
          },
          {
            title: "Prediction",
            body: "Classification: majority vote across trees. Reduces variance, often beats single tree.",
          },
        ],
      },
      {
        id: "e4-q5",
        number: 5,
        text: "Explain hold-out, random subsampling, cross-validation, stratified CV, LOO, bootstrap.",
        steps: [
          {
            title: "Hold-out",
            body: "Single split: part train, part test. Fast but high variance.",
          },
          {
            title: "Random subsampling",
            body: "Repeated hold-out with different random splits; average results.",
          },
          {
            title: "k-fold CV",
            body: "Partition into k folds; each fold serves as test once. Uses all data for training and testing.",
          },
          {
            title: "Stratified CV",
            body: "Each fold preserves class proportions — important for imbalanced data.",
          },
          {
            title: "Leave-one-out (LOO)",
            body: "k = N: each instance is test set once. Low bias, high variance, expensive.",
          },
          {
            title: "Bootstrap",
            body: "Sample N instances with replacement for training; out-of-bag instances for testing.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Exercise 5 — ROC, AUC & Cost-Sensitive Learning",
    moduleIds: ["evaluation-basics", "evaluation-best-model"],
    source: "Exercise 5.pdf · SoSe 2026",
    tag: "core",
    questions: [
      {
        id: "e5-q1",
        number: 1,
        text: "Plot ROC for M1 and M2 (Table 1). Calculate AUC. Which model is better?",
        steps: [
          {
            title: "ROC setup",
            body: "Sort test instances by P(+|x). Vary threshold t from 1→0. At each t: TPR = TP/P, FPR = FP/N.",
          },
          {
            title: "M1 thresholds",
            body: "True +: ids 3,4,5,7,9. Sort M1 probs descending: 0.80→0.70→0.65→0.45→0.40→...\nPlot (FPR, TPR) points at each cutoff.",
          },
          {
            title: "AUC interpretation",
            body: "AUC = probability a random positive ranks higher than random negative. AUC=1 perfect, 0.5 random.",
          },
          {
            title: "Compare",
            body: "Model with larger AUC is generally better across all thresholds. M2 has high scores on instances M1 misses — compare trapezoidal areas.",
            highlight: "Higher AUC wins",
          },
        ],
      },
      {
        id: "e5-q2",
        number: 2,
        text: "M1 at threshold t=0.5: precision, recall, F1.",
        steps: [
          {
            title: "Classify at t=0.5",
            body: "Predict + if P(+|x,M1) > 0.5:\n+ : ids 3(0.70), 7(0.80), 9(0.65) → 3 TP if all truly +\n− : ids 1,2,4,5,6,8,10",
          },
          {
            title: "Confusion counts",
            body: "True labels: + at 3,4,5,7,9. At t=0.5 predicted +: 3,7,9 → TP=3 (if 3,7,9 are +), FN=2 (4,5 missed), check FP from negatives above 0.5: id 4 has 0.45 → N.",
          },
          {
            title: "Metrics",
            body: "Precision = TP/(TP+FP), Recall = TP/(TP+FN), F1 = harmonic mean.",
          },
        ],
      },
      {
        id: "e5-q3",
        number: 3,
        text: "Same for M2 at t=0.5. Compare F1 with M1.",
        steps: [
          {
            title: "M2 at t=0.5",
            body: "Predict + if P>0.5: only id 1 (0.80) and id 7 (0.60) — id 7 is truly +.",
          },
          {
            title: "Compare F1",
            body: "Compute precision/recall for M2, compare to M1. Check consistency with ROC/AUC conclusion.",
          },
        ],
      },
      {
        id: "e5-q4",
        number: 4,
        text: "M1 at t=0.1 vs t=0.5 — which threshold is better?",
        steps: [
          {
            title: "t=0.1",
            body: "More instances classified as + → higher recall, lower precision typically.",
          },
          {
            title: "Trade-off",
            body: "Choose t=0.5 for balanced F1; t=0.1 if missing positives is costly (high c_FN).",
          },
        ],
      },
      {
        id: "e5-q5",
        number: 5,
        text: "Cost matrix Table 2, p=0.1. Total cost for M1–M5 in Figure 1.",
        steps: [
          {
            title: "Cost formula",
            body: "C(M) = p(1−TPR)·c_FN + (1−p)·FPR·c_FP + p·TPR·c_TP + (1−p)(1−FPR)·c_TN",
          },
          {
            title: "Given costs",
            body: "c_TN=0, c_FP=2, c_FN=10, c_TP=−1, p=0.1",
          },
          {
            title: "Example M1 (FPR=0.08, TPR=0.5)",
            body: "C = 0.1·0.5·10 + 0.9·0.08·2 + 0.1·0.5·(−1) + 0.9·0.92·0\n= 0.5 + 0.144 − 0.05 = 0.594",
          },
          {
            title: "Find minimum",
            body: "Compute C for all five ROC points; lowest cost wins (may differ from highest AUC).",
            highlight: "Cost-sensitive evaluation can prefer different model than accuracy",
          },
        ],
      },
    ],
  },
];
