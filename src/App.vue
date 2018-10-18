<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import { navBar } from '@/components/navBar.vue';

export default {
  data () {

  },
  components: {
    navBar
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
