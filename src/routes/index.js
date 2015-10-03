import ApplicationRoute from './ApplicationRoute';
import IndexRoute from './IndexRoute';

export const createRoutes = () => ({
  path: '/',
  component: ApplicationRoute,
  indexRoute: {
    component: IndexRoute,
  },
});
