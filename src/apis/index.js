
import user from './user'
import product from './product'

import Vue from 'vue'

const apis = {
  ...user,
  ...product
}
Vue.prototype.$request = async (name, params) => {
  const apiName = apis[name]
  return await apiName(params)
}
