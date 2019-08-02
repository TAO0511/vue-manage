/*
 * @Author: kenter.zheng
 * @Date: 2019-08-01 14:21:43
 * @Last Modified by: kenter.zheng
 * @Last Modified time: 2019-08-01 14:37:26
 */

export const signOut = ($router) => {
  $router.push('/login')
}

export const setItem = (key, value) => {
  if (!key) {
    return
  }
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

export const getItem = (key) => {
  if (!key) {
    return
  }
  return JSON.parse(window.localStorage.getItem(key))
}

export const removeItem = (key) => {
  if (!key) {
    return
  }
  window.localStorage.setItem(removeItem)
}
