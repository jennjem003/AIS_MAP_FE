import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Ship from './Component/ship.js';

function App() {
  return (
    <BrowserRouter>
      <Ship />
    </BrowserRouter>
  );
}

export default App;