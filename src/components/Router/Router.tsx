import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Route-based code splitting
const Home = lazy(() => import('../../pages/Home'));
const Loader = lazy(() => import('../Loader/PageLoader'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'login',
    element: <div>Login</div>,
  },
  {
    path: '/loading',
    element: <Loader />,
  },
  {
    path: '*',
    element: <div>NotFound</div>,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
