import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '@components/header/molecules/header';
import Footer from '@components/footer/molecule/footer';
import Layout from '@styles/layout';

const Home = React.lazy(() => import('@pages/Home'));
const Result = React.lazy(() => import('@pages/Result'));

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route
            index
            element={
              <React.Suspense fallback={<>...</>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/result"
            element={
              <React.Suspense fallback={<>...</>}>
                <Result />
              </React.Suspense>
            }
          />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
