<template>
  <section>
    <section style="background: url('/hero-bg.svg')" class="px-4 py-8 bg-repeat">
      <h1
        class="mb-6 font-sans font-light text-2xl text-center capitalize"
      >Teie privaatsus on meile oluline!</h1>
    </section>
    <main class="px-4 mt-6"></main>
  </section>
</template>

<script>
import HeaderNav from "~/components/HeaderNav.vue";
import FooterNav from "~/components/FooterNav.vue";

export default {
  components: {
    HeaderNav,
    FooterNav
  }
};
</script>

<style>
</style>