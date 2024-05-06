<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script>

<template>
    <header>
      <img id="logo" src="@/assets/mackepranglogo.png" alt="mackepranglogo">
      <nav>
        <ul>
          <li><router-link to="/personligshopper" :class="{ active: isActive('/personligshopper') }">Personlig Shopper</router-link></li>
          <li><router-link to="/tirsdagsklumme" :class="{ active: isActive('/tirsdagsklumme') }">Tirsdagsklumme</router-link></li>
          <li><router-link to="/ommig" :class="{ active: isActive('/ommig') }">Om mig</router-link></li>
          <li><router-link id="bookknap" to="/bookher" :class="{ active: isActive('/bookher') }">Book her</router-link></li>
        </ul>
      </nav>
    </header>
  
    <video id="shoppersidevideo" autoplay loop muted>
      <source src="./assets/testvideo.mp4" type="video/mp4">
    </video>
  
    <footer>
        <p>© 2021 Mackeprang</p>
    </footer>
    </template>
  