<template>
  <div>
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

