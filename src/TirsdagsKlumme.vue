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
  <div class="klumme-content">
    <h2>Denne uge skal jeg arbejde med.....</h2>
    <p>Alle mulige seje ting og mennesker, det bliver bare så fedt og SÅÅÅÅ SJOVT</p>
  </div>

  <div class="klummebillede">
    <img src="https://source.unsplash.com/W3FC_bCPw8E" alt="portræt billede">
  </div>
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