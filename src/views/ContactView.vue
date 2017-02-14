<template lang="pug">
div
  h1 Contact
</template>

<script>
function setHead(store) {
  return store.dispatch('SET_HEAD', {
    title: 'Contact',
    description: 'Description for Contact View',
    image: 'contact.png'
  })
}

export default {
  name: 'contact-view',
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
