import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from 'pages/Home/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('pages/About/About.vue'),
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('pages/Todo/Todo.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
