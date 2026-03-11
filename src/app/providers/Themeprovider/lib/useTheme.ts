import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UserThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UserThemeResult => {
  const { setTheme, theme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return {
    theme,
    toggleTheme,
  };
};
