
import request from '@/http'

export default {
  userinfo: params => request.POST('/AddressBookLogin/getUserinfo', params),
  login: params => request.POST('/AddressBookLogin/in', params),
  logout: params => request.GET('/AddressBookLogin/out', params)
}
