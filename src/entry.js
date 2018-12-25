/* global Vue */
import baseMixins from '@/mixins/baseMixins';

/* weex initialized here, please do not move this line */
const router = require('@/router.js')
const App = require('@/index.vue')

Vue.mixin(baseMixins);

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
