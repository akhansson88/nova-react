import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', padding: '2rem' }}>
      <h1>Novatryck – Om oss</h1>
      <p>Sidan är nu korrekt konfigurerad för Vite-bygg.</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
