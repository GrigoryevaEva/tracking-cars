import { createHashRouter, RouterProvider} from 'react-router-dom';

import { Error } from '../../pages/error';
import { Home } from '../../pages/home';

import '../style/global.scss'
import '../style/nullification.scss'

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