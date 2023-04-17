import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';

const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <React.Suspense fallback={<>...</>}>
            <Home />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default App;
