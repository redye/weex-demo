/* global Vue */
import Router from 'vue-router'
import HomeController from '@/controllers/HomeController';
import TopicController from '@/controllers/TopicController';
import CategoryController from '@/controllers/CategoryController';
import CartController from '@/controllers/CartController';
import MineController from '@/controllers/MineController'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      params: {
        hideNavBar: true
      },
      component: HomeController
    }, {
      path: '/topic',
      name: 'topic',
      component: TopicController
    }, {
      path: '/category',
      name: 'category',
      component: CategoryController
    }, {
      path: '/cart',
      name: 'cart',
      component: CartController
    }, {
      path: '/mine',
      name: 'mine',
      component: MineController
    }
  ]
})
