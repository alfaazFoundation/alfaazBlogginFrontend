<template class="container">
  <div class="columns">
    <div class="column">
      <div class="columns mb0">
        <div class="column">
          <nav-bar></nav-bar>
        </div>
      </div>

      <div class="columns mb0">
        <div class="column">
          <router-view/>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <WebsiteFooter></WebsiteFooter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from "@/components/NavBar";
import WebsiteFooter from "@/components/WebsiteFooter";
export default {
  name: 'WebsiteRouter',
  components: {
    WebsiteFooter,

    NavBar

  }
}
</script>
