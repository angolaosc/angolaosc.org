import { useState, useEffect } from "react";
import { Moon, Sun } from "phosphor-react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark",
      );
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="rounded text-white"
    >
      {theme === "light" ? (
        <Moon
          size={24}
          color={theme === "light" ? "#000000" : "#000000"}
        />
      ) : (
        <Sun size={24}
        color={theme === "light" ? "#ffffff" : "#ffffff"}/>
      )}
    </button>
  );
};

export default ThemeSwitcher;
