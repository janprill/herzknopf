<template>
  <div class="antialiased" style="background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);">
    <navbar />

    <slot />

    <footer class="mt-24">
      <footer-skewed />
    </footer>
  </div>
</template>

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

