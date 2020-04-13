<template>
  <Layout>
    <hero-skewed />

    <main class="max-w-screen-xl mx-auto">
      <love />

      <section class="mt-20 max-w-xl text-xl font-fira text-gray-700 leading-snug">
        <p class="">
          Wir haben hochmoderne Videokonferenzsysteme in Pflegeheime gebracht, damit Sie unkompliziert und sicher mit  Ihren Angehörigen im Pflegeheim Kontakt aufnehmen können.
        </p>
      </section>

      <section class="mt-8">
        <h2 class="text-xl font-fira text-gray-700 leading-snug">So funktioniert es:</h2>
        <step counter="1" title="" uri="/img/calendar.jpg">
          Du registriert Dich und trägst einen Terminwunsch zum Gespräch mit Deinem pflegebedürftigem Angehörigen in den Kalender ein.
        </step>
        <step counter="2" title="" uri="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
          Im Pflegeheim Deines Angehörigen ist ein Gerät platziert, das selbständig eine Internetverbindung aufbaut.
        </step>
        <step counter="3" title="" uri="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
          Je nach Grad der Selbständigkeit kann Dein Angehöriger allein, oder mit kurzer Hilfe eines Pflegers mit Dir persönlichen Kontakt in bester Videoqualität aufnehmen.
        </step>
      </section>
    </main>
  </Layout>
</template>

<script>
import HeroSkewed from '~/components/HeroSkewed.vue'
import Love from "~/components/Love.vue"
import Step from "~/components/Step.vue"
export default {
  metaInfo: {
    title: 'About us'
  },
  components: {
    HeroSkewed,
    Love,
    Step
  }


}
</script>
