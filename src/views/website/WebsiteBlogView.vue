<template>
  <div class="columns has-background-white-bis">
    <div class="column is-10 is-offset-1 is-12-touch has-background-white">
      <section class="section">

        <p class="is-2 title has-text-centered has-text-primary">
          {{ title }}
        </p>

<!--        <figure class="image is-fullwidth is-hidden-touch">
          <img :src="image" alt="Image">
        </figure>-->

        <div class="content">
          {{content}}
        </div>
        <div class="content">
          {{content}}
        </div>
        <div class="content">
          {{content}}
        </div>
        <div class="columns">
          <div class="column has-text-right is-offset-four-fifths is-one-fifth has-background-light">
            <p class="title is-5"> {{authorName}} </p>
            <p class="subtitle is-5"> {{ getHumanDateFromUnixTime(publishedOn) }} </p>
            <div>
              <b-icon
                  icon="facebook"
                  size="is-medium"
              class="ml-1 mr-1">
              </b-icon>
              <b-icon
                  icon="instagram"
                  size="is-medium"
                  class="ml-1 mr-1">
              </b-icon>
              <b-icon
                  icon="youtube"
                  size="is-medium"
                  class="ml-1 mr-1">
              </b-icon>
              <b-icon
                  icon="twitter"
                  size="is-medium"
                  class="ml-1 mr-1">
              </b-icon>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

</template>

<script>
export default {
  name: "WebsiteBlogView",
  props:{
    title:{
      type: String,
      default: 'My blog title can be long can be short depends !'
    },
    image: {
      type: String,
      default: 'https://images7.alphacoders.com/303/303995.jpg'
    },
    content: {
      type:String,
      default:"Lorem ipsum dolor sit amet, " +
          'consectetur adipiscing elit. Aenean efficitur sit amet massa f' +
          'ringilla egestas. Nullam condimentum luctus turpis consectetur a' +
          'dipiscing elit. Aenean efficitur sit amet massa fringilla egestas.' +
          ' Nullam condimentum luctus turpis consectetur adipiscing elit.' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          "imentum luctus turpis.,<p> consectetur adipiscing elit. Aenean effi </p>" +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          'imentum luctus turpis., consectetur adipiscing elit. Aenean effi' +
          ' Aenean efficitur sit amet massa fringilla egestas. Nullam cond' +
          'citur sit amet massa fringilla egestas. Nullam condimentum luctus' +
          ' turpis., con'
    },
    authorName: {
      type:String,
      default: 'Shivendra Singh Tanwar'
    },
    publishedOn: {
      type:Number,
      default:1623175822307
    }
  },
  methods:{
    getHumanDateFromUnixTime(unixTimestamp){
      let dateObject = new Date(unixTimestamp); // The 0 there is the key, which sets the date to the epoch
      // dateObject.setUTCSeconds(unixTimestamp);
      /*
            dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday
            dateObject.toLocaleString("en-US", {month: "long"}) // December
            dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
            dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019
            dateObject.toLocaleString("en-US", {hour: "numeric"}) // 10 AM
            dateObject.toLocaleString("en-US", {minute: "numeric"}) // 30*/
      let localeDateString = dateObject.toLocaleString("en-US", {month: "long",day: "numeric",year:'numeric'}) // 15
      // dateObject.toLocaleString("en-US", {timeZoneName: "short"})

      // let localeDateString = dateObject.toLocaleDateString()

      console.log('Converted local date string - ',localeDateString);

      return localeDateString;
    }
  }
}
</script>

<style scoped>

</style>