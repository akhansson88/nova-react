import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import OmOss from './pages/OmOss.jsx';

/**
 * The main application component defines shared layout (header/footer) and
 * routes for the SPA. Additional pages can be added to the routes as the
 * project grows.
 */
function App() {
  return (
    <>
      {/* Header is displayed on all pages */}
      <Header />
      {/* Define application routes */}
      <Routes>
        {/* Default route and /om-oss both render the OmOss page */}
        <Route path="/" element={<OmOss />} />
        <Route path="/om-oss" element={<OmOss />} />
        {/* Redirect any unknown route back to the OmOss page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Footer is displayed on all pages */}
      <Footer />
    </>
  );
}

export default App;