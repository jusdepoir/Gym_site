// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import GalleryPage from '@/pages/GalleryPage.vue';
// ... ajoute d'autres pages

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/gallery', name: 'Gallery', component: GalleryPage },
  // autres routes...
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});