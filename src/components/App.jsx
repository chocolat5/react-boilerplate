import React from 'react';
import logo from '../img/logo.svg';

import '../styles/style.scss';

const App = () => {
  return (
    <div className="app">
      <header className="app_header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <p>Hello React Application</p>
      </main>
    </div>
  );
}

export default App;
