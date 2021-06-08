<template>
  <section class="section has-background-light has-full-page-height" >
    <div class="columns mt3">
      <div class="column is-4 is-offset-4 mt5 box">

        <div class="column is-12 has-text-centered">
          <figure class="image is-96x96 is-inline-block ">
            <img class="" src="../assets/images/alfaazLogoSquare.png">
          </figure>
        </div>

        <h1 class="title is-1 has-text-primary has-text-centered">Alfaaz Foundation</h1>

        <!--  Name  -->
        <div class="columns">
          <div class="column">
            <b-field label="First Name">
              <b-input
                  placeholder="First Name"
                  v-model="admin.firstName"
              >
              </b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Last Name">
              <b-input
                  placeholder="Last Name"
                  v-model="admin.lastName"
              >

              </b-input>
            </b-field>
          </div>
        </div>

        <!--   Email     -->
        <div class="columns">
          <div class="column">
            <b-field label="Email">
              <b-input
                  placeholder="Email"
                  type="email"
                  v-model="admin.email"
              >
              </b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <b-field label="Password">
              <b-input placeholder="Password"
                       v-model="admin.password"
                       type="password"
              >
              </b-input>
            </b-field>
          </div>
        </div>
        <!--  register button  -->
        <div class="columns">
          <div class="column">
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <button class="button is-primary" @click="registerBiller">
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column has-text-centered has-text-black ">
            <router-link to="/login">Already have an account? </router-link>
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
  name: "Register.vue"
  ,
  mounted() {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  },
  data(){
    return {
      admin: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          }
    }
  },
  methods:{
    registerBiller(){
      this.axiosInstance.post('/api/public/admins',this.$data.admin)
          .then(response=>{
            console.log(response);
            this.$buefy.toast.open({
              duration: 3000,
              message: `Biller Registered`,
              position: 'is-bottom',
              type: 'is-success'
            })
            this.$router.push('/login');
          })
          .catch(error=>{
            console.error('error',error.response);
            this.$buefy.toast.open({
              duration: 3000,
              message: error.response.data.message,
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
