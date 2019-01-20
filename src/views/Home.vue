<template>
  <div>
    <b-container fluid class="p-4 animated slideInLeft header-container">
      <b-row>
        <b-col class="animated jackInTheBox slower"></b-col>
      </b-row>
      <b-row>
        <b-col class="container-lang">
          <select-bar v-on:language="change"></select-bar>
          <img
            class="image-flag"
            :src="require(`@/assets/imgs/languagesIcon/${image}.png`)"
            alt="Flag country"
          >
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
    <works></works>
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
.container-lang {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;

  .image-flag {
    width: 30px;
    margin-left: 10px;
    margin-bottom: 5px;
  }
}

.header-container {
  height: 300px;
  background-image: url("../assets/imgs/everest.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 45%;

  @media (max-width: 600px) {
    height: 200px;
  }
}
</style>

<script>
import selectBar from "../components/selectBar.vue";
import works from "../components/works.vue";

export default {
  name: "home",
  data: () => {
    return {
      image: "spanish"
    };
  },
  methods: {
    change: function($event) {
      this.image = $event.property.image;
      if ($event.lang === "en") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "es";
      }
    }
  },
  components: {
    selectBar,
    works
  }
};
</script>

