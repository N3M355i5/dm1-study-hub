import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Syllabus } from "./pages/Syllabus";
import { ModulePage } from "./pages/ModulePage";
import { ExamPrep } from "./pages/ExamPrep";
import { ExercisesPage } from "./pages/ExercisesPage";
import { ExerciseDetailPage } from "./pages/ExerciseDetailPage";
import "./index.css";

function ModuleRoute() {
  const { id } = useParams<{ id: string }>();
  return <ModulePage moduleId={id ?? ""} />;
}

function ExerciseRoute() {
  const { id } = useParams<{ id: string }>();
  return <ExerciseDetailPage exerciseId={parseInt(id ?? "0", 10)} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="exam" element={<ExamPrep />} />
          <Route path="exercises" element={<ExercisesPage />} />
          <Route path="exercises/:id" element={<ExerciseRoute />} />
          <Route path="module/:id" element={<ModuleRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
