<template>
  <div id="app">
    <div id="nav">
      <NavBar></NavBar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar
  }
}
</script>


<style lang="scss">
@import './scss/main.scss';

#app {
  font-family: 'Raleway';
  text-align: center;
  font-weight: 600;
}

</style>
