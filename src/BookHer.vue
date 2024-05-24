<script setup>
import { ref, reactive } from 'vue';

const isResponsive = ref(false);

function hamburgerFunktion() {
  isResponsive.value = !isResponsive.value;
}

const navn = ref('');
const telefonnummer = ref('');
const email = ref('');
const besked = ref('');
const showMessage = ref(false);
const kontakter = reactive([]);


const onSubmitForm = () => {
    fetch('https://mackeprang-b5f6e-default-rtdb.europe-west1.firebasedatabase.app/kontakt.json', {
        method: 'POST',
        body: JSON.stringify({
            navn: navn.value,
            telefonnummer: telefonnummer.value, 
            email: email.value,
            besked: besked.value
        }),
    })
    .then (() => {
        getKontakt();
        showMessage.value = true; 
        navn.value = '';
        telefonnummer.value = '';
        email.value = '';
        besked.value = '';
    });
};

const getKontakt = () => {
    fetch('https://mackeprang-b5f6e-default-rtdb.europe-west1.firebasedatabase.app/kontakt.json', {
        method: 'GET',
    })
    .then((rawResponse) => rawResponse.json())
    .then((response) => {
      const keys = Object.keys(response);
      const newKontakter = keys.map((key) => response[key]);
      kontakter.splice(0, kontakter.length, ...newKontakter);
    });
};

getKontakt();
</script>

<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <header>
      <a href="/">
        <img id="logo" src="@/assets/mackepranglogo.png" alt="mackepranglogo">
      </a>
      <nav>
        <div class="topnav" :class="{ 'responsive': isResponsive }" id="myTopnav">
          <a href="/personligshopper"><b>Personlig Shopper</b></a>
          <a href='/tirsdagsklumme'><b>Tirsdagsklumme</b></a>
          <a href='/ommig'><b>Om mig</b></a>
          <a id="bookmenuknap" href='/bookher'><b>Book her</b></a>
          <a href="javascript:void(0);" class="icon" @click="hamburgerFunktion">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </nav>
    </header>
    <div class="siden">
<div class="billede">
    <img class="cecilie" src="https://firebasestorage.googleapis.com/v0/b/melledodo-3sem.appspot.com/o/cecilie-mackeprang.webp?alt=media&token=0f543f3b-4252-4083-8730-88d0bdd078d4" alt="Billede fra Instagram">
</div>
    <form v-on:submit.prevent="onSubmitForm">
    <p>Fulde navn</p>
    <input id="navn" type="text" v-model="navn" placeholder="Navn">
    <p>Telefonnummer</p>
    <input id="telefonnummer" type="number" v-model="telefonnummer" placeholder="Nummer">
    <p>Email adresse</p>
    <input id="email" type="email" v-model="email" placeholder="Email">
    <p>Besked</p>
    <input id="besked" type="text" v-model="besked" placeholder="meddelelse">
    <label>
    <input class="huskmig" type="checkbox" checked="checked" name="husk">Husk mig
    </label>
    <button id="indsend" type="submit">Send</button>
    <div v-if="showMessage">Besked modtaget! Tak for din henvendelse.</div>
    </form>
</div>

<footer>
<section class="kontaktfooter-info">
    
      <div class="indholdfooter">
        <p>© 2024 Mackeprang</p>
            <a href="https://www.pscecilie.dk/" class="tidligerehjemmeside">pscecilie.dk</a>
          <p>Email: book@pscecilie.dk</p>
        <p>Telefon: +45 40 19 49 54</p>
      </div>
</section>
</footer>

</template>