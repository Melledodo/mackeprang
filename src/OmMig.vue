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
    <section class="content">
      <div class="text">
        <h2>Om Mig</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget condimentum dolor. Nullam aliquam nulla eu nunc egestas, nec ultrices elit volutpat.</p>
      </div>
      <div class="image-container">
        <img id="ommigbillede" src="@/assets/mackeprang1.png" alt="mackeprang1">
      </div>
    </section>
    <footer>
      <p>© 2024 Mackeprang</p>
    </footer>
</template>