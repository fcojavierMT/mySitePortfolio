<template>
  <div>
    <b-container fluid
                 class="p-4 bg-dark animated slideInLeft">
      <b-row>
        <b-col class="animated jackInTheBox slower">
          <b-img thumbnail rounded fluid
                width="200"
                height="200"
                :src="require('../assets/imgs/profile.jpg')"
                alt="Thumbnail" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <select-bar v-on:language="change"></select-bar>
        </b-col>
      </b-row>
    </b-container>
    <div class="about animated fadeInUp">
      <p>{{$t('introduction')}} <b>{{$t('name')}}</b> {{$t('call')}}</p>
      <p>{{$t('func')}}</p>
      <p>{{$t('currently')}}</p>
      <h4><strong>{{$t('someWorks')}}</strong></h4>
    </div>
    <b-container fluid class="animated fadeIn slower">
      <b-tabs>
        <b-tab no-body title="Vue+Firebase" active>
          <a href="https://fcojaviermt.github.io/#/" target="_blank">
            <b-img class="card-image"
                  rounded fluid
                  width="150"
                  height="150"
                  :src="require('../assets/imgs/firebaseVue.png')"
                  alt="Thumbnail" />
          </a>
          <b-card-footer>
            {{$t('firstProject')}}
          </b-card-footer>
        </b-tab>
      </b-tabs>
    </b-container>
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
</style>

<script>
import selectBar from '../components/selectBar.vue';

export default {
  name: 'home',
  methods: {
    change: function ($event) {
      if ($event === 'en') {
        this.$i18n.locale = 'en';
      } else {
        this.$i18n.locale = 'es';
      }
    }
  },
  components: {
    selectBar
  }
}
</script>

