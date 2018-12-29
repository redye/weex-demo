<template>
  <div class="tab-wrapper">
    <div class="tab-item-wrapper" v-for="(item, index) in tabs" :key="'tab_' + index" @click="onClick(index)">
      <text class="icon iconfont" :style="{color: item.selected ? themeColor : '#333333'}">&#xe689;</text>
      <text class="title" :style="{color: item.selected ? themeColor : '#333333'}">{{item.title}}</text>      
    </div>
  </div>
</template>

<style scoped>
  .tab-wrapper {
    width: 750px;
    height: 118px;
    flex-direction: row;
    align-items: center;
  }
  .tab-item-wrapper {
    flex: 1;
    flex-direction: column;
    align-items: center;
  }
  .icon {
    font-size: 40px;
  }
  .title {
    font-size: 24px;
    margin-top: 8;
  }
  .iconfont {
    font-family: iconfont;
  }
</style>

<script>

const modal = weex.requireModule('modal');

export default {
  data: function() {
    return {
      tabs: [{
        title: '首页',
        icon: '&#xe660;',
        selected: true
      }, {
        title: '专题',
        icon: '&#xe744;',
        selected: false
      }, {
        title: '分类',
        icon: '&#xe605;',        
        selected: false
      }, {
        title: '购物车',
        icon: '&#xe61a;',
        selected: false
      }, {
        title: '个人',
        icon: '&#xe639;',
        selected: false
      }],
      lastIndex: 0
    }
  },
  methods: {
    onClick: function(index) {
      if (index === this.lastIndex) {
        return;
      }
      const currentTab = this.tabs[index];
      const lastTab = this.tabs[this.lastIndex];
      currentTab.selected = true;
      lastTab.selected = false;
      this.lastIndex = index;
      this.$emit('click', {
        index: index,
        data: currentTab
      });
    }
  }
}
</script>

