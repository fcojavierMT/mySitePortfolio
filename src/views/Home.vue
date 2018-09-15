<template>
  <div>
    <b-container fluid 
                 class="p-4 bg-dark animated slideInLeft">
      <b-row>
        <b-col class="animated jackInTheBox slower">
          <b-img thumbnail rounded fluid 
                width="120" 
                height="120" 
                :src="require('../assets/imgs/profile.jpg')" 
                alt="Thumbnail" />
        </b-col>
      </b-row>
    </b-container>
    <div class="about animated fadeInUp">
      <p>Hi!, my name is <b>Francisco Javier Martínez Talavera</b>, but people usually call me 'Talavera'</p>
      <p>And im a Junior Programmer, focused on web technologies as JavaScript, HTML, CSS...etc</p>
      <p>Im currently Working as a Frontend Developer, on Valencia (Spain)</p>
      <h4><strong>Some of my works</strong></h4>
    </div>
    <b-container fluid class="animated fadeInRight slower">
      <b-tabs>
        <b-tab no-body title="Vue+Firebase" active>
          <b-img class="card-image" 
                 rounded fluid 
                 width="150" 
                 height="150" 
                 :src="require('../assets/imgs/firebaseVue.png')" 
                 alt="Thumbnail" />
          <b-card-footer>
            First Work of all my car
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
    margin: 30px;
  }
</style>
