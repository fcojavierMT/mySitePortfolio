import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import VueI18n from 'vue-i18n';

import { languages } from './i18n/index.js';
import { defaultLocale } from './i18n/index.js';
const messages = Object.assign(languages);

Vue.use(BootstrapVue);
Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages
});

Vue.config.productionTip = false;
new Vue({
  router,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
