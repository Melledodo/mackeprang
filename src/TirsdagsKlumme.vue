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
        <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/tirsdagklum1.webp?alt=media&token=1ca27764-a768-4fe1-90c5-92f4bc9b676b" alt="portræt billede">
          <div class="modalknaptk" @click="openModalTk('tirsdagKlumme1')">
            <p class="tkknap-tekst">Læs mere</p>
          </div>
      </div>

      <div class="tkbilleder">
        <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/tirsdagklum2.webp?alt=media&token=b0620496-3bdc-4d6d-b1d3-3b93ac0a0625" alt="portræt billede">
          <div class="modalknaptk" @click="openModalTk('tirsdagKlumme2')">
            <p class="tkknap-tekst">Læs mere</p>
        </div>
      </div>
        
      <div class="tkbilleder">
        <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/tirsdagklum3.webp?alt=media&token=6938fb56-5877-43cc-943f-ddd5d695a2e9" alt="portræt billede">
          <div class="modalknaptk" @click="openModalTk('tirsdagKlumme3')">
            <p class="tkknap-tekst">Læs mere</p>
        </div>
      </div>

        <div v-if="modalType === 'tirsdagKlumme1' && isModalOpen" class="modaltk tirsdagKlumme1-modal">
      <div class="modal-indhold">
        <span class="closetk" @click="closeModalTk">&times;</span>
        <div class="modalbillede-container">
        <h2>Tirsdags klumme tekst</h2>
        <p>Har du nogensinde stået foran dit klædeskab og tænkt på, hvor mange skjulte skatte der gemmer sig derinde? 🧥😂

Jeg har fundet denne fantastiske plastiko jakke, og jeg er helt vild med den! 😍 Men jeg ved, at nogle af jer måske har en jakke liggende derhjemme, som I sjældent bruger. - Er det fordi størrelsen ikke er helt rigtig? eller farven ikke passer til jeres stil? Eller hvad der skal sættes til den 💁🏻‍♀️💁🏻‍♀️

Jeg har valgt at tone min jakke ned med sort tøj under, så bliver den lidt nemmere at style. Hvad tænker I?

Jeg har matchet jakken med sneakers og mine absolut yndlings nylonstrømper fra @mollyogmy.dk - de får jo mine ben til at se naturligt brune ud! ✨😍</p>
        </div>
      </div>
      </div>
      <div v-if="modalType === 'tirsdagKlumme2' && isModalOpen" class="modaltk tirsdagKlumme2-modal">
      <div class="modal-indhold">
        <span class="closetk" @click="closeModalTk">&times;</span>
        <div class="modalbillede-container">
        <h2>Tirsdags klumme tekst</h2>
        <p>Styling tips uge 30</p>
        </div>
      </div>
      </div>
      <div v-if="modalType === 'tirsdagKlumme3' && isModalOpen" class="modaltk tirsdagKlumme3-modal">
      <div class="modal-indhold">
        <span class="closetk" @click="closeModalTk">&times;</span>
        <div class="modalbillede-container">
        <h2>Style et simpelt hverdagslook</h2>
        <p>Åh, jeg elsker at vælge dagens outfit, ikke sandt? 👗
        <br>I dag har jeg kastet mig over et lidt anderledes look med brede bukser og en simpel t-shirt. Men for at tilføre en feminin touch og undgå at drukne i det voluminøse, har jeg stylet en oversize kjole, som har en V-udskæring. Det giver lige det rette strejf af feminint uden at miste det oversize look. Og ja, det er virkelig vigtigt at finde den rette balance, så vi ikke forsvinder i stoffet! 😄
        <br>Jeg valgte de brede bukser, fordi de forlænger silhuetten og skaber en fin sammenhæng med kjolen, i stedet for at lave flere skæringer, som med par stramme jeans. Og selvfølgelig kan jeg ikke undvære lidt fokus i taljen, så en kort jakke er den perfekte finish for at give mig den ønskede silhuet.</p>
        </div>
      </div>
      </div>
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