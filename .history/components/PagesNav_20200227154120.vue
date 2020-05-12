<template>
  <header class="px-4 borber-b border bg-white z-10 solid border-gray-200 sticky top-0 bottom-0">
    <div class="py-4 flex items-center justify-between">
      <div>
        <a href="/hiieko">
          <img src="hiieko_logo.png" alt="Hiieko logo" />
        </a>
      </div>
      <div class="flex">
        <button @click="toggle" type="button" class="focus:outline-none">
          <!-- Menu Close SVG -->
          <svg
            v-if="isOpen"
            class="w-4 h-4 fill-current text-green-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14.483 14.47"
          >
            <path
              id="cross-24-512"
              d="M15.79,3.232a.557.557,0,0,1,0,.785L11.464,8.339a.558.558,0,0,0,0,.786l4.324,4.323a.558.558,0,0,1,0,.786L14.213,15.8a.561.561,0,0,1-.787,0L9.1,11.481a.559.559,0,0,0-.787,0L3.991,15.8a.559.559,0,0,1-.787,0L1.631,14.229a.558.558,0,0,1,0-.786L5.959,9.122a.558.558,0,0,0,0-.786L1.635,4.012a.557.557,0,0,1,0-.786l1.574-1.57a.56.56,0,0,1,.787,0L8.318,5.979a.558.558,0,0,0,.787,0l4.326-4.32a.56.56,0,0,1,.787,0Z"
              transform="translate(-1.469 -1.495)"
            />
          </svg>
          <!-- Menu Open SVG -->
          <svg
            v-else
            class="w-5 h-5 fill-current text-green-700"
            id="hamburger"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 15"
          >
            <path
              id="bars"
              d="M.857,63H23.143A.843.843,0,0,0,24,62.16v-1.3A.857.857,0,0,0,23.143,60H.857A.857.857,0,0,0,0,60.857v1.3A.843.843,0,0,0,.857,63Z"
              transform="translate(0 -60)"
              fill="#116d3b"
            />
            <path
              id="bars-2"
              data-name="bars"
              d="M.857,63H23.143A.843.843,0,0,0,24,62.16v-1.3A.857.857,0,0,0,23.143,60H.857A.857.857,0,0,0,0,60.857v1.3A.843.843,0,0,0,.857,63Z"
              transform="translate(0 -54)"
              fill="#116d3b"
            />
            <path
              id="bars-3"
              data-name="bars"
              d="M.857,63H23.143A.843.843,0,0,0,24,62.16v-1.3A.857.857,0,0,0,23.143,60H.857A.857.857,0,0,0,0,60.857v1.3A.843.843,0,0,0,.857,63Z"
              transform="translate(0 -48)"
              fill="#116d3b"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav v-show="isOpen" class="transition ease-in-out duration-300">
      <div class="py-8">
        <a
          v-scroll-to="{ el: '#meist', offset: -55 }"
          @click="toggle"
          class="block mt-2 font-sans text-blue-700 hover:text-blue-500"
          href="#meist"
        >Meist</a>
        <a
          v-scroll-to="{ el: '#teenused', offset: -55 }"
          @click="toggle"
          class="block mt-2 font-sans text-blue-700 hover:text-blue-500"
          href="/#teenused"
        >Teenused</a>
        <a
          v-scroll-to="{ el: '#tehtudTood', offset: -55 }"
          @click="toggle"
          class="block mt-2 font-sans mb-4 text-blue-700 hover:text-blue-500"
          href="/#tehtudTood"
        >Tehtud Tööd</a>
        <a
          v-scroll-to="{ el: '#contactForm', offset: -130 }"
          @click="toggle"
          class="px-4 py-2 rounded-lg font-sans text-blue-700 border border-blue-700 hover:text-blue-500 uppercase"
          href="/#contactForm"
        >Kontakt</a>
      </div>
      <div class="py-8">
        <span class="text-blue-700 font-sans font-bold">Lisainfo</span>
        <a
          class="block mt-2 font-sans text-blue-700 hover:text-blue-500"
          href="toopakkumised"
        >Tööpakkumised</a>
        <a
          class="block mt-2 font-sans text-blue-700 hover:text-blue-500"
          href="kontaktid"
        >Tallinna osakond</a>
        <a
          class="block mt-2 font-sans text-blue-700 hover:text-blue-500"
          href="kontaktid"
        >Tartu osakond</a>
        <a
          class="block mt-2 font-sans text-blue-700 hover:text-blue-500"
          href="privacy"
        >Privaatsussätted</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style>
</style>