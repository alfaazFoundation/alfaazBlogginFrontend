<template>
  <b-navbar :shadow="true">
    <template slot="brand">
    <div class="navbar-brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/images/alfaazLogoSquare.png"
          width="50%"
          alt="AlfaazLogo"
        >
      </b-navbar-item>
      </div>

<div class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
      <router-link to="/contact" class="navbar-item">Creators</router-link>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign In</strong>
          </a>
        </div>
      </div>
    </div>
    </div>
    </template>
    
    <template v-if="user.authenticated" slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a
            class="button is-dark"
            @click="logout()"
          >
            Log out
          </a>
        </div>
      </b-navbar-item>
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

<style scoped>

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
