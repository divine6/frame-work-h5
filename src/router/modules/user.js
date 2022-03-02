/**
 * 登录 注册 个人中心模块
 */
export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'login'
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/login')
  }
]
