import { useContext } from "react";
import Toggle from "react-toggle";
import { DarkThemeContext } from "../contexts/DarkThemeContext";


export function DarkModeButton() {
  const { isDark, toggleDarkTheme } = useContext(DarkThemeContext);

  return (
    <div>
      <Toggle
        icons={{ checked: "🌙", unchecked: "🔆" }}
        checked={isDark}
        className="dark-theme-button"
        onClick={toggleDarkTheme}
        aria-label="Dark mode"
      />
    </div>
  );
}
