import { exercises1to5 } from "./exercises1-5";
import { exercises6to10, additionalExercises } from "./exercises6-10";
import type { Exercise } from "./types";

export const allExercises: Exercise[] = [
  ...exercises1to5,
  ...exercises6to10,
  ...additionalExercises,
];

export function getExercise(id: number): Exercise | undefined {
  return allExercises.find((e) => e.id === id);
}

export function getCoreExercises(): Exercise[] {
  return allExercises.filter((e) => e.tag !== "additional");
}

export function getAdditionalExercises(): Exercise[] {
  return allExercises.filter((e) => e.tag === "additional");
}

export type { Exercise, Question, SolutionStep } from "./types";
