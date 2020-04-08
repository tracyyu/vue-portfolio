import Vue from 'vue'
import App from './App.vue'
import router from './router';
var VueScrollTo = require('vue-scrollto');
import ScrollAnimation from './directives/scollAnimation';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './assets/sass/index.scss';

Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false;

Vue.use(VueScrollTo);

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -200,
  force: false,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
