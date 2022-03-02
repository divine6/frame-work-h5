const session = {
  set: (key, data, Storage = sessionStorage) => {
    if (!key) {
      console.error('key 不能为空')
    }
    if (typeof data === 'object') {
      // tslint:disable-next-line:no-parameter-reassignment
      data = JSON.stringify(data)
    }
    Storage.setItem(key, data)
  },
  get: (key, Storage = sessionStorage) => {
    if (!key) {
      console.error('key 不能为空')
    }
    let data = Storage.getItem(key) || window.localStorage.getItem(key) || ''
    if ((data.indexOf('[') >= 0 && data.indexOf(']') >= 0) || (data.indexOf('{') >= 0 && data.indexOf('}') >= 0)) {
      data = JSON.parse(data)
    }
    return data === '' ? null : data
  },
  remove: (key, Storage = sessionStorage) => {
    if (!key) {
      console.error('key 不能为空')
    }
    Storage.removeItem(key)
  },
  clean: (Storage = sessionStorage) => {
    Storage.clear()
  }
}

export default session
