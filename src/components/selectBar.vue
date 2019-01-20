<template>
  <div class="select-bar">
    <b-form-select
      v-model="selected"
      :options="options"
      class="select mb-3"
      v-bind:language="changeLanguage()"
    ></b-form-select>
  </div>
</template>

<script>
export default {
  name: "selectBar",
  data() {
    return {
      selected: "es",
      options: [
        {
          value: "es",
          text: "Español",
          image: "../assets/imgs/languagesIcon/spanish.png"
        },
        {
          value: "en",
          text: "English",
          image: "../assets/imgs/languagesIcon/english.png"
        }
      ]
    };
  },
  methods: {
    changeLanguage: function() {
      const imageSelected = this.options.filter(option => {
        return option.value === this.selected;
      });
      this.$emit("language", { lang: this.selected, image: imageSelected});
    }
  }
};
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
