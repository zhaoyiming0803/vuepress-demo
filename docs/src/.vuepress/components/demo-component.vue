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
          // console.log('this: ', this)
          // console.log('this.$site: ', this.$site)
          // console.log('this.$page: ', this.$page)

          // console.log('sidebarList: ', sidebarList)
          
          const matchedNav = this.$page.regularPath.match(/\/(.*)\//)
          if (matchedNav) {
            const currentNav = matchedNav[0]
            // console.log('list: ', sidebarList[currentNav].list)
          }
        },
        immediate: true,
        deep: true
      }
    }
  }
</script>
