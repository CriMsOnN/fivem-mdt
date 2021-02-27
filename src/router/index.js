import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SearchReport from "@/components/Search/SearchReport";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search/:id',
    name: 'SearchReport',
    component: SearchReport,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
