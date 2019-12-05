/*
 * @Author: kenter.zheng
 * @Date: 2019-08-01 14:21:43
 * @Last Modified by: kenter.zheng
 * @Last Modified time: 2019-12-05 14:14:20
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
  let resultItem = window.localStorage.getItem(key)
  try {
    return JSON.parse(resultItem)
  } catch (e) {
    return resultItem
  }
}

export const removeItem = (key) => {
  if (!key) {
    return
  }
  window.localStorage.setItem(removeItem)
}
