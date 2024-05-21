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
                    <img src="https://firebasestorage.googleapis.com/v0/b/mackeprang-b5f6e.appspot.com/o/macke0.webp?alt=media&token=f298d60f-6efa-43d4-a388-9d3ccbdc9b2c&fbclid=IwZXh0bgNhZW0CMTAAAR2SCB5lJzyxiWA7wnyMjUjsJ5l_ICiQnM6ovXGBKJrQhNQqyVPQ-_KxFGU_aem_ASFZVDfMV1vW_PLM5zz5ynXh4g-x30jvkTE81OeDnSykeA6oaIdf7fQlIuIRJ-RwmGr6tXI-7V2pd2-I1M87Zi5W" alt="ceciliemedkaf">
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