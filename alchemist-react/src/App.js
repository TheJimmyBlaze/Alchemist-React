import React from 'react';
import './App.css';

import Compass from './features/compass/Compass';

function App() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light overflow-hidden">
      <Compass />
    </div>
  );
}

export default App;
