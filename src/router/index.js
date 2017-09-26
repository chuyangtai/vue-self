import Vue from 'vue';
import Router from 'vue-router';
import Goods from '@/goods/goods.vue';
import Ratings from '@/ratings/ratings.vue';
import Seller from '@/seller/seller.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Goods
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ]
});
