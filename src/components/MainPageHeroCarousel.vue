<template>
  <b-carousel
      indicator-style="is-lines"

  >
    <b-carousel-item >
      <figure class="image">
        <img src="../assets/images/sample.jpg">
      </figure>
    </b-carousel-item>
    <b-carousel-item >
      <figure class="image">
        <img src="../assets/images/sample2.jpg">
      </figure>
    </b-carousel-item>
    <b-carousel-item >
      <figure class="image">
        <img src="../assets/images/sample.jpg">
      </figure>
    </b-carousel-item>
    <b-carousel-item >
      <figure class="image">
        <img src="../assets/images/sample2.jpg">
      </figure>
    </b-carousel-item>
  </b-carousel>

</template>

<script>





export default {
  name: 'MainPageHeroCarousel',
  title: 'Pagination / Dynamic bullets',

  components: {

  },
  data(){
    return {
      carousels: [
        { text: 'Slide 1', color: 'primary' },
        { text: 'Slide 2', color: 'info' },
        { text: 'Slide 3', color: 'success' },
        { text: 'Slide 4', color: 'warning' },
        { text: 'Slide 5', color: 'danger' }
      ]
    }
  }
}

</script>


<style lang="scss" scoped>

</style>