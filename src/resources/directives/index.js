import Vue from 'vue'
import ClickOutside from './click-outside/click-outside'
import Click from './click'
import copy2clipboard from './copy2clipboard/copy2clipboard'

const Directives = {
  install (Vue) {
    Vue.directive('click', Click) // v-click 防抖点击
    Vue.directive('copy', copy2clipboard) // v-copy 复制到剪切板
    Vue.directive('click-outside', ClickOutside) // 点击某一区域的外部
  }
}

Vue.use(Directives)
