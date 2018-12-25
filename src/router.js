/* global Vue */
import Router from 'vue-router'
import HomeController from '@/controllers/HomeController'
import MineController from '@/controllers/MineController'
import ClassController from '@/controllers/ClassController'
import ShopController from '@/controllers/ShopController'
import TopicController from '@/controllers/TopicController'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'Home',
      component: HomeController
    }, {
      path: '/class',
      name: 'Class',
      component: ClassController
    }, {
      path: '/mine',
      name: 'Mine',
      component: MineController
    }, {
      path: '/shop',
      name: 'Shop',
      component: ShopController
    }, {
      path: '/topic',
      name: 'Topic',
      component: TopicController
    }
  ]
})
