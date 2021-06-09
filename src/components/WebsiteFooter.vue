<template >
  <div class="columns has-text-white-ter">
    <div class="column">
      <div class="columns has-background-black-ter pt2 pb2">
        <div class="column is-offset-3 is-3 is-12-mobile ">
          <div class="columns ">
            <div class="column  has-text-centered-mobile">
              <h3>Quick Links</h3>
            </div>
          </div>

          <div class="columns">
            <div class="column">

              <ul class="has-text-left has-text-left-widescreen list-without-bullets  has-text-centered-mobile">
                <li  :to="{ path: '/about' }">
                  <router-link to="/about">About Us</router-link>
                </li>
                <li class="mt1">
                  <router-link to="/">Blogs</router-link>
                </li>
                <li class="mt1  ">
                  <router-link to="/creators">Creators</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="column is-3 is-12-mobile">
          <div class="columns">
            <div class="column has-text-centered-touch">
              <h3>Write To Us</h3>
            </div>
          </div>
          <div class="columns">
            <div class="column is-offset-1-touch is-10-touch">
              <b-field >
                <b-input
                    placeholder="E-mail"
                    type="email"
                >
                </b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column is-offset-1-touch is-10-touch">
              <b-field >
                <b-input
                    placeholder="Message"
                    type="textarea"
                >
                </b-input>
              </b-field>
            </div>
          </div>

          <div class="columns">
            <div class="column has-text-right-desktop has-text-centered-touch has-text-right-widescreen">

              <b-field >
                <p class="control ">

                  <button class="button is-primary">
                    <span>Contact Us</span>
                    &nbsp;&nbsp;
                    &nbsp;
                    &nbsp;&nbsp;
                    <b-icon
                        icon="send"
                        size="is-small"
                        class="is-primary "
                    />
                  </button>
                </p>
              </b-field>
            </div>
          </div>
        </div>
      </div>

      <div class="columns has-background-black-bis" style="height: 3rem;">
        <div class="column is-offset-1 is-10 has-text-right has-text-centered-touch  has-text-right-widescreen">
          <p >
            © 2021 Alfaaz Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "WebsiteFooter"
}
</script>

<style  scoped>
h3{
  color: #B6040C !important;
}

ul{
  list-style-type:none !important;

  margin-top: 0;
}

a {
  color: whitesmoke !important;
}

</style>