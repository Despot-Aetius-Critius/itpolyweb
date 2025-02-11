import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/test" element={<div>Test Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
