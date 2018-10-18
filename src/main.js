import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueI18n from 'vue-i18n';

Vue.use(BootstrapVue);
Vue.use(VueI18n);
export const i18n = new VueI18n ({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      introduction: 'Hi!, my name is',
      name : 'Francisco Javier Martínez Talavera',
      call: ', but people usually call me  "Talavera"',
      func: 'And im a Junior Programmer, focused on web technologies as JavaScript, HTML, CSS, JS ...etc',
      currently: 'Im currently Working as a Frontend Developer, on Valencia (Spain)',
      someWorks: 'Some of my works'
    },
    es : {
      introduction: 'Hola!, mi nombre es',
      name : 'Francisco Javier Martínez Talavera',
      call: ', pero la gente me suele llamar por mi apellido "Talavera"',
      func: 'Soy un Programador Junior, y actualmente estoy centrado en las tecnologías web como, HTML, CSS, JS...',
      currently: 'Actualmente estoy trabajando como un desarrollador FrontEnd, en Valencia (España)',
      someWorks: 'Aquí algunos de mis trabajos'
    }
  }
})
Vue.config.productionTip = false
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
