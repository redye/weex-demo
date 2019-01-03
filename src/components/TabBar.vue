<template>
  <div class="tab-wrapper">
    <div :class="['tab-inner-wrapper', isIpx && isIpx() ? 'tab-inner-wrapper-x' : '']">
      <div class="tab-item-wrapper" v-for="(item, index) in tabs" :key="'tab_' + index" @click="onClick(index)">
        <text class="icon iconfont" :style="{color: item.selected ? themeColor : '#333333'}">{{item.icon}}</text>
        <text class="title" :style="{color: item.selected ? themeColor : '#333333'}">{{item.title}}</text>      
      </div>
    </div>
  </div>
</template>

<style scoped>
  .tab-wrapper {
    width: 750px;
    background-color: #fafafa;
  }
  .tab-inner-wrapper {
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .tab-inner-wrapper-x {
    border-bottom-color: #d9d9d9;
    border-bottom-width: 1px;
    margin-bottom: 88px;
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
  }
  .iconfont {
    font-family: iconfont;
    font-size: 50px;
  }
</style>

<script>

const modal = weex.requireModule('modal');

export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    }
  },
  data: function() {
    return {
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

