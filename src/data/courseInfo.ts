export const courseMeta = {
  title: "Data Mining I",
  institution: "Otto-von-Guericke University Magdeburg · Faculty of Computer Science",
  term: "Summer term 2026",
  lectureHall: "G22A/H2",
  firstLecture: "Thursday, April 9, 11:00 (from May 21: starts exactly at 11:00)",
  firstExercise: "One week after the first lecture",
  ects: 6,
};

export const dataMiningDefinition = {
  short:
    "Data mining encompasses methods that derive models from data — but it is more than algorithms alone.",
  full: [
    "How to formulate questions that can be answered with models from data",
    "How to evaluate models so they answer the original questions",
    "How to prepare data so models can be induced from them",
  ],
  processGoal:
    "Make students familiar with Data Mining as a process that extracts knowledge from data. This knowledge has the form of answers to questions, such as:",
  exampleQuestions: [
    "How to identify the best treatment for a patient?",
    "How to figure out whether a machine will fail and when?",
    "What customer groups should this recommender serve?",
  ],
};

export const learningOverview = [
  "Basic forms of learning — supervised first, unsupervised next, and some words on in-between forms",
  "Basic methods for classification (supervised learning)",
  "Basic methods for clustering (unsupervised learning)",
  "Evaluation for different types of models, model comparison",
  "Data preparation steps with emphasis on dealing with missingness",
];

export const courseBlocks = [
  {
    id: "classification",
    name: "Block 1 — Classification",
    units: [
      "Underpinnings and examples",
      "Classification with Decision Trees",
      "Classification with Naive Bayes",
      "Multi-label learning + evaluation procedures",
      "Evaluation of classifiers → Evaluation Unit 1 (from Block Evaluation)",
    ],
    materials: [
      "Underpinnings and examples",
      "Classification with Naive Bayes",
      "Classification with Decision Trees",
    ],
  },
  {
    id: "evaluation",
    name: "Block Evaluation — Model evaluation and model comparisons",
    units: [
      "Unit 1: Basics on classifier evaluation — workflow, confusion matrix, quality functions, sampling, combining models, imbalanced classes",
      "Unit 2: Finding the best model — comparing two/many models, test sample size, cost-awareness",
    ],
    materials: ["Evaluation unit 1", "Evaluation unit 2"],
  },
  {
    id: "clustering",
    name: "Block 2 — Clustering",
    units: [
      "Underpinnings of clustering",
      "K-Means",
      "Similarity functions",
      "Hierarchical clustering",
      "Density-based clustering (DBSCAN)",
      "Evaluation in clustering: good clusters and good clustering algorithms",
    ],
    materials: [
      "Block Clustering (modified slideset)",
      "Replacement for slide 56/71 on silhouette coefficient (corrected definition + practice questions)",
    ],
    notes: [
      "Slide 56/71 in the original clustering deck contained an error in the silhouette definition — use the replacement slides.",
    ],
  },
  {
    id: "data",
    name: "Block Data (Engineering)",
    units: [
      {
        code: "M",
        title: "Dealing with missingness",
        book: "Book D, Chapter 4",
        summary:
          "Forms of missingness, semantics, mitigation. Missing values are often informative — do not always replace them.",
      },
      {
        code: "P",
        title: "Preparing the data for learning",
        book: "Book D, Chapter 3",
        summary: "Error detection, correction, de-duplication, normalization.",
      },
      {
        code: "FS",
        title: "Dealing with large feature spaces",
        book: "Book D, Chapter 7",
        summary: "Feature selection methods and workflows. Eliminate irrelevant features before learning.",
        parts: [
          "Unit FS: Correlations in the feature space",
          "Unit FS: Selecting features and building subspaces",
        ],
      },
    ],
    materials: [
      "Unit FS: correlations in the feature space",
      "Unit FS: Selecting features and building subspaces",
    ],
  },
];

export const contacts = {
  lecture: {
    name: "Myra Spiliopoulou",
    role: "Lecture",
    email: "myra.spiliopoulou@ovgu.de",
  },
  exerciseLead: {
    name: "Christian Beyer",
    role: "Exercise classes",
    email: "christian.beyer@ovgu.de",
  },
  tutors: [
    { groups: "1 & 3", name: "Vineet Agarwal", email: "vineet.agarwal@ovgu.de" },
    { groups: "2", name: "Motahareh Fakhar", email: "motahareh.fakhar@ovgu.de" },
    { groups: "4", name: "Vasu Bansal", email: "vasu.bansal@ovgu.de" },
    { groups: "5 (AI Newsletter)", name: "Shifin Mohammed", email: "shifin.mohammed@ovgu.de" },
    { groups: "6", name: "Keerthana Harikumar", email: "keerthana.harikumar@ovgu.de" },
    { groups: "7", name: "Keerthana Harikumar", email: "keerthana.harikumar@ovgu.de" },
  ],
};

export const exerciseRules = {
  attendance: "Attend only your assigned exercise group. Switching is not permitted.",
  format:
    "Sheets are worked on in class (solo or with neighbors), then voting (Votierung), then joint solution discussion.",
  examPrerequisite:
    "Vote for at least 70% of tasks OR accumulate 35 votes by end of course to be allowed to sit the exam.",
  locations: "Consult LSF for exercise room assignments.",
};

export const literature = {
  bookM: {
    id: "M",
    title: "Introduction to Data Mining",
    authors: "Pan-Ning Tan, Michael Steinbach, Anuj Karpatne, Vipin Kumar",
    publisher: "PEARSON, 2019 (2nd edition)",
    chapters: ["Chapters 2 and 3", "Parts of Chapters 4, 6, 7", "Parts of Chapters 8 and 10"],
    url: "https://www-users.cs.umn.edu/~kumar001/dmbook/index.php",
    ebook:
      "University library → Shibboleth login → Otto-von-Guericke University. Some slides are from 1st edition where content unchanged.",
  },
  bookD: {
    id: "D",
    title: "Data Preprocessing in Data Mining",
    authors: "Salvador Garcia, Julian Luengo, Francisco Herrera",
    publisher: "SPRINGER, 2015",
    chapters: ["Chapter 3 — data preparation", "Chapter 4 — missing values", "Chapter 7 — feature selection"],
    note: "Used in Block Data Engineering. PDFs available via university library.",
  },
};
