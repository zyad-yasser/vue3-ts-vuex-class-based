import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

export const publicGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { requireAuth, isPublic } = to.meta;
  if (isPublic) {
    return next();
  }

  if (!requireAuth) {
    const authToken = await localStorage.get('authToken');
    if (authToken) {
      return next('/home/');
    }
    return next();
  }
  return next();
};
