import Cookies from "js-cookie";
import { createContext, ReactNode, useEffect, useState } from "react";

interface DarkThemeContextData {
  isDark: boolean;
  toggleDarkTheme: () => void;
}

interface DarkThemeContextProps {
  children: ReactNode;
  darkTheme: boolean;
}

export const DarkThemeContext = createContext({} as DarkThemeContextData);

export function DarkThemeProvider({
  children,
  ...rest
}: DarkThemeContextProps) {
  const [isDark, setIsDark] = useState(rest.darkTheme ?? false);

  console.log(rest.darkTheme);

  useEffect(() => {
    Cookies.set("darkTheme", String(isDark));

    const body = document.getElementsByTagName("body")[0];
    isDark
      ? body.classList.add("darkTheme")
      : body.classList.remove("darkTheme");
  }, [isDark]);

  function toggleDarkTheme() {
    isDark ? setIsDark(false) : setIsDark(true);
  }

  return (
    <DarkThemeContext.Provider value={{ isDark, toggleDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
}
