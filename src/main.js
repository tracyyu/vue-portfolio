import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ScrollAnimation from './directives/scollAnimation';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './assets/sass/index.scss';

Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
