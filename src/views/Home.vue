<template>
  <div>
    <b-container fluid class="p-4 animated slideInLeft header-container">
      <b-row>
        <b-col class="animated jackInTheBox slower"></b-col>
      </b-row>
      <b-row>
        <b-col>
          <select-bar v-on:language="change"></select-bar>
        </b-col>
      </b-row>
    </b-container>
    <div class="about animated fadeInUp">
      <p>
        {{$t('introduction')}}
        <b>{{$t('name')}}</b>
        {{$t('call')}}
      </p>
      <p>{{$t('func')}}</p>
      <p>{{$t('currently')}}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .about {
    padding: 20px;

    > p {
      font-weight: normal;
    }
  }

  .card-image {
    cursor: pointer;
    margin: 30px;
  }

  .header-container {
    height: 500px;
    background-image: url("../assets/imgs/everest.png");
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 45%;
  }
</style>

<script>
import selectBar from "../components/selectBar.vue";

export default {
  name: "home",
  methods: {
    change: function($event) {
      if ($event.lang === "en") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "es";
      }
    }
  },
  components: {
    selectBar
  }
};
</script>

