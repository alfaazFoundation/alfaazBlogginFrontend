<template>

    <carousel>
      <slide>Slide 1</slide>
      <slide>Slide 2</slide>
      <slide>Slide 3</slide>
      <slide>Slide 4</slide>
      <slide>Slide 5</slide>
      <slide>Slide 6</slide>
      <slide>Slide 7</slide>
      <slide>Slide 8</slide>
      <slide>Slide 9</slide>
      <slide>Slide 10</slide>
    </carousel>


</template>

<script>


import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'MainPageHeroCarousel',
  title: 'Pagination / Dynamic bullets',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    }
  }
}

</script>


<style lang="scss" scoped>
//@import './base.scss';
</style>