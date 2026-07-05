import { NavLink, Outlet } from "react-router-dom";
import { blocks, modules } from "../data/syllabus";
import { ThemeToggle } from "./ThemeToggle";

export function Layout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">DM</div>
          <div>
            <strong>Study Hub</strong>
            <small>Data Mining I · OVGU</small>
          </div>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <span className="nav-icon">◈</span> Dashboard
          </NavLink>
          <NavLink to="/exercises" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <span className="nav-icon">✎</span> Exercises
          </NavLink>
          <NavLink to="/syllabus" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <span className="nav-icon">☰</span> Syllabus
          </NavLink>
          <NavLink to="/exam" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <span className="nav-icon">◉</span> Exam Prep
          </NavLink>

          <div className="nav-divider" />

          {blocks.filter((b) => b.id !== "exam").map((block) => (
            <div key={block.id} className="nav-group">
              <div className="nav-group-label">{block.name}</div>
              {modules
                .filter((m) => m.block === block.id)
                .sort((a, b) => a.order - b.order)
                .map((m) => (
                  <NavLink
                    key={m.id}
                    to={`/module/${m.id}`}
                    className={({ isActive }) => (isActive ? "nav-link sub active" : "nav-link sub")}
                  >
                    {m.title.replace(/^[^:]+:\s*/, "").replace(/ — .*/, "")}
                  </NavLink>
                ))}
            </div>
          ))}
        </nav>
      </aside>

      <div className="content-column">
        <header className="topbar">
          <span className="topbar-title">DM I Study Hub</span>
          <ThemeToggle />
        </header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
