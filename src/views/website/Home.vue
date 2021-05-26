<template>
  <div class="columns">
    <div class="column">
      <main-page-hero-carousel></main-page-hero-carousel>
      <website-footer></website-footer>
    </div>

  </div>
</template>

<script>
import MainPageHeroCarousel from "@/components/MainPageHeroCarousel";
import WebsiteFooter from "@/components/WebsiteFooter";

export default {
  name: "Home",
  components: {
    WebsiteFooter,
    MainPageHeroCarousel,

  }
}
</script>

<style scoped>

</style>