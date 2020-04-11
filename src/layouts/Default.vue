<template>
  <div style="background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);">
    <navbar />

    <slot />

    <footer class="mt-24">
      <footer-component />
    </footer>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue"
import FooterComponent from "~/components/FooterComponent.vue"
export default {
  components: {
    Navbar,
    FooterComponent
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

