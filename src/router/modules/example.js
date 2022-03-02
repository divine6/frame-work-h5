/**
 * 案例页面
 */
export default [
  {
    path: '/list',
    name: 'list',
    meta: {
      title: 'list'
    },
    component: () => import(/* webpackChunkName: "list" */ '@/views/example/list')
  },
  {
    path: '/normal',
    name: 'normal',
    meta: {
      title: 'normal'
    },
    component: () => import(/* webpackChunkName: "normal" */ '@/views/example/normal')
  }
]
