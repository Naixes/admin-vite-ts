import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    // 懒加载
    component: () => import('../layout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('../pages/home.vue'),
      },
      {
        path: '/about',
        component: () => import('../pages/about.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
