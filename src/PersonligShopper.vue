<script setup>
import { ref } from 'vue';
</script>

<template>
  <header id="personligshopper-header">
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
  <div class="psvideo-container">
    <img class="psvideo" src="@/assets/joker.webp" alt="lige midlertidigt">
        <div class="psvideo-tekst">
            <h2>Personlig shopper</h2>
            <p>Er du i tvivl? Så lad os sammen finde ud af, hvad du mangler!</p>
        </div>
  </div>
<div class="konsultation">
  <div class="konsultation-container">
    <div class="skfoto">
      <img src="https://i.pinimg.com/564x/59/32/29/593229739184504afd9507cc42a9cb86.jpg" alt="Billede">
    </div>
    <div class="sktekst">
      <h2><b>1 times konsultation hjemme hos dig</b></h2>
      <p>
        Du får en kropsanalyse, samt et kig på din personlige stil og garderobe.<br><br>
        Personlig rådgivning om snit, former og farver der klæder dig godt.<br><br>
        Du får gode råd til, hvordan du selv sammensætter dit tøj.<br><br>
        Efterfølgende får du tilsendt materiale med billeder og kropsanalyse samt former, farver og snit der passer til dig.<br>
      </p>
      <div class="pris">900,-</div>
      <button class="bookknapps">BOOK HER</button>
    </div>
  </div>
</div>

<div class="psfelt">
  <div class="ps-container">
    <div class="pstekst">
      <h2><b>2 timers personlig shopping i byen</b></h2>
      <p>
        Jeg har forberedt butikker og tøj ud fra dine ønsker og indkøbsliste.<br><br>
        Vi klarer alle dine indkøb på én gang.<br><br>
        Vi bygger videre på din garderobe, så du kan bruge tøj på tværs af sæsoner.<br><br>
        Du vil blive inspireret med nye farver, styles og tøj-sammensætninger.<br><br>
        God stil behøver ikke koste en masse, og når vi tager på shopping sammen er det dit budget vi tager udgangspunkt i.<br>
      </p>
      <div class="pris">1600,-</div>
      <button class="bookknapps">BOOK HER</button>
    </div>
    <div class="psfoto">
      <img src="https://i.pinimg.com/564x/59/32/29/593229739184504afd9507cc42a9cb86.jpg" alt="Billede">
    </div>
  </div>
</div>

<div class="garderobe">
  <div class="garderobe-container">
    <div class="garderobefoto">
      <img src="https://i.pinimg.com/564x/59/32/29/593229739184504afd9507cc42a9cb86.jpg" alt="Billede">
    </div>
    <div class="garderobetekst">
      <h2><b>3 timers garderobetjek hjemme hos dig</b></h2>
      <p>
        Vi shopper i dit klædeskab og laver helt nye outfits fra din garderobe.<br><br>
        Vi rydder sammen op i din garderobe.<br><br>
        Jeg viser hvilke styles og snit, der klæder din stil og figur.<br><br>
        Vi tager billeder af alle de nye sæt.<br><br>
        Vi laver en indkøbsliste, som du kan bruge til din næste shoppingtur.<br><br>
        Jeg sender efterfølgende dine tips, billeder af outfits og indkøbsliste, som du kan bruge når du køber tøj fremover.<br>
      </p>
      <div class="pris">1900,-</div>
      <button class="bookknapps">BOOK HER</button>
    </div>
  </div>
</div>
 
    <footer>
        <p>© 2024 Mackeprang</p>
    </footer>
    </template>


  
  
