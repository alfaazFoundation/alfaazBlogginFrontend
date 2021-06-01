<template>
  <section class="section has-background-light" style="min-height: 100vh;">
    <div class="columns mt3">
      <div class="column is-4 is-offset-4 box mt5">
        <div class="column is-12 has-text-centered">
          <figure class="image is-96x96 is-inline-block ">
            <img class="" src="../assets/images/alfaazLogoSquare.png">
          </figure>
        </div>

        <h1 class="title has-text-primary has-text-centered is-1">Alfaaz Foundation</h1>
        <div class="columns">
          <div class="column">
            <b-field label="Email">
              <b-input
                placeholder="Email"
                type="email"
                v-model="loginRequest.username"
              >
              </b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Password">
              <b-input
                placeholder="Password"
                type="password"
                v-model="loginRequest.password"
              >
              </b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <button class="button is-primary"
                        @click="loginBiller">
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
        <div class="columns">
         <div class="column has-text-centered has-text-weight-light">
           <p class="has-text-weight-light" style="color: #807e7e;">Or connect using</p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <b-button rounded class="button is-light"
                        >
                        <a href="http://localhost:8080/oauth2/authorization/google" > <b-icon icon="google" type="is-danger"/><span></span>
                        <span></span>
                          Sign In With Google</a>
                </b-button>
              </p>
              <p class="control">
                <b-button rounded class="button is-light"
                        @click="loginBiller">
                        <b-icon icon="facebook" type="is-info"/><span></span>
                        <span></span>
                  Sign In With Facebook
                </b-button>
              </p>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column has-text-centered has-text-black">
            <a href="/#/register">Don't have an account? </a>
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
    name: "Login",
    mounted() {
      this.axiosInstance = axios.create({
        baseURL: baseUrl,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    },
    data() {
      return {
        loginRequest: {
          username: "",
          password: ""
        }
      }
    },
    methods:{
      signInWithFB(){

          window.fbAsyncInit = function() {
            // eslint-disable-next-line no-undef
          FB.init({
            appId      : '{your-app-id}',
            cookie     : true,
            xfbml      : true,
            version    : '{api-version}'
          });

            // eslint-disable-next-line no-undef
          FB.AppEvents.logPageView();

        };

          (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

      },
      loginBiller(){
        /*this.axiosInstance.post('/api/biller/login',this.$data.loginRequest)
          .then(response=>{
            console.log(response);
            /!* this.$buefy.toast.open({
               duration: 3000,
               message: `Login Successful`,
               position: 'is-bottom',
               type: 'is-success'
             });*!/
            localStorage.setItem("token",response.data.token);
            this.$router.push('/dashboard/add-invoice');
          })
          .catch(error=>{
            console.error(error);
            this.$buefy.toast.open({
              duration: 3000,
              message: `Something went wrong`,
              position: 'is-bottom',
              type: 'is-danger'
            })
          })*/
      }
    }
  }
</script>

<style scoped>

</style>
