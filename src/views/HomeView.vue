<script setup>
import { ref } from 'vue';

</script>

<template>
<section id="bannerbilledeafsnit">
  <header>
    <img id="logo" src="@/assets/mackepranglogo.png" alt="mackepranglogo">
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
    <p class="forsidekonsulenttekst">CONTENT CREATER</p>
    <p class="forsidekonsulenttekst">LIVE KONSULENT</p>
    <button id="bookherknap">BOOK HER</button>
  </div>

</section>
<section id="samarbejdspartnereafsnit">

</section>
<section id="personligshopperafsnit">

</section>
<section id="anbefalingerafsnit">

</section>
<footer>

</footer>

</template>