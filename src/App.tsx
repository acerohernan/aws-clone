import { ModalProvider } from './components/Modal/context';
import Router from './components/Router';

function App() {
  return (
    <ModalProvider>
      <Router />
    </ModalProvider>
  );
}

export default App;
