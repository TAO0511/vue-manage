import http from '@/script/config/http'
import routeMap from '@/models/route-map'
export const emailSearch = (params) => {
  return http.request(routeMap.emailSearch, params)
}
