import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, ModulePage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/module/:moduleId" element={<ModulePage />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
