<template lang="pug">
div
  h1 Home
</template>

<script>
function setHead(store) {
  return store.dispatch('SET_HEAD', {
    title: 'Home',
    description: 'Description for Home View',
    image: 'home.png'
  })
}

export default {
  name: 'home-view',
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
