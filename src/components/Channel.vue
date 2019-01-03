<template>
  <div class="wrapper">
    <scroller class="scroller" scroll-direction="horizontal" show-scrollbar="false" ref="scroller">
      <div class="j-uline" :style="jLPosition" ref="indicator"></div>
      <div v-for="(item, index) in channelList" :key="index" :ref="'item' + index">
        <div class="i-c-wraper">
          <text :class="['i-c', index == currentIndex ? 'c-act' : '']" @click="onClick(index)">{{item.title}}</text>
        </div>
      </div>
    </scroller>
  </div>
</template>

<style scoped>
  .wrapper {
    height: 88px;
    width: 750px;
    background-color: #fafafa;
    border-bottom-width: 1px;
    border-bottom-color: #d9d9d9;
    flex-direction: row;
  }
  .scroller {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    flex-direction: row;
    align-items: center;
    height: 88px;
    flex: 1;
  }
  .i-c-wraper {
    width: 120px;
    align-items: center;
    justify-content: center;
  }
  .i-c {
    font-size: 26px;
    color:#333333;
  }
  .c-act {
    color:#b4282d;
  }
  .j-uline {
    position: absolute;
    left: 30px;
    bottom: 0;
    width: 82px;
    height: 4px;
    background-color: #b4282d;
  }
</style>

<script>

const dom = weex.requireModule('dom');
const animation = weex.requireModule('animation');

export default {
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      jLPosition:{left:'0', width:'120px'},
      currentIndex: 0,
      channelList: this.channels
    }
  },
  mounted: function() {
  },
  methods: {
    onClick: function (index) {
      this.currentIndex = index;
      const el = this.$refs[`item${index}`][0];
      dom.scrollToElement(el, {
        offset: index > 0 ? -120 : 0
      });
      this.indicatorAnimation(index, null);
      this.$emit('click', {
        index: index,
        data: this.channelList[index]
      });
    },
    indicatorAnimation: function(index, completeCallback) {
      const indicatorEl = this.$refs.indicator;
      const x = 120 * index;
      animation.transition(indicatorEl, {
        styles: {
          transform: `translateX(${x}px)`
        },
        duration: 500,
        timingFunction: 'ease',
        needLayout: false,
        delay: 0
      }, completeCallback);
    }
  }
}
</script>
