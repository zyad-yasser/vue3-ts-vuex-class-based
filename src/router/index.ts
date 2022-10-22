import { authorizeGuard } from '@/guards/authorize-guard';
import { publicGuard } from '@/guards/public-guard';
import { createRouter, createWebHistory } from 'vue-router';
import multiguard from 'vue-router-multiguard';
const TestPage = () => import('@/pages/test-page.vue');
const HomePage = () => import('@/pages/home-page.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      requireAuth: false,
      isPublic: true,
    },
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage,
    meta: {
      requireAuth: false,
      isPublic: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(
  multiguard([
    authorizeGuard,
    publicGuard,
  ])
);

export default router;
