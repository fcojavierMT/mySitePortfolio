<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { navBar } from '@/components/navBar.vue';

export default {
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
