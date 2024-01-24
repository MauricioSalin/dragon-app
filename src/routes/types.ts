import { PathRouteProps } from 'react-router-dom';

export enum Pages {
  Login,
  Home,
}

export type PathRouteCustomProps = {
  title: string;
  component: React.FC;
  private: boolean;
  path: string;
};

export type Route = Record<Pages, PathRouteProps & PathRouteCustomProps>;
