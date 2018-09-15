<template>
  <b-container fluid 
               class="p-4 bg-dark">
    <b-row>
      <b-col>
        <b-img thumbnail rounded fluid 
               width="120" 
               height="120" 
               :src="require('../assets/imgs/profile.jpg')" 
               alt="Thumbnail" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss">

</style>

