import { createHashRouter, RouterProvider} from 'react-router-dom';

import { Error } from '../../pages/error';
import { Home } from '../../pages/home';


const router = createHashRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ]
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />
}