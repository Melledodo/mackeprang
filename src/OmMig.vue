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
    <h2>Om Mig</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget condimentum dolor. Nullam aliquam nulla eu nunc egestas, nec ultrices elit volutpat.</p>
  </div>
</div>
    <footer>
      <p>© 2024 Mackeprang</p>
    </footer>
</template>