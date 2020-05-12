<template>
  <main>
    <HeaderNav />
    <section
      style="background: url('hero-bg.svg')"
      class="px-4 py-8 bg-repeat border-b border-solid border-gray-200 md:flex md:flex-row-reverse md:w-11/12 md:mx-auto"
    >
      <div class="pb-8 flex justify-center md:w-1/2">
        <img class="relative" src="hero-svg.svg" alt="Hero image" />
      </div>
      <div class="sm:block sm:text-center md:text-left md:w-1/2">
        <h1
          class="mb-6 font-sans font-light text-4xl capitalize"
        >Ehitiste tehnosüsteemid & automaatika</h1>
        <p class="opacity-50 font-sans font-light">
          Projekteerimine
          <span>/</span> Paigaldus
          <span>/</span> Hooldus
        </p>
      </div>
    </section>
    <section id="meist" class="px-4 py-16 md:flex md:w-11/12 md:mx-auto">
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
    <section class="py-8">
      <div class="px-4">
        <h3 class="mb-4 font-sans font-bold text-center text-green-600 text-2xl">H.I.I.E.K.O</h3>
      </div>
      <div class="flex overflow-x-auto py-8 px-4">
        <div class="flex">
          <div class="flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4">
            <div class="flex justify-center items-center -mt-10">
              <h4 class="px-6 py-2 bg-white text-blue-700 font-sans font-bold">Humaansus</h4>
            </div>
            <div class="flex items-center font-sans font-light h-full">
              <p
                class="text-center py-8 text-blue-700"
              >Töötame inimestele ideaalselt sobiva keskkonna loomise nimel ning peame lugu oma töötajatest, klientidest ja partneritest.</p>
            </div>
          </div>
          <div class="flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4">
            <div class="flex justify-center items-center -mt-10">
              <h4 class="px-6 py-2 bg-white text-blue-700 font-sans font-bold">Inspiratsioon</h4>
            </div>
            <div class="flex items-center h-full">
              <p
                class="text-center font-sans font-light py-8 text-blue-700"
              >Leiame parimad lahendused sõltuvalt kliendi või partneri ainulaadsest vajadusest.</p>
            </div>
          </div>
          <div class="flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4">
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
      style="background: url('hero-bg.svg')"
      class="px-4 py-10 bg-repeat border-b border-t border-gray-200"
    >
      <div class="mb-8">
        <h3
          class="mb-4 font-sans font-bold text-center text-green-600 text-2xl"
        >Ehitiste tehnosüsteemid</h3>
      </div>
      <div class="py-8">
        <div
          class="flex flex-col min-w-full items-center border-2 border-green-500 rounded-lg p-4 bg-white sm:w-2/3 sm:mx-auto"
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
          class="flex flex-col min-w-full items-center border-2 border-green-500 rounded-lg p-4 my-16 bg-white sm:w-2/3 sm:mx-auto"
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
          class="flex flex-col min-w-full items-center border-2 border-green-500 rounded-lg p-4 my-16 bg-white sm:w-2/3 sm:mx-auto"
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
        <div class="sm:w-2/3 sm:mx-auto">
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4">
            <span class="text-white font-sans">Õhuniisutus -ja kuivatussüsteemid</span>
          </div>
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4">
            <span class="text-white font-sans">Kesktolmuimejate süsteemid</span>
          </div>
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4">
            <span class="text-white font-sans">Küttesüsteemid</span>
          </div>
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4">
            <span class="text-white font-sans">Veevarustus ja äravoolusüsteemid</span>
          </div>
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4">
            <span class="text-white font-sans">Jahutussüsteemid</span>
          </div>
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4">
            <span class="text-white font-sans">Automaatikasüsteemid</span>
          </div>
          <div class="mb-4 block bg-green-500 text-center rounded-lg py-4">
            <span class="text-white font-sans">Ventilatsioonisüsteemid</span>
          </div>
        </div>
      </div>
    </section>
    <section id="tehtudTood" class="px-4 py-16">
      <div class="sm:w-2/3 sm:mx-auto">
        <a
          class="block py-4 text-center border border-green-500 rounded-lg hover:border-blue-700 text-green-500 hover:text-blue-700 uppercase font-sans font-bold"
          href="tehtud-tood"
        >Tutvu meie tehtud töödega</a>
      </div>
    </section>
    <section class="px-4 mb-24">
      <div class="sm:w-5/6 sm:mx-auto">
        <h3
          class="mb-4 font-sans font-bold text-center text-blue-700 text-2xl uppercase"
        >Kirjuta meile</h3>
        <form id="contactForm">
          <div class="mb-4">
            <!--<label class="block text-blue-700 text-sm mb-2" for="person-name">Teie nimi</label>-->
            <input
              class="shadow appearance-none border border-green-500 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight font-sans focus:outline-none"
              type="text"
              placeholder="Teie nimi"
            />
          </div>
          <div class="mb-4">
            <!--<label class="block text-blue-700 text-sm mb-2" for="person-name">Teie nimi</label>-->
            <input
              class="shadow appearance-none border border-green-500 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight font-sans focus:outline-none"
              type="email"
              placeholder="Teie emaili aadress"
            />
          </div>
          <div class="mb-4">
            <!--<label class="block text-blue-700 text-sm mb-2" for="person-name">Teie nimi</label>-->
            <textarea
              form="contactForm"
              class="shadow appearance-none border border-green-500 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight font-sans focus:outline-none"
              type="textarea"
              placeholder="Lisainfo"
              rows="8"
            />
          </div>
          <div class="mb-4 text-center">
            <input
              class="py-4 px-16 rounded-lg bg-green-500 text-white uppercase font-sans font-bold"
              type="submit"
              value="SAADA"
            />
          </div>
        </form>
      </div>
    </section>
    <section class="px-4">
      <div class="block mb-16 sm:w-5/6 sm:mx-auto">
        <h3 class="mb-8 text-blue-700 font-sans font-bold uppercase text-xl">As Hiieko, Tallinn</h3>
        <div class="flex justify-between mb-4">
          <span class="text-blue-700 font-sans font-normal uppercase">Aadress</span>
          <p class="text-blue-700 font-sans font-light">Pirni 12, 10617 TALLINN</p>
        </div>
        <div class="flex justify-between mb-4">
          <span class="text-blue-700 font-sans font-normal uppercase">Telefon</span>
          <a class="text-blue-700 font-sans font-light" href="tel:+3726711300">+372 6 711 300</a>
        </div>
        <div class="flex justify-between mb-4">
          <span class="text-blue-700 font-sans font-normal uppercase">E-post</span>
          <a
            class="text-blue-700 font-sans font-light"
            href="mailto:hiieko@hiieko.ee"
          >hiieko@hiieko.ee</a>
        </div>
      </div>
      <div class="block mb-32 sm:w-5/6 sm:mx-auto">
        <h3 class="mb-8 text-blue-700 font-sans font-bold uppercase text-xl">As Hiieko, Tartu</h3>
        <div class="flex justify-between mb-4">
          <span class="text-blue-700 font-sans font-normal uppercase">Aadress</span>
          <p class="text-blue-700 font-sans font-light">Pikk 20, 50113 TARTU</p>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-blue-700 font-sans font-normal uppercase">Telefon</span>
          <a class="text-blue-700 font-sans font-light" href="tel:+3727366637">+372 7 366 637</a>
        </div>
        <div class="block text-right mb-4">
          <a class="text-blue-700 font-sans font-light" href="tel:+37253090927">+372 53 090 927</a>
        </div>
        <div class="flex justify-between mb-4">
          <span class="text-blue-700 font-sans font-normal uppercase">E-post</span>
          <a
            class="text-blue-700 font-sans font-light"
            href="mailto:hiieko@hiieko.ee"
          >hiieko@hiieko.ee</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HeaderNav from "~/components/HeaderNav";

export default {
  components: {
    HeaderNav
  }
};
</script>

<style>
</style>