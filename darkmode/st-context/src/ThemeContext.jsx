import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const root = window.document.documentElement;
    const isDarkMode = root.classList.contains('dark');
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (!darkMode) {
      root.classList.add('dark');
    } else root.classList.remove('dark');
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export const useTheme = () => {
  return useContext(ThemeContext);
};
