import ApplicationRoute from './ApplicationRoute';
import IndexRoute from './IndexRoute';
import SeasonsRoute from './SeasonsRoute';


export const createRoutes = dispatch => ({
  path: '/',
  component: ApplicationRoute,
  indexRoute: {
    component: IndexRoute,
  },
  childRoutes: [
    {
      path: '/seasons',
      component: SeasonsRoute,
      onEnter: () => dispatch(requestAllSeasons()),
    },
  ],
});
