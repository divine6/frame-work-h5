<template lang="pug">
    <frame-view title="测试列表页" contentBg="pink" :fixed="false">
        van-pull-refresh(v-model="refreshLoading" @refresh="onRefresh")
            van-list(v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" )
                .wrap(v-for="item in 13" :key="item")
                  .item
                  van-button(type="primary" size="large") 按钮
                  .item
                  van-button(type="primary") 按钮
                  van-button(color="#7232dd" plain) 按钮
                  van-button(color="#7232dd") 按钮
                  .item
                  van-button(type="primary"  size="small") 按钮
                  .item
                  van-button(type="primary"  size="mini") 按钮
    </frame-view>
</template>

<script>
export default {
  name: 'Test',
  components: {},
  data () {
    return {
      active: 0,
      refreshLoading: false, // 下拉刷新loading
      list: [],
      loading: false,
      finished: false
    }
  },
  mounted () {
    this.$nativeApp.handleMethods('login', { name: 'zhangsan' }, (res) => {
      console.log(res)
    })
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.refreshLoading = false
      }, 1000)
    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
