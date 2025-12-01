import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleButton = ({ theme, setTheme }) => {
  // Set default theme on mount
  useEffect(() => {
    if (!theme) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, [theme, setTheme]);

  // Apply theme to <html> and save to localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (theme) localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-1.5 border border-gray-500 rounded-full"
    >
      <img
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        className="size-5"
        alt="Toggle theme"
      />
    </button>
  );
};

export default ThemeToggleButton;
