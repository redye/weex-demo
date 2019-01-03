<template>
  <div v-if="show" class="wrapper">
    <div class="inner-wrapper">
      <div class="item">
        <div class="item-inner" @click="onBack"><text class="txt" v-if="back">&#xe68f;</text></div>
      </div>
      <div class="title-wrapper" @click="onSearch">
        <text class="search-txt iconfont">标题</text>
      </div>
      <div class="item">
        <div class="item-inner" @click="onRight"><text class="txt" v-if="rightText">{{rightText}}</text></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    height: 88px;
    width: 750px;
    border-bottom-color: #d9d9d9;
    border-bottom-width: 1px;
  }
  .inner-wrapper {
    height: 88px;
    flex-direction: row;
  }
  .iconfont {
    font-family: iconfont;
  }
  .item {
    width: 120px;
    align-items: center;
    justify-content: center;
  }
  .item-inner {
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  .txt {
    font-size: 30px;
    text-align: center;
    color:#666666;
  }
  .title-wrapper {
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 36px;
  }
</style>

<script>

const navigator = require('@/util/navigator');

export default {
  props: {
    back: {
      type: Boolean,
      default: true
    },
    rightText: {
      type: String,
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      show: this.visible
    }
  },
  methods: {
    onBack: function(event) {
      navigator.pop();
    },
    onRight: function(event) {
      this.$emit('right');
    },
    setVisible: function(visible) {
      this.show = visible;
    }
  }
}
</script>
