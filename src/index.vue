<template>
  <div class="wrapper" @viewappear="onViewAppear">    
    <nav-bar ref="navBar" :back="false" right-text="消息"></nav-bar>
    <router-view style="flex: 1;"/>
    <tab-bar :tabs="tabs" @click="onClick"></tab-bar>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';

const util = require('@/util/util');
const configure = require('@/util/configure');

const navigator =  weex.requireModule('navigator');

export default {
  name: 'App',
  props: {
    showNavBar: {
      type: Boolean,
      default: true,
    }
  },
  components: {
    NavBar,
    TabBar
  },
  data: function ()  {
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
    }
  },
  methods: {
    onViewAppear: function() {
      console.log('index.vue onViewAppear ==>');
      this.updateSelectedRoute();
    }, 
    onClick: function(event) {
      const key = event.data.key;
      this.selectedKey = key;
      this.$router.push('/' + key);
      this.updateSelectedRoute();
    },
    updateSelectedRoute: function() {
      const routes = this.$router.options.routes;
      const currentRoute = routes.filter((item) => {
        const name = item.name;
        return name === this.selectedKey;
      })[0];
      const component = currentRoute.component;
      component.methods && component.methods.viewAppear && component.methods.viewAppear();
    }
  },
  beforeCreate: function() {
    util.initIconFont();
  },
  mounted: function() {
    const navBar = this.$refs.navBar;
    weex.app = Object.assign(weex.app || {}, {
      ui: {
        navBar: navBar
      }
    });
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
    flex: 1;
  }
</style>
