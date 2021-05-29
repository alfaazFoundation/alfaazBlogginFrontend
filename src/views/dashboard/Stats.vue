<template>
  <section class="section has-background-white-ter same-page-height ">
    <div class="columns card section">
      <div class="column">
        <h1 class="title has-text-primary">Statistics</h1>
        <div class="columns ">
          <div class="column">
            <p class="has-text-primary has-text-weight-bold">Admins</p>
            <p> Total number of admins registered = {{totalAdmins}} </p>
          </div>
          <div class="column">
            <p class="has-text-primary has-text-weight-bold">Roles</p>
            <p> Total number of roles made = {{totalRoles}} </p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
const baseUrl = process.env.VUE_APP_API_SERVER;
import axios from "axios";

export default {
  name: "Stats",
  mounted() {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    this.getTotalAdmins()
    this.getTotalRoles()
  },
  data(){
    return {
      totalAdmins:0,
      totalRoles:0
    }
  },
  methods:{
    getTotalAdmins(){
      this.axiosInstance.get('/api/admins')
          .then(response=>{
            console.log('Admins Api call response ',response);
            this.totalAdmins = response.data.length
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
    getTotalRoles(){
      this.axiosInstance.get('/api/roles')
          .then(response=>{
            console.log('Get Roles Api call response ',response);
            this.totalRoles = response.data.length
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
    }
  }
}
</script>

<style scoped>

</style>