<script setup>

import { ref } from 'vue';

const isModalOpen = ref(false);
const modalType = ref('');

const openModal = (type) => {
  isModalOpen.value = true;
  modalType.value = type;
};

const closeModal = () => {
  isModalOpen.value = false;
};

</script>

<template>
<section id="bannerbilledeafsnit">
  <header>
    <a href="/">
    <img id="logo" src="@/assets/mackepranglogo.png" alt="mackepranglogo">
    </a>
  <nav>
  <ul>
  <li><a href="/personligshopper">Personlig Shopper</a></li>
  <li><a href='/tirsdagsklumme'>Tirsdagsklumme</a></li>
  <li><a href='/ommig'>Om mig</a></li>
  <li><a id="bookmenuknap" href='/bookher'>Book her</a></li>
</ul>
  </nav>
  </header>

  <h1 id="bannerbilledeoverskrift" >Cecilie Mackeprang</h1>
  <p id="bannerbilledeundertekst" >Content creator, personlig stylist & konsulent</p>

</section>
<section id="contentkonsulentafsnit">
  <div id="forsidekonsulentbilleder">
    <img id="konsulentstortbillede" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/gra%CC%8Am6.webp?alt=media&token=eeb43b95-faab-4826-afbc-27064cbae029" alt="">
    <img id="konsulentlillebillede" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/gra%CC%8Am7.webp?alt=media&token=b7f267fe-7da6-41bc-bad3-892ea056ca6d" alt="">
  </div>
  <div id="forsidekonsulenttekstboks">
    <h1 id="konsulentoverskrift">CONTENT CREATOR & <br>
    LIVE KONSULENT </h1>
    <div>
    <div class="modalknapperkonsulent" @click="openModal('contentCreater')">
      <p class="forsidekonsulenttekst">CONTENT CREATER</p>
      <p class="forsidekonsulenttekstplus">+</p>
    </div>
    <div id="konsulentlinje"></div>
    <div class="modalknapperkonsulent" @click="openModal('liveKonsulent')">
      <p class="forsidekonsulenttekst">LIVE KONSULENT</p>
      <p class="forsidekonsulenttekstplus">+</p>
    </div>
    
    <div v-if="modalType === 'contentCreater' && isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <p>Content Creater Modal Content</p>
      </div>
    </div>
    
    <div v-if="modalType === 'liveKonsulent' && isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <p>Live Konsulent Modal Content</p>
      </div>
    </div>
  </div>
  <a href="/bookher">
    <button id="bookherknap">BOOK HER</button>
  </a>
  </div>

</section>
<section id="samarbejdspartnereafsnit">
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="@/assets/samarbejdstestbillede.png">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Jeg samarbejder med mennesker</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="@/assets/samarbejdstestbillede.png">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Jeg samarbejder med mennesker</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="@/assets/samarbejdstestbillede.png">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Jeg samarbejder med mennesker</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="@/assets/samarbejdstestbillede.png">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Jeg samarbejder med mennesker</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="@/assets/samarbejdstestbillede.png">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Jeg samarbejder med mennesker</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="@/assets/samarbejdstestbillede.png">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Jeg samarbejder med mennesker</div>
    </div>
  </div>

</section>
<section id="personligshopperafsnit">
  <video id="forsidevideo" autoplay loop muted>
    <source src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/C0098.mp4?alt=media&token=09c3b56e-991a-41aa-aab3-033fd864602a" type="video/mp4">
  </video>
  <div class="forsidevideotekstboks">
  <h1 id="forsidevideooverskrift">PERSONLIG SHOPPER</h1>
  <p id="forsidevideotekst">Er du i tvivl? Så lad os sammen finde ud af, hvad du mangler.</p>
  <a href="/personligshopper">
  <button id="bookherknap">LÆS MERE</button> 
  </a>
</div>

</section>
<section id="anbefalingerafsnit">
  <h1 id="anbefalingeroverskrift">Anbefalinger</h1>
  <div id="anbefalingerkasser">
  <div class="anbefalingerboks">
    <p class="anbefalingnavn">Hanne</p>
    <div class="anbefalinglinje"></div>
    <p class="anbefalingtekst">Det var en fornøjelse at arbejde med Cecilie, 
      da hun gør tingene på sin egen måde og er nem at snakke med.</p>
    <p class="anbefalingtype">2 timers garderobetjek</p>
    <div class="anbefalinglinje"></div>
  </div>
  <div class="anbefalingerboks">
    <p class="anbefalingnavn">Hanne</p>
    <div class="anbefalinglinje"></div>
    <p class="anbefalingtekst">Det var en fornøjelse at arbejde med Cecilie, 
      da hun gør tingene på sin egen måde og er nem at snakke med.</p>
    <p class="anbefalingtype">2 timers garderobetjek</p>
    <div class="anbefalinglinje"></div>
  </div>
  <div class="anbefalingerboks">
    <p class="anbefalingnavn">Hanne</p>
    <div class="anbefalinglinje"></div>
    <p class="anbefalingtekst">Det var en fornøjelse at arbejde med Cecilie, 
      da hun gør tingene på sin egen måde og er nem at snakke med.</p>
    <p class="anbefalingtype">2 timers garderobetjek</p>
    <div class="anbefalinglinje"></div>
  </div>
  </div>

</section>
<footer>

</footer>

</template>