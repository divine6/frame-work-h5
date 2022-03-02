
/**
 * @description 设置cookie
 * 使用方式： setCookie({name:'token', '8asda-asdaqweq-123', expires:1})
 * @param {Object} data
 */
function setCookie (data) {
  let expires = ''
  if (data.expires) {
    const d = new Date()
    d.setTime(d.getTime() + (data.expires * 24 * 60 * 60 * 1000))
    expires = 'expires=' + d.toUTCString()
  }
  document.cookie = data.name + '=' + data.value + ';' + expires + ';path=/'
}
/**
 * @param {String} name
 * @description 获取对应的cookie
 * getCookie('token')
 */
function getCookie (name) {
  let arr = []
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  arr = document.cookie.match(reg)
  return arr.length ? arr[2] : undefined
}
/**
 *@description 清楚cookie removeCookie('token')
 * @param {String} name 需要清除的cookie 的键名
 */
function removeCookie (name) {
  setCookie({ name, value: '', expires: -1 })
}

export { setCookie, getCookie, removeCookie }
