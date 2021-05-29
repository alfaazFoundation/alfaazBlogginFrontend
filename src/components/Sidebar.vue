<template>
<section class="section has-background-white">
                   
                    <b-menu class="is-custom-mobile">
                        <b-menu-list label="BLOG">
                            <b-menu-item icon="plus" label="Create new blog" to="/dashboard/new-blog" tag="router-link"></b-menu-item>
                            <b-menu-item icon="format-list-bulleted" label="List Blogs">
                            </b-menu-item>
                        </b-menu-list>
                        <b-menu-list label="Actions">
                            <b-menu-item icon="cog" label="Settings"></b-menu-item>
                            <b-menu-item icon="logout" label="Logout"></b-menu-item>
                        </b-menu-list>
                    </b-menu>
    </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Sidebar',
  components: {

  }
}
</script>
