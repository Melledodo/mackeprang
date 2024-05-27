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
          <a href="/personligshopper"><b>Personlig Shopper</b></a>
          <a href='/tirsdagsklumme'><b>Tirsdagsklumme</b></a>
          <a href='/ommig'><b>Om mig</b></a>
          <a id="bookmenuknap" href='/bookher'><b>Book her</b></a>
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
    <img id="konsulentstortbillede" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/gra%CC%8Am6.webp?alt=media&token=eeb43b95-faab-4826-afbc-27064cbae029" alt="Live konsulent">
    <img id="konsulentlillebillede" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/gra%CC%8Am7-kopi.webp?alt=media&token=6f8c1f89-8065-490a-a470-2f874fbf89bb" alt="Content creator">
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
        <p>Her laver jeg faste aftaler med virksomheder, der ønsker et mere personligt og 
          nærværende udtryk i deres content på deres sociale medier.
          Jeg laver både film og billeder af produkter, men også af personer, 
          der er lige i det, de elsker. Deres egen virksomhed eller med deres produkt.</p>
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
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde1.JPG?alt=media&token=8d3f2002-0d2d-4737-aaf6-3bc4fbf72454" alt="Samarbejde med Moodswing">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst"><b>Cecilie Mackeprang <br>X<br>Moodswing</b></div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde10.JPG?alt=media&token=10ab8972-6994-497c-aa51-3a8a37ca8645" alt="Samarbejde med Connect Cowork">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst"><b>Cecilie Mackeprang <br>X<br>Connect Cowork</b></div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde3.JPG?alt=media&token=e5c67473-199d-4cc3-8206-3452c0fca975" alt="Samarbejde med Second love">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst"><b>Cecilie Mackeprang <br>X<br>Second love</b></div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde4.JPG?alt=media&token=69842c55-61df-492f-ba03-a4a310af1f29" alt="Samarbejde med Simone Lindharth">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst"><b>Cecilie Mackeprang <br>X<br>Simone Lindharth</b></div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde5.JPG?alt=media&token=89e0f0b7-821a-4a61-8d55-ade2ff4d2ebe" alt="Samarbejde med Line Bjørn">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst"><b>Cecilie Mackeprang <br>X<br>Line Bjørn</b></div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde6.JPG?alt=media&token=cbc013f8-f81a-4d4f-977c-62e90f9c2450" alt="Samarbejde med DANOIS">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst"><b>Cecilie Mackeprang <br>X<br>DANOIS</b></div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde7.JPG?alt=media&token=e749f507-2646-4649-8fb9-3b9d2944e88d" alt="Samarbejde med Clinique cisto">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst"><b>Cecilie Mackeprang <br>X<br>Clinique Cisto</b></div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde8.jpg?alt=media&token=3a534eac-ba6a-4dac-9124-e78ac38f5aaa" alt="Samarbejde med IMERCO">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst"><b>Cecilie Mackeprang <br>X<br>IMERCO</b></div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde9.JPG?alt=media&token=d6ace01a-1d25-4b68-a72d-f0525382cb7c" alt="Samarbejde med Karma">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst"><b>Cecilie Mackeprang <br>X<br>Karma</b></div>
    </div>
  </div>
  <div class="samarbejdspartnerkasser">
    <img class="samarbejdsbilleder" src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/samarbejde2.JPG?alt=media&token=2fca075f-5fb7-4a87-a645-fc23b397f653" alt="Samarbejde med Kim Lindharth">
    <div class="samarbejdsoverlay">
    <div class="samarbejdstekst"><b>Cecilie Mackeprang <br>X<br>Kim Lindharth</b></div>
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
    <p class="anbefalingnavn">Trine Egsgård Køhn</p>
    <div class="anbefalinglinje"></div>
    <p class="anbefalingtekst">Jeg havde nogle fantastiske timer sammen med Cecilie, 
      hvor vi fandt ud af, at jeg havde virkelig meget tøj i mit klædeskab, 
      som jeg aldrig brugte, men sammen med Cecilie fik vi lavet nogle fede styles 
      og sammensætninger som jeg aldrig havde drømt om.</p>
    <p class="anbefalingtype">2 timers garderobetjek</p>
    <div class="anbefalinglinje"></div>
  </div>
  <div class="anbefalingerboks">
    <p class="anbefalingnavn">Ole Mathorne</p>
    <div class="anbefalinglinje"></div>
    <p class="anbefalingtekst">Jeg skal love for, at jeg fik inspiration. Cecilie formåede
       med sin direkte og åbne tilgang at åbne for et langt større udvalg og muligheder. 
       Jeg fik hjælp til at få afklaret min tøjstil i langt højere grad. Det har ført til 
       langt færre fejlkøb og at jeg idag grundlæggende køber mindre, men bedre tøj, 
       der passer med det eksisterende. Jeg kan kun give Cecilie mine varmeste anbefalinger.</p>
    <p class="anbefalingtype">2 timers personlig shopping</p>
    <div class="anbefalinglinje"></div>
  </div>
  <div class="anbefalingerboks">
    <p class="anbefalingnavn">Mie Kristin Pedersen </p>
    <div class="anbefalinglinje"></div>
    <p class="anbefalingtekst">Cecilies måde at være på, er fantastisk! Som med-kvinde der ser 
      en anden kvinde og hendes potentiale. 2 timer er lige tilpas. Der er meget at lære og tage ind, 
      så det er bare godt, at hun flere gange huskede mig på, at det også ville komme på skrift efter 
      garderobetjekket, så jeg kunne slappe af og nyde oplevelsen.</p>
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