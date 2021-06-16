<template>
	<section class="section has-background-white-ter same-page-height">
    <div class="columns ">
      <div class="column">
        <h1 class="title has-text-primary">Your Stories</h1>
      </div>
    </div>
    <b-table
        :data="blogs"
        ref="table"
        paginated
        per-page="5"
        :opened-detailed="defaultOpenedDetails"
        detailed
        detail-key="title"
        @details-open="(row) => $buefy.toast.open(`Expanded ${row.title}`)"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page">

      <b-table-column field="title" label="Title" sortable v-slot="props">
        <div class="title is-5">
            {{ props.row.title }}
        </div>
      </b-table-column>

      <b-table-column field="publishedOn" label="Date" sortable centered v-slot="props">
                <span>
                    {{ getHumanDateFromUnixTime(props.row.publishedOn) }}
                </span>
      </b-table-column>
      <template #detail="props">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="@/assets/images/alfaazLogoSquare.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ props.row.title }}</strong>
                <small>@{{ props.row.title }}</small>
                <small>31m</small>
                <br>
                <span v-html="props.row.content"></span>
              </p>
            </div>
          </div>
        </article>
      </template>

      <template #empty>
        <div class="has-text-centered">No records</div>
      </template>

    </b-table>
	</section>
</template>

<script>

const baseUrl = process.env.VUE_APP_API_SERVER;
import axios from "axios";

export default {
  name: 'ListBlog',
  mounted() {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    });
    this.getBlogs();
  },
  data() {
    return {
        blogs :[],
        defaultOpenedDetails: [0]
       // selected: (this.blogs)[1]
    }
  },
  methods:{
   getBlogs(){
     this.axiosInstance.get('/api/blog/user')
         .then(response=>{
           console.log(response);
           this.blogs = response.data;
         })
         .catch(error=>{
           console.error(error);
           this.$buefy.toast.open({
             duration: 3000,
             message: `Something went wrong`,
             position: 'is-bottom',
             type: 'is-danger'
           })
         })
   },
    getHumanDateFromUnixTime(unixTimestamp){
      let dateObject = new Date(unixTimestamp); // The 0 there is the key, which sets the date to the epoch
      let localeDateString = dateObject.toLocaleString("en-US", {month: "long",day: "numeric",year:'numeric'}) // 15

      console.log('Converted local date string - ',localeDateString);

      return localeDateString;
    }
  }
}
</script>