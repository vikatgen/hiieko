<template>
  <section
    style="background: url('/hero-bg.svg')"
    class="border-t-2 border-green-500 px-4 pt-8 bg-repeat"
  >
    <div class="w-11/12 mx-auto my-8 md:flex lg:max-w-5xl">
      <div class="flex w-full flex-col text-center mb-8 md:w-1/4 lg:w-1/3 md:text-left">
        <h3 class="mb-4 text-blue-700 font-sans font-bold">Lisainfo</h3>
        <n-link to="/toopakkumised" class="text-blue-700 mb-2 font-sans font-light hover:opacity-75">Tööpakkumised</n-link>
        <n-link to="/kontaktid" class="text-blue-700 mb-2 font-sans font-light hover:opacity-75">Tallinna osakond</n-link>
        <n-link to="/kontaktid" class="text-blue-700 mb-2 font-sans font-light hover:opacity-75">Tartu osakond</n-link>
        <n-link to="/privacy" class="text-blue-700 mb-2 font-sans font-light hover:opacity-75">Privaatsussätted</n-link>
      </div>
      <div class="flex w-full flex-col text-center mb-8 md:w-1/4 lg:w-1/3 md:text-left">
        <h3 class="mb-4 text-blue-700 font-sans font-bold">AS Hiieko toetab</h3>
        <p class="text-blue-700 font-sans font-light mb-2">Henry Moto MTÜ</p>
        <a
          class="text-blue-700 font-sans font-light mb-2 hover:opacity-75"
          href="http://www.redbike.ee/"
          target="_blank"
        >Redbike</a>
        <a
          class="text-blue-700 font-sans font-light mb-2 hover:opacity-75"
          href="https://niitvaljagolf.ee/"
          target="_blank"
        >Niitvälja Golf</a>
      </div>
      <div class="my-16 md:my-0 sm:w-2/3 lg:w-1/3 sm:mx-auto md:w-1/2 md:pl-10">
        <h3 class="mb-4 text-blue-700 font-sans font-bold">Kontaktinfo</h3>
        <div>
          <div class="flex justify-between mb-2">
            <span class="text-blue-700 font-sans font-normal">Aadress</span>
            <p class="text-blue-700 font-sans font-light">Pirni 12, 10617 TALLINN</p>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-blue-700 font-sans font-normal">Telefon</span>
            <a class="text-blue-700 font-sans font-light" href="tel:+3726711300">+372 6 711 300</a>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-blue-700 font-sans font-normal">E-post</span>
            <a
              class="text-blue-700 font-sans font-light"
              href="mailto:hiieko@hiieko.ee"
            >hiieko@hiieko.ee</a>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-blue-700 font-sans font-normal">Tööaeg</span>
            <p class="text-blue-700 font-sans font-light">E-R 08.00 - 17.00</p>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-blue-700 font-sans font-normal">Registrikood</span>
            <p class="text-blue-700 font-sans font-light">10048539</p>
          </div>
          <div class="flex justify-between">
            <span class="text-blue-700 font-sans font-normal">KMKR</span>
            <p class="text-blue-700 font-sans font-light">EE100159754</p>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 mb-2 text-center">
      <span
        class="text-xs text-gray-500 font-sans font-light"
      >Copyright 2020 @ Hiieko. All Rights Reserved</span>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>