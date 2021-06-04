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
              <b-input placeholder="First Name" ></b-input>
            </b-field>
          </div>
          <div class="column is-5 is-offset-1"  >
            <b-field horizontal label="Last Name *" custom-class="has-text-left">
              <b-input placeholder="Last Name">
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
              <b-input placeholder="https://www.instagram.com/<username>" ></b-input>
            </b-field>
          </div>
          <div class="column is-5 is-offset-1">
            <b-field horizontal label="Twitter" custom-class="has-text-left" >
              <b-input placeholder="https://twitter.com/<username>" ></b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column is-5">
            <b-field horizontal label="Facebook" custom-class="has-text-left" >
              <b-input placeholder="https://www.facebook.com/<username>" ></b-input>
            </b-field>
          </div>
          <div class="column is-5 is-offset-1">
            <b-field horizontal label="Youtube" custom-class="has-text-left" >
              <b-input placeholder="https://www.youtube.com/channel/<channel-link>" ></b-input>
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
              <b-input placeholder="Password" ></b-input>
            </b-field>
          </div>
          <div class="column is-5 is-offset-1">
            <b-field horizontal label="Confirm Password *" custom-class="has-text-left" >
              <b-input placeholder="Confirm Password" ></b-input>
            </b-field>
          </div>
        </div>

        <div class="columns mt5 ">
          <div class="column ">
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <button class="button is-primary" >
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
export default {
name: "AccountSettings"
}
</script>

<style scoped>
.center-hr{
  margin: 1rem 0 !important;
}
</style>