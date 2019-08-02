<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { emailSearch } from '@/script/api/get-data'
export default {
  name: 'about',
  created () {
    console.log('created')
    this.getPhone()
  },
  methods: {
    getPhone () {
      console.log('getPhone')
      emailSearch({ number: 1012002 })
        .then(res => {
          console.log('res+++++')
        })
        .catch(error => {
          console.log('error+++++')
        })
    }
  }
}
</script>
