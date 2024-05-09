<script setup>
import { ref } from 'vue';

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
    <img id="konsulentstortbillede" src="@/assets/mackeprang1.png">
    <img id="konsulentlillebillede" src="@/assets/mackeprang2.png">
  </div>
  <div id="forsidekonsulenttekstboks">
    <h1 id="konsulentoverskrift">CONTENT CREATOR & <br>
    LIVE KONSULENT </h1>
    <div class="modalknapperkonsulent">
    <p class="forsidekonsulenttekst">CONTENT CREATER</p>
    <p class="forsidekonsulenttesktplus">+</p>
    </div>
    <div id="konsulentlinje"></div>
    <div class="modalknapperkonsulent">
    <p class="forsidekonsulenttekst">LIVE KONSULENT</p>
    <p class="forsidekonsulenttesktplus">+</p>
    </div>
    <button id="bookherknap">BOOK HER</button>
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
  <h1 id="forsidevideooverskrift">PERSONLIG SHOPPER</h1>
  <p id="forsidevideotekst">Er du i tvivl? Så lad os sammen finde ud af, hvad du mangler.</p>
  <a href="/personligshopper">
  <button id="bookherknap">LÆS MERE</button>
  </a>

</section>
<section id="anbefalingerafsnit">

</section>
<footer>

</footer>

</template>