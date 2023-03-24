import PageLogin from '../pages/login/index';
import PageHome from '../pages/home/index';
import { RouteObject } from 'react-router';
import PageLoading from '../pages/loading/index';
import PageProfile from '../pages/profile/index';


const routes: RouteObject[] = [
  {
    path: '',
    element: <PageLogin />,
    children: []
  },
  {
    path: '/home',
    element: <PageHome />,
    children: []
  },
  {
    path: '/loading',
    element: <PageLoading />,
    children: []
  },
  {
    path: '/profile',
    element: <PageProfile />,
    children: []
  },
];

export default routes;
