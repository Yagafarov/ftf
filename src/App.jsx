import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Faculty from './pages/Faculty';
import Applicant from './pages/Applicant';
import Education from './pages/Education';
import Research from './pages/Research';
import Extracurricular from './pages/Extracurricular';
import Legal from './pages/Legal';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/applicant" element={<Applicant />} />
          <Route path="/education" element={<Education />} />
          <Route path="/research" element={<Research />} />
          <Route path="/extracurricular" element={<Extracurricular />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
