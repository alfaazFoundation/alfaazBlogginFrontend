<template>
  <div class="card is-horizontal">
    <div class="card-image">
      <figure class="image is-square is-256x256 is-hidden-touch">
        <img :src="image" alt="Image">
      </figure>
    </div>
    <div class="card-stacked">
      <div class="card-content pb0">
        <div class="content mb0">
          <div >
            <p class="title is-3 mb2 blog-card-title">{{ title }}</p>

            <p class="subtitle is-5 ">
              <!--              <span>
                              <small>
                                {{ getHumanDateFromUnixTime(publishedOn) }}
                              </small>
                            </span>-->
               - {{ authorName }}
            </p>
          </div>
          <hr class="is-primary mt-1">
          <div class="blog-card-content">
            {{content}}

          </div>

          <div class="has-text-right mt2-5">

            {{ getHumanDateFromUnixTime(publishedOn) }} |
            <router-link to="/blog">Read
              <b-icon
                icon="arrow-top-right-thick"
                size="is-small">
            </b-icon>
            </router-link>
          </div>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
            </a>
            <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
            </a>
            <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props:{
    image: {
      type: String,
      default: 'https://images7.alphacoders.com/303/303995.jpg'
    },
    title: String,
    content: String,
    authorName: String,
    publishedOn: Number
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
.blog-card-content{
  width: 100%;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.blog-card-title{
  width: 100%;
  height: 2.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>