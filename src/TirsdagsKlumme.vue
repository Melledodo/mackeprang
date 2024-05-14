<script setup>
import { ref } from 'vue';


const databaseItems = ref([]);

const requestOptions = {method: 'GET',};

fetch('', requestOptions)
  .then(response => response.json())
  .then(data => {
    databaseItems.value = data;
    console.log(databaseItems.value);

  })
  .catch(error => { //arrow function, udført hvis der sker fejl og console.error udskriver i console, error. Det er et promise
    console.error('Error:', error);

  });
</script>

<template>
  <header id="personligshopper-header">
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

  <div class="klumme-container">
    <h1>Tirsdagsklumme</h1>
      <p class="nyesteklumme">tekst fra seneste klumme</p>
      <div class="database-container">
        <div class="database-items">
          <div v-for="(item, index) in databaseItems" :key="index" class="database-item">
            <h2>{{ item.title }}</h2>
              <div class="image-boxes">
                <div v-for="(billede, billedeIndex) in item.billeder" :key="billedeIndex" class="image-box">
                  <div class="image-wrapper">
                  <img :src="billede.billede" :alt="'Billede' + (billedeIndex + 1)">
                  <p>{{ billede.billedtekst }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>





    <footer>
      <p>© 2024 Mackeprang</p>
    </footer>
</template>