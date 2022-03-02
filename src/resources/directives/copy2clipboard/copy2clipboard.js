// 复制到粘贴板
import Clipboard from 'clipboard'

let clipboarInstance

const copy2clipboard = {
  bind (el, binding, vnode) {
    clipboarInstance = null
    const { value } = binding
    el.setAttribute('data-clipboard-text', value)
    clipboarInstance = new Clipboard(el)
    clipboarInstance.on('success', function () {
      // vnode.context.$message.success("已复制!");
    })
  },
  componentUpdated (el, binding) {
    const { value } = binding
    el.setAttribute('data-clipboard-text', value)
  }
}

export default copy2clipboard
