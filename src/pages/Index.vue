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
        <step counter="1" title="" uri="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit accusamus temporibus eius inventore reiciendis deleniti eligendi culpa veritatis commodi neque aliquam facere alias explicabo amet, voluptas, ab mollitia. Cum.
        </step>
        <step counter="2" title="" uri="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae perferendis nihil adipisci obcaecati quia quam inventore tempore ipsam qui. Voluptates totam tempora fugit odio aspernatur eos. Quidem, commodi tempore?
        </step>
        <step counter="3" title="" uri="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem repellendus repellat eaque nihil possimus, numquam eveniet, assumenda eius unde minima laboriosam autem dolores, natus modi quasi! Laudantium soluta veritatis unde!
        </step>
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
