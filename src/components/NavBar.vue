<template class="container">
  <b-navbar :shadow="true" class="">
    <template #brand class="columns is-offset-1 is-10 is-offset-0-mobile is-12-mobile">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
            src="../assets/images/alfaazLogoSquare.png"
            width="50%"
            alt="AlfaazLogo"
            class="is-hidden-touch "
        >

        <img
            src="../assets/images/alfaazLogoSquare.png"
            width="25%"
            alt="AlfaazLogo"
            class="is-hidden-desktop "
        >
      </b-navbar-item>
    </template>
    <template  #end class="columns is-offset-1 is-10 is-offset-0-mobile is-12-mobile">

      <b-navbar-item tag="div" class="has-text-centered-mobile">
        <router-link to="/" class="navbar-item ">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/contact" class="navbar-item">Creators</router-link>
      </b-navbar-item>
      <b-navbar-item tag="router-link" class="has-text-centered-mobile" :to="{path:'/login'}" >
          <a class="button is-primary " >
            <strong>
              <router-link to="/login" class="has-text-white">Sign In</router-link>
            </strong>
          </a>
      </b-navbar-item>

<!--      <b-navbar-item tag="div">
        <div class="buttons">
          <a
            class="button is-dark"
            @click="logout()"
          >
            Log out
          </a>
        </div>
      </b-navbar-item>-->
    </template>
  </b-navbar>
</template>

<script>

  export default {
    name: "NavBar",
    data(){
      return{
        user:{
          authenticated:false
        }
      }
    },
    mounted() {
      this.checkAuth();
    },
    methods:{
      checkAuth() {
        let token = localStorage.getItem('token');
        if (token) {
          console.log('user is authenticated');
          this.user.authenticated = true;
        } else {
          this.user.authenticated = false;
        }
      },
      logout(){
        localStorage.removeItem('token');
        this.$router.push("/");
      }
    }
  }
</script>

<style lang="scss" scoped>

nav {
    margin-top: 0px;
    margin-bottom: 0px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }  
  } 
</style>
