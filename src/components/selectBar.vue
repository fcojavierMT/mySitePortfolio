<template>
  <div class="select-bar">
    <b-form-select v-model="selected" :options="options" class="select mb-3" v-bind:language ="changeLanguage()"></b-form-select>
  </div>
</template>

<script>
export default {
  name: 'selectBar',
  data () {
    return {
      selected: 'es',
      options: [
        { value: 'es', text: 'Español' },
        { value: 'en', text: 'English' },
      ]
    }
  },
  methods: {
      changeLanguage: function () {
        this.$emit('language', this.selected);
      }
  }
}
</script>

<style lang="scss">
    .select-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;

        .select {
            width: 200px;
        }
    }
</style>
