<template>
  <div class="home">
    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    <div class="columns is-gapless">
      <div class="column is-2">
        <sidebar></sidebar>
      </div>
      <div class="column is-10">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";

export default {
  name: 'Dashboard',
  components: {

    NavBar,
    Sidebar

  }
}
</script>
