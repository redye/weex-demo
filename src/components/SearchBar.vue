<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <div class="item" @click="onItemClick(0)">
        <text class="ic iconfont">&#xe674;</text>
        <text class="txt">扫一扫</text>
      </div>
      <div class="search" @click="onSearch">
        <text class="iconfont">&#xe613; </text><text class="search-txt">搜索商品，共8888款好物</text>
      </div>
      <div class="item" @click="onItemClick(1)">
        <text class="ic iconfont">&#xe60e;</text>
        <text class="txt">消息</text>
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
    align-items: center;
  }
  .iconfont {
    font-family: iconfont;
    font-size: 40px;
    color: #666666;
  }
  .item {
    width: 96px;
    flex-direction: column;
    justify-content: center;
  }
  .ic, .txt {
    text-align: center;
    color: #666666;
    font-weight: 300;
  }
  .ic {
    font-size: 32px;
  }
  .txt {
    font-size: 18px;
  }
  .search-txt {
    font-size: 26px;
    color: #666666;
    font-weight: 300;
    text-align: center;
  }
  .search {
    flex: 1;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: #ededed;
    border-radius: 8px;
    flex-direction: row;
  }
</style>

<script>
export default {

  data: function () {
    return {
    }
  },
  methods: {
    onSearch: function () {
      this.$emit('search');
    },
    onItemClick: function(index) {
      this.$emit('itemClick', {
        index: index
      })
    } 
  }
}
</script>
