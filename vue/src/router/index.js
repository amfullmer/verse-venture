import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchAuthorView from '../views/SearchAuthorView.vue';
import SearchTitleView from '../views/SearchTitleView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/author',
    name: 'SearchAuthor',
    component: SearchAuthorView
  },
  {
    path: '/title',
    name: 'SearchTitle',
    component: SearchTitleView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
