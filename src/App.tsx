import { Suspense } from 'react';
import Layout from './components/Layout';
import PageLoader from './components/Loader/PageLoader';
import { ModalProvider } from './components/Modal/context';
import Router from './components/Router';

function App() {
  return (
    <ModalProvider>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Router />
        </Suspense>
      </Layout>
    </ModalProvider>
  );
}

export default App;
