<template>
  <div class="home">
    <div id="nav">
      <nav-bar></nav-bar>
    </div>

    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from "@/components/NavBar";
export default {
  name: 'WebsiteRouter',
  components: {

    NavBar

  }
}
</script>
