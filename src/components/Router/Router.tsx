import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'login',
    element: <div>Login</div>,
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
