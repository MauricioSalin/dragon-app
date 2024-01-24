import Home from '../views/Home';
import Login from '../views/Login';

import { Pages, Route } from './types';

const routes: Route = {
  [Pages.Login]: {
    title: 'Login',
    component: Login,
    private: false,
    path: '/login',
  },
  [Pages.Home]: {
    title: 'Home',
    component: Home,
    private: true,
    path: '/',
  },
};

export default routes;
