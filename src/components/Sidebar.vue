<template>
  <div class="section has-background-white same-page-height has-side-shadow" >

    <b-menu>
      <b-menu-list>
        <b-menu-item icon="view-dashboard" label="Dashboard" to="/dashboard" tag="router-link"></b-menu-item>
      </b-menu-list>
      <b-menu-list label="BLOG">
        <b-menu-item icon="plus" label="Create new blog" to="/dashboard/new-blog" tag="router-link"></b-menu-item>
        <b-menu-item icon="format-list-bulleted" label="List Blogs" to="/dashboard/list-blog" tag="router-link">
        </b-menu-item>
      </b-menu-list>
      <b-menu-list label="Actions">
        <b-menu-item icon="cog" label="Settings"></b-menu-item>
        <b-menu-item icon="logout" label="Logout"></b-menu-item>
      </b-menu-list>
    </b-menu>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Sidebar',
  components: {

  }
}
</script>
