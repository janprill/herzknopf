<template>
  <Layout>

    <hero />

    <main class="max-w-screen-xl mx-auto">
      <love />

      <section class="mt-20 max-w-2xl">
        <p class="">
          Wir haben hochmoderne Videokonferenzsysteme in Pflegeheime gebracht, damit Sie unkompliziert und sicher mit  Ihren Angehörigen im Pflegeheim Kontakt aufnehmen können.
        </p>
      </section>

      <section class="mt-32">
        <h2>So funktioniert es:</h2>
        <step />
        <step />
        <step />
      </section>
    </main>

    <footer />

  </Layout>
</template>

<script>
import Hero from "~/components/Hero.vue"
import Love from "~/components/Love.vue"
import Step from "~/components/Step.vue"
export default {
  components: {
    Hero,
    Love,
    Step,
  },
  metaInfo: {
    title: 'Herzknopf'
  }
}
</script>
