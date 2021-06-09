<template >
  <div class="columns has-background-white-bis">
    <div class="column ">
      <main-page-hero-carousel></main-page-hero-carousel>
      <WebsiteBlogList></WebsiteBlogList>
    </div>
  </div>
</template>

<script>
import MainPageHeroCarousel from "@/components/MainPageHeroCarousel";
// import WebsiteFooter from "@/components/WebsiteFooter";
import WebsiteBlogList from "@/components/WebsiteBlogList";

export default {
  name: "Home",
  components: {
    WebsiteBlogList,

    // WebsiteFooter,
    MainPageHeroCarousel,

  }
}
</script>

<style scoped>

</style>