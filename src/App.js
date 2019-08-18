import React from 'react';
import UseMemo from './Examples/UseMemo';
import UseLayoutEffect from './Examples/UseLayoutEffect';
import UseImperativeHandle from './Examples/UseImperativeHandle';
import './App.css';

// This small project demonstrate how advanced react hooks works
// and how to use it properly
function App() {
  return (
    <div className="App">
      <h1>Advanced React hooks</h1>
      <UseLayoutEffect />
      <UseMemo />
      <UseImperativeHandle />
    </div>
  );
}

export default App;
