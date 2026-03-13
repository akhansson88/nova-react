import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hem from './pages/Hem.jsx';
import OmOss from './pages/OmOss.jsx';
import Produkter from './pages/Produkter.jsx';
import Galleri from './pages/Galleri.jsx';
import Kontakt from './pages/Kontakt.jsx';
import AdminNova from './pages/AdminNova.jsx';

/**
 * The main application component defines shared layout (header/footer) and
 * routes for the SPA. Additional pages can be added to the routes as the
 * project grows.
 */
function App() {
  React.useEffect(() => {
    const redirectPath = sessionStorage.getItem('spa-redirect-path');

    if (redirectPath && redirectPath !== window.location.pathname + window.location.search + window.location.hash) {
      sessionStorage.removeItem('spa-redirect-path');
      window.history.replaceState(null, '', redirectPath);
    }
  }, []);

  return (
    <>
      {/* Header is displayed on all pages */}
      <Header />
      {/* Define application routes */}
      <Routes>
        {/* Home page on root, Om oss on its own route */}
        <Route path="/" element={<Hem />} />
        <Route path="/produkter" element={<Produkter />} />
        <Route path="/galleri" element={<Galleri />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/admin-nova" element={<AdminNova />} />
        {/* Redirect any unknown route back to the OmOss page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Footer is displayed on all pages */}
      <Footer />
    </>
  );
}

export default App;