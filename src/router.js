/* global Vue */
import Router from 'vue-router'
import RootController from '@/controllers/RootController';

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      redirect: '/root'
    }, {
      path: '/root',
      name: 'Root',
      props: {
        showNavBar: false
      },
      component: RootController
    }
  ]
})
