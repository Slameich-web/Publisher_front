import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => {
        return (
          <Route
            key={path}
            path={path}
            element={<Suspense>{element}</Suspense>}
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
