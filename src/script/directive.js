/*
 * @Author: kenter.zheng
 * @Date: 2019-08-01 15:10:23
 * @Last Modified by: kenter.zheng
 * @Last Modified time: 2019-08-02 15:56:35
 */

// 输入框自动获得焦点
const autoFocus = {
  bind (el, binding, vnode) {
    console.log('el', el)
    console.log('binding', binding)
    console.log('vnode', vnode)
    console.log('bind++++++++')
  },
  inserted (el, binding, vnode) {
    console.log('binding', binding)
    console.log('vnode', vnode)
    console.log('inserted++++++++')
    // debugger
    el.focus()
  }
}

export default {
  autoFocus
}
