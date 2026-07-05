import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { blocks, modules } from "../data/syllabus";
import { ThemeToggle } from "./ThemeToggle";

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", menuOpen);
    return () => document.body.classList.remove("nav-locked");
  }, [menuOpen]);

  return (
    <div className={`app-shell${menuOpen ? " nav-open" : ""}`}>
      <div
        className="sidebar-backdrop"
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
        tabIndex={-1}
      />

      <aside className="sidebar" aria-label="Course navigation">
        <div className="sidebar-brand">
          <div className="brand-mark">DM</div>
          <div>
            <strong>Study Hub</strong>
            <small>Data Mining I · OVGU</small>
          </div>
        </div>

        <nav id="sidebar-nav" className="sidebar-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <span className="nav-icon">◈</span> Dashboard
          </NavLink>
          <NavLink to="/exercises" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <span className="nav-icon">✎</span> Exercises
          </NavLink>
          <NavLink to="/materials" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <span className="nav-icon">📄</span> Materials
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
          <div className="topbar-left">
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="sidebar-nav"
            >
              <span className="menu-bar" />
              <span className="menu-bar" />
              <span className="menu-bar" />
            </button>
            <span className="topbar-title">DM I Study Hub</span>
          </div>
          <ThemeToggle />
        </header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
