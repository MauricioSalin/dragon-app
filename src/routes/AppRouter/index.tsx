import { Route, Routes } from 'react-router-dom';

import PrivateLayout from '../../layouts/Private';
import PublicLayout from '../../layouts/Public';
import routes from '..';

const AppRouter = () => (
  <Routes>
    {
      Object.values(routes).map(route => {
        const Layout = route.private ? PrivateLayout : PublicLayout;

        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Layout title={route.title}>
                {route.component && <route.component />}
              </Layout>
            }
          />
        );
      })}
  </Routes>
);

export default AppRouter;
