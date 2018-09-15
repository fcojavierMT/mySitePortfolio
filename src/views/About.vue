<template>
  <div>
    <b-container fluid 
                class="p-4 bg-dark">
      <b-row>
        <b-col class="animated jackInTheBox">
          <b-img thumbnail rounded fluid 
                width="120" 
                height="120" 
                :src="require('../assets/imgs/profile.jpg')" 
                alt="Thumbnail" />
        </b-col>
      </b-row>
    </b-container>
    <div class="about">
      <p>
        Hi!, my name is Francisco Javier Martínez Talavera, but people usually call me by my second name, Talavera.
        <br>
        Im a junior programmer, and i usually work with Web Tecnologies, like JavaScript, HTML, Css..
        <br><br>
        Now im learning, the best practices, and focusing on learning new frameworks, such as Vue or Angular 5.
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .about {
    padding: 20px;
  }
</style>
