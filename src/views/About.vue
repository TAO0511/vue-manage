<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="bgc"></div>
    <div>count：{{name}}{{count}}</div>
    <div>count_two：{{count_two}}</div>
    <div>currentScope：{{currentScope}}</div>
    <div>localComputed：{{localComputed}}</div>
    <!-- {{getAuthList}} -->
    <div v-for="item in getAuthList" v-bind:key="item.id">
      {{item.value}}
    </div>
    <calendar></calendar>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import calendar from '../components/common/Calendar'
export default {
  name: 'about',
  components: {
    calendar
  },
  created () {
    console.log('created')
    this.getPhone()
  },
  mounted () {
    // console.log('this.$store', this.$store)
  },
  data () {
    return {
      name: 'kenter',
      age: 25
    }
  },
  // computed: { // 通过组件计算属性返回状态值
  //   count () {
  //     return this.$store.state.count
  //   }
  // },

  // computed: mapState({
  //   count: state => state.count, // 箭头函数没有this作用域，拿的是他的上下文，通过验收this作用域是undefined
  //   count_two: 'count', // 该方式为上述的简写方式
  //   currentScope (state) { // 为了能够使用 `this` 获取局部状态（即该组件），必须使用常规函数
  //     console.log('currentScope this', this)
  //     return this.name + state.count
  //   },
  //   localComputed () {
  //     return `${this.name} age is ${this.age}`
  //   }
  // }),

  computed: {
    localComputed () { // 当前组件的计算属性
      return `${this.name} age is ${this.age}`
    },
    ...mapState({
      count: state => state.count, // 箭头函数没有this作用域，拿的是他的上下文，通过验收this作用域是undefined
      count_two: 'count', // 该方式为上述的简写方式
      currentScope (state) { // 为了能够使用 `this` 获取局部状态（即该组件），必须使用常规函数
        console.log('currentScope this', this)
        return this.name + state.count
      }
    }),
    ...mapGetters({
      getAuthList: 'getAuthList'
    })
  },
  methods: {
    getPhone () {
      console.log('getPhone')
    }
  }
}
</script>
<style lang="scss" scoped>
  
</style>
