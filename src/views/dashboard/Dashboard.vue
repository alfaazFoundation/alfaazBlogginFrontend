<template>
  <div class="home">
    <div id="nav">
      <dashboard-nav-bar></dashboard-nav-bar>
    </div>
    <div class="columns is-gapless">
      <div class="column is-2 is-hidden-touch" >
        <sidebar style="position: fixed;width: 100%"></sidebar>
      </div>
      <div class="column is-10 is-12-touch" style="z-index: 10;">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import DashboardNavBar from "@/components/DashboardNavBar";

export default {
  name: 'Dashboard',
  components: {
    DashboardNavBar,


    Sidebar

  }
}
</script>

<style scoped>
sidebar{
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
}
</style>
