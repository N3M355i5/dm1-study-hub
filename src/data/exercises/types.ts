export type SolutionStep = {
  title: string;
  body: string;
  latex?: string;
  highlight?: string;
};

export type Question = {
  id: string;
  number: number;
  text: string;
  steps: SolutionStep[];
};

export type Exercise = {
  id: number;
  title: string;
  moduleIds: string[];
  source: string;
  tag?: "core" | "additional";
  questions: Question[];
};
