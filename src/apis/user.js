
import request from '@/http'

export default {
  login: params => request.POST('/AddressBookLogin/in', params),
  logout: params => request.GET('/AddressBookLogin/out', params),
  getUserInfo: params => request.GET('/AddressBookLogin/userInfo', params)
}
