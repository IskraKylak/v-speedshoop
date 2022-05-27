<template>
  <Header />
    <router-view />
  <Footer />
</template>
<script>
import Header from '@/components/app/Header'
import Footer from '@/components/app/Footer'
export default {
  components: {
    Header, Footer
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
