<template>
  <b-navbar :shadow="true" >
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
    <template  #end class="columns is-12-mobile">
      <div class="columns has-text-centered-touch is-hidden-desktop">
        <div class="column">
          <b-navbar-item tag="router-link"  to="/dashboard" class="bottom-border has-text-centered-mobile">
            <b-icon
                icon="view-dashboard"
                size="is-small">
            </b-icon> DashBoard
          </b-navbar-item>
          <b-navbar-item tag="router-link"  to="/dashboard/new-blog" class="bottom-border has-text-centered-mobile">
            <b-icon
                icon="plus"
                size="is-small">
            </b-icon> Create new blog
          </b-navbar-item>
          <b-navbar-item tag="router-link"  to="/dashboard" class="bottom-border has-text-centered-mobile">
            <b-icon
                icon="format-list-bulleted"
                size="is-small">
            </b-icon> List Blogs
          </b-navbar-item>
          <b-navbar-item tag="router-link"  to="/dashboard" class="bottom-border has-text-centered-mobile">
            <b-icon
                icon="cog"
                size="is-small">
            </b-icon> Settings
          </b-navbar-item>
          <b-navbar-item tag="router-link"  to="/dashboard" class="bottom-border has-text-centered-mobile">
            <b-icon
                icon="logout"
                size="is-small">
            </b-icon> Logout
          </b-navbar-item>

        </div>
      </div>
    </template>
  </b-navbar>
</template>

<script>
export default {
name: "DashboardNavBar"
}
</script>

<style scoped>
.bottom-border{
  border-bottom: solid #B6040C thin !important;
}
</style>