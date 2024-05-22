<script setup>
import { ref } from 'vue';

const isResponsive = ref(false);

function hamburgerFunktion() {
  isResponsive.value = !isResponsive.value;
}

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
  <header>
      <a href="/">
        <img id="logo" src="@/assets/mackepranglogo.png" alt="mackepranglogo">
      </a>
      <nav>
        <div class="topnav" :class="{ 'responsive': isResponsive }" id="myTopnav">
          <a href="/personligshopper">Personlig Shopper</a>
          <a href='/tirsdagsklumme'>Tirsdagsklumme</a>
          <a href='/ommig'>Om mig</a>
          <a id="bookmenuknap" href='/bookher'>Book her</a>
          <a href="javascript:void(0);" class="icon" @click="hamburgerFunktion">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </nav>
    </header>

<section class="tk-indhold">
    <div class="database-items">
      <div v-for="(item, index) in databaseItems" :key="index" class="database-item">
          <div class="billede-api">
            <div class="api-tekst">
            <h2>{{ item.billeder[0].title }}</h2>
            <p>{{ item.billeder[0].billedtekst }}</p>
            </div>
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
          <div class="modalknaptk" @click="openModalTk('tirsdagKlumme1')">
            <p class="tkknap-tekst">Læs mere</p>
          </div>
      </div>

      <div class="tkbilleder">
        <img src="https://source.unsplash.com/55btQzyDiO8" alt="portræt billede">
          <div class="modalknaptk" @click="openModalTk('tirsdagKlumme2')">
            <p class="tkknap-tekst">Læs mere</p>
        </div>
      </div>
        
      <div class="tkbilleder">
        <img src="https://source.unsplash.com/55btQzyDiO8" alt="portræt billede">
          <div class="modalknaptk" @click="openModalTk('tirsdagKlumme3')">
            <p class="tkknap-tekst">Læs mere</p>
        </div>
      </div>

        <div v-if="modalType === 'tirsdagKlumme1' && isModalOpen" class="modaltk tirsdagKlumme1-modal">
      <div class="modal-indhold">
        <span class="closetk" @click="closeModalTk">&times;</span>
        <div class="modalbillede-container">
        <h2>Tirsdags klumme tekst</h2>
        <p>Her er en masse tekst om tirsdagsklummen fra tidligere engang for at illustrere.</p>
        <img src="https://source.unsplash.com/rBRZLPVLQg0" alt="portræt billede">
        </div>
      </div>
      </div>
      <div v-if="modalType === 'tirsdagKlumme2' && isModalOpen" class="modaltk tirsdagKlumme2-modal">
      <div class="modal-indhold">
        <span class="closetk" @click="closeModalTk">&times;</span>
        <div class="modalbillede-container">
        <h2>Tirsdags klumme tekst</h2>
        <p>Styling tips uge 30</p>
        <img src="https://source.unsplash.com/rBRZLPVLQg0" alt="portræt billede">
        </div>
      </div>
      </div>
      <div v-if="modalType === 'tirsdagKlumme3' && isModalOpen" class="modaltk tirsdagKlumme3-modal">
      <div class="modal-indhold">
        <span class="closetk" @click="closeModalTk">&times;</span>
        <div class="modalbillede-container">
        <h2>Tirsdags klumme tekst</h2>
        <p>Styling tip uge 12</p>
        <img src="https://source.unsplash.com/rBRZLPVLQg0" alt="portræt billede">
        </div>
      </div>
      </div>
</div>



    <footer>
      <p>© 2024 Mackeprang</p>
    </footer>
</template>