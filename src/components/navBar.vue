<template>
  <div>
    <b-navbar toggleable>
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link to="home">Home</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="about">About</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style lang="scss" scoped>

</style>

