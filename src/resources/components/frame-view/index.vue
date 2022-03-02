<template>
  <div class="frame-view">
    <!-- 头部导航 -->
    <van-nav-bar
      :style="{background:navBarBg}"
      v-if="showHeader && !$slots.header"
      :left-arrow="!$slots.footer && leftArrow"
      :fixed="fixed"
      v-bind="$attrs"
      v-on="$listeners"
      @click-left="onClickLeft"
      @click-right="onClickRight">
      <template #left>
        <slot name="left"></slot>
      </template>
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #right>
        <slot name="right"></slot>
      </template>
    </van-nav-bar>
    <!-- 自定义导航栏插槽 -->
    <slot name="header" v-else></slot>
    <!-- 内容区域 -->
    <div ref="content" class="frame-view-content" :class="{'isFixed':fixed,'has-footer': $slots.footer}" :style="{backgroundColor:contentBg}">
        <slot></slot>
    </div>
    <!-- 底部 -->
    <slot name="footer" class="frame-view-bottom"></slot>
    <!-- 弹框 -->
    <slot name="dialog"></slot>
  </div>
</template>
<script>
export default {
  props: {
    /** 是否显示导航栏 */
    showHeader: {
      default: true,
      type: Boolean
    },
    /** 是否显示返回箭头 */
    leftArrow: {
      default: true,
      type: Boolean
    },
    /** 是否固定导航栏 */
    fixed: {
      default: true,
      type: Boolean
    },
    /** 导航栏背景色 */
    navBarBg: {
      type: String,
      default: ''
    },
    /** 点击左侧触发函数 */
    backHander: {
      type: Function
    },
    /** 点击右侧触发函数 */
    rightHander: {
      type: Function
    },
    /** 内容区域背景色 */
    contentBg: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  methods: {
    onClickLeft () {
      if (typeof this.backHander === 'function') {
        this.backHander()
      } else {
        this.$back()
      }
    },
    onClickRight () {
      if (typeof this.rightHander === 'function') {
        this.rightHander()
      }
    }
  }
}
</script>
<style lang="less" scoped>
@footerH: 50px;
.frame-view {
    position: relative;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    .frame-view-content {
      background-color: #eeeeee;
      height:auto;
      min-height: calc(100% - 46px);
      overflow-y: auto;
      &.isFixed {
        padding-top: 46px;
      }
      &.has-footer {
        padding-bottom: @footerH;
      }
    }
}
</style>
