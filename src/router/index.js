import { createWebHistory, createRouter } from "vue-router";
import routes from './routes';
import appConfig from "../../app.config";
import client from "@/helpers/client"

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'history',
  // Simulate native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});

// API based Authentication
// Before each route evaluates...
router.beforeEach(async (routeTo, routeFrom, next) => {
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired);
  if (!authRequired) return next();
  const username = localStorage.getItem('username'); // for all requests
  await client.database.getAccounts([username]).then((data) => {
    const account = data[0]
    localStorage.setItem('userdata', JSON.stringify(account));
    localStorage.setItem('userid', account.id);
    localStorage.setItem('user', JSON.stringify(account.name));
    next();
  }).catch(() => {
    next({ name: 'login', query: { redirectFrom: routeTo.fullPath } });
  });
});

router.beforeEach((routeTo, routeFrom, next) => {

  const publicPages = ['/login', '/register', '/callback'];
  const authpage = !publicPages.includes(routeTo.path);
  const loggeduser = localStorage.getItem('user');

  if (authpage && !loggeduser) {
    return next('/login');
  }

  next();

});

router.beforeResolve(async (routeTo, routeFrom, next) => {

  try {
    // For each matched route...
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            // If the user chose to redirect...
            if (args.length) {
              // If redirecting to the same route we're coming from...
              // Complete the redirect.
              next(...args);
              reject(new Error('Redirected'));
            } else {
              resolve();
            }
          });
        } else {
          // Otherwise, continue resolving the route.
          resolve();
        }
      });
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (error) {
    return;
  }
  document.title = routeTo.meta.title + ' | ' + appConfig.title;
  // If we reach this point, continue resolving the route.
  next();
});

export default router;