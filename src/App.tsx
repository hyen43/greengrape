import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '@components/organisms/header';

const Home = React.lazy(() => import('@pages/Home'));

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
