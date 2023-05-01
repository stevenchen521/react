import React from 'react';
import { useTheme } from './ThemeContext';

const App = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <h1 className='text-primary'>Hello, Dark Mode!</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default App;
