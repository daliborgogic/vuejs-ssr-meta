<template lang="pug">
#app
  header
    nav
      ul
        li
          router-link(to="/" exact ) Home
        li
          router-link(to="/about") About
        li
          router-link(to="/contact") Contact
         
  transition(name="fade" mode="out-in")
    router-view.view
</template>

<script>
const inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
export default {
  computed: {
    title() {
      return this.$store.state.head.title
    }
  },
  watch: {
    title () {  
      if(inBrowser) {
        document.title = this.$store.state.head.title
      }       
    }
    
  }
}
</script>

<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  color #34495e

nav ul
  display flex
  align-items center
  height 64px
  list-style-type none
  padding 0
  margin 0
  li
    padding 0 1rem
    a.router-link-active
      color red
.view
  max-width 800px
  margin 0 auto
  position relative

.fade-enter-active
.fade-leave-active
  transition all .2s ease
  transform translateY(0)

.fade-enter
.fade-leave-active
  transform translateY(100px)
  opacity 0
</style>
