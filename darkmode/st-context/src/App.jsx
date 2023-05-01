import { useTheme } from './ThemeContext';

const App = () => {
  const { darkMode, setDarkMode } = useTheme();

  // const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <h1 className='text-primary'>Hello dark mode</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'switch to light mode' : 'switch to dark mode'}
      </button>
    </>
  );
};

export default App;
