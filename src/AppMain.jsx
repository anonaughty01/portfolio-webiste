import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuildApp from './BuildApp';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuildApp />} />
      </Routes>
    </Router>
  );
}

export default App;