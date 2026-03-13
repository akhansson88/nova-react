import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hem from './pages/Hem.jsx';
import OmOss from './pages/OmOss.jsx';
import Produkter from './pages/Produkter.jsx';
import Galleri from './pages/Galleri.jsx';
import Kontakt from './pages/Kontakt.jsx';
import AdminNova from './pages/AdminNova.jsx';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin-nova' || location.pathname === '/admin-nova/';

  React.useEffect(() => {
    const redirectPath = sessionStorage.getItem('spa-redirect-path');

    if (redirectPath && redirectPath !== window.location.pathname + window.location.search + window.location.hash) {
      sessionStorage.removeItem('spa-redirect-path');
      window.history.replaceState(null, '', redirectPath);
    }
  }, []);

  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/produkter" element={<Produkter />} />
        <Route path="/galleri" element={<Galleri />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/admin-nova" element={<AdminNova />} />
        <Route path="/admin-nova/" element={<AdminNova />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
