import http from '@/script/config/http'
import routeMap from '@/models/route-map'
export const address = {
  add: (params) => {
    return http.request(routeMap.address.add, params)
  },

  query: (params) => {
    return http.request(routeMap.address.query, params)
  },

  detail: (params) => {
    return http.request(routeMap.address.detail, params)
  },

  update: (params) => {
    return http.request(routeMap.address.update, params)
  },

  delete: (params) => {
    return http.request(routeMap.address.delete, params)
  }
}

export const category = {
  add: (params) => {
    return http.request(routeMap.category.add, params)
  },

  query: (params) => {
    return http.request(routeMap.category.query, params)
  },

  detail: (params) => {
    return http.request(routeMap.category.detail, params)
  },

  update: (params) => {
    return http.request(routeMap.category.update, params)
  },

  delete: (params) => {
    return http.request(routeMap.category.delete, params)
  }
}

export const item = {
  add: (params) => {
    return http.request(routeMap.item.add, params)
  },

  query: (params) => {
    return http.request(routeMap.item.query, params)
  },

  detail: (params) => {
    return http.request(routeMap.item.detail, params)
  },

  update: (params) => {
    return http.request(routeMap.item.update, params)
  },

  delete: (params) => {
    return http.request(routeMap.item.delete, params)
  }
}

export const hero = {
  add: (params) => {
    return http.request(routeMap.hero.add, params)
  },

  query: (params) => {
    return http.request(routeMap.hero.query, params)
  },

  detail: (params) => {
    return http.request(routeMap.hero.detail, params)
  },

  update: (params) => {
    return http.request(routeMap.hero.update, params)
  },

  delete: (params) => {
    return http.request(routeMap.hero.delete, params)
  }
}

export const article = {
  add: (params) => {
    return http.request(routeMap.article.add, params)
  },

  query: (params) => {
    return http.request(routeMap.article.query, params)
  },

  detail: (params) => {
    return http.request(routeMap.article.detail, params)
  },

  update: (params) => {
    return http.request(routeMap.article.update, params)
  },

  delete: (params) => {
    return http.request(routeMap.article.delete, params)
  }
}