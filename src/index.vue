<template>
  <div class="wrapper">    
    <nav-bar ref="navBar" :back="true" right-text="消息"></nav-bar>
    <router-view/>
  </div>
</template>

<script>

import util from '@/util/util';

import NavBar from '@/components/NavBar';

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
    NavBar
  },
  data: function ()  {
    return {
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
