<template>
  <section class="section has-background-white-ter same-page-height ">
    <div class="columns box section">
      <div class="column">
        <h1 class="title is-1 has-text-primary">Settings</h1>

        <div class="columns mt2-5 is-gapless mb2-5">
          <div class="column is-narrow">
            <h2 class="subtitle is-4 has-text-primary mt-0 pr1">Profile</h2>
          </div>
          <div class="column" >
            <hr class=" has-background-primary center-hr" >
          </div>
        </div>

        <div class="columns">
          <div class="column is-5">
            <b-field horizontal label="First Name *" custom-class="has-text-left" >
              <b-input placeholder="First Name" v-model="admin.firstName"></b-input>
            </b-field>
          </div>
          <div class="column is-5 is-offset-1"  >
            <b-field horizontal label="Last Name *" custom-class="has-text-left">
              <b-input placeholder="Last Name" v-model="admin.lastName">
              </b-input>
            </b-field>
          </div>
        </div>

        <div class="columns mt2-5 is-gapless mb2-5">
          <div class="column is-narrow">
            <h2 class="subtitle is-4 has-text-primary mt-0 pr1">Social</h2>
          </div>
          <div class="column" >
            <hr class=" has-background-primary center-hr" >
          </div>
        </div>

        <div class="columns">
          <div class="column is-5">
            <b-field horizontal label="Instagram" custom-class="has-text-left" >
              <b-input placeholder="https://www.instagram.com/<username>" v-model="admin.instagram"></b-input>
            </b-field>
          </div>
          <div class="column is-5 is-offset-1">
            <b-field horizontal label="Twitter" custom-class="has-text-left" >
              <b-input placeholder="https://twitter.com/<username>" v-model="admin.twitter"></b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column is-5">
            <b-field horizontal label="Facebook" custom-class="has-text-left" >
              <b-input placeholder="https://www.facebook.com/<username>" v-model="admin.facebook"></b-input>
            </b-field>
          </div>
          <div class="column is-5 is-offset-1">
            <b-field horizontal label="Youtube" custom-class="has-text-left" >
              <b-input placeholder="https://www.youtube.com/channel/<channel-link>" v-model="admin.youtube"></b-input>
            </b-field>
          </div>
        </div>

        <div class="columns mt2-5 is-gapless mb2-5">
          <div class="column is-narrow">
            <h2 class="subtitle is-4 has-text-primary mt-0 pr1">Security</h2>
          </div>
          <div class="column" >
            <hr class=" has-background-primary center-hr" >
          </div>
        </div>

        <div class="columns">
          <div class="column is-5">
            <b-field horizontal label="Password *" custom-class="has-text-left" >
              <b-input class="has-light-dark-border" placeholder="Password" type="password" v-model="admin.password" disabled="true"></b-input>
            </b-field>
          </div>
<!--          <div class="column is-5 is-offset-1">
            <b-field horizontal label="Confirm Password *" custom-class="has-text-left" >
              <b-input placeholder="Confirm Password" type="password"></b-input>
            </b-field>
          </div>-->
        </div>

        <div class="columns mt5 ">
          <div class="column ">
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <button class="button is-primary" @click="updateAdminSettings">
                  Update
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
const baseUrl = process.env.VUE_APP_API_SERVER;
import axios from 'axios';
export default {
  name: "AccountSettings",

  mounted() {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    this.getAdmin();
  },
  data(){
    return {
      admin: {
        firstName: "",
        lastName: "",
        facebook: "",
        youtube: "",
        twitter: "",
        instagram: "",
        email: "",
        password: "****"
      }
    }
  },
  methods:{
    getAdmin(){
      this.axiosInstance.get('/api/admin')
      .then(res=>{
        console.log('Response',res);
        this.$data.admin = res.data;
        this.$data.admin.password = "******";
      })
      .catch(error=>{
        console.log('Error',error);
      });
    },
    updateAdminSettings(){
      this.axiosInstance.post('/api/admins/settings',this.$data.admin)
          .then(res=>{
            console.log('Update settings Response',res);

            this.$buefy.toast.open({
              duration: 3000,
              message: `Settings Updated`,
              position: 'is-bottom',
              type: 'is-success'
            });
            this.getAdmin()
          })
          .catch(error=>{
            console.log('Error',error);
            this.$buefy.toast.open({
              duration: 3000,
              message: error.response.data.message,
              position: 'is-bottom',
              type: 'is-danger'
            })
          });
    }
  }
}
</script>

<style scoped>
.center-hr{
  margin: 1rem 0 !important;
}
</style>