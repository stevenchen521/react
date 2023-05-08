import React from 'react';
import Navbar from './Navbar';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  console.log(window.location.pathname);

  let Component;
  switch (window.location.pathname) {
    case '/':
      Component = Home;
      break;
    case '/pricing':
      Component = Pricing;
      break;
    case '/about':
      Component = About;
      break;
  }
  return (
    <>
      <Navbar />
      <div className='container'>
        <Component />
      </div>
    </>
  );
};

export default App;
