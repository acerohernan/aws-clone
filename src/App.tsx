import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from './components/Layout';
import PageLoader from './components/Loader/PageLoader';
import { ModalProvider } from './components/Modal/context';
import Router from './components/Router';
import store, { persistor } from './state';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalProvider>
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Router />
            </Suspense>
          </Layout>
        </ModalProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
