import Vue from 'vue'
import VueRouter from 'vue-router'
import example from './modules/example'

Vue.use(VueRouter)

// 处理同路由重复点击报错问题
const VueRouterPush = VueRouter.prototype.push
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push (location) {
  return (VueRouterPush.call(this, location)).catch((err) => err)
}
VueRouter.prototype.replace = function replace (location) {
  return (VueRouterReplace.call(this, location)).catch((err) => err)
}

export const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home'
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/home')
  },
  ...example
]
const router = new VueRouter({ mode: 'history', routes, base: '/base/' })
// 跳转对应页面 页面 title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
export default router
