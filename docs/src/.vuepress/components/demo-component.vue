<template>
  <p class="demo">
    {{ msg }}
  </p>
</template>

<script>
  import { sidebarList } from '@dynamic/constants'
  export default {
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    },
    watch: {
      '$route': {
        handler () {
          console.log('this: ', this)
          console.log('this.$site: ', this.$site)
          console.log('this.$page: ', this.$page)

          const list = JSON.parse(sidebarList)
          console.log('sidebarList: ', list)
          
          const matchedNav = this.$page.regularPath.match(/\/(.*)\//)
          if (matchedNav) {
            const currentNav = matchedNav[0]
            console.log('list: ', list[currentNav].list)
          }
        },
        immediate: true,
        deep: true
      }
    }
  }
</script>
