import Vue from 'vue'
import FrameView from './frame-view/index'
const Components = {
  install (Vue) {
    Vue.component('frame-view', FrameView)
  }
}

Vue.use(Components)
