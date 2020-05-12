<template>
  <main>
    <HeaderNav />
    <section
      style="background: url('/hero-bg.svg')"
      class="px-4 py-8 bg-repeat border-b border-solid border-gray-200 md:flex md:flex-row-reverse"
    >
      <div class="md:flex md:flex-row-reverse md:max-w-3xl md:mx-auto lg:max-w-5xl lg:mx-auto lg:items-center">
        <div class="pb-8 flex justify-center md:w-1/2">
          <img class="relative lg:w-full" src="hero-svg.svg" alt="Hero image" />
        </div>
        <div class="sm:block sm:text-center md:text-left md:w-1/2">
          <h1
            class="mb-6 font-sans font-light text-4xl capitalize lg:text-5xl sm:w-4/5"
          >Ehitiste tehnosüsteemid & automaatika</h1>
          <p class="inline-block px-6 rounded-lg font-sans font-light bg-white border border-gray-200">
            <span class="opacity-75 text-sm sm:text-base">Projekteerimine</span>
            <span class="opacity-75 text-sm sm:text-base">/</span>
            <span class="opacity-75 text-sm sm:text-base"> Paigaldus</span>
            <span class="opacity-75 text-sm sm:text-base">/</span>
            <span class="opacity-75 text-sm sm:text-base"> Hooldus</span>
          </p>
        </div>
      </div>
    </section>
    <section id="meist" class="px-4 py-16 text-sm md:text-base md:flex md:max-w-3xl md:mx-auto lg:max-w-5xl">
      <div class="mb-8 md:w-1/2 md:pr-4">
        <h3
          class="mb-4 font-sans font-bold text-center text-blue-700 md:text-left"
        >Kogemused aastast 1994</h3>
        <p
          class="opacity-75 font-sans font-light sm:w-2/3 md:w-full md:text-left sm:mx-auto sm:text-center"
        >AS HIIEKO on 1994. aastal loodud erakapitalil põhinev ehituslikke tehnosüsteeme ja automaatikat projekteeriv, paigaldav ja hooldav firma. Oleme professionaalne ja usaldusväärne partner tsiviil – ja tööstusehituses.</p>
      </div>
      <div class="md:w-1/2 md:pl-4">
        <h3 class="mb-4 font-sans font-bold text-center text-blue-700 md:text-left">Esimesed Eestis</h3>
        <p
          class="opacity-75 font-sans font-light sm:w-2/3 sm:mx-auto sm:text-center md:text-left md:w-full"
        >Esimese ehitusettevõttena Eestis sertifitseeriti 1997. aastal AS Hiieko kvaliteedisüsteem ISO 9002 kvaliteedijuhtimisstandardi alusel. Aastal 2001 sertifitseeriti kvaliteedisüsteem aga ISO 9001 standardi alusel.</p>
      </div>
    </section>
    <section class="py-8 lg:max-w-5xl lg:mx-auto">
      <div class="px-4">
        <h3 class="mb-4 font-sans font-bold text-center text-green-600 text-2xl">H.I.I.E.K.O</h3>
      </div>
      <div id="scrollSection" class="flex overflow-x-auto py-8 px-4 lg:px-0 lg:overflow-hidden lg:mx-auto">
        <div class="flex lg:flex-wrap lg:justify-center">
          <div class="flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4 lg:mb-8">
            <div class="flex justify-center items-center -mt-10">
              <h4 class="px-6 py-2 bg-white text-blue-700 font-sans font-bold">Humaansus</h4>
            </div>
            <div class="flex items-center font-sans font-light h-full">
              <p
                class="text-center py-8 text-blue-700"
              >Töötame inimestele ideaalselt sobiva keskkonna loomise nimel ning peame lugu oma töötajatest, klientidest ja partneritest.</p>
            </div>
          </div>
          <div class="flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4 lg:mb-8">
            <div class="flex justify-center items-center -mt-10">
              <h4 class="px-6 py-2 bg-white text-blue-700 font-sans font-bold">Inspiratsioon</h4>
            </div>
            <div class="flex items-center h-full">
              <p
                class="text-center font-sans font-light py-8 text-blue-700"
              >Leiame parimad lahendused sõltuvalt kliendi või partneri ainulaadsest vajadusest.</p>
            </div>
          </div>
          <div class="flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4 lg:mb-8">
            <div class="flex justify-center items-center -mt-10">
              <h4 class="px-6 py-2 bg-white text-blue-700 font-sans font-bold">Innovaatilisus</h4>
            </div>
            <div class="flex items-center h-full">
              <p
                class="text-center py-8 font-sans font-light text-blue-700"
              >Arendame ühteaegu nii ettevõtet kui meie töötajaid, et pakkuda tõeliselt kaasaegset teenust.</p>
            </div>
          </div>
          <div class="flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4">
            <div class="flex justify-center items-center -mt-10">
              <h4 class="px-6 py-2 bg-white text-blue-700 font-sans font-bold">Eeskujulikkus</h4>
            </div>
            <div class="flex items-center h-full">
              <p
                class="text-center py-8 font-sans font-light text-blue-700"
              >Meie töö tulemused on alati kvaliteetsed ja usaldusväärsed.</p>
            </div>
          </div>
          <div class="flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4">
            <div class="flex justify-center items-center -mt-10">
              <h4 class="px-6 py-2 bg-white text-blue-700 font-sans font-bold">Kompetentsus</h4>
            </div>
            <div class="flex items-center h-full">
              <p
                class="text-center py-8 font-sans font-light text-blue-700"
              >Iga meie töötaja on oma ala asjatundja, seepärast on ka terve ettevõte tippspetsialist keskkonnatehnika alal.</p>
            </div>
          </div>
          <div class="flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4">
            <div class="flex justify-center items-center -mt-10">
              <h4 class="px-6 py-2 bg-white text-blue-700 font-sans font-bold">Operatiivsus</h4>
            </div>
            <div class="flex items-center h-full">
              <p
                class="text-center py-8 font-sans font-light text-blue-700"
              >Peame alati kinni lubadustest ega hiline tähtaegadega.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="teenused"
      style="background: url('/hero-bg.svg')"
      class="px-4 py-10 bg-repeat border-b border-t border-gray-200"
    >
      <div class="mb-8 lg:mb-0">
        <h3
          class="mb-4 lg:mb-0 font-sans font-bold text-center text-green-600 text-2xl"
        >Ehitiste tehnosüsteemid</h3>
      </div>
      <div class="py-8 lg:py-4 lg:max-w-5xl lg:mx-auto">
        <div class="lg:flex">
          <div
            class="flex flex-col min-w-full items-center border-2 border-green-500 rounded-lg p-4 bg-white sm:w-2/3 sm:mx-auto md:max-w-md lg:w-1/3 lg:h-56 lg:my-16"
          >
            <div class="flex items-center -mt-10">
              <h4
                class="px-6 py-2 bg-white text-white text-center bg-green-500 rounded-lg font-sans font-bold w-64"
              >Kavandamine ja projekteerimine</h4>
            </div>
            <div class="flex items-center h-full">
              <p
                class="text-center font-sans font-light py-8 text-blue-700"
              >Meie eksperdid tutvustavad Teile oma nägemust soovitud süsteemi võimalikest lahendustest, võttes arvesse Teie erisoove ja ruumilisi võimalusi.</p>
            </div>
          </div>
          <div
            class="flex flex-col min-w-full items-center border-2 border-green-500 rounded-lg p-4 my-16 bg-white sm:w-2/3 sm:mx-auto md:max-w-md lg:w-1/3 lg:mx-4 lg:h-56"
          >
            <div class="flex items-center -mt-10">
              <h4
                class="px-6 py-2 bg-white text-white text-center bg-green-500 rounded-lg font-sans font-bold w-64"
              >Paigaldamine ja seadistamine</h4>
            </div>
            <div class="flex items-center h-full">
              <p
                class="text-center font-sans font-light py-8 text-blue-700"
              >Pikaajalise kogemusega spetsialistid paigaldavad Teie soovitud lahenduse ning seavad selle töökorda, jälgides, et kõik normid ja nõuded oleksid täidetud.</p>
            </div>
          </div>
          <div
            class="flex flex-col min-w-full items-center border-2 border-green-500 rounded-lg p-4 my-16 bg-white sm:w-2/3 sm:mx-auto md:max-w-md lg:w-1/3 lg:h-56"
          >
            <div class="flex items-center -mt-10">
              <h4
                class="px-6 py-4 bg-white text-white text-center bg-green-500 rounded-lg font-sans font-bold w-64"
              >Hooldus ja remont</h4>
            </div>
            <div class="flex items-center h-full bg-white">
              <p
                class="text-center font-sans font-light py-8 text-blue-700"
              >Meie tehnikud tagavad tehnosüsteemide pika eluea ja parandavad aja jooksul tekkinud rikkeid.</p>
            </div>
          </div>
        </div>
        <div class="sm:w-2/3 sm:mx-auto lg:flex lg:w-full lg:flex-wrap lg:justify-center">
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6">
            <span class="text-white font-sans">Õhuniisutus -ja kuivatussüsteemid</span>
          </div>
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6">
            <span class="text-white font-sans">Kesktolmuimejate süsteemid</span>
          </div>
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6">
            <span class="text-white font-sans">Veevarustus ja äravoolusüsteemid</span>
          </div>
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6">
            <span class="text-white font-sans">Küttesüsteemid</span>
          </div>
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6">
            <span class="text-white font-sans">Jahutussüsteemid</span>
          </div>
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6">
            <span class="text-white font-sans">Automaatikasüsteemid</span>
          </div>
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6">
            <span class="text-white font-sans">Ventilatsioonisüsteemid</span>
          </div>
        </div>
      </div>
    </section>
    <section id="tehtudTood" class="px-4 py-16 md:px-0 md:max-w-lg md:mx-auto">
      <div class="sm:w-2/3 md:w-full sm:mx-auto">
        <!-- <a
          class="block py-4 text-center border border-green-500 rounded-lg hover:border-blue-700 text-green-500 hover:text-blue-700 uppercase font-sans font-bold"
          href="tehtud-tood"
        >Tutvu meie tehtud töödega</a> -->
        <nuxt-link to="tehtud-tood" class="block py-4 text-center border border-green-500 rounded-lg hover:border-blue-700 text-green-500 hover:text-blue-700 uppercase font-sans font-bold">Tutvu meie tehtud töödega</nuxt-link>
      </div>
    </section>
    <section id="kontaktForm" class="lg:flex lg:flex-row-reverse lg:max-w-5xl lg:mx-auto lg:mt-8"> 
      <section class="px-4 mb-24 lg:w-2/3 lg:border-solid lg:border-2 lg:border-green-500 lg:rounded-lg lg:py-4 lg:px-8 lg:ml-8">
        <div class="sm:w-5/6 lg:w-full sm:mx-auto">
          <h3
            class="mb-4 font-sans font-bold text-center text-blue-700 text-2xl uppercase"
          >Kirjuta meile</h3>
          <!-- Siit hakkab form -->
          <form name="contactForm" method="POST" action="/success" netlify netlify-honeypot="bot-field" class="md:max-w-lg md:mx-auto lg:max-w-full" novalidate>
            <!-- Peidetud väli spamitõrje jaoks -->
            <input type="hidden" name="form-name" value="contactForm">
            <!-- Siia tuleb nime väli -->
            <div>
              <input type="text" name="nimi" placeholder="Teie nimi" v-model="$v.form.nimi.$model" class="appearance-none bg-gray-100 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight font-sans focus:outline-none placeholder-gray-700" required>
              <p class="text-sm text-red-400 pl-4" v-if="$v.form.nimi.$error">Palun sisetage enda nimi!</p>
            </div>
            <!-- Siia tuleb emaili väli -->
            <div class="my-4">
              <input type="email" name="email" placeholder="Teie emaili aadress" v-model="form.email" @change="$v.form.email.$touch" class="appearance-none bg-gray-100 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight font-sans focus:outline-none placeholder-gray-700" required>
              <p class="text-sm text-red-400 pl-4" v-if="$v.form.email.$error">Palun sisetage õige emaili aadress!</p>
            </div>
            <!-- Siia tuleb tekstiväli -->
            <div>
              <textarea type="textarea" name="message" rows="8" placeholder="Lisage rohkem infot" v-model="$v.form.message.$model" class="appearance-none bg-gray-100 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight font-sans focus:outline-none placeholder-gray-700" required></textarea>
              <p class="text-sm text-red-400 pl-4" v-if="$v.form.message.$error">Sisestage täpne lisainfo.</p>
            </div>
            <!-- Siia tuleb sisestuse nupp -->
             <button type="submit" value="Saada sõnum" :disabled="$v.form.$invalid" class="mt-4 py-4 px-16 rounded-lg bg-green-500 text-white uppercase font-sans font-bold cursor-pointer hover:bg-green-600 shadow-md hover:shadow-none">Saada</button>
          </form>
        </div>
      </section>
      <section class="mb-16 px-4 md:flex md:w-11/12 md:mx-auto lg:flex-col lg:w-1/3 lg:pr-8">
        <div
          class="block mb-16 sm:w-5/6 sm:mx-auto md:w-1/2 md:pr-8 lg:pr-0 md:border-r md:border-solid md:border-green-500 lg:border-none lg:w-full"
        >
          <h3 class="mb-8 text-blue-700 font-sans font-bold uppercase text-xl">Tallinna osakond</h3>
          <div class="flex justify-between mb-4">
            <span class="text-blue-700 font-sans font-normal uppercase">Aadress</span>
            <p class="text-blue-700 font-sans font-light">Pirni 12, 10617 TALLINN</p>
          </div>
          <div class="flex justify-between mb-4">
            <span class="text-blue-700 font-sans font-normal uppercase">Telefon</span>
            <a class="text-blue-700 font-sans font-light" href="tel:+3726711300">+372 6 711 300</a>
          </div>
          <!-- <div class="flex justify-between mb-4">
            <span class="text-blue-700 font-sans font-normal uppercase">E-post</span>
            <a
              class="text-blue-700 font-sans font-light"
              href="mailto:hiieko@hiieko.ee"
            >hiieko@hiieko.ee</a>
          </div> -->
        </div>
        <div class="block mb-8 md:mb-16 sm:w-5/6 sm:mx-auto md:w-1/2 md:pl-8 lg:pl-0 lg:w-full">
          <h3 class="mb-8 text-blue-700 font-sans font-bold uppercase text-xl">Tartu osakond</h3>
          <div class="flex justify-between mb-4">
            <span class="text-blue-700 font-sans font-normal uppercase">Aadress</span>
            <p class="text-blue-700 font-sans font-light">Pikk 20, 50113 TARTU</p>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-blue-700 font-sans font-normal uppercase">Telefon</span>
            <a class="text-blue-700 font-sans font-light" href="tel:+3727366637">+372 7 366 637</a>
          </div>
          <div class="block text-right">
            <a class="text-blue-700 font-sans font-light" href="tel:+37253090927">+372 53 090 927</a>
          </div>
          <!-- <div class="flex justify-between mb-4">
            <span class="text-blue-700 font-sans font-normal uppercase">E-post</span>
            <a
              class="text-blue-700 font-sans font-light"
              href="mailto:hiieko@hiieko.ee"
            >hiieko@hiieko.ee</a>
          </div> -->
        </div>
        <div class="border-t border-gray-100 md:hidden lg:block">
          <div class="pt-4 flex justify-between">
            <span class="flex text-blue-700 font-sans font-normal uppercase">E-post</span>
            <a
              class="flex text-blue-700 font-sans font-light"
              href="mailto:hiieko@hiieko.ee"
            >hiieko@hiieko.ee</a>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import HeaderNav from "~/components/HeaderNav";
import { required, minLength, email } from "vuelidate/lib/validators"

export default {
  components: {
    HeaderNav
  },

  data () {
    return {
      form: {
        nimi: null,
        email: null,
        message: null
      }
    }
  },

  validations: {
    form: {
      nimi: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      message: {
        required,
        minLength: minLength(15)
      }
    }
  },

  methods: {
    submitForm() {
      if (!this.$v.form.$invalid) {
        console.log('Form Submitted', this.form)
      } else {
        console.log('Invalid form')
      }
    }
  }
};
</script>

<style scoped>

/* Peidame scrollbari webkitiga */
#scrollSection::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}
/* Samuti Edge ja Firefox browseritele */
#scrollSection {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* Siin on kõik vormiga seotud stiilid */

input {
  border: 1px solid #f7fafc;
  box-shadow: none;
}
textarea {
  border: 1px solid #f7fafc;
  box-shadow: none;
}

/* Kui väli ei lähe läbi valideerimisest, siis kasuta neid stiile */

input:focus:invalid {
  border: 1px solid #F56565;
}
textarea:focus:invalid {
  border: 1px solid #F56565;
}

/* Mozilla browserite toetus */

input:focus:-moz-ui-invalid {
  border: 1px solid #F56565;
}

textarea:focus:-moz-ui-invalid {
  border: 1px solid #F56565;
}

/* Kui väli on valideeritud, siis kasuta neid stiile */

input:valid {
  border: 1px solid #6FC085;
}
textarea:valid {
  border: 1px solid #6FC085;
}

form button:disabled {
  background-color: #EDF2F7;
  pointer-events: none;
}

</style>