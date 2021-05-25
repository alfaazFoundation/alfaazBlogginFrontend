<template>
  <div class="home">

    <div id="nav">
      <nav-bar></nav-bar>
    </div>
   <main-page-hero-carousel></main-page-hero-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import MainPageHeroCarousel from "@/components/MainPageHeroCarousel";
import NavBar from "@/components/NavBar";
export default {
  name: 'Home',
  components: {
    MainPageHeroCarousel,
    NavBar

  }
}
</script>
