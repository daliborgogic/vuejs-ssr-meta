<template lang="pug">
div
  h1 About
</template>

<script>
function setHead(store) {
  return store.dispatch('SET_HEAD', {
    title: 'About',
    description: 'Description for About View',
    image: 'about.png'
  })
}

export default {
  name: 'about-view',
  computed: {
    title() {
      return this.$store.state.head.title
    },
    description() {
      return this.$store.state.head.description
    },
    image() {
      return this.$store.state.head.image
    }
  },
  preFetch: setHead,
  beforeMount () {
    setHead(this.$store)
  }
}
</script>
