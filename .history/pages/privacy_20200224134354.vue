<template>
  <section>
    <section style="background: url('/hero-bg.svg')" class="px-4 py-8 bg-repeat">
      <h1
        class="mb-6 font-sans font-light text-2xl text-center capitalize"
      >Teie privaatsus on meile oluline!</h1>
    </section>
    <main class="px-4 mt-6">
      <span class="font-sans font-bold text-center text-blue-700">Privaatsuspoliitika</span>
      <p
        class="my-8 opacity-75 font-sans font-light text-sm"
      >AS HIIEKO on võtnud endale kohustuse kaitsta klientide ja kasutajate privaatsust. Sellest lähtuvalt oleme koostanud käesolevad privaatsuspoliitika põhimõtted, mis käsitlevad kliendi andmete kogumist, kasutamist, avaldamist, edastamist ja talletamist. Meie tegevus internetis on kooskõlas kõigi asjakohaste tegevuste ja vastavate Euroopa Liidu õigusaktide ja Eesti Vabariigi seadustega. Leia veidi aega ja tutvu meie privaatsuspõhimõtetega.</p>
      <span
        class="font-sans font-bold text-center text-blue-700"
      >Isikuandmete kogumine ja kasutamine</span>
      <p
        class="my-8 opacity-75 font-sans font-light text-sm"
      >Isikuandmed on andmed, mida AS HIIEKO kogub üksikisikuga sõlmitud lepingu täitmisel või temaga ühenduse võtmiseks. Isikuandmete kogumine võib toimuda alljärgnevatel viisidel:</p>
      <p
        class="my-8 opacity-75 font-sans font-light text-sm"
      >- kontaktandmete (sh sinu nimi, postiaadress, e-posti aadress) esitamisel meie veebisaidil või mujal (näit. salongides).</p>
      <p
        class="my-8 opacity-75 font-sans font-light text-sm"
      >- veebisaidi kasutamisel kliendi kontoinfost või küpsiste (cookies) kaudu.</p>
    </main>
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