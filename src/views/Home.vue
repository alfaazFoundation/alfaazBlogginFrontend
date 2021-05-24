<template>
  <div class="home">
   <main-page-hero-carousel></main-page-hero-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import MainPageHeroCarousel from "@/components/MainPageHeroCarousel";
export default {
  name: 'Home',
  components: {
    MainPageHeroCarousel

  }
}
</script>
