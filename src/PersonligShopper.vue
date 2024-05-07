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
            <li><a id="bookknap" href='/bookher'>Book her</a></li>
        </ul>
      </nav>
    </header>
  
    <video id="shoppersidevideo" autoplay loop muted>
      <source src="./assets/testvideo.mp4" type="video/mp4">
    </video>

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
        <em>Efterfølgende får du tilsendt materiale med billeder og kropsanalyse samt former, farver og snit der passer til dig.</em><br>
      </p>
      <div class="pris">900 kr.</div>
      <button class="bookknap">BOOK HER</button>
    </div>
  </div>
</div>


 
    <footer>
        <p>© 2024 Mackeprang</p>
    </footer>
    </template>

  
  
