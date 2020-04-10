<template>
  <Layout>

    <hero />

    <section class="mt-32">
      <h2>So funktioniert es:</h2>
      <step />
      <step />
      <step />
    </section>

  </Layout>
</template>

<script>
import Step from "~/components/Step.vue"
import Hero from "~/components/Hero.vue"
export default {
  components: {
    Step,
    Hero
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
