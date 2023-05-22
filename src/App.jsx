import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Cars from './pages/Cars';
import Coba from './pages/Coba';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/coba" element={<Coba />} />
      </Routes>
    </Router>

  );
}

export default App;
