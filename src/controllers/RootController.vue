<template>
  <div class="wrapper">
    <div class="tab-content-wrapper">
      <home v-if="selectedKey === 'home'"/>
      <topic v-if="selectedKey === 'topic'"/>
      <category v-if="selectedKey === 'category'"/>
      <cart v-if="selectedKey === 'cart'"/>
      <mine v-if="selectedKey === 'mine'"/>
    </div>
    <tab-bar :tabs="tabs" @click="onClick"></tab-bar>
  </div>
</template>

<style scoped>
  .wrapper {
    flex: 1;
  }
  .tab-content-wrapper {
    flex: 1;
  }
</style>

<script>

import HomeController from '@/controllers/HomeController';
import MineController from '@/controllers/MineController';
import CategoryController from '@/controllers/CategoryController';
import CartController from '@/controllers/CartController';
import TopicController from '@/controllers/TopicController';

import TabBar from '@/components/TabBar';

const configure = require('@/util/configure');

export default {
  components: {
    'tab-bar': TabBar,
    'home': HomeController,
    'topic': TopicController,
    'category': CategoryController,
    'cart': CartController,
    'mine': MineController,
  },
  data: function() {
    return {
      tabs: [{
        title: '首页',
        icon: '\ue60f',
        key: 'home',
        selected: true
      }, {
        title: '专题',
        icon: '\ue626',
        key: 'topic',
        selected: false
      }, {
        title: '分类',
        icon: '\uee22', 
        key: 'category',     
        selected: false
      }, {
        title: '购物车',
        icon: '\ue604',
        key: 'cart',
        selected: false
      }, {
        title: '个人',
        icon: '\ue614',
        key: 'mine',        
        selected: false
      }],
      selectedKey: 'home'
    };
  },
  methods: {
    onClick: function(event) {
      const key = event.data.key;
      this.selectedKey = key;
    }
  },
  created: function() {
    // weex.app.navBar.setVisible(false);
    configure.hideNavBar(true);
  }
 }
</script>
