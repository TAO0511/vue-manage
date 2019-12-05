import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    authList: [
      { id: 1, value: '权限1', hasAuth: true },
      { id: 2, value: '权限2', hasAuth: false }
    ]
  },
  getters: { // 类似组件计算属性，当多个组件都需要获取处理后的状态值，如authList，将其方法封装在store中处理
    getAuthList: (state, getters) => {
      console.log('getters', getters)
      return state.authList.filter(item => item.hasAuth)
    }
  },
  mutations: {
    increase (state, n) {
      state.count += n
    }
  },
  actions: {

  }
})
