<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <div class="item" @click="onItemClick(0)">
        <text class="ic iconfont">&#xe689;</text>
        <text class="txt">扫一扫</text>
      </div>
      <div class="search" @click="onSearch">
        <text class="search-txt iconfont">&#xe65c; 搜索商品，共8888款好物</text>
      </div>
      <div class="item" @click="onItemClick(1)">
        <text class="ic iconfont">&#xe70a;</text>
        <text class="txt">消息</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    height: 128px;
    width: 750px;
    border-bottom-color: #d9d9d9;
    border-bottom-width: 1px;
    background-color: #fafafa;
  }
  .inner-wrapper {
    margin-top: 44px;
    height: 88px;
    flex-direction: row;
  }
  .iconfont {
    font-family: iconfont;
  }
  .item {
    width: 96px;    
    flex-direction: column;
    justify-content: center;
  }
  .ic, .txt {
    text-align: center;
    color:#666666;
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
    color:#666666;
    font-weight: 300;
    text-align: center;
  }
  .search {
    flex: 1;
    height: 60px;
    justify-content: center;
    background-color: #ededed;
    border-radius: 8px;
    margin-top: 8px;
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
