import DsBridge from 'dsbridge'
import { Dialog } from 'vant'
import Vue from 'vue'

class NativeBridge {
  /**
   * @description 调用原生方法 前后端交互
   * @param {Sring} name 方法名
   * @param {any} params 参数
   * @param {Function} callback 回调函数
   */
  hasNativeMethod (name) {
    return DsBridge.hasNativeMethod(name)
  }

  handleMethods (name, params = {}, callback) {
    /**
     * 只传 方法名 其他 都不传
     * 第二个参数是函数 参数和回调函数互换
     * 正常传参数 三个参数都有
     *
     *  1. this.$nativeApp.handleMethods('方法名')
     *  2. this.$nativeApp.handleMethods('方法名', '回调函数')
     *  3. this.$nativeApp.handleMethods('方法名','参数', '回调函数')
     */
    try {
      if (typeof params === 'function' && !callback) {
        callback = params
        params = {}
      }
      if (this.hasNativeMethod(name)) {
        console.log(`调用${name}方法,参数${JSON.stringify(params)}`)
        DsBridge.call(name, params, callback)
      } else {
        console.log('%c此功能需要访问 APP 才能使用', 'color:#3399ff')
      }
    } catch (e) {
      console.log(`%c调用${name}方法失败,参数${JSON.stringify(params)}`, 'color:#ff3300')
      this.awakeAppUpdate()
    }
  }

  /**
   * @description 注册H5方法供App端调用 暂时应该不用 自行补全
   * @param {*} name
   * @param {*} callback
   */
  registerMethod (name, callback) {
    DsBridge.register(name, callback)
  }

  /**
     * 唤起APP强制更新弹窗
     */
  awakeAppUpdate () {
    Dialog.alert({
      title: '发现新版本',
      message: '请前往应用商店进行更新',
      theme: 'round-button',
      confirmButtonText: '我知道了'
    }).then(() => {
      // on close
    })
    console.error('唤起APP强制更新弹窗')
  }
}

Vue.prototype.$nativeApp = new NativeBridge()
export default new NativeBridge()
