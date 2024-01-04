import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('./views/Compare.vue') // Example: Create a Home.vue component
  },
  {
    path: '/about',
    component: () => import('./App.vue') // Example: Create an About.vue component
  }
  // Add more routes as needed
];

const router = new VueRouter({
  routes
});

export default router;
