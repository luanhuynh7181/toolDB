import { RouteObject } from 'react-router';
import PageDashBoard from '../layouts/dashboard';
import PageLogin from '../layouts/login';
import PageProfile from '../layouts/profile';


const routes: RouteObject[] = [
  {
    path: '/',
    element: <PageDashBoard />
  },
  {
    path: '/login',
    element: <PageLogin />
  },
  {
    path: '/profile',
    element: < PageProfile/>
  },
];

export default routes;
