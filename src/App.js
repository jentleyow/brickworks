import React from 'react';
import './scss/app.scss';
import Header from './components/header';
import Body from './components/body';
import Bottom from './components/footer/Bottom';

const App = () => {
  return (
    <div className="App">
      <Body />
      <Header />
      <Bottom />
    </div>
  );
};

export default App;
