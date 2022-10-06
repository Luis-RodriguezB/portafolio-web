import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'

const removeHash = (to) => {
  if (to.hash) return { path: to.path, query: to.query, has: '' };
};

const routes = [
  {
    path: '/:pathMatch(.*)',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: [removeHash]
  }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
              behavior: "smooth",
              el: to.hash,
              top: 50
            };
        }
        return { top: 0 };
    }
});

export default router;
