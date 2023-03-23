import PageLogin from '../pages/login/index';
import PageHome from '../pages/home/index';
import { RouteObject } from 'react-router';


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
  }
];

export default routes;
