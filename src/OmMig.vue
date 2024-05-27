<script setup>
import { ref } from 'vue';

const isResponsive = ref(false);

function hamburgerFunktion() {
  isResponsive.value = !isResponsive.value;
}

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
    <div class="ommig-indhold">
  <img id="ommigbillede" src="@/assets/mackeprang1.png" alt="cecilie med armene i bevægelse og smiler">
  <div class="ommig-tekst">
    <h2>Cecilie Mackeprang</h2>
    <p>Hej allesammen! 👋🏻 Jeg er Cecilie, og jeg nærmer mig hastigt de 38 år - lidt for hurtigt efter min smag! 😮‍💨😮‍💨<br>
    Sammen med mine to vidunderlige børn og min søde mand, bor vi “ude” i Marslev på Fyn.
    <br>Som uddannet designer har jeg arbejdet med visuel merchandising, indkøb, sælger og endda personlig shopper i Magasin og nu som selvstændig @ps.cecilie . 
    <br>Mit hår skifter farve oftere end vejret i Danmark, og min garderobe er en levende oase af tøj og mode - jeg elsker at mikse og matche, være farverig den ene dag, sort den næste og dagen efter i det klassiske look. 
    <br>Usikkerheden kan snige sig ind på mig, og fylder mere end man tror - en tro på om jeg er dygtig, god nok og lære af mine fejl, end slå mig selv ned.
    <br>Ha! Min stemme? Den kan man genkende på 1000 kilometers afstand! Jeg har erfaret jeg ikke behøver sige mit navn i telefonen 😅😅
        En skjult talent, hvis jeg selv skal sige det. En ting, jeg ikke er i tvivl om, er min kærlighed til kinderchokolade - så rammer du plet, hvis du kommer med det til kaffen 🤣
    <br>Og ja, jeg er også selvstændig, elsker at netværke og er ret god til at snakke - især hvis der er kaffe involveret! ☕❤️</p>
  </div>
</div>

<div class="ommigfoto-container">

    <div class="instagram-info">
        <a href="https://www.instagram.com/ceciliemackeprang" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/insta-logo.webp" alt="Instagram Logo" id="instalogo"></a>
                <p class="instanavn"> ceciliemackeprang </p>
    </div>
        <div class="fotogalleri">

            <div class="kolonne">
                <div class="ommig-fotogalleri">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/macke0.webp?alt=media&token=f298d60f-6efa-43d4-a388-9d3ccbdc9b2c&fbclid=IwZXh0bgNhZW0CMTAAAR2SCB5lJzyxiWA7wnyMjUjsJ5l_ICiQnM6ovXGBKJrQhNQqyVPQ-_KxFGU_aem_ASFZVDfMV1vW_PLM5zz5ynXh4g-x30jvkTE81OeDnSykeA6oaIdf7fQlIuIRJ-RwmGr6tXI-7V2pd2-I1M87Zi5W" alt="ceciliemedkaf">
                </div>
                        <div class="ommig-fotogalleri">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/macke1.webp?alt=media&token=105fea89-e484-41a7-867b-34d025344d4b" alt="Cecilie med kasket i en stol">
                            </div>    
                        <div class="ommig-fotogalleri">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/macke2.webp?alt=media&token=7ed63c4d-c4fc-472c-a9b7-56893fccbde3" alt="cecilie foran en grøn dør">
                </div>    
            </div>
            <div class="kolonne">
                <div class="ommig-fotogalleri">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/macke4.webp?alt=media&token=bc736853-87c8-451e-8329-9e4d3f1f8253" alt="close up billede af cecilies ansigt">
                </div>
                        <div class="ommig-fotogalleri">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/macke7.webp?alt=media&token=1e8f901b-f0ff-4652-83fa-518d3438d1d0" alt="cecilie med hue siddende på en trappe">
                            </div>    
                        <div class="ommig-fotogalleri">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/macke5.webp?alt=media&token=9bec95ff-8d01-4d67-8bcb-9568eb60e5c8" alt="cecilie sort hvid med kasket og læderjakke">
                            </div>    
                    </div>
                <div class="kolonne">
            <div class="ommig-fotogalleri">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/macke6.webp?alt=media&token=f9bfe89c-a5f6-454a-b454-9ef00ceb6f96" alt="cecilie i sort skjorte siddende">
                    </div>
                        <div class="ommig-fotogalleri">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/macke3.webp?alt=media&token=789b859d-2f63-457e-ac77-b22aea8e8529" alt="cecilie i dyne siddende">
                            </div>    
                        <div class="ommig-fotogalleri">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/macke8.webp?alt=media&token=4191fcdb-a607-4c87-887a-90e0cd12caa4" alt="cecilie med plakater">
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