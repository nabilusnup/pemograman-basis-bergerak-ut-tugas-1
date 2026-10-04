import { createRouter, createWebHashHistory } from 'vue-router';
import Awal from '../components/Awal.vue';
import Latihan from '../components/Latihan.vue';
import Tentang from '../components/Tentang.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Awal', component: Awal },
    {
      path: '/segitiga',
      name: 'Segitiga',
      component: Latihan,
      props: { kind: 'triangle' },
    },
    {
      path: '/aritmatika',
      name: 'Aritmatika',
      component: Latihan,
      props: { kind: 'arithmetic' },
    },
    { path: '/prima', name: 'Prima', component: Latihan, props: { kind: 'prime' } },
    { path: '/tentang', name: 'Tentang', component: Tentang },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: () => ({ top: 0 }),
});
