/* global Vue */
import Router from 'vue-router'
// import Vue from 'vue'
import HomeController from '@/controllers/HomeController'
import MineController from '@/controllers/MineController'
import ClassController from '@/controllers/ClassController'
import ShopController from '@/controllers/ShopController'
import TopicController from '@/controllers/TopicController'
import TabController from '@/controllers/TabController'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
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
    }, {
      path: '/index',
      name: 'Index',
      component: TabController
    }
  ]
})
