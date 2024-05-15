<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);
const modalType = ref('');

const openModalTk = (type) => {
  isModalOpen.value = true;
  modalType.value = type;
};

const closeModalTk = () => {
  isModalOpen.value = false;
};

const databaseItems = ref([]);

const requestOptions = {method: 'GET',};

fetch('https://mackeprang-b5f6e-default-rtdb.europe-west1.firebasedatabase.app/indhold.json', requestOptions)
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

<section class="tk-indhold">
    <div class="database-items">
      <div v-for="(item, index) in databaseItems" :key="index" class="database-item">
        <h2>{{ item.billeder[0].title }}</h2>
          <div class="billede-api">
            <p>{{ item.billeder[0].billedtekst }}</p>
            <img :src="item.billeder[0].billede" :alt="'Billede'">
        </div>
      </div>
    </div>
</section>


<div class="tidligereklumme">
  <h1>Tidligere klummer</h1>
</div>

  <div class="tkbilleder-container">

      <div class="tkbilleder">
        <img src="https://source.unsplash.com/55btQzyDiO8" alt="portræt billede">
          <div class="modalknaptk" @click="openModalTk('tirsdagKlumme')">
            <p class="tkknap-tekst">Læs mere</p>
          </div>
      </div>

      <div class="tkbilleder">
        <img src="https://source.unsplash.com/55btQzyDiO8" alt="portræt billede">
          <div class="modalknaptk" @click="openModalTk('tirsdagKlumme')">
            <p class="tkknap-tekst">Læs mere</p>
        </div>
      </div>
        
      <div class="tkbilleder">
        <img src="https://source.unsplash.com/55btQzyDiO8" alt="portræt billede">
          <div class="modalknaptk" @click="openModalTk('tirsdagKlumme')">
            <p class="tkknap-tekst">Læs mere</p>
        </div>
      </div>

        <div v-if="modalType === 'tirsdagKlumme' && isModalOpen" class="modaltk">
      <div class="modal-indhold">
        <span class="closetk" @click="closeModalTk">&times;</span>
        <div class="modalbillede-container">
        <h2>Tirsdags klumme tekst</h2>
        <p>Her er en masse tekst om tirsdagsklummen fra tidligere engang for at illustrere.</p>
        <img src="https://source.unsplash.com/rBRZLPVLQg0" alt="portræt billede">
        </div>
      </div>
      </div>
</div>



    <footer>
      <p>© 2024 Mackeprang</p>
    </footer>
</template>