import React from 'react';
import useDarkMode from './useDarkMode';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

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
