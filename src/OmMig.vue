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
    <div class="ommig-indhold">
  <img id="ommigbillede" src="@/assets/mackeprang1.png" alt="mackeprang1">
  <div class="ommig-tekst">
    <h2>Cecilie Mackeprang</h2>
    <p>Med over 15 års erfaring i modebranchen og baggrund som tekstil- og beklædningshåndværker med speciale i design, har jeg arbejdet som Visuel Merchandiser hos Bestseller, Envii og Samsøe Samsøe.
        <br>Glæd dig til at få masser af modeinspiration og personlige tips fra mig!<br></p>
  </div>
</div>



    <footer>
      <p>© 2024 Mackeprang</p>
    </footer>
</template>