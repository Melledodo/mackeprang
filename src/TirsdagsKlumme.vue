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