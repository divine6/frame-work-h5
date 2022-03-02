import { debounce } from '@/utils/tools'

const click = {
  bind (el, binding, vnode) {
    const arg = binding.arg
    const emit = debounce(() => {
      binding.value(arg)
    }, 500, false) // 立即执行
    el.onclick = function () {
      emit()
    }
  }
}
export default click
