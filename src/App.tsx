import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from './components/Layout';
import PageLoader from './components/Loader/PageLoader';
import { ModalProvider } from './components/Modal/context';
import Router from './components/Router';
import store, { persistor } from './state';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Router />
              </Suspense>
            </Layout>
          </ModalProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
