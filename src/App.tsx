import React from 'react';
import s from './app.module.scss';

function App() {
  return (
    <div className={s.app}>
      <p className={s.text}>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
}

export default App;
