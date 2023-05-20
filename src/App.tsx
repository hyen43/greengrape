import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '@components/header/molecules/header';
import Footer from '@components/footer/molecule/footer';
import Layout from '@styles/layout';

const Home = React.lazy(() => import('@pages/Home'));
const Faq = React.lazy(() => import('@pages/Faq'));

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
            path="faq"
            element={
              <React.Suspense fallback={<>...</>}>
                <Faq />
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
