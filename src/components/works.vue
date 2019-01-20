<template>
  <b-container class="p-4 animated zoomIn delay-1s">
    <b-jumbotron>
      <h5>{{$t('works')}}</h5>
      <b-row>
        <b-col v-for="work in works" :key="work.title">
          <p>{{work.title}}</p>
          <b-img
            rounded
            thumbnail
            :src="require(`@/assets/imgs/works/${work.image}.jpg`)"
            alt="Thumbnail"
          />
          <div class="info-container">
            <a :href="work.link" target="_blank" rel="external">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </div>
        </b-col>
      </b-row>
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {
  name: "works",
  data() {
    return {
      works: [
        {
          title: "Vue + Firebase",
          image: "stickNote",
          link: "https://github.com/fcojavierMT/proyecto-final"
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.info-container {
  margin: 10px;
  i {
    color: black;
    cursor: pointer;
    margin: 10px;
  }
}
</style>