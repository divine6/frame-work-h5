import Vue from 'vue'

const Back = {
  install (Vue) {
    Vue.prototype.$back = function () {
      console.log(window.history)
      // const historyList = store.state.history.list
      const historyList = window.history

      if (historyList.length > 1) {
        if (this.$nativeApp.hasNativeMethod('goBack')) {
          this.$nativeApp.handleMethods('goBack')
        } else {
          this.$router.go(-1)
        }
      } else {
        if (this.$nativeApp.hasNativeMethod('quitWebview')) {
          this.$nativeApp.handleMethods('quitWebview')
        } else {
          this.$router.push({ path: '/' })
        }
      }
    }
  }
}

Vue.use(Back)
