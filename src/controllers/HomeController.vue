<template>
  <div class="home-container" @page='onAppear'>
    <search-bar @item-click="onItemClick" @search="onSearch"></search-bar>
    <channel @click="onClick" :channels="channels"></channel>
    <text>这是首页</text>
    <text>这是首页3</text>
    <text>这是首页2</text>
    <text>这是首页4</text>
    <text>这是首页21</text>
  </div>
</template>

<style scoped>
  .home-container {
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>

<script>

import SearchBar from '@/components/SearchBar';
import Channel from '@/components/Channel';

const modal = weex.requireModule('modal');
const navigator = require('@/util/navigator');
const configure = require('@/util/configure');

export default {
  props: {
    hideNavBar: {
      type: Boolean,
      default: true
    }
  },
  components: {
    SearchBar,
    Channel
  },
  data: function() {
    const channelList = ['推荐', '限时购', '新品', '居家', '餐厨', '配件', '服装', '电器', '洗护', '杂货', '饮食', '婴童', '志趣', '更多'].map((item, i) => {
        return {
          title: item,
          value: 10 + i
        }
      });
    return {
      channels: channelList
    }
  },
  methods: {
    onClick: function(event) {
      const data = event.data;
      console.log(JSON.stringify(data));
    },
    onSearch: function() {

    },
    onItemClick: function (event) {
      navigator.push({
        url: `controllers/WebController.js?url=http://www.baidu.com`
      });
    }, 
    viewAppear: function () {
      console.log('home appear')
      // configure.hideNavBar(true);
    }
  },
  created: function() {
    console.log('home created ===>');
  }
}
</script>
