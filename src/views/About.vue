<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: 'about',
  created () {
    console.log('created')
    this.getPhone()
  },
  methods: {
    getPhone () {
      console.log('getPhone')
    }
  }
}
</script>
