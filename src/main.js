import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局样式 例：初始化重置样式
import '@/styles'

// 引入异步请求方法 挂载全局请求方法 在 *.Vue文件 this.$request()
import '@/apis'
// 引入全局自定义指令
import '@/resources/directives'

/** *************** 公共 components plugins ***************/
import '@/resources/components'
import '@/resources/plugins/back'

// 按需引入vant 组件
import '@/package/vant-ui'
// 引入调式工具 vconsole
import '@/package/vconsole'
// 窗口大小改变重新 设置 rem 字体
import '@/utils/px2rem'
// 挂载 调用原生方法方法 nativeApp
import '@/utils/native-bridge'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
