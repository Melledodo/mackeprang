<script setup>
import { ref } from 'vue';

const isResponsive = ref(false);

function hamburgerFunktion() {
  isResponsive.value = !isResponsive.value;
}
</script>

<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <header>
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
  <div class="psvideo-container">
  <video id="psvideo" autoplay loop muted>
    <source src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/Personlig%20shopper.mp4?alt=media&token=db6199a4-16fa-4e54-a987-243daca1c2f8" type="video/mp4">
  </video>
        <div class="psvideo-tekst">
            <h2 class="psoverskriftvideo">PERSONLIG SHOPPER</h2>
            <p class="psunderskrift">Er du i tvivl? Så lad os sammen finde ud af, hvad du mangler!</p>
        </div>
  </div>

<div class="konsultation">
  <div class="konsultation-container">
    <div class="skfoto">
      <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/farveM1.webp?alt=media&token=42933b78-cc1e-41c8-a5a4-ebeb34fa9a66" alt="Billede">
    </div>
    <div class="sktekst">
      <h2 class="sth2">Styling konsultation</h2>
      <h3><b>1 times konsultation hjemme hos dig</b></h3>
      <p><br> Få en omfattende kropsanalyse og evaluering af din personlige stil og garderobe.
      <br><br> Modtag personlig rådgivning om, hvilke snit, former og farver der klæder dig bedst.
      <br><br>Lær at sammensætte dit tøj med gode råd og tips.
        <br><br>Efter vores session vil du modtage omfattende materiale med billeder, kropsanalyse og anbefalinger til former, farver og snit, der passer perfekt til dig.
      </p>
      <div class="pris"><b>900,-</b></div>
      <a href="/bookher">
      <button class="bookknapps">BOOK HER</button>
      </a>
    </div>
  </div>
</div>
<div class="psfelt">
  <div class="ps-container">
    <div class="pstekst">
      <h2 class="psh2">Personlig shopper</h2>
      <h3><b>2 timers personlig shopping i byen</b></h3>
      <p>
        Jeg har nøje udvalgt butikker og tøj baseret på dine ønsker og indkøbsliste.
        <br><br> Vi ordner alle dine indkøb på én gang for maksimal bekvemmelighed.
        <br><br> Vi udvider din garderobe, så den fungerer på tværs af sæsonerne.
        <br><br> Bliv inspireret med nye farver, styles og tøjsammensætninger.
        <br><br> God stil behøver ikke være dyrt! Når vi shopper sammen, tager vi udgangspunkt i dit budget.
      </p>
      <div class="pris"><b>1600,-</b></div>
      <a href="/bookher">
      <button class="bookknapps">BOOK HER</button>
      </a>
    </div>
    <div class="psfoto">
      <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/farvem3.webp?alt=media&token=9f071211-d3c8-4b9d-bdb3-1581fe7aa10f" alt="Billede">
    </div>
  </div>
</div>
<div class="garderobe">
  <div class="garderobe-container">
    <div class="garderobefoto">
      <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/farvem2.webp?alt=media&token=39ebea6a-5b61-44e0-996f-20b6f7b08b06" alt="Billede">
    </div>
    <div class="garderobetekst">
      <h2 class="gh2">Garderobetjek</h2>
      <h3><b>3 timers garderobetjek hjemme hos dig</b></h3>
      <p>
        Sammen skaber vi helt nye outfits ved at shoppe i din egen garderobe.
        <br><br> Vi skaber orden i kaos og forvandler din garderobe.
        <br><br> Jeg guider dig til de perfekte styles og snit, der passer til din personlige stil og figur.
        <br><br>Efter vores session modtager du outfitbilleder og indkøbsliste til at guide dig fremover i dit tøjvalg.
      </p>
      <div class="pris"><b>1900,-</b></div>
      <a href="/bookher">
      <button class="bookknapps">BOOK HER</button>
      </a>
    </div>
  </div>
</div>

<div class="gnfelt">
  <div class="gn-container">
    <div class="gntekst">
      <h2 class="gnh2">Girls night in</h2>
      <h3><b>1-2 timers styling</b></h3>
      <p>
        <br>Drømmer du om en stilfuld aften eller dag? Lad mig komme til dig og forvandle din garderobe med skønne snit, farver og geniale stylingtips! 
        <br><br> I kan være 6-8 personer. 
        <br><br> Jeg er forberedt inde på jeres kropstyper og alder! 
        <br><br>Det handler om at genopdage din stil på en spændende måde! 
      </p>
      <div class="pris"><b>300,- pr. person</b></div>
      <a href="/bookher">
      <button class="bookknapps">BOOK HER</button>
      </a>
    </div>
    <div class="gnfoto">
      <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/farvem4.webp?alt=media&token=101c758a-9cdc-4a3a-91c5-cf8169e104bd" alt="Billede">
    </div>
  </div>
</div>
 
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


  
  
