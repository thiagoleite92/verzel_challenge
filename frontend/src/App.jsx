import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Home, LecturePage, ModulePage, NewModulePage,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/new/module" element={<NewModulePage />} />
      <Route path="/module/:moduleId" element={<ModulePage />} />
      <Route path="/lecture/:lectureId" element={<LecturePage />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
