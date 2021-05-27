<template>
  <div class="columns">
    <div class="column">
      <main-page-hero-carousel></main-page-hero-carousel>
      <blog-list></blog-list>
    </div>

  </div>
</template>

<script>
import MainPageHeroCarousel from "@/components/MainPageHeroCarousel";
// import WebsiteFooter from "@/components/WebsiteFooter";
import BlogList from "@/components/BlogList";

export default {
  name: "Home",
  components: {
    BlogList,
    // WebsiteFooter,
    MainPageHeroCarousel,

  }
}
</script>

<style scoped>

</style>