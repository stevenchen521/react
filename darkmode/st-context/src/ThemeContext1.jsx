import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // create darkmode state
  const [darkMode, setDarkMode] = useState(false);
  // initialize darkmode state
  useEffect(() => {
    const root = window.document.documentElement;
    const initialDarkMode = root.classList.contains('dark');
    setDarkMode(initialDarkMode);
  }, []);
  // toggle dark mode
  useEffect(() => {
    const root = window.document.documentElement;
    if (!darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // return
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
