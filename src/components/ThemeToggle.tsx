import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={theme === "light" ? "Dark mode" : "Light mode"}
    >
      <span className="theme-toggle-track" aria-hidden>
        <span className={`theme-toggle-thumb ${theme}`} />
      </span>
      <span className="theme-toggle-label">
        {theme === "light" ? (
          <>
            <span className="theme-icon">☀</span> Light
          </>
        ) : (
          <>
            <span className="theme-icon">☽</span> Dark
          </>
        )}
      </span>
    </button>
  );
}
