<template>
  <div class="antialiased font-fira" style="background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);">
    <navbar />

    <slot />

    <footer class="mt-24">
      <footer-skewed />
    </footer>
  </div>
</template>

<style scoped>
  body {
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  }
</style>

<script>
import Navbar from "~/components/Navbar.vue"
import FooterSkewed from "~/components/FooterSkewed.vue"
export default {
  components: {
    Navbar,
    FooterSkewed
  } 
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

