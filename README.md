# DM I Study Hub

**Live site:** [https://dm1-study-hub.vercel.app/](https://dm1-study-hub.vercel.app/)

Interactive study website for **Data Mining I** (OVGU, Prof. Myra Spiliopoulou).

Covers all lecture concepts: Classification, Clustering, Model Evaluation, Feature Selection — with interactive visuals, KaTeX formulas, YouTube resources, and exam prep.

## Local development

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to a GitHub repository (or connect directly).
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import the repo and set **Root Directory** to `dm1-study-hub` (if the repo is the parent DM1 folder).
4. Vercel auto-detects Vite. Build command: `npm run build`, Output: `dist`.
5. Deploy.

Or use the Vercel CLI:

```bash
cd dm1-study-hub
npx vercel
```

## What's included

- **13 lecture modules** aligned with course PDFs (incl. Feature Selection correlations)
- **Exercises 1–10** with step-by-step solutions (reveal one step at a time)
- **Additional practice sheets** (E6–E10) with full worked solutions from your PDFs
- **8 interactive labs** — drag K-Means centroids, tune DBSCAN ε/minPts, live confusion matrix
- **4-week study plan** and exam checklist
- References: `Formelblatt.pdf`, `Exercise 9.pdf`, `Exercise Sheet 10.pdf`, `E7/E8/E9 Additional`

## Course materials reference

Content derived from the lecture slides in the parent `DM1` folder.
