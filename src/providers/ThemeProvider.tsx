import { createContext, useContext, useState, useEffect } from "react";

type ThemeMode = "light" | "dark";

type ThemeContext = {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContext>({theme: "light", toggleTheme: () => null});

const ThemeProvider = ({ children }: any) => {
  const defaultTheme: ThemeMode = "light";

  const getInitialTheme = (): ThemeMode => {
    if (typeof localStorage !== "undefined") {
        const storedTheme = localStorage.getItem("THEME_MODE");
        return storedTheme === "dark" ? "dark" : "light"; // Enforce type safety
    }
    return defaultTheme;
};

  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme());

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  useEffect(() => {
    if(!theme) return;

    localStorage.setItem("DINO_TV_THEME", theme);

    if (theme === "light") {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
      document.documentElement.classList.add("dark-mode");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
  return context;
};

export { ThemeProvider, useTheme };
