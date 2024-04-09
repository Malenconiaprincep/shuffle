import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import FeaturesPage from './pages/Features.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/features" element={<FeaturesPage />} />
    </Routes>
  );
}

export default App;
