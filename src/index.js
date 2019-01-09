/* global Vue */
import baseMixins from '@/mixins/baseMixins';

/* weex initialized here, please do not move this line */
const router = require('@/router.js');
const App = require('@/app.vue');
// const configure = require('@/util/configure');

Vue.mixin(baseMixins);

router.beforeEach((to, from, next) => {
  // configure.hideNavBar(false);
  next();
});

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');
