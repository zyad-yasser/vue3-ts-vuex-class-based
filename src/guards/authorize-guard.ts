import {
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router';

export const authorizeGuard = async (
  to: RouteLocationNormalized,
  _: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { requireAuth } = to.meta;
  if (requireAuth) {
    const authToken = await localStorage.get('authToken');
    if (!authToken) {
      return next('/login/')
    }
    return next();
  }
  next();
};
