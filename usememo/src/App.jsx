import { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button>Change Theme</button>
      <div>{doubleNumber}</div>
    </>
  );
};

export default App;

function slowFunction(num) {
  for (let i = 0; i <= 999999999; i++) {}

  return num * 2;
  // setTimeout(() => {
  //   console.log('Calling slow Function');
  //   return num * 2;
  // }, 1000);
}
