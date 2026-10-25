import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";
const THEME_STORAGE_KEY = "portfolio-theme";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const transitionTimeout = useRef<number | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme: Theme = savedTheme === "light" ? "light" : "dark";

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(
    () => () => {
      if (transitionTimeout.current !== null) {
        window.clearTimeout(transitionTimeout.current);
      }
    },
    [],
  );

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    document.documentElement.classList.add("theme-transition");
    applyTheme(nextTheme);

    if (transitionTimeout.current !== null) {
      window.clearTimeout(transitionTimeout.current);
    }
    transitionTimeout.current = window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
      transitionTimeout.current = null;
    }, 400);
  };

  // return (
  //   <button
  //     type="button"
  //     onClick={toggleTheme}
  //     aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
  //     title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
  //     className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-card/60 text-muted-foreground transition hover:border-primary/50 hover:text-primary"
  //   >
  //     {theme === "dark" ? (
  //       <Sun className="h-4 w-4" />
  //     ) : (
  //       <Moon className="h-4 w-4" />
  //     )}
  //   </button>
  // );
}
