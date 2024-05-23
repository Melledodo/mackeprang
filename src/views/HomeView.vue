<script setup>

import { ref } from 'vue';

const isResponsive = ref(false);

function hamburgerFunktion() {
  isResponsive.value = !isResponsive.value;
}

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
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<section id="bannerbilledeafsnit">
  <header id="forsideheader">
      <a href="/">
        <img id="logo" src="@/assets/mackepranglogo.png" alt="mackepranglogo">
      </a>
      <nav>
        <div class="topnav" :class="{ 'responsive': isResponsive }" id="myTopnav">
          <a href="/personligshopper">Personlig Shopper</a>
          <a href='/tirsdagsklumme'>Tirsdagsklumme</a>
          <a href='/ommig'>Om mig</a>
          <a id="bookmenuknap" href='/bookher'>Book her</a>
          <a href="javascript:void(0);" class="icon" @click="hamburgerFunktion">
            <i class="fa fa-bars"></i>
          </a>
        </div>
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
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde1.JPG?alt=media&token=8d3f2002-0d2d-4737-aaf6-3bc4fbf72454" alt="">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Cecilie Mackeprang <br>X<br>Moodswing</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde10.JPG?alt=media&token=10ab8972-6994-497c-aa51-3a8a37ca8645" alt="">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Cecilie Mackeprang <br>X<br>Connect Cowork</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde3.JPG?alt=media&token=e5c67473-199d-4cc3-8206-3452c0fca975" alt="">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Cecilie Mackeprang <br>X<br>Second love</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde4.JPG?alt=media&token=69842c55-61df-492f-ba03-a4a310af1f29" alt="">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Cecilie Mackeprang <br>X<br>Simone Lindharth</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde5.JPG?alt=media&token=89e0f0b7-821a-4a61-8d55-ade2ff4d2ebe" alt="">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Cecilie Mackeprang <br>X<br>Line Bjørn</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde6.JPG?alt=media&token=cbc013f8-f81a-4d4f-977c-62e90f9c2450" alt="">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Cecilie Mackeprang <br>X<br>DANOIS</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde7.JPG?alt=media&token=e749f507-2646-4649-8fb9-3b9d2944e88d" alt="">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Cecilie Mackeprang <br>X<br>Clinique Cisto</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde8.jpg?alt=media&token=3a534eac-ba6a-4dac-9124-e78ac38f5aaa" alt="">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Cecilie Mackeprang <br>X<br>IMERCO</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde9.JPG?alt=media&token=d6ace01a-1d25-4b68-a72d-f0525382cb7c" alt="">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Cecilie Mackeprang <br>X<br>Karma</div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde2.JPG?alt=media&token=2fca075f-5fb7-4a87-a645-fc23b397f653" alt="">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst">Cecilie Mackeprang <br>X<br>Kim Lindharth</div>
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
<section class="kontaktfooter-info">
    
      <div class="indholdfooter">
        <p>© 2024 Mackeprang</p>
            <a href="https://www.pscecilie.dk/" class="tidligerehjemmeside">pscecilie.dk</a>
          <p>Email: book@pscecilie.dk</p>
        <p>Telefon: +45 40 19 49 54</p>
      </div>
</section>
</footer>

</template>