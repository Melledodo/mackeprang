<script setup>
import { ref } from 'vue';


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
    <div class="ommig-indhold">
  <img id="ommigbillede" src="@/assets/mackeprang1.png" alt="mackeprang1">
  <div class="ommig-tekst">
    <h2>Cecilie Mackeprang</h2>
    <p>Med over 15 års erfaring i modebranchen og baggrund som tekstil- og<br> beklædningshåndværker med speciale i design, har jeg arbejdet som Visuel Merchandiser hos Bestseller, Envii og Samsøe Samsøe.
    Med over 15 års erfaring i modebranchen og baggrund som tekstil- og<br> beklædningshåndværker med speciale i design, har jeg arbejdet som Visuel Merchandiser hos Bestseller, Envii og Samsøe Samsøe.
    <br>Glæd dig til at få masser af modeinspiration og personlige tips fra mig!</p>
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
                    <img src="https://source.unsplash.com/OyCl7Y4y0Bk" alt="">
                </div>
                        <div class="ommig-fotogalleri">
                    <img src="https://source.unsplash.com/Kl1gC0ve620" alt="">
                            </div>    
                        <div class="ommig-fotogalleri">
                    <img src="https://source.unsplash.com/55btQzyDiO8" alt="">
                </div>    
            </div>
            <div class="kolonne">
                <div class="ommig-fotogalleri">
                    <img src="https://source.unsplash.com/g0dBbrGmMe0" alt="">
                </div>
                        <div class="ommig-fotogalleri">
                    <img src="https://source.unsplash.com/v1OW17UcR-Q" alt="">
                            </div>    
                        <div class="ommig-fotogalleri">
                    <img src="https://source.unsplash.com/Wpg3Qm0zaGk" alt="">
                </div>    
            </div>
            <div class="kolonne">
                <div class="ommig-fotogalleri">
                    <img src="https://source.unsplash.com/W3FC_bCPw8E" alt="">
                </div>
                        <div class="ommig-fotogalleri">
                    <img src="https://source.unsplash.com/rBRZLPVLQg0" alt="">
                            </div>    
                        <div class="ommig-fotogalleri">
                    <img src="https://source.unsplash.com/OyCl7Y4y0Bk" alt="">
                </div>    
            </div>
        </div>
</div>


    <footer>
      <p>© 2024 Mackeprang</p>
    </footer>
</template>